interface Tab {
    id: string;
    title: string;
}

interface TabsProps {
    tabs: Tab[];
    activeTab: string;
    onTabClick: (tabId: string) => void;
}

const Tabs = ({ tabs, activeTab, onTabClick }: TabsProps) => {
    return (
        <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => onTabClick(tab.id)}
                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-md transition-colors duration-200 focus:outline-none ${
                            activeTab === tab.id
                                ? 'border-orange-500 text-orange-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                        aria-current={activeTab === tab.id ? 'page' : undefined}
                    >
                        {tab.title}
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default Tabs;
