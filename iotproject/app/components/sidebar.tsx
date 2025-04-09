import Link from 'next/link';
import { 
  Home, 
  BarChart2, 
  Bell, 
  Settings, 
  Thermometer, 
  Droplet, 
  Wind, 
  CloudRain 
} from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 border-r border-gray-700 hidden md:flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <Link href="/" className="flex items-center">
          <CloudRain className="w-6 h-6 mr-2 text-blue-400" />
          <span className="text-xl font-bold">WeatherHub</span>
        </Link>
      </div>
      
      <nav className="flex-1 p-4">
        <div className="mb-8">
          <div className="mb-2 text-gray-400 text-sm font-medium uppercase">Main</div>
          <ul>
            <li className="mb-2">
              <Link href="/dashboard" className="flex items-center p-2 text-white bg-blue-600 rounded-lg">
                <Home className="w-5 h-5 mr-3" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/analytics" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded-lg">
                <BarChart2 className="w-5 h-5 mr-3" />
                <span>Analytics</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/alerts" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded-lg">
                <Bell className="w-5 h-5 mr-3" />
                <span>Alerts</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/settings" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded-lg">
                <Settings className="w-5 h-5 mr-3" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <div className="mb-2 text-gray-400 text-sm font-medium uppercase">Sensors</div>
          <ul>
            <li className="mb-2">
              <Link href="/sensors/temperature" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded-lg">
                <Thermometer className="w-5 h-5 mr-3" />
                <span>Temperature</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/sensors/humidity" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded-lg">
                <Droplet className="w-5 h-5 mr-3" />
                <span>Humidity</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/sensors/wind" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded-lg">
                <Wind className="w-5 h-5 mr-3" />
                <span>Wind Speed</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/sensors/air-quality" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded-lg">
                <CloudRain className="w-5 h-5 mr-3" />
                <span>Air Quality</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            W
          </div>
          <div className="ml-3">
            <div className="text-sm font-medium">Weather Station</div>
            <div className="text-xs text-gray-400">Online</div>
          </div>
        </div>
      </div>
    </div>
  );
}