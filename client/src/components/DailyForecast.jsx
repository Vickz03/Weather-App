import React from 'react';
import { Sun, Cloud, CloudRain, CloudSnow } from 'lucide-react';

const DailyForecast = () => {
    // Mock data
    const dailyData = [
        { day: 'Today', min: 18, max: 24, icon: 'Sun', condition: 'Sunny' },
        { day: 'Tue', min: 17, max: 23, icon: 'Cloud', condition: 'Cloudy' },
        { day: 'Wed', min: 16, max: 22, icon: 'CloudRain', condition: 'Rain' },
        { day: 'Thu', min: 15, max: 20, icon: 'CloudRain', condition: 'Heavy Rain' },
        { day: 'Fri', min: 14, max: 19, icon: 'Cloud', condition: 'Partly Cloudy' },
        { day: 'Sat', min: 15, max: 21, icon: 'Sun', condition: 'Sunny' },
        { day: 'Sun', min: 16, max: 22, icon: 'Sun', condition: 'Sunny' },
    ];

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'Sun': return <Sun className="text-yellow-400" />;
            case 'Cloud': return <Cloud className="text-gray-400" />;
            case 'CloudRain': return <CloudRain className="text-blue-400" />;
            case 'CloudSnow': return <CloudSnow className="text-white" />;
            default: return <Sun className="text-yellow-400" />;
        }
    };

    return (
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 w-full max-w-3xl mt-6 shadow-xl border border-white/20">
            <h3 className="text-xl font-semibold mb-4 px-2">7-Day Forecast</h3>
            <div className="flex flex-col gap-4">
                {dailyData.map((day, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-white/5 rounded-lg transition-colors">
                        <span className="w-16 font-medium">{day.day}</span>
                        <div className="flex items-center gap-2 w-32">
                            {getIcon(day.icon)}
                            <span className="text-sm text-gray-300">{day.condition}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-400">{day.min}°</span>
                            <div className="w-24 h-1 bg-gray-700 rounded-full overflow-hidden relative">
                                <div
                                    className="absolute h-full bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full"
                                    style={{ left: '10%', right: '10%' }}
                                ></div>
                            </div>
                            <span className="font-semibold">{day.max}°</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DailyForecast;
