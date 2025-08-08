import { useState } from 'react';
import { generateAmplifiedText } from '../services/geminiService';
import * as Icons from './Icons';

interface AmplifierProps {
    topic: string;
    baseText: string;
}

const Amplifier = ({ topic, baseText }: AmplifierProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [amplifiedContent, setAmplifiedContent] = useState<string | null>(null);

    const handleAmplify = async () => {
        setIsLoading(true);
        setError(null);
        setAmplifiedContent(null);

        try {
            const result = await generateAmplifiedText(topic, baseText);
            setAmplifiedContent(result);
        } catch (err: any) {
            setError(err.message || 'Ocurrió un error desconocido.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="amplifier bg-white p-6 rounded-2xl shadow-lg border border-orange-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="mb-4 sm:mb-0">
                    <h3 className="text-xl font-bold text-gray-800">¿Quieres saber más?</h3>
                    <p className="text-gray-500">Usa la IA para ampliar la información sobre este tema.</p>
                </div>
                <button
                    onClick={handleAmplify}
                    disabled={isLoading}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                    <Icons.SparklesIcon />
                    <span>{isLoading ? 'Generando...' : 'Ampliar Información'}</span>
                </button>
            </div>
            <div className="amplified-content mt-6">
                {isLoading && <div className="mt-4 p-4 text-gray-500">Cargando...</div>}
                {error && <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">{error}</div>}
                {amplifiedContent && (
                     <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">Información Ampliada:</h4>
                        <div className="prose prose-orange max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: amplifiedContent.replace(/\n/g, '<br />') }}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Amplifier;
