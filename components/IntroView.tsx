import { useState } from 'react';
import { SANTIAGO_CONTENT } from '../constants.tsx';
import * as Icons from './Icons.tsx';
import AccordionItem from './AccordionItem.tsx';
import QuickFireQA from './QuickFireQA.tsx';

const IntroView = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);
    const [openExtraInfo, setOpenExtraInfo] = useState<number | null>(null);
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
            const match = url.match(/(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
            videoId = (match && match[1].length === 11) ? match[1] : '';
        }
        return videoId;
    };

    const videoId = getYouTubeVideoId(videoUrl);
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    const extraInfo = [
        {
            title: "La 'Epístola de Paja' - El Debate de Lutero",
            content: "Martín Lutero apodó a Santiago la 'epístola de paja' porque sentía que contradecía la justificación 'solo por fe' al enfocarse en las obras. Hoy, se entiende que Pablo (raíz de la salvación: fe) y Santiago (fruto de la salvación: obras) ofrecen perspectivas complementarias de la misma verdad."
        },
        {
            title: "Conexiones con el Sermón del Monte",
            content: "La carta de Santiago contiene más de quince alusiones a las enseñanzas de Jesús en el Sermón del Monte (Mateo 5-7). Esto sugiere que Santiago estaba profundamente familiarizado con las enseñanzas de su hermano y buscaba aplicarlas de manera práctica."
        },
        {
            title: "El Significado de 'Las Doce Tribus en la Dispersión'",
            content: "Esta frase (Santiago 1:1) se refiere a los creyentes judeocristianos que vivían fuera de Palestina. Al usar este término, Santiago los identifica como el 'verdadero Israel', herederos de las promesas de Dios a través de su fe en Jesús como el Mesías."
        }
    ];

    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{title}</h1>
                <p className="text-lg text-gray-500">{objective}</p>
            </div>

            <div className="rounded-2xl shadow-xl overflow-hidden aspect-video bg-gray-800">
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
                        className="w-full h-full relative flex items-center justify-center group cursor-pointer bg-cover bg-center"
                        style={videoId ? { backgroundImage: `url(${thumbnailUrl})` } : {}}
                        onClick={() => { if (videoId) setShowVideo(true); }}
                        role="button"
                        tabIndex={videoId ? 0 : -1}
                        aria-label="Reproducir video introductorio"
                        onKeyDown={(e) => {
                            if (videoId && (e.key === 'Enter' || e.key === ' ')) {
                                setShowVideo(true);
                            }
                        }}
                    >
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center pointer-events-none">
                            <Icons.PlayIcon className='w-20 h-20 text-white/80 group-hover:text-white group-hover:scale-110 transition-transform' />
                            <span className="mt-4 text-xl font-bold tracking-wider uppercase">Ver Video Introductorio</span>
                        </div>
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
             <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Información Adicional</h3>
                {extraInfo.map((item, index) => (
                    <AccordionItem
                        key={item.title}
                        title={item.title}
                        isOpen={openExtraInfo === index}
                        onClick={() => setOpenExtraInfo(openExtraInfo === index ? null : index)}
                    >
                        <p>{item.content}</p>
                    </AccordionItem>
                ))}
            </div>
        </div>
    );
};

export default IntroView;