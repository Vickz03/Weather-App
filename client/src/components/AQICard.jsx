import React from 'react';
import { Wind } from 'lucide-react';

const AQICard = ({ aqiData }) => {
    if (!aqiData) return null;

    const getAQILabel = (aqi) => {
        switch (aqi) {
            case 1: return { label: 'Good', color: 'bg-green-500' };
            case 2: return { label: 'Fair', color: 'bg-yellow-500' };
            case 3: return { label: 'Moderate', color: 'bg-orange-500' };
            case 4: return { label: 'Poor', color: 'bg-red-500' };
            case 5: return { label: 'Very Poor', color: 'bg-purple-500' };
            default: return { label: 'Unknown', color: 'bg-gray-500' };
        }
    };

    const { label, color } = getAQILabel(aqiData.main.aqi);

    return (
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 w-full max-w-3xl mt-6 shadow-xl border border-white/20">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold px-2 flex items-center gap-2">
                    <Wind size={20} /> Air Quality Index
                </h3>
                <span className={`${color} px-3 py-1 rounded-full text-sm font-bold shadow-lg`}>
                    {label}
                </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/5 p-3 rounded-xl text-center">
                    <p className="text-xs text-gray-400">PM2.5</p>
                    <p className="font-semibold">{aqiData.components.pm2_5}</p>
                </div>
                <div className="bg-white/5 p-3 rounded-xl text-center">
                    <p className="text-xs text-gray-400">PM10</p>
                    <p className="font-semibold">{aqiData.components.pm10}</p>
                </div>
                <div className="bg-white/5 p-3 rounded-xl text-center">
                    <p className="text-xs text-gray-400">O3</p>
                    <p className="font-semibold">{aqiData.components.o3}</p>
                </div>
                <div className="bg-white/5 p-3 rounded-xl text-center">
                    <p className="text-xs text-gray-400">NO2</p>
                    <p className="font-semibold">{aqiData.components.no2}</p>
                </div>
            </div>
        </div>
    );
};

export default AQICard;
