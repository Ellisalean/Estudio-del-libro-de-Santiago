import { useState } from 'react';
import { IconComponent } from '../types.ts';

interface CardSideProps {
    icon?: IconComponent;
    title: string;
    subtitle?: string;
    content?: string;
}

interface FlipCardProps {
    front: CardSideProps;
    back: CardSideProps;
}

const FlipCard = ({ front, back }: FlipCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => setIsFlipped(!isFlipped);
    
    return (
        <div 
            className="w-full h-56 group cursor-pointer [perspective:1000px]"
            tabIndex={0} 
            role="button" 
            aria-pressed={isFlipped}
            onClick={handleFlip}
            onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && handleFlip()}
        >
            <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 shadow-lg flex flex-col items-center justify-center p-4 text-white">
                    {front.icon && <front.icon className='w-10 h-10 mb-2' />}
                    <h3 className="text-2xl font-bold text-center">{front.title}</h3>
                    {front.subtitle && <p className="text-md font-mono mt-1">{front.subtitle}</p>}
                    <p className="text-sm font-light mt-4">(Haz clic para saber más)</p>
                </div>
                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden rounded-2xl rotate-y-180 bg-white shadow-lg p-6 border border-gray-200 flex flex-col justify-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{back.title}</h4>
                    {back.content && <p className="text-gray-600">{back.content}</p>}
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
