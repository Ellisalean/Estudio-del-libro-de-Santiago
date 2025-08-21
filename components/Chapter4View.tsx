import { SANTIAGO_CHAPTER_4 } from '../constants.tsx';
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

const Chapter4View = () => {
    const { header, section1, section2, application } = SANTIAGO_CHAPTER_4;
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
                        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">{section1.flow.title}</h3>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                            {section1.flow.steps.map((step, index) => (
                                <>
                                    <div key={index} className="flex flex-col items-center text-center p-4 max-w-[200px]">
                                        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center ring-4 ring-white shadow">
                                            <step.icon className="w-8 h-8 text-orange-600" />
                                        </div>
                                        <h4 className="font-bold text-gray-800 mt-3">{step.title}</h4>
                                        <p className="text-sm text-gray-500">{step.description}</p>
                                    </div>
                                    {index < section1.flow.steps.length - 1 && (
                                        <Icons.ChevronRightIcon className="w-8 h-8 text-gray-300 hidden md:block" />
                                    )}
                                </>
                            ))}
                        </div>
                    </div>
                    <div className="p-6 bg-teal-50 rounded-lg border-l-4 border-teal-400">
                        <h4 className="font-bold text-teal-800 text-lg">{section1.solution.title}</h4>
                        <p className="text-gray-700 mt-2">{section1.solution.text}</p>
                    </div>
                </div>
            </SectionCard>

            <SectionCard title={section2.title} verse={section2.verse}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-800">{section2.analogy.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{section2.analogy.description}</p>
                        <div className="grid grid-cols-1 gap-4 mt-4">
                             <div className="bg-red-50/70 p-4 rounded-xl border border-red-200">
                                <h4 className="text-md font-semibold text-red-800 mb-1">{section2.rightVsWrong.arrogant.title}</h4>
                                <blockquote className="text-sm italic text-gray-700">"{section2.rightVsWrong.arrogant.quote}"</blockquote>
                                <p className="text-xs text-red-700 mt-2">{section2.rightVsWrong.arrogant.problem}</p>
                            </div>
                            <div className="bg-green-50/70 p-4 rounded-xl border border-green-200">
                                <h4 className="text-md font-semibold text-green-800 mb-1">{section2.rightVsWrong.godly.title}</h4>
                                <blockquote className="text-sm italic text-gray-700">"{section2.rightVsWrong.godly.quote}"</blockquote>
                                <p className="text-xs text-green-700 mt-2">{section2.rightVsWrong.godly.solution}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-72 rounded-xl shadow-lg overflow-hidden">
                        <img src={section2.analogy.imageUrl} alt="Analogía del vapor" className="w-full h-full object-cover" />
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

export default Chapter4View;
