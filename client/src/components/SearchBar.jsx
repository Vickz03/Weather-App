import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useWeather } from '../contexts/WeatherContext';
import { GLOBAL_CITIES } from '../data/cities';

const SearchBar = () => {
    const { setCity } = useWeather();
    const [query, setQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredCities, setFilteredCities] = useState([]);
    const searchRef = useRef(null);

    useEffect(() => {
        if (query.length > 0) {
            const filtered = GLOBAL_CITIES.filter(city =>
                city.toLowerCase().includes(query.toLowerCase())
            ).slice(0, 10);
            setFilteredCities(filtered);
            setShowSuggestions(true);
        } else {
            setFilteredCities([]);
            setShowSuggestions(false);
        }
    }, [query]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            setCity(query);
            setQuery('');
            setShowSuggestions(false);
        }
    };

    const handleSelectCity = (cityName) => {
        setCity(cityName);
        setQuery('');
        setShowSuggestions(false);
    };

    return (
        <div ref={searchRef} className="relative w-full max-w-md mb-8">
            <form onSubmit={handleSubmit} className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => query && setShowSuggestions(true)}
                    placeholder="Search any city, town, or place..."
                    className="w-full bg-white/20 backdrop-blur-md border border-white/30 rounded-full py-3 px-6 pl-12 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" size={20} />
            </form>

            <p className="text-xs text-gray-400 mt-2 text-center">
                💡 Type any location and press Enter - even small towns!
            </p>

            {showSuggestions && filteredCities.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl z-50 max-h-80 overflow-y-auto">
                    {filteredCities.map((city, index) => (
                        <button
                            key={index}
                            onClick={() => handleSelectCity(city)}
                            className="w-full text-left px-6 py-3 text-white hover:bg-white/20 transition-colors flex items-center gap-3 border-b border-white/10 last:border-b-0"
                        >
                            <Search size={16} className="text-gray-400" />
                            <span>{city}</span>
                        </button>
                    ))}
                </div>
            )}

            {showSuggestions && query.length > 0 && filteredCities.length === 0 && (
                <div className="absolute top-full mt-2 w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl z-50 p-4 text-center">
                    <p className="text-white text-sm">
                        🔍 No suggestions found
                    </p>
                    <p className="text-gray-400 text-xs mt-2">
                        Press <kbd className="bg-white/20 px-2 py-1 rounded text-white font-mono">Enter</kbd> to search for &quot;{query}&quot;
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                        Works for ANY town, village, or street!
                    </p>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
