import { useState } from 'react';
import * as Icons from './Icons.tsx';

interface Source {
    id: string;
    text: string;
}

interface Target {
    id: string;
    accepts: string;
    label: string;
    text: string;
}

interface DragDropData {
    title: string;
    instruction: string;
    sources: Source[];
    targets: Target[];
}

interface DragDropProps {
    data: DragDropData;
}

const DragDrop = ({ data }: DragDropProps) => {
    const [droppedItems, setDroppedItems] = useState<{ [key: string]: string | null }>({});
    const [feedback, setFeedback] = useState<{ [key: string]: 'correct' | 'incorrect' | null }>({});
    const [isComplete, setIsComplete] = useState(false);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
        e.dataTransfer.setData("sourceId", id);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, target: Target) => {
        e.preventDefault();
        const sourceId = e.dataTransfer.getData("sourceId");
        
        if (droppedItems[target.id] || Object.values(droppedItems).includes(sourceId)) {
            // Target is occupied or source already dropped
            return;
        }

        const newDroppedItems = { ...droppedItems, [target.id]: sourceId };
        setDroppedItems(newDroppedItems);

        const isCorrect = target.accepts === sourceId;
        const newFeedback: { [key: string]: 'correct' | 'incorrect' | null } = { ...feedback, [target.id]: isCorrect ? 'correct' : 'incorrect' };
        setFeedback(newFeedback);

        // Check for completion
        if (Object.keys(newDroppedItems).length === data.targets.length) {
             const allCorrect = data.targets.every(t => newDroppedItems[t.id] === t.accepts);
             if (allCorrect) {
                setIsComplete(true);
             }
        }
    };

    const getSourceById = (id: string | null) => data.sources.find(s => s.id === id);

    return (
        <div className="bg-gray-50/70 p-6 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 text-center">{data.title}</h3>
            <p className="text-gray-500 text-center text-sm mb-6">{data.instruction}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="flex flex-col items-center gap-4">
                    <h4 className="font-semibold text-gray-700">Fuentes</h4>
                    {data.sources.map(source => {
                        const isDropped = Object.values(droppedItems).includes(source.id);
                        return (
                            <div
                                key={source.id}
                                id={source.id}
                                draggable={!isDropped}
                                onDragStart={(e) => handleDragStart(e, source.id)}
                                className={`w-full text-center p-4 rounded-lg shadow-md transition-all duration-300 ${isDropped ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50' : 'bg-white cursor-grab hover:shadow-xl hover:-translate-y-1'}`}
                            >
                                {source.text}
                            </div>
                        );
                    })}
                </div>

                <div className="flex flex-col items-center gap-4">
                    <h4 className="font-semibold text-gray-700">Resultados</h4>
                    {data.targets.map(target => {
                        const droppedSource = getSourceById(droppedItems[target.id]);
                        const feedbackClass = feedback[target.id] === 'correct' ? 'border-green-500 bg-green-50' : feedback[target.id] === 'incorrect' ? 'border-red-500 bg-red-50' : 'border-dashed border-gray-400';
                        return (
                            <div
                                key={target.id}
                                onDragOver={handleDragOver}
                                onDrop={(e) => handleDrop(e, target)}
                                className={`w-full p-4 rounded-lg border-2 text-center transition-colors duration-300 ${feedbackClass}`}
                                style={{ minHeight: '120px' }}
                            >
                                <p className="font-bold text-sm text-gray-500">{target.label}</p>
                                {droppedSource ? (
                                    <div className={`mt-2 p-2 rounded-md ${feedback[target.id] === 'correct' ? 'bg-green-100' : 'bg-red-100'}`}>
                                        <p className="font-semibold">{droppedSource.text}</p>
                                        <p className="text-sm text-gray-600">{target.text}</p>
                                    </div>
                                ) : (
                                    <p className="mt-2 text-gray-400">Arrastra aquí</p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            {isComplete && (
                <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg flex items-center justify-center gap-3 animate-fade-in">
                    <Icons.CheckCircleIcon className="w-6 h-6" />
                    <p className="font-bold">¡Excelente! Has relacionado correctamente todos los conceptos.</p>
                </div>
            )}
        </div>
    );
};

export default DragDrop;