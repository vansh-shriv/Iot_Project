import { 
    Thermometer, 
    Droplet, 
    Wind, 
    CloudRain, 
    // Lightning, 
    AlertTriangle 
  } from 'lucide-react';
  
  type CardProps = {
    title: string;
    value: number;
    unit: string;
    status: 'normal' | 'warning' | 'critical';
    icon: 'temperature' | 'humidity' | 'wind' | 'air' | 'power';
    showStatus?: boolean;
  };
  
  export default function WeatherCard({ 
    title, 
    value, 
    unit, 
    status, 
    icon, 
    showStatus = false 
  }: CardProps) {
    
    const getIcon = () => {
      switch (icon) {
        case 'temperature':
          return <Thermometer className="w-6 h-6 text-red-400" />;
        case 'humidity':
          return <Droplet className="w-6 h-6 text-blue-400" />;
        case 'wind':
          return <Wind className="w-6 h-6 text-green-400" />;
        case 'air':
          return <CloudRain className="w-6 h-6 text-purple-400" />;
        // case 'power':
        //   return <Lightning className="w-6 h-6 text-yellow-400" />;
        default:
          return <Thermometer className="w-6 h-6 text-red-400" />;
      }
    };
    
    const getStatusColor = () => {
      switch (status) {
        case 'normal':
          return 'text-green-400';
        case 'warning':
          return 'text-red-400';
        case 'critical':
          return 'text-yellow-400';
        default:
          return 'text-green-400';
      }
    };
    
    const getStatusIcon = () => {
      if (status === 'normal') {
        return null;
      }
      return <AlertTriangle className="w-4 h-4 ml-1" />;
    };
    
    return (
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            {getIcon()}
            <h3 className="text-xl font-semibold ml-2">{title}</h3>
          </div>
          
          {showStatus && (
            <div className={`uppercase font-semibold text-sm flex items-center ${getStatusColor()}`}>
              {status}
              {getStatusIcon()}
            </div>
          )}
        </div>
        
        <div className="flex items-end">
          <span className="text-5xl font-bold">{value}</span>
          <span className="ml-2 text-gray-400 text-xl">{unit}</span>
        </div>
      </div>
    );
  }