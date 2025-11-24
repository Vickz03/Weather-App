import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useWeather } from '../contexts/WeatherContext';

const HourlyForecast = () => {
    const { weather } = useWeather();
    const [mounted, setMounted] = useState(false);

    // In a real app, we would fetch forecast data separately or pass it down
    // For now, using static mock data structure that matches our service
    const data = Array.from({ length: 24 }, (_, i) => ({
        time: `${i}:00`,
        temp: Math.round(20 + Math.sin(i / 4) * 5),
    }));

    useEffect(() => {
        // Delay chart rendering to ensure container is sized
        setMounted(true);
    }, []);

    if (!weather) return null;

    return (
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 w-full max-w-3xl mt-6 shadow-xl border border-white/20">
            <h3 className="text-xl font-semibold mb-4 px-2">Hourly Forecast</h3>
            <div className="w-full" style={{ minHeight: '150px', height: '150px' }}>
                {mounted && (
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#fbbf24" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="time" stroke="#cbd5e1" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip
                                contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', borderRadius: '8px', border: 'none', color: '#fff' }}
                                itemStyle={{ color: '#fbbf24' }}
                            />
                            <Area type="monotone" dataKey="temp" stroke="#fbbf24" fillOpacity={1} fill="url(#colorTemp)" />
                        </AreaChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
};

export default HourlyForecast;
