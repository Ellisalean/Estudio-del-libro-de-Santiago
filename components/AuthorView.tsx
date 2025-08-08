import { useState } from 'react';
import { SANTIAGO_CONTENT } from '../constants.tsx';
import * as Icons from './Icons';
import Tabs from './Tabs';
import Timeline from './Timeline';
import Tooltip from './Tooltip';
import Carousel from './Carousel';

const AuthorView = () => {
    const [activeTab, setActiveTab] = useState('biography');
    const { intro, tabs, content } = SANTIAGO_CONTENT.AUTHOR;

    const renderTabContent = () => {
        switch (activeTab) {
            case 'biography':
                const bio = content.biography;
                return (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-6">
                            {bio.sections.map(section => (
                                <div key={section.title}>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{section.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        <Tooltip text={section.content} />
                                    </p>
                                </div>
                            ))}
                            <div className="mt-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{bio.map.title}</h3>
                                <div className="relative rounded-xl overflow-hidden shadow-lg h-72">
                                    <img src={bio.map.imageUrl} alt="Mapa de la región" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/30">
                                        {bio.map.locations.map(loc => (
                                            <div key={loc.name} className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ top: loc.top, left: loc.left }}>
                                                <div className="relative group flex flex-col items-center text-white cursor-pointer">
                                                    <Icons.MapPinIcon className='w-8 h-8 text-orange-400 drop-shadow-lg group-hover:scale-110 transition-transform' />
                                                    <span className="font-bold mt-1" style={{textShadow: '0 1px 4px rgba(0,0,0,0.8)'}}>{loc.name}</span>
                                                    <div className="absolute bottom-full mb-2 w-max max-w-xs p-2 text-sm bg-gray-800 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">{loc.description}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-1">
                             <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center lg:text-left">Línea de Tiempo</h3>
                            <Timeline items={bio.timeline} />
                        </div>
                    </div>
                );
            case 'work':
                const work = content.work;
                return (
                     <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Estilo y Movimiento Literario</h3>
                            <p className="text-gray-600 leading-relaxed"><Tooltip text={work.movement} /></p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                 <h3 className="text-2xl font-bold text-gray-800 mb-4">Temas Recurrentes</h3>
                                 <div className="space-y-4">
                                    {work.themes.map(theme => (
                                        <div key={theme.title} className="p-4 bg-orange-50 rounded-lg">
                                            <h4 className="font-bold text-orange-800">{theme.title}</h4>
                                            <p className="text-gray-600 text-sm">{theme.content}</p>
                                        </div>
                                    ))}
                                 </div>
                            </div>
                             <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Momentos Históricos</h3>
                                 <Carousel items={work.carousel} />
                            </div>
                        </div>
                    </div>
                );
            case 'legacy':
                const legacy = content.legacy;
                return (
                     <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Legado e Impacto</h3>
                            <p className="text-gray-600 leading-relaxed">{legacy.legacy}</p>
                        </div>
                         <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Opinión de Expertos</h3>
                            <div className="space-y-4">
                                {legacy.experts.map(expert => (
                                    <blockquote key={expert.author} className="p-4 bg-gray-50 border-l-4 border-teal-400 italic">
                                        <p className="text-gray-700">"{expert.quote}"</p>
                                        <cite className="block text-right not-italic mt-2 text-gray-500 font-semibold">{expert.author}</cite>
                                    </blockquote>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Citas Célebres</h3>
                            <div className="space-y-4">
                                {legacy.quotes.map(quote => (
                                    <div key={quote} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                        <Icons.QuoteIcon className='w-5 h-5 text-orange-400 mt-1 shrink-0' />
                                        <p className="text-gray-700 italic">"{quote}"</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };
    
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-2xl shadow-lg">
                <img src={intro.imageUrl} alt={intro.name} className="w-32 h-32 rounded-full object-cover ring-4 ring-orange-200" />
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-extrabold text-gray-800">{intro.name}</h1>
                    <p className="text-lg text-gray-500 mt-1">{intro.relevance}</p>
                </div>
            </div>
            <Tabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
            <div className="bg-white p-8 rounded-2xl shadow-lg min-h-[400px]">
                <div className="animate-fade-in">{renderTabContent()}</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Para Saber Más</h2>
                <ul className="space-y-4">
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Epistle_of_James" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-200 transition-all duration-300">
                            <Icons.ExternalLinkIcon className='w-7 h-7 text-orange-500 shrink-0 mt-1 group-hover:text-orange-600 transition-colors' />
                            <div>
                                <span className="font-bold text-gray-800 group-hover:text-orange-700 transition-colors">Epístola de Santiago en Wikipedia</span>
                                <p className="text-sm text-gray-500 mt-1">Explora el artículo completo de Wikipedia para obtener más detalles históricos y análisis (en inglés).</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://espanol.josh.org/8-antiguos-manuscritos-validan-el-nuevo-testamento/" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-200 transition-all duration-300">
                            <Icons.ExternalLinkIcon className='w-7 h-7 text-orange-500 shrink-0 mt-1 group-hover:text-orange-600 transition-colors' />
                            <div>
                                <span className="font-bold text-gray-800 group-hover:text-orange-700 transition-colors">Manuscritos Antiguos del Nuevo Testamento</span>
                                <p className="text-sm text-gray-500 mt-1">Un artículo sobre la validez de los manuscritos del Nuevo Testamento, incluyendo papiros relacionados con Santiago.</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AuthorView;