import { useState } from 'react';
import * as Icons from './Icons.tsx';

interface QuickFireQAProps {
    question: string;
    answer: string;
}

const QuickFireQA = ({ question, answer }: QuickFireQAProps) => {
    const [isRevealed, setIsRevealed] = useState(false);
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-teal-100 h-full">
             <div className="flex items-start gap-4">
                <Icons.QuestionMarkCircleIcon className='w-10 h-10 text-teal-500 mt-1 shrink-0' />
                <div>
                    <h3 className="text-lg font-bold text-gray-800">{question}</h3>
                    <div className="mt-4">
                        {!isRevealed ? (
                            <button 
                                onClick={() => setIsRevealed(true)}
                                className="px-5 py-2 bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Revelar Respuesta
                            </button>
                        ) : (
                            <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-400 animate-fade-in">
                                <p className="text-gray-700 font-medium">{answer}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickFireQA;