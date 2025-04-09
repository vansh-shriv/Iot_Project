type FilterTabsProps = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
  };
  
  export default function FilterTabs({ activeTab, setActiveTab }: FilterTabsProps) {
    const tabs = [
      { id: 'all', label: 'All Sensors' },
      { id: 'temperature', label: 'Temperature' },
      { id: 'humidity', label: 'Humidity' },
      { id: 'wind', label: 'Wind Speed' },
      { id: 'air', label: 'Air Quality' }
    ];
    
    return (
      <div className="flex overflow-x-auto mb-6 bg-gray-800 rounded-lg p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 rounded-lg whitespace-nowrap ${
              activeTab === tab.id 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-400 hover:bg-gray-700'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  }