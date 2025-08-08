import { useState } from 'react';
import * as Icons from './Icons';
import { generateTriviaQuestion } from '../services/geminiService';
import { TriviaQuestion } from '../types';

const Trivia = () => {
    const [trivia, setTrivia] = useState<TriviaQuestion | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    const handleNewQuestion = async () => {
        setIsLoading(true);
        setError(null);
        setTrivia(null);
        setSelectedAnswer(null);
        try {
            const question = await generateTriviaQuestion();
            setTrivia(question);
        } catch (err: any) {
            setError(err.message || 'Ocurrió un error desconocido.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleAnswerClick = (index: number) => {
        setSelectedAnswer(index);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-4xl font-extrabold text-gray-800">Trivia IA</h1>
                    <p className="text-lg text-gray-500">Pon a prueba tus conocimientos sobre el Libro de Santiago.</p>
                </div>
                <button 
                    onClick={handleNewQuestion}
                    disabled={isLoading}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                    <Icons.SparklesIcon />
                    <span>{isLoading ? 'Generando...' : 'Nueva Pregunta'}</span>
                </button>
            </div>
            <div id="trivia-container">
                {isLoading && <div className="text-center p-10"><p className="text-gray-600">Generando trivia con IA...</p></div>}
                {error && <div className="p-4 bg-red-100 text-red-700 rounded-lg">{error}</div>}
                {!isLoading && !error && !trivia && (
                     <div className="text-center p-10 bg-white rounded-2xl shadow-lg">
                        <p className="text-gray-600">Haz clic en "Nueva Pregunta" para comenzar la trivia.</p>
                    </div>
                )}
                {trivia && (
                    <div className="bg-white p-8 rounded-2xl shadow-2xl transition-all duration-500 animate-fade-in">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">{trivia.question}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {trivia.options.map((option, index) => {
                                const isSelected = selectedAnswer === index;
                                const isCorrect = trivia.answerIndex === index;
                                let buttonClass = 'bg-white hover:bg-orange-50';
                                if (selectedAnswer !== null) {
                                    if(isCorrect) {
                                        buttonClass = 'bg-green-200 border-green-400';
                                    } else if(isSelected) {
                                        buttonClass = 'bg-red-200 border-red-400';
                                    } else {
                                        buttonClass = 'bg-gray-100 text-gray-500';
                                    }
                                }
                                return (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerClick(index)}
                                        disabled={selectedAnswer !== null}
                                        className={`p-4 rounded-lg border-2 text-left font-medium transition-all duration-300 ${buttonClass}`}
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                        {selectedAnswer !== null && (
                            <div className="mt-6 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400 animate-fade-in">
                                <h3 className="font-bold text-orange-800">Explicación:</h3>
                                <p className="text-gray-700 mt-1">{trivia.explanation}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Trivia;
