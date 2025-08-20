import { useState } from 'react';
import { SANTIAGO_CHAPTER_2 } from '../constants.tsx';
import * as Icons from './Icons.tsx';
import AccordionItem from './AccordionItem.tsx';
import FlipCard from './FlipCard.tsx';
import StaticTriviaCard from './StaticTriviaCard.tsx';
import Amplifier from './Amplifier.tsx';

const SectionCard = ({ title, verse, children }: { title: string, verse: string, children: React.ReactNode }) => (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
        <div className="border-b-2 border-orange-200 pb-4 mb-6">
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
            <p className="text-md font-mono text-orange-600">{verse}</p>
        </div>
        {children}
    </div>
);

const Chapter2View = () => {
    const [openGlossary, setOpenGlossary] = useState<number | null>(null);
    const { header, section1, section2, section3, trivia } = SANTIAGO_CHAPTER_2;

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
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800 text-center">{section1.scenario.title}</h3>
                    <p className="text-center text-gray-600 max-w-2xl mx-auto">{section1.scenario.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                             <img src={section1.scenario.visitor1.imageUrl} alt={section1.scenario.visitor1.name} className="w-24 h-24 rounded-full object-cover mb-3 ring-4 ring-orange-200" />
                            <h4 className="font-bold text-lg text-gray-800">{section1.scenario.visitor1.name}</h4>
                            <p className="text-sm text-gray-500">{section1.scenario.visitor1.description}</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                             <img src={section1.scenario.visitor2.imageUrl} alt={section1.scenario.visitor2.name} className="w-24 h-24 rounded-full object-cover mb-3 ring-4 ring-gray-300" />
                            <h4 className="font-bold text-lg text-gray-800">{section1.scenario.visitor2.name}</h4>
                            <p className="text-sm text-gray-500">{section1.scenario.visitor2.description}</p>
                        </div>
                    </div>
                     <div className="mt-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                        <h4 className="font-bold text-orange-800">{section1.analysis.title}</h4>
                        <p className="text-gray-700 mt-1">{section1.analysis.text}</p>
                    </div>
                </div>
            </SectionCard>

            <SectionCard title={section2.title} verse={section2.verse}>
                <div className="space-y-8">
                     <div>
                        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">{section2.comparison.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-green-50/70 p-4 rounded-xl border border-green-200">
                                <div className="flex items-center gap-3 mb-3">
                                    <section2.comparison.living.icon className='w-10 h-10 text-green-600 shrink-0' />
                                    <h4 className="text-lg font-semibold text-green-800">{section2.comparison.living.title}</h4>
                                </div>
                                <ul className="space-y-2">
                                    {section2.comparison.living.points.map(item => <li key={item} className="flex items-start gap-2 text-sm text-gray-700"><span className="text-green-600 mt-1">&#10003;</span><span>{item}</span></li>)}
                                </ul>
                            </div>
                             <div className="bg-red-50/70 p-4 rounded-xl border border-red-200">
                                <div className="flex items-center gap-3 mb-3">
                                    <section2.comparison.dead.icon className='w-10 h-10 text-red-600 shrink-0' />
                                    <h4 className="text-lg font-semibold text-red-800">{section2.comparison.dead.title}</h4>
                                </div>
                                <ul className="space-y-2">
                                    {section2.comparison.dead.points.map(item => <li key={item} className="flex items-start gap-2 text-sm text-gray-700"><span className="text-red-600 mt-1">&#10007;</span><span>{item}</span></li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">{section2.examples.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           {section2.examples.cards.map(card => <FlipCard key={card.front.title} front={card.front} back={card.back} />)}
                        </div>
                    </div>
                </div>
            </SectionCard>

            <SectionCard title={section3.title} verse="Glosario y Aplicación">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                         <h3 className="text-2xl font-bold text-gray-800 mb-4">{section3.glossary.title}</h3>
                         {section3.glossary.terms.map((item, index) => (
                            <AccordionItem
                                key={item.title}
                                title={item.title}
                                isOpen={openGlossary === index}
                                onClick={() => setOpenGlossary(openGlossary === index ? null : index)}
                            >
                                <p>{item.content}</p>
                            </AccordionItem>
                        ))}
                    </div>
                    <div className="bg-blue-50/70 p-6 rounded-xl border-2 border-blue-200">
                        <h3 className="text-2xl font-bold text-blue-800 mb-4">{section3.application.title}</h3>
                        <ul className="space-y-4">
                            {section3.application.points.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Icons.CheckCircleIcon className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                    <p className="text-gray-700">{point}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionCard>

            <div>
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">{trivia.title}</h2>
                <div className="space-y-6">
                    {trivia.questions.map((q, index) => (
                        <StaticTriviaCard key={index} question={q} questionNumber={index + 1} />
                    ))}
                </div>
            </div>

            <Amplifier topic="La relación entre fe y obras en Santiago" baseText={header.description} />
        </div>
    );
};

export default Chapter2View;