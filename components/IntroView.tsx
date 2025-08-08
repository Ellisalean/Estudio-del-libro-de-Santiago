import { useState } from 'react';
import { SANTIAGO_CONTENT } from '../constants.tsx';
import * as Icons from './Icons';
import AccordionItem from './AccordionItem';
import Amplifier from './Amplifier';
import QuickFireQA from './QuickFireQA';

const IntroView = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);
    const { title, objective, videoUrl, alternatingSections, relevance, keyData, quickQA } = SANTIAGO_CONTENT.INTRO;

    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{title}</h1>
                <p className="text-lg text-gray-500">{objective}</p>
            </div>
            <div className="bg-gray-800 rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 aspect-video relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="relative z-10 flex flex-col items-center justify-center text-white text-center">
                    <Icons.PlayIcon className='w-20 h-20 text-white/80 group-hover:text-white group-hover:scale-110 transition-transform' />
                    <span className="mt-4 text-xl font-bold tracking-wider uppercase">Ver Video Introductorio</span>
                </a>
            </div>
             <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{relevance.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relevance.points.map(point => (
                        <div key={point.title} className={`p-6 rounded-2xl text-white bg-gradient-to-br ${point.gradient} shadow-lg flex flex-col items-center text-center`}>
                            <point.Icon className="w-10 h-10 mb-3" />
                            <h3 className="font-bold text-xl">{point.title}</h3>
                            <p className="mt-2 text-white/90 text-sm">{point.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="space-y-16">
                {alternatingSections.map((section, index) => (
                    <div key={section.title} className={`group flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{section.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{section.text}</p>
                        </div>
                        <div className="md:w-1/2 w-full h-64 rounded-2xl shadow-lg overflow-hidden">
                             <img src={section.imageUrl} alt={section.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                 <div className="bg-white p-6 rounded-2xl shadow-lg">
                     <h3 className="text-2xl font-bold text-gray-800 mb-4">Datos Clave</h3>
                     {keyData.map((item, index) => (
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
                 <QuickFireQA question={quickQA.question} answer={quickQA.answer} />
            </div>
            <Amplifier topic={title} baseText={objective} />
        </div>
    );
};

export default IntroView;