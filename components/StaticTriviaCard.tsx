import { useState } from 'react';
import { TriviaQuestion } from '../types.ts';

interface StaticTriviaCardProps {
    question: TriviaQuestion;
    questionNumber: number;
}

const StaticTriviaCard = ({ question, questionNumber }: StaticTriviaCardProps) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    const handleAnswerClick = (index: number) => {
        if (selectedAnswer === null) {
            setSelectedAnswer(index);
        }
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-500 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-6"><span className="font-bold text-orange-500">{questionNumber}.</span> {question.question}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = question.answerIndex === index;
                    let buttonClass = 'bg-white hover:bg-orange-50 border-gray-300';
                    if (selectedAnswer !== null) {
                        if (isCorrect) {
                            buttonClass = 'bg-green-100 border-green-400 ring-2 ring-green-300';
                        } else if (isSelected) {
                            buttonClass = 'bg-red-100 border-red-400 ring-2 ring-red-300';
                        } else {
                            buttonClass = 'bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed';
                        }
                    }
                    return (
                        <button
                            key={index}
                            onClick={() => handleAnswerClick(index)}
                            disabled={selectedAnswer !== null}
                            className={`p-4 rounded-lg border-2 text-left font-medium transition-all duration-300 disabled:cursor-not-allowed ${buttonClass}`}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>
            {selectedAnswer !== null && (
                <div className="mt-6 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400 animate-fade-in">
                    <h3 className="font-bold text-orange-800">Explicación:</h3>
                    <p className="text-gray-700 mt-1">{question.explanation}</p>
                </div>
            )}
        </div>
    );
};

export default StaticTriviaCard;
