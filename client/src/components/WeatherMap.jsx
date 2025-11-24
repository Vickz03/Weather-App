import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useWeather } from '../contexts/WeatherContext';
import L from 'leaflet';

// Fix for default marker icon in Leaflet with Webpack/Vite
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const WeatherMap = () => {
    const { weather } = useWeather();

    if (!weather) return null;

    const position = [weather.coord.lat, weather.coord.lon];

    return (
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 w-full max-w-3xl mt-6 shadow-xl border border-white/20">
            <h3 className="text-xl font-semibold mb-4 px-2">Weather Radar</h3>
            <div className="h-64 w-full rounded-xl overflow-hidden relative z-0">
                <MapContainer center={position} zoom={10} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <TileLayer
                        attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                        url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${import.meta.env.VITE_WEATHER_API_KEY}`}
                    />
                    <Marker position={position}>
                        <Popup>
                            {weather.name} <br /> {weather.weather[0].description}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default WeatherMap;
