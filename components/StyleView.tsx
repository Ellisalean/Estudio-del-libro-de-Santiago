import { useState } from 'react';
import { SANTIAGO_CONTENT } from '../constants.tsx';
import Tabs from './Tabs.tsx';
import GenreComparisonTable from './GenreComparisonTable.tsx';
import HighlightCarousel from './HighlightCarousel.tsx';
import TechniqueCard from './TechniqueCard.tsx';
import InfluenceDiagram from './InfluenceDiagram.tsx';

const StyleView = () => {
    const [activeTab, setActiveTab] = useState('definition');
    const { title, intro, tabs, content } = SANTIAGO_CONTENT.STYLE;

    const renderTabContent = () => {
        switch (activeTab) {
            case 'definition':
                const defContent = content.definition;
                return (
                    <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: defContent.definition }} />
                        <GenreComparisonTable data={defContent.comparison} />
                    </div>
                );
            case 'examples':
                const exContent = content.examples.carousel;
                return (
                     <HighlightCarousel data={exContent} />
                );
            default:
                return null;
        }
    }

    const exContent = content.examples;
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{title}</h1>
                <p className="text-lg text-gray-500">{intro}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Género y Subgéneros</h2>
                <Tabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
                <div className="mt-6 animate-fade-in">
                    {renderTabContent()}
                </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{exContent.traits.title}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-700">Lenguaje y Tono</h3>
                        <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: exContent.traits.language }} />
                    </div>
                     <div className="space-y-4">
                         <h3 className="text-xl font-semibold text-gray-700">{exContent.traits.motifs.title}</h3>
                         <ul className="space-y-2">
                             {exContent.traits.motifs.items.map(item => (
                                 <li key={item.symbol} className="flex items-start gap-3">
                                     <span className="text-orange-500 font-bold mt-1">&#10148;</span>
                                     <div>
                                         <span className="font-semibold text-gray-800">{item.symbol}:</span>
                                         <span className="text-gray-600 ml-1">{item.meaning}</span>
                                     </div>
                                 </li>
                             ))}
                         </ul>
                    </div>
                </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
                 <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{exContent.techniques.title}</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                     {exContent.techniques.items.map((tech) => <TechniqueCard key={tech.name} technique={tech} />)}
                 </div>
            </div>
             <div className="bg-white p-8 rounded-2xl shadow-lg">
                 <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{exContent.influences.title}</h2>
                 <InfluenceDiagram influencedBy={exContent.influences.influencedBy} legacy={exContent.influences.legacy} />
            </div>
        </div>
    );
};

export default StyleView;