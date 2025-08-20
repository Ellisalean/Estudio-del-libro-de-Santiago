import { sectionsData } from '../constants.tsx';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (sectionId: string) => void;
}

const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    // Scroll main content to top
    document.getElementById('main-content')?.scrollTo(0, 0);
  };
  
  const TopIcon = sectionsData[0].icon;

  return (
    <aside className="w-20 md:w-64 bg-[#1A202C] text-gray-300 flex flex-col p-4 shadow-2xl shrink-0 transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-center md:justify-start gap-3 p-2 mb-6 shrink-0">
        <div className="p-2 bg-[#F76A6A] rounded-lg">
          <TopIcon className="w-7 h-7 text-white" />
        </div>
        <h1 className="text-xl font-bold text-white hidden md:block">Libro de Santiago</h1>
      </div>
      <nav className="flex-grow min-h-0 overflow-y-auto -mr-2 pr-2">
        <ul>
          {sectionsData.map(section => {
            const SectionIcon = section.icon;
            return (
              <li key={section.id} className="mb-2">
                <button
                  onClick={() => handleSectionClick(section.id)}
                  className={`w-full flex items-center justify-center md:justify-start gap-3 p-3 rounded-lg text-left transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md'
                      : 'hover:bg-gray-700'
                  }`}
                >
                  <SectionIcon className="w-6 h-6 shrink-0" />
                  <span className="font-medium hidden md:inline">{section.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-auto p-4 bg-gray-700/50 rounded-lg text-center shrink-0 hidden md:block">
        <h3 className="font-bold text-white">Fe y Obras</h3>
        <p className="text-sm mt-1 text-gray-400">Una guía práctica para una fe viva y auténtica.</p>
      </div>
    </aside>
  );
};

export default Sidebar;