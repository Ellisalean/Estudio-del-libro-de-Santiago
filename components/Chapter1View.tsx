import { useState } from 'react';
import { SANTIAGO_CHAPTER_1 } from '../constants.tsx';
import * as Icons from './Icons.tsx';
import AccordionItem from './AccordionItem.tsx';
import FlipCard from './FlipCard.tsx';
import DragDrop from './DragDrop.tsx';
import StaticTriviaCard from './StaticTriviaCard.tsx';
import { TriviaQuestion } from '../types.ts';

const SectionCard = ({ title, verse, children }: { title: string, verse: string, children: React.ReactNode }) => (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
        <div className="border-b-2 border-orange-200 pb-4 mb-6">
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
            <p className="text-md font-mono text-orange-600">{verse}</p>
        </div>
        {children}
    </div>
);

const Chapter1View = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);
    const { header, section1, section2, section3 } = SANTIAGO_CHAPTER_1;

    const triviaData: TriviaQuestion = {
        question: section3.trivia.question,
        options: section3.trivia.options,
        answerIndex: section3.trivia.answerIndex,
        explanation: section3.trivia.explanation,
    };

    return (
        <div className="space-y-12">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-2xl shadow-xl text-center">
                <h1 className="text-4xl font-extrabold">{header.title}</h1>
                <p className="text-xl text-orange-300 mt-1">{header.subtitle}</p>
                <p className="mt-4 max-w-3xl mx-auto text-gray-300">{header.description}</p>
            </div>

            <SectionCard title={section1.title} verse={section1.verse}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        {section1.accordionItems.map((item, index) => (
                            <AccordionItem
                                key={item.title}
                                title={item.title}
                                isOpen={openAccordion === index}
                                onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                            >
                                <p>{item.content}</p>
                            </AccordionItem>
                        ))}
                    </div>
                    <div className="bg-blue-50/70 p-6 rounded-xl border-2 border-blue-200 flex flex-col items-center justify-center text-center">
                        <Icons.LightBulbIcon className="w-10 h-10 text-blue-600 mb-3" />
                        <h3 className="text-lg font-bold text-blue-800">{section1.debate.title}</h3>
                        <p className="mt-2 text-gray-700">{section1.debate.question}</p>
                    </div>
                </div>
            </SectionCard>

            <SectionCard title={section2.title} verse={section2.verse}>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">{section2.timeline.title}</h3>
                        <div className="relative border-l-4 border-orange-200 pl-8 space-y-12 py-4">
                            {section2.timeline.steps.map((step, index) => (
                                <div key={index} className="relative flex items-start">
                                    <div className="absolute -left-[50px] top-0 flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full ring-8 ring-white">
                                        <step.icon className='w-6 h-6 text-orange-600' />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-orange-800 text-lg">{step.title}</h4>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {section2.flipCards.map(card => (
                            <FlipCard key={card.front.title} front={card.front} back={card.back} />
                        ))}
                    </div>
                    <DragDrop data={section2.dragDrop} />
                </div>
            </SectionCard>

             <SectionCard title={section3.title} verse={section3.verse}>
                 <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">{section3.comparison.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className={`bg-${section3.comparison.dos.color}-50/70 p-4 rounded-xl border border-${section3.comparison.dos.color}-200`}>
                                <div className="flex items-center gap-3 mb-3">
                                    <section3.comparison.dos.icon className={`w-7 h-7 text-${section3.comparison.dos.color}-600 shrink-0`} />
                                    <h4 className={`text-lg font-semibold text-${section3.comparison.dos.color}-800`}>{section3.comparison.dos.title}</h4>
                                </div>
                                <ul className="space-y-2">
                                    {section3.comparison.dos.items.map(item => <li key={item} className="flex items-start gap-2 text-sm text-gray-700"><span className={`text-${section3.comparison.dos.color}-600 mt-1`}>&#10003;</span><span>{item}</span></li>)}
                                </ul>
                            </div>
                             <div className={`bg-${section3.comparison.donts.color}-50/70 p-4 rounded-xl border border-${section3.comparison.donts.color}-200`}>
                                <div className="flex items-center gap-3 mb-3">
                                    <section3.comparison.donts.icon className={`w-7 h-7 text-${section3.comparison.donts.color}-600 shrink-0`} />
                                    <h4 className={`text-lg font-semibold text-${section3.comparison.donts.color}-800`}>{section3.comparison.donts.title}</h4>
                                </div>
                                <ul className="space-y-2">
                                    {section3.comparison.donts.items.map(item => <li key={item} className="flex items-start gap-2 text-sm text-gray-700"><span className={`text-${section3.comparison.donts.color}-600 mt-1`}>&#10007;</span><span>{item}</span></li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50 p-6 rounded-2xl">
                        <div className="w-full h-56 rounded-xl shadow-lg overflow-hidden">
                            <img src={section3.analogy.imageUrl} alt="Analogía del espejo" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{section3.analogy.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{section3.analogy.description}</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">Prueba tu Conocimiento</h3>
                        <StaticTriviaCard question={triviaData} questionNumber={1} />
                    </div>
                 </div>
            </SectionCard>
        </div>
    );
};

export default Chapter1View;
