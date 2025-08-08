import { SANTIAGO_CONTENT } from '../constants.tsx';

const StructureView = () => {
    const { title, objective, thematic, chiastic } = SANTIAGO_CONTENT.STRUCTURE;
    const chiasticLevelStyles = [
        { bg: 'bg-teal-100/50', text: 'text-teal-800' },
        { bg: 'bg-teal-200/50', text: 'text-teal-800' },
        { bg: 'bg-teal-300/60 font-bold', text: 'text-teal-900' }
    ];

    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{title}</h1>
                <p className="text-lg text-gray-500">{objective}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{thematic.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{thematic.description}</p>
                    <div className="relative border-l-2 border-orange-200 ml-4 pl-8 space-y-6">
                        {thematic.sections.map(section => (
                            <div key={section.ref} className="relative">
                                <div className="absolute -left-[42px] top-1.5 w-4 h-4 bg-orange-200 rounded-full border-4 border-white ring-2 ring-orange-200"></div>
                                <span className="font-mono text-sm bg-orange-100 text-orange-800 font-semibold py-1 px-2 rounded-md">{section.ref}</span>
                                <p className="mt-1 text-gray-700 font-medium">{section.topic}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{chiastic.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{chiastic.description}</p>
                    <div className="space-y-2 p-4 bg-gray-50/70 rounded-lg border border-gray-200">
                        {chiastic.diagram.map(item => (
                            <div key={item.label} className={`p-3 rounded-lg transition-all duration-300 ${chiasticLevelStyles[item.level].bg}`} style={{ marginLeft: `${item.level * 2}rem` }}>
                                <div className="flex items-baseline gap-3">
                                    <span className={`font-bold ${chiasticLevelStyles[item.level].text} w-6 shrink-0`}>{item.label}</span>
                                    <div className="flex-grow">
                                        <span className={`font-medium ${chiasticLevelStyles[item.level].text}`}>{item.topic}</span>
                                        <span className={`block text-xs font-mono opacity-80 ${chiasticLevelStyles[item.level].text}`}>{item.ref}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StructureView;