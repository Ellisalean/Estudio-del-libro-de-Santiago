import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface CarouselItem {
    imageUrl: string;
    caption: string;
}

interface CarouselProps {
    items: CarouselItem[];
}

const Carousel = ({ items }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === items.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };
    
    return (
        <div className="relative w-full h-64 rounded-2xl shadow-lg overflow-hidden group">
            <div className="w-full h-full flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {items.map((item) => (
                    <div key={item.imageUrl} className="w-full h-full shrink-0 relative">
                        <img src={item.imageUrl} alt={item.caption} className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                            <p className="text-white text-sm font-semibold">{item.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/50 p-2 rounded-full text-gray-800 hover:bg-white transition-all opacity-0 group-hover:opacity-100" aria-label="Previous image"><ChevronLeftIcon /></button>
            <button onClick={nextSlide} className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/50 p-2 rounded-full text-gray-800 hover:bg-white transition-all opacity-0 group-hover:opacity-100" aria-label="Next image"><ChevronRightIcon /></button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {items.map((_, index) => (
                    <button key={index} onClick={() => goToSlide(index)} className={`w-2 h-2 rounded-full transition-all cursor-pointer ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`} aria-label={`Go to slide ${index + 1}`}></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
