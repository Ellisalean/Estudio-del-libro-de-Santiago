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
    <aside className="w-64 bg-[#1A202C] text-gray-300 flex flex-col p-4 shadow-2xl shrink-0">
      <div className="flex items-center gap-3 p-2 mb-6">
        <div className="p-2 bg-[#F76A6A] rounded-lg">
          <TopIcon className="w-7 h-7 text-white" />
        </div>
        <h1 className="text-xl font-bold text-white">Libro de Santiago</h1>
      </div>
      <nav className="flex-1">
        <ul>
          {sectionsData.map(section => {
            const SectionIcon = section.icon;
            return (
              <li key={section.id} className="mb-2">
                <button
                  onClick={() => handleSectionClick(section.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md'
                      : 'hover:bg-gray-700'
                  }`}
                >
                  <SectionIcon />
                  <span className="font-medium">{section.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4 bg-gray-700/50 rounded-lg text-center">
        <h3 className="font-bold text-white">Fe y Obras</h3>
        <p className="text-sm mt-1 text-gray-400">Una guía práctica para una fe viva y auténtica.</p>
      </div>
    </aside>
  );
};

export default Sidebar;