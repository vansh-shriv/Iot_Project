// utils/mockData.ts
import { WeatherData, HistoricalDataPoint } from '../types/types';

// Current weather data
export const mockWeatherData: WeatherData = {
  temperature: {
    value: 36,
    unit: '°C',
    status: 'warning',
  },
  humidity: {
    value: 12,
    unit: '%',
    status: 'warning',
  },
  windSpeed: {
    value: 14,
    unit: 'km/h',
    status: 'normal',
  },
  airQuality: {
    value: 80,
    unit: 'AQI',
    status: 'critical',
  },
  pressure: {
    value: 1006,
    unit: 'mb',
    status: 'normal',
  },
  uvIndex: {
    value: 0.8,
    unit: '',
    status: 'normal',
  },
  visibility: {
    value: 6,
    unit: 'km',
    status: 'normal',
  },
  precipitation: {
    value: 0.2,
    unit: 'mm',
    status: 'normal',
  },
};

// Historical data for the chart
export const mockHistoricalData: HistoricalDataPoint[] = [
  {
    time: '00:00',
    temperature: 28.5,
    humidity: 35,
    windSpeed: 10,
    airQuality: 92,
  },
  {
    time: '03:00',
    temperature: 27,
    humidity: 38,
    windSpeed: 9,
    airQuality: 88,
  },
  {
    time: '06:00',
    temperature: 28,
    humidity: 40,
    windSpeed: 12,
    airQuality: 85,
  },
  {
    time: '09:00',
    temperature: 33,
    humidity: 30,
    windSpeed: 18,
    airQuality: 95,
  },
  {
    time: '12:00',
    temperature: 38,
    humidity: 22,
    windSpeed: 21,
    airQuality: 105,
  },
  {
    time: '15:00',
    temperature: 41.5,
    humidity: 18,
    windSpeed: 26,
    airQuality: 110,
  },
  {
    time: '18:00',
    temperature: 39,
    humidity: 25,
    windSpeed: 22,
    airQuality: 98,
  },
  {
    time: '21:00',
    temperature: 33.5,
    humidity: 32,
    windSpeed: 15,
    airQuality: 90,
  },
];