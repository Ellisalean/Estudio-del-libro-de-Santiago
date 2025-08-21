import { useState } from 'react';
import { SANTIAGO_CONTENT } from '../constants.tsx';
import { useState } from 'react';
import { SANTIAGO_CONTENT } from '../constants.tsx';
import * as Icons from './Icons.tsx';
import AccordionItem from './AccordionItem.tsx';
import Amplifier from './Amplifier.tsx';
import QuickFireQA from './QuickFireQA.tsx';

const IntroView = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);
    const [showVideo, setShowVideo] = useState(false);
    const { title, objective, videoUrl, alternatingSections, relevance, keyData, quickQA } = SANTIAGO_CONTENT.INTRO;

    const getYouTubeVideoId = (url: string) => {
        let videoId = '';
        try {
            const urlObj = new URL(url);
            if (urlObj.hostname === 'youtu.be') {
                videoId = urlObj.pathname.slice(1);
            } else if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
                videoId = urlObj.searchParams.get('v') || urlObj.pathname.split('/embed/')[1] || '';
            }
        } catch (error) {
            console.error("Invalid YouTube URL", error);
            // Fallback for simple cases if URL object fails
            const match = url.match(/(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
            videoId = (match && match[1].length === 11) ? match[1] : '';
        }
        return videoId;
    };

    const videoId = getYouTubeVideoId(videoUrl);
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{title}</h1>
                <p className="text-lg text-gray-500">{objective}</p>
            </div>

            <div className="rounded-2xl shadow-xl overflow-hidden aspect-video">
                {showVideo && videoId ? (
                    <iframe
                        src={embedUrl}
                        title="Video Introductorio de Santiago"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                ) : (
                    <div 
                        className="w-full h-full bg-gray-800 flex flex-col items-center justify-center p-8 relative group bg-cover bg-center"
                        style={{ backgroundImage: videoId ? `url(${thumbnailUrl})` : 'none' }}
                    >
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                        <button 
                            onClick={() => setShowVideo(true)}
                            className="relative z-10 flex flex-col items-center justify-center text-white text-center"
                            aria-label="Reproducir video introductorio"
                            disabled={!videoId}
                        >
                            <Icons.PlayIcon className='w-20 h-20 text-white/80 group-hover:text-white group-hover:scale-110 transition-transform' />
                            <span className="mt-4 text-xl font-bold tracking-wider uppercase">Ver Video Introductorio</span>
                        </button>
                    </div>
                )}
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