import { SANTIAGO_CONTENT } from '../constants.tsx';
import StaticTriviaCard from './StaticTriviaCard.tsx';

const Trivia = () => {
    const { triviaQuestions } = SANTIAGO_CONTENT.TRIVIA_STATIC;

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-4xl font-extrabold text-gray-800">Trivia sobre Santiago</h1>
                    <p className="text-lg text-gray-500">Pon a prueba tus conocimientos con estas preguntas.</p>
                </div>
            </div>
            <div id="trivia-container" className="space-y-6">
                {triviaQuestions.map((q, index) => (
                    <StaticTriviaCard key={index} question={q} questionNumber={index + 1} />
                ))}
            </div>
        </div>
    );
};

export default Trivia;
