import { SANTIAGO_CHAPTER_3 } from '../constants.tsx';
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

const Chapter3View = () => {
    const { header, section1, section2, application } = SANTIAGO_CHAPTER_3;

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
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">{section1.metaphors.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {section1.metaphors.items.map(item => (
                                <div key={item.name} className="bg-orange-50/70 p-6 rounded-xl border-2 border-orange-200 text-center shadow-sm">
                                    <item.icon className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                                    <h4 className="text-lg font-bold text-orange-800">{item.name}</h4>
                                    <p className="text-gray-600 text-sm mt-2">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50 p-6 rounded-2xl">
                        <div className="w-full h-56 rounded-xl shadow-lg overflow-hidden">
                            <img src={section1.analogy.imageUrl} alt="Analogía de la fuente" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{section1.analogy.title}</h3>
                            <p className="text-gray-500 font-mono text-sm mb-2">{section1.analogy.verse}</p>
                            <p className="text-gray-600 leading-relaxed">{section1.analogy.text}</p>
                        </div>
                    </div>
                </div>
            </SectionCard>

            <SectionCard title={section2.title} verse={section2.verse}>
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">{section2.comparison.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-100 p-6 rounded-xl border border-gray-300">
                            <div className="flex items-center gap-3 mb-4">
                                <section2.comparison.earthly.icon className="w-10 h-10 text-gray-600" />
                                <h4 className="text-xl font-bold text-gray-800">{section2.comparison.earthly.title}</h4>
                            </div>
                            <ul className="space-y-3">
                                {section2.comparison.earthly.characteristics.map(char => (
                                    <li key={char} className="flex items-start gap-2 text-gray-700">
                                        <span className="text-gray-500 mt-1">&#10148;</span>
                                        <span>{char}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-teal-50/70 p-6 rounded-xl border border-teal-300">
                            <div className="flex items-center gap-3 mb-4">
                                <section2.comparison.heavenly.icon className="w-10 h-10 text-teal-600" />
                                <h4 className="text-xl font-bold text-teal-800">{section2.comparison.heavenly.title}</h4>
                            </div>
                            <ul className="space-y-3">
                                {section2.comparison.heavenly.characteristics.map(char => (
                                     <li key={char} className="flex items-start gap-2 text-teal-700">
                                        <span className="text-teal-500 mt-1">&#10003;</span>
                                        <span>{char}</span>
                                    </li>
                                ))}
                            </ul>
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

export default Chapter3View;
