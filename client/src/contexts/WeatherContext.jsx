import React, { createContext, useContext, useState, useEffect } from 'react';
import { getWeatherData, getAQIData, getAlertsData } from '../services/weatherService';

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState(null);
    const [aqi, setAqi] = useState(null);
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [city, setCity] = useState('London'); // Default city

    const fetchWeather = async (cityName) => {
        setLoading(true);
        setError(null);
        try {
            const data = await getWeatherData(cityName);
            setWeather(data);

            // Fetch AQI and Alerts using coordinates from weather data
            if (data && data.coord) {
                const aqiData = await getAQIData(data.coord.lat, data.coord.lon);
                setAqi(aqiData);

                const alertsData = await getAlertsData(data.coord.lat, data.coord.lon);
                setAlerts(alertsData);
            }

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Auto-detect location on mount only
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
                },
                (error) => {
                    console.warn("Geolocation denied or failed, falling back to default city", error);
                    fetchWeather(city);
                }
            );
        } else {
            fetchWeather(city);
        }
    }, []); // Run only once on mount

    // Separate effect to watch for manual city changes from search
    useEffect(() => {
        // Skip if this is the initial render (handled by above effect)
        if (city !== 'London' || weather !== null) {
            fetchWeather(city);
        }
    }, [city]); // Run whenever city changes

    const fetchWeatherByCoords = async (lat, lon) => {
        setLoading(true);
        setError(null);
        try {
            // Import dynamically to avoid circular dependency issues if any, though here it's fine
            const { getWeatherDataByCoords, getAQIData, getAlertsData } = await import('../services/weatherService');

            const data = await getWeatherDataByCoords(lat, lon);
            setWeather(data);
            setCity(data.name); // Update city state to match location

            if (data && data.coord) {
                const aqiData = await getAQIData(data.coord.lat, data.coord.lon);
                setAqi(aqiData);
                const alertsData = await getAlertsData(data.coord.lat, data.coord.lon);
                setAlerts(alertsData);
            }
        } catch (err) {
            setError(err.message);
            // Fallback to default city if coords fail
            fetchWeather(city);
        } finally {
            setLoading(false);
        }
    };

    return (
        <WeatherContext.Provider value={{ weather, aqi, alerts, loading, error, fetchWeather, city, setCity }}>
            {children}
        </WeatherContext.Provider>
    );
};
