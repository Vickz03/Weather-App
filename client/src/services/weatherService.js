import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Mock data for development to avoid API calls/errors without key
const MOCK_WEATHER = {
    coord: { lon: -0.1257, lat: 51.5085 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    base: "stations",
    main: {
        temp: 20.5,
        feels_like: 19.8,
        temp_min: 18.9,
        temp_max: 22.1,
        pressure: 1012,
        humidity: 53,
    },
    visibility: 10000,
    wind: { speed: 3.6, deg: 350 },
    clouds: { all: 1 },
    dt: 1620000000,
    sys: { type: 1, id: 1414, country: "GB", sunrise: 1619930000, sunset: 1619980000 },
    timezone: 3600,
    id: 2643743,
    name: "London",
    cod: 200,
};

// Geocoding API to find coordinates for ANY location (including small villages)
export const geocodeLocation = async (locationName) => {
    if (!API_KEY) {
        return null;
    }
    try {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=1&appid=${API_KEY}`);
        if (response.data && response.data.length > 0) {
            return response.data[0]; // Returns {name, lat, lon, country, state}
        }
        return null;
    } catch (error) {
        console.error("Geocoding error:", error);
        return null;
    }
};

export const getWeatherData = async (city) => {
    if (!API_KEY) {
        console.warn("No API key found, returning mock data");
        return MOCK_WEATHER;
    }

    try {
        //First, try geocoding to get coordinates (works for small villages too!)
        console.log(`🔍 Searching for location: "${city}"`);
        const location = await geocodeLocation(city);

        if (location) {
            console.log(`✅ Found location:`, location.name, `(${location.state || location.country})`);
            // Use coordinates to get weather (more reliable)
            const response = await axios.get(`${BASE_URL}/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${API_KEY}`);
            console.log(`🌤️ Got real weather data for`, response.data.name);
            return {
                ...response.data,
                name: location.name || city,
                state: location.state,
            };
        } else {
            console.warn(`⚠️ Geocoding failed for "${city}", trying direct city search...`);
        }

        // Fallback: try direct city search
        const response = await axios.get(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
        console.log(`🌤️ Got real weather data (direct search):`, response.data.name);
        return response.data;

    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.error(`❌ Location "${city}" not found in OpenWeatherMap database.`);
            console.log(`💡 Suggestion: Try "Coimbatore" (nearby city) or "Pollachi" or check spelling`);
            return { ...MOCK_WEATHER, name: city, notFound: true };
        }
        console.error("Error fetching weather data:", error);
        return { ...MOCK_WEATHER, name: city, error: true };
    }
};

export const getWeatherDataByCoords = async (lat, lon) => {
    if (!API_KEY) {
        return MOCK_WEATHER;
    }
    try {
        const response = await axios.get(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data by coords:", error);
        throw error;
    }
};

// Mock Forecast Data
const MOCK_FORECAST = {
    hourly: Array.from({ length: 24 }, (_, i) => ({
        dt: 1620000000 + i * 3600,
        temp: 20 + Math.sin(i / 4) * 5,
        weather: [{ icon: i % 3 === 0 ? "01d" : "02d", description: "Partly Cloudy" }],
        pop: 0.1,
    })),
    daily: Array.from({ length: 7 }, (_, i) => ({
        dt: 1620000000 + i * 86400,
        temp: { min: 15, max: 25 },
        weather: [{ icon: "01d", description: "Sunny" }],
        pop: 0.2,
    }))
};

export const getForecastData = async (lat, lon) => {
    if (!API_KEY) {
        return MOCK_FORECAST;
    }
    return MOCK_FORECAST;
};

// Mock AQI Data
const MOCK_AQI = {
    main: {
        aqi: 2,
    },
    components: {
        co: 201.9,
        no: 0.01,
        no2: 5.9,
        o3: 72.9,
        so2: 0.6,
        pm2_5: 2.5,
        pm10: 5.4,
        nh3: 0.1,
    },
    dt: 1620000000,
};

export const getAQIData = async (lat, lon) => {
    if (!API_KEY) {
        return MOCK_AQI;
    }
    try {
        const response = await axios.get(`${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        return response.data.list[0];
    } catch (error) {
        console.warn("Error fetching AQI, returning mock", error);
        return MOCK_AQI;
    }
};

// Mock Alerts Data
const MOCK_ALERTS = [
    {
        sender_name: "NWS Tulsa",
        event: "Heat Advisory",
        start: 1620000000,
        end: 1620086400,
        description: "Heat index values up to 105 expected.",
        tags: ["Extreme temperature"]
    }
];

export const getAlertsData = async (lat, lon) => {
    if (!API_KEY) {
        return MOCK_ALERTS;
    }
    return MOCK_ALERTS;
};
