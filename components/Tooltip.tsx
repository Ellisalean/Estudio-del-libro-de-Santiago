interface TooltipProps {
    text: string;
}

const Tooltip = ({ text }: TooltipProps) => {
    const parts = text.split(/(<Tooltip text='[^']+'>[^<]+<\/Tooltip>)/g);

    return (
        <>
            {parts.map((part, index) => {
                const match = part.match(/<Tooltip text='([^']+)'>([^<]+)<\/Tooltip>/);
                if (match) {
                    const tooltipText = match[1];
                    const term = match[2];
                    return (
                        <span key={index} className="relative group font-semibold text-teal-600 cursor-pointer border-b border-dashed border-teal-500">
                            {term}
                            <span className="absolute bottom-full mb-2 w-max max-w-xs p-2 text-sm bg-gray-800 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                                {tooltipText}
                            </span>
                        </span>
                    );
                }
                return part;
            })}
        </>
    );
};

export default Tooltip;
