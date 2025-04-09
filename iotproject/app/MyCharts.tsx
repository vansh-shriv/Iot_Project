'use client';
import { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default function MyChart() {
  const [data, setData] = useState<{ name: string; value: number }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/data')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((resData) => {
        if (Array.isArray(resData) && resData.every(item => typeof item.name === 'string' && typeof item.value === 'number')) {
          setData(resData);
        } else {
          throw new Error('Unexpected data format');
        }
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div className="text-red-600">Error loading data: {error}</div>;
  }

  if (data.length === 0) {
    return <div className="text-gray-500">Loading...</div>;
  }

  return (
    <div className="w-full h-96">
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#8884d8" tick={{ fill: '#8884d8' }} />
          <YAxis stroke="#8884d8" tick={{ fill: '#8884d8' }} />
          <Tooltip contentStyle={{ backgroundColor: '#f9fafb', borderColor: '#e5e7eb' }} />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
