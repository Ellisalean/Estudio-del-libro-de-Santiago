import { useState } from 'react';
import { LightBulbIcon } from './Icons.tsx';

interface Technique {
    name: string;
    definition: string;
    example: string;
}

interface TechniqueCardProps {
    technique: Technique;
}

const TechniqueCard = ({ technique }: TechniqueCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => setIsFlipped(!isFlipped);
    
    return (
         <div 
            className="w-full h-48 group cursor-pointer [perspective:1000px]"
            tabIndex={0} 
            role="button" 
            aria-pressed={isFlipped}
            onClick={handleFlip}
            onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && handleFlip()}
        >
            <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 shadow-lg flex flex-col items-center justify-center p-4 text-white">
                    <LightBulbIcon className='w-8 h-8 mb-2' />
                    <h3 className="text-xl font-bold text-center">{technique.name}</h3>
                    <p className="text-sm font-light mt-2">(Haz clic para saber más)</p>
                </div>
                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden rounded-2xl rotate-y-180 bg-white shadow-lg p-4 border border-gray-200 flex flex-col justify-center">
                    <h4 className="text-md font-bold text-gray-800 mb-1">{technique.definition}</h4>
                    <blockquote className="text-sm italic text-gray-600 mt-2 p-2 bg-gray-50 rounded-md border-l-2 border-orange-400">
                        "{technique.example}"
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default TechniqueCard;