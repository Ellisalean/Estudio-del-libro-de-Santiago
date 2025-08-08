import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons.tsx';
import Tooltip from './Tooltip.tsx';

interface CarouselItem {
    fragment: string;
    citation: string;
    analysis: string;
}

interface HighlightCarouselProps {
    data: {
        title: string;
        items: CarouselItem[];
    }
}

const HighlightCarousel = ({ data }: HighlightCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = data.items;

    const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    const nextSlide = () => setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));

    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">{data.title}</h3>
            <div className="relative w-full rounded-2xl shadow-lg overflow-hidden group bg-gray-50 border border-gray-200">
                <div className="relative w-full overflow-hidden" style={{ height: '16rem' }}>
                    {items.map((item, index) => (
                        <div 
                            key={index}
                            className={`p-6 absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            style={{ transitionProperty: 'opacity' }}
                        >
                            <blockquote className="text-lg italic text-gray-700 leading-relaxed border-l-4 border-orange-400 pl-4 mb-4">
                                <Tooltip text={item.fragment} />
                            </blockquote>
                            <cite className="block text-right not-italic font-semibold text-gray-500 mb-4">{item.citation}</cite>
                            <p className="text-sm text-gray-600">
                                <Tooltip text={item.analysis} />
                            </p>
                        </div>
                    ))}
                </div>
                
                <button onClick={prevSlide} className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 p-2 rounded-full text-gray-800 hover:bg-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20" aria-label="Fragmento anterior"><ChevronLeftIcon /></button>
                <button onClick={nextSlide} className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 p-2 rounded-full text-gray-800 hover:bg-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20" aria-label="Siguiente fragmento"><ChevronRightIcon /></button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {items.map((_, index) => (
                        <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${currentIndex === index ? 'bg-orange-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`} aria-label={`Ir a fragmento ${index + 1}`}></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HighlightCarousel;
