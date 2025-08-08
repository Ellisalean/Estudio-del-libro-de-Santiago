import { CheckCircleIcon, XCircleIcon } from './Icons.tsx';

interface InfluenceTableProps {
    influences: {
        title: string;
        admired: string[];
        rejected: string[];
    }
}

const InfluenceTable = ({ influences }: InfluenceTableProps) => {
    return (
        <div>
            <h3 className="text-xl font-bold text-gray-700 mb-4 text-center">{influences.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50/70 p-4 rounded-xl border border-green-200">
                    <div className="flex items-center gap-3 mb-3">
                        <CheckCircleIcon className='w-7 h-7 text-green-600 shrink-0' />
                        <h4 className="text-lg font-semibold text-green-800">Ideas que Abrazó</h4>
                    </div>
                    <ul className="space-y-2">
                        {influences.admired.map(item => <li key={item} className="flex items-start gap-2 text-sm text-gray-700"><span className="text-green-600 mt-1">&#10003;</span><span>{item}</span></li>)}
                    </ul>
                </div>
                <div className="bg-red-50/70 p-4 rounded-xl border border-red-200">
                     <div className="flex items-center gap-3 mb-3">
                        <XCircleIcon className='w-7 h-7 text-red-600 shrink-0' />
                        <h4 className="text-lg font-semibold text-red-800">Ideas que Rechazó</h4>
                    </div>
                    <ul className="space-y-2">
                        {influences.rejected.map(item => <li key={item} className="flex items-start gap-2 text-sm text-gray-700"><span className="text-red-600 mt-1">&#10007;</span><span>{item}</span></li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default InfluenceTable;