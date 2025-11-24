import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Alerts = ({ alerts }) => {
    if (!alerts || alerts.length === 0) return null;

    return (
        <div className="w-full max-w-3xl mt-6">
            {alerts.map((alert, index) => (
                <div key={index} className="bg-red-500/20 backdrop-blur-md border border-red-500/50 rounded-xl p-4 mb-4 flex items-start gap-4">
                    <AlertTriangle className="text-red-400 shrink-0" size={24} />
                    <div>
                        <h4 className="font-bold text-red-200">{alert.event}</h4>
                        <p className="text-sm text-red-100 mt-1">{alert.description}</p>
                        <p className="text-xs text-red-300 mt-2">Source: {alert.sender_name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Alerts;
