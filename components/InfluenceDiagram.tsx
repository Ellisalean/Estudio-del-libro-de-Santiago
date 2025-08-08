import { ArrowsRightLeftIcon, PuzzlePieceIcon } from './Icons';

interface InfluenceDiagramProps {
    influencedBy: {
        title: string;
        items: string[];
    };
    legacy: {
        title: string;
        items: string[];
    };
}

const InfluenceDiagram = ({ influencedBy, legacy }: InfluenceDiagramProps) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            <div className="w-full p-6 rounded-2xl border border-blue-200">
                <h3 className="text-xl font-bold mb-4 text-center text-blue-800">{influencedBy.title}</h3>
                <ul className="space-y-3">
                    {influencedBy.items.map(item => (
                        <li key={item} className="flex items-center gap-3 p-3 bg-white/60 rounded-lg shadow-sm">
                            <PuzzlePieceIcon className='w-5 h-5 shrink-0 text-blue-600' />
                            <span className="text-gray-700 text-sm font-medium">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-16 h-16 shrink-0 bg-gray-100 rounded-full flex items-center justify-center mx-4 my-4 md:my-0 shadow-inner">
                <ArrowsRightLeftIcon className='w-8 h-8 text-gray-500' />
            </div>
             <div className="w-full p-6 rounded-2xl border border-teal-200">
                <h3 className="text-xl font-bold mb-4 text-center text-teal-800">{legacy.title}</h3>
                <ul className="space-y-3">
                    {legacy.items.map(item => (
                        <li key={item} className="flex items-center gap-3 p-3 bg-white/60 rounded-lg shadow-sm">
                            <PuzzlePieceIcon className='w-5 h-5 shrink-0 text-teal-600' />
                            <span className="text-gray-700 text-sm font-medium">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InfluenceDiagram;
