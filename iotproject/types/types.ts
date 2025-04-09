export type SensorValue = {
    value: number;
    unit: string;
    status: 'normal' | 'warning' | 'critical';
  };
  
  export type WeatherData = {
    temperature: SensorValue;
    humidity: SensorValue;
    windSpeed: SensorValue;
    airQuality: SensorValue;
    pressure: SensorValue;
    uvIndex: SensorValue;
    visibility: SensorValue;
    precipitation: SensorValue;
  };
  
  export type HistoricalDataPoint = {
    time: string;
    temperature: number;
    humidity: number;
    windSpeed: number;
    airQuality: number;
  };