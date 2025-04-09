'use client';

import { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import HistoricalChart from './components/HistoricalChart';
import FilterTabs from './components/FilterTabs';
import { mockWeatherData, mockHistoricalData } from '../utils/mockData';
import { WeatherData } from '../types/types';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('all');
  const [currentData, setCurrentData] = useState<WeatherData>(mockWeatherData);
  const [timeRange, setTimeRange] = useState('24h');
  
  // Simulating data fetch - replace with your actual data fetching
  useEffect(() => {
    // In a real implementation, you'd fetch data from your API/database here
    // For now, we're using the mock data
    setCurrentData(mockWeatherData);
  }, []);

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">

      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Weather Monitoring Dashboard</h1>
            <p className="text-gray-400">Monitor and analyze your weather data in real-time</p>
          </header>
          
          {/* <FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} /> */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <WeatherCard 
              title="Temperature" 
              value={currentData.temperature.value}
              unit={currentData.temperature.unit}
              status={currentData.temperature.status}
              icon="temperature"
              showStatus={true}
            />
            
            <WeatherCard 
              title="Humidity" 
              value={currentData.humidity.value}
              unit={currentData.humidity.unit}
              status={currentData.humidity.status}
              icon="humidity"
              showStatus={true}
            />
            
            <WeatherCard 
              title="Wind Speed" 
              value={currentData.windSpeed.value}
              unit={currentData.windSpeed.unit}
              status={currentData.windSpeed.status}
              icon="wind"
              showStatus={true}
            />
            
            <WeatherCard 
              title="Air Quality" 
              value={currentData.airQuality.value}
              unit={currentData.airQuality.unit}
              status={currentData.airQuality.status}
              icon="air"
              showStatus={true}
            />
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-2xl font-bold">Historical Data</h2>
                <p className="text-gray-400">Weather readings over time</p>
              </div>
              
              <div className="relative">
                <select 
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="bg-gray-700 text-white py-2 px-4 rounded-lg appearance-none cursor-pointer pr-10 focus:outline-none"
                >
                  <option value="24h">Last Day</option>
                  {/* <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option> */}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <HistoricalChart data={mockHistoricalData} timeRange={timeRange} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Pressure</h3>
              <div className="flex items-end">
                <span className="text-3xl font-bold">{currentData.pressure.value}</span>
                <span className="ml-2 text-gray-400">{currentData.pressure.unit}</span>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">UV Index</h3>
              <div className="flex items-end">
                <span className="text-3xl font-bold">{currentData.uvIndex.value}</span>
                <span className="ml-2 text-gray-400">{currentData.uvIndex.unit}</span>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Visibility</h3>
              <div className="flex items-end">
                <span className="text-3xl font-bold">{currentData.visibility.value}</span>
                <span className="ml-2 text-gray-400">{currentData.visibility.unit}</span>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Precipitation</h3>
              <div className="flex items-end">
                <span className="text-3xl font-bold">{currentData.precipitation.value}</span>
                <span className="ml-2 text-gray-400">{currentData.precipitation.unit}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}