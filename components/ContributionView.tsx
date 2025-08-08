import { SANTIAGO_CONTENT } from '../constants.tsx';
import * as Icons from './Icons.tsx';

const ContributionView = () => {
    const { title, intro, comparison, keyContributions, relevance } = SANTIAGO_CONTENT.CONTRIBUTION;
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{title}</h1>
                <p className="text-lg text-gray-500 max-w-3xl">{intro}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">{comparison.title}</h2>
                <p className="text-center text-gray-500 max-w-3xl mx-auto mb-8">{comparison.subtitle}</p>
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-4">
                    <div className="flex-1 flex flex-col text-center p-6 bg-blue-50/70 rounded-xl border-2 border-blue-200 shadow-sm">
                        <comparison.pablo.Icon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                        <h3 className="text-2xl font-bold text-blue-800">{comparison.pablo.name}</h3>
                        <p className="font-semibold text-blue-600 mb-4">{comparison.pablo.focus}</p>
                        <blockquote className="flex-grow text-gray-600 italic">"{comparison.pablo.quote}"</blockquote>
                        <cite className="not-italic font-medium text-gray-500 block mt-4">{comparison.pablo.citation}</cite>
                    </div>
                    <div className="flex-shrink-0 flex items-center justify-center my-4 md:my-0">
                        <Icons.PlusCircleIcon className="w-12 h-12 text-gray-400" />
                    </div>
                    <div className="flex-1 flex flex-col text-center p-6 bg-teal-50/70 rounded-xl border-2 border-teal-200 shadow-sm">
                        <comparison.santiago.Icon className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                        <h3 className="text-2xl font-bold text-teal-800">{comparison.santiago.name}</h3>
                        <p className="font-semibold text-teal-600 mb-4">{comparison.santiago.focus}</p>
                        <blockquote className="flex-grow text-gray-600 italic">"{comparison.santiago.quote}"</blockquote>
                        <cite className="not-italic font-medium text-gray-500 block mt-4">{comparison.santiago.citation}</cite>
                    </div>
                </div>
            </div>
            <div>
                 <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contribuciones Clave</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {keyContributions.map(item => (
                        <div key={item.title} className="bg-white p-6 rounded-2xl shadow-lg text-center border-t-4 border-orange-400">
                           <item.Icon className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                           <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                           <p className="text-gray-600 text-sm">{item.content}</p>
                        </div>
                    ))}
                 </div>
            </div>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold mb-4">{relevance.title}</h2>
                <p className="text-gray-300 leading-relaxed mb-6">{relevance.text}</p>
                <blockquote className="p-4 bg-black/20 border-l-4 border-orange-400 italic">
                    <p className="font-medium">"{relevance.quote}"</p>
                </blockquote>
            </div>
        </div>
    );
}

export default ContributionView;