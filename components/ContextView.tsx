import { SANTIAGO_CONTENT } from '../constants.tsx';
import * as Icons from './Icons';
import InfluenceTable from './InfluenceTable';
import QuickFireQA from './QuickFireQA';
import Tooltip from './Tooltip';

const ContextView = () => {
    const { title, historical, cultural, controversy, engagement } = SANTIAGO_CONTENT.CONTEXT;
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{title}</h1>
                <p className="text-lg text-gray-500">Un vistazo al mundo social, cultural y religioso que dio forma a la epístola.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{historical.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{historical.text}</p>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg group h-96">
                    <img src={historical.map.imageUrl} alt={historical.map.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50">
                        <div className="relative w-full h-full">
                            <h3 className="absolute bottom-2 right-2 text-base font-bold text-white text-right px-2 py-1 bg-black/40 rounded-lg">{historical.map.title}</h3>
                            {historical.map.points.map(point => (
                                 <div key={point.name} className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ top: point.top, left: point.left }}>
                                    <div className="relative group/pin flex flex-col items-center text-white cursor-pointer">
                                        <Icons.MapPinIcon className='w-8 h-8 text-orange-400 drop-shadow-lg group-hover/pin:scale-110 transition-transform' />
                                        <span className="font-bold mt-1" style={{textShadow: '0 1px 4px rgba(0,0,0,0.8)'}}>{point.name}</span>
                                        <div className="absolute bottom-full mb-2 w-max max-w-xs p-2 text-sm bg-gray-800 text-white rounded-md opacity-0 group-hover/pin:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">{point.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
                 <h2 className="text-2xl font-bold text-gray-800 mb-2">{cultural.title}</h2>
                 <p className="text-gray-600 leading-relaxed mb-6 max-w-4xl">{cultural.text}</p>
                 <InfluenceTable influences={cultural.influences} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{controversy.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">{controversy.text}</p>
                    <blockquote className="p-4 bg-orange-50 border-l-4 border-orange-400 italic">
                        <div className="flex items-start gap-3">
                            <Icons.QuoteIcon className='w-5 h-5 text-orange-500 mt-1 shrink-0' />
                            <p className="text-gray-700">"<Tooltip text={controversy.quote} />"</p>
                        </div>
                    </blockquote>
                </div>
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100">
                        <h3 className="text-xl font-bold text-green-800 mb-2">{engagement.relevance.title}</h3>
                        <p className="text-gray-600 text-sm">{engagement.relevance.text}</p>
                    </div>
                    <QuickFireQA question={engagement.quiz.question} answer={engagement.quiz.answer} />
                </div>
            </div>
        </div>
    );
};

export default ContextView;