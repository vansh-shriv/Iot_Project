'use client';

import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

type HistoricalChartProps = {
  data: any[];
  timeRange: string;
};

export default function HistoricalChart({ data, timeRange }: HistoricalChartProps) {
  const [chartData, setChartData] = useState(data);

  useEffect(() => {
    // Filter data based on timeRange
    // In a real implementation, you might fetch different data based on the timeRange
    // For now, we'll just use the same data
    setChartData(data);
  }, [data, timeRange]);

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis 
            dataKey="time" 
            stroke="#aaa" 
            tick={{ fill: '#aaa' }} 
          />
          <YAxis stroke="#aaa" tick={{ fill: '#aaa' }} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#333', 
              border: 'none', 
              borderRadius: '8px',
              color: '#fff' 
            }} 
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#ff4d6d"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
            name="Temperature (°C)"
          />
          <Line
            type="monotone"
            dataKey="humidity"
            stroke="#4dabf7"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
            name="Humidity (%)"
          />
          <Line
            type="monotone"
            dataKey="windSpeed"
            stroke="#82ca9d"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
            name="Wind Speed (km/h)"
          />
          <Line
            type="monotone"
            dataKey="airQuality"
            stroke="#b197fc"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
            name="Air Quality (AQI)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}