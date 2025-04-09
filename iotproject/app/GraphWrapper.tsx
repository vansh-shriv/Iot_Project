'use client';
import dynamic from 'next/dynamic';

const MyChart = dynamic(() => import('./MyCharts'), { ssr: false });

export default function GraphWrapper() {
  return (
    <div className="rounded-xl bg-white shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Sensor Data Overview</h2>
      <MyChart />
    </div>
  );
}