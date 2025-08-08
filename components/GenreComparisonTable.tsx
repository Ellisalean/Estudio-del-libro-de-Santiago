interface ComparisonData {
    title: string;
    headers: string[];
    rows: string[][];
}

interface GenreComparisonTableProps {
    data: ComparisonData;
}

const GenreComparisonTable = ({ data }: GenreComparisonTableProps) => {
    return (
         <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">{data.title}</h3>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {data.headers.map(header => <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{header}</th>)}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-orange-50/50 transition-colors">
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className={`px-6 py-4 whitespace-nowrap text-sm ${cellIndex === 0 ? 'font-medium text-gray-900' : 'text-gray-600'} ${cellIndex === 1 ? 'bg-orange-50 font-semibold' : ''}`}>
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GenreComparisonTable;
