import React from 'react';
import { WeatherProvider, useWeather } from './contexts/WeatherContext';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import SearchBar from './components/SearchBar';
import WeatherMap from './components/WeatherMap';
import AQICard from './components/AQICard';
import Alerts from './components/Alerts';

const WeatherContent = () => {
  const { aqi, alerts } = useWeather();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-slate-900 text-white p-4 flex flex-col items-center overflow-x-hidden">
      <h1 className="text-3xl font-bold mb-8 mt-4">Advanced Weather App</h1>
      <SearchBar />
      <Alerts alerts={alerts} />
      <CurrentWeather />
      <AQICard aqiData={aqi} />
      <HourlyForecast />
      <DailyForecast />
      <WeatherMap />
    </div>
  );
};

function App() {
  return (
    <WeatherProvider>
      <WeatherContent />
    </WeatherProvider>
  );
}

export default App;
