import { SANTIAGO_CHAPTER_5 } from '../constants.tsx';
import * as Icons from './Icons.tsx';

const SectionCard = ({ title, verse, children }: { title: string, verse: string, children: React.ReactNode }) => (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
        <div className="border-b-2 border-orange-200 pb-4 mb-6">
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
            <p className="text-md font-mono text-orange-600">{verse}</p>
        </div>
        {children}
    </div>
);

const Chapter5View = () => {
    const { header, section1, section2, application } = SANTIAGO_CHAPTER_5;
    return (
        <div className="space-y-12">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-2xl shadow-xl text-center">
                <h1 className="text-4xl font-extrabold">{header.title}</h1>
                <p className="text-xl text-orange-300 mt-1">{header.subtitle}</p>
                <p className="mt-4 max-w-3xl mx-auto text-gray-300">{header.description}</p>
                <div className="mt-6 text-center">
                    <h3 className="text-sm uppercase tracking-wider text-gray-400">Versículo Clave</h3>
                    <blockquote className="mt-2 text-lg italic">
                        <p>"{header.keyVerse.text}"</p>
                        <cite className="not-italic font-semibold block mt-1">({header.keyVerse.citation})</cite>
                    </blockquote>
                </div>
            </div>

            <SectionCard title={section1.title} verse={section1.verse}>
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">{section1.warnings.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {section1.warnings.points.map(point => (
                            <div key={point.title} className="p-4 bg-red-50/70 rounded-lg border border-red-200 flex items-start gap-3">
                                <point.icon className="w-8 h-8 text-red-600 shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-red-800">{point.title}</h4>
                                    <p className="text-sm text-gray-700">{point.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionCard>
            
            <SectionCard title={section2.title} verse={section2.verse}>
                <div className="space-y-10">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">{section2.examples.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {section2.examples.cards.map(card => (
                                <div key={card.name} className="group relative rounded-xl overflow-hidden shadow-lg h-64">
                                    <img src={card.imageUrl} alt={card.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-0 p-4 text-white">
                                        <h4 className="font-bold text-lg">{card.name}</h4>
                                        <p className="text-sm text-white/90">{card.lesson}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div className="bg-gray-50/70 p-6 rounded-xl border border-gray-200">
                             <h3 className="text-2xl font-bold text-gray-800 mb-4">{section2.prayerGuide.title}</h3>
                             <div className="space-y-3">
                                {section2.prayerGuide.situations.map(sit => (
                                    <div key={sit.situation} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                                        <p className="text-gray-700">{sit.situation}</p>
                                        <div className="text-right">
                                            <p className="font-bold text-orange-700">{sit.action}</p>
                                            <p className="text-xs font-mono text-gray-500">{sit.verse}</p>
                                        </div>
                                    </div>
                                ))}
                             </div>
                        </div>
                        <div className="bg-blue-50/70 p-6 rounded-xl border border-blue-200">
                             <h3 className="text-xl font-bold text-blue-800 mb-2">{section2.prayerGuide.example.title}</h3>
                             <p className="text-gray-700">{section2.prayerGuide.example.text}</p>
                        </div>
                    </div>
                </div>
            </SectionCard>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">{application.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {application.points.map(point => (
                        <div key={point.title} className="bg-blue-50/70 p-6 rounded-xl border border-blue-200">
                            <h3 className="font-bold text-blue-800 text-lg mb-2">{point.title}</h3>
                            <p className="text-gray-700 text-sm">{point.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Chapter5View;
