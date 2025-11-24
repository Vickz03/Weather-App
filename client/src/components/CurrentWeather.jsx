import React from 'react';
import { useWeather } from '../contexts/WeatherContext';
import { Cloud, Droplets, Wind, Eye, Thermometer } from 'lucide-react';

const CurrentWeather = () => {
    const { weather, loading, error } = useWeather();

    if (loading) return <div className="animate-pulse text-xl">Loading weather data...</div>;
    if (error) return <div className="text-red-400">Error: {error}</div>;
    if (!weather) return null;

    return (
        <>
            {weather.notFound && (
                <div className="bg-yellow-500/20 backdrop-blur-md border border-yellow-500/50 rounded-2xl p-4 w-full max-w-md mb-4 text-center">
                    <p className="text-yellow-200 font-semibold">⚠️ Location &quot;{weather.name}&quot; not found</p>
                    <p className="text-yellow-300 text-xs mt-1">Showing demo data. Try a nearby major city or different spelling.</p>
                </div>
            )}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 w-full max-w-md shadow-2xl border border-white/20">
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl font-semibold tracking-wide">{weather.name}, {weather.sys.country}</h2>
                    <p className="text-lg text-gray-300 capitalize mt-1">{weather.weather[0].description}</p>

                    <div className="my-8 flex flex-col items-center">
                        <Cloud size={80} className="text-blue-300 mb-4 drop-shadow-lg" />
                        <h1 className="text-8xl font-bold tracking-tighter">
                            {Math.round(weather.main.temp)}°
                        </h1>
                    </div>

                    <div className="grid grid-cols-2 gap-6 w-full mt-4">
                        <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl">
                            <Wind className="text-gray-400" />
                            <div>
                                <p className="text-sm text-gray-400">Wind</p>
                                <p className="font-semibold">{weather.wind.speed} m/s</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl">
                            <Droplets className="text-blue-400" />
                            <div>
                                <p className="text-sm text-gray-400">Humidity</p>
                                <p className="font-semibold">{weather.main.humidity}%</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl">
                            <Eye className="text-yellow-400" />
                            <div>
                                <p className="text-sm text-gray-400">Visibility</p>
                                <p className="font-semibold">{weather.visibility / 1000} km</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl">
                            <Thermometer className="text-red-400" />
                            <div>
                                <p className="text-sm text-gray-400">Pressure</p>
                                <p className="font-semibold">{weather.main.pressure} hPa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CurrentWeather;
