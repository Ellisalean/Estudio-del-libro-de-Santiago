import { useState } from 'react';
import Sidebar from './components/Sidebar.tsx';
import MainContent from './components/MainContent.tsx';
import { SectionId } from './constants.tsx';

function App() {
  const [activeSection, setActiveSection] = useState<string>(SectionId.INTRO);

  return (
    <div className="flex h-screen bg-[#FDFBF7]">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8" id="main-content">
          <MainContent activeSection={activeSection} />
        </main>
        <footer className="flex-shrink-0 p-4 text-center text-sm text-gray-500 border-t border-gray-200">
          LATIN THEOLOGICAL SEMINARY . Todos los derechos reservados
        </footer>
      </div>
    </div>
  );
}

export default App;