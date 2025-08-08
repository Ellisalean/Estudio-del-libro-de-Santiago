import { SANTIAGO_CONTENT } from '../constants.tsx';

const PurposeView = () => {
    const { title, objective, themes, focus } = SANTIAGO_CONTENT.PURPOSE;
    return (
        <div>
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4 border-b-2 border-orange-200 pb-2">{title}</h1>
                <div className="text-gray-600 space-y-4 leading-relaxed"><p>{objective}</p></div>
            </div>
             <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Temas Clave</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
               {themes.map(theme => (
                   <div key={theme.title} className={`p-6 rounded-2xl text-white bg-gradient-to-br ${theme.gradient} shadow-lg flex flex-col`}>
                        <div className="flex items-center gap-4 mb-2">
                            <theme.Icon className="w-8 h-8" />
                            <h3 className="font-bold text-xl flex-grow">{theme.title}</h3>
                        </div>
                       <p className="mt-2 text-white/90">{theme.content}</p>
                   </div>
               ))}
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-orange-200 pb-2">{focus.title}</h2>
                <div className="text-gray-600 space-y-4 leading-relaxed"><p>{focus.content}</p></div>
            </div>
        </div>
    );
};

export default PurposeView;