import React from 'react';
import { ChevronDownIcon } from './Icons';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 last:border-b-0">
            <button
                className="w-full flex justify-between items-center py-4 text-left text-gray-800 hover:bg-gray-50/80 focus:outline-none rounded-md"
                aria-expanded={isOpen}
                onClick={onClick}
            >
                <span className="text-md font-semibold">{title}</span>
                <ChevronDownIcon className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                    maxHeight: isOpen ? '1000px' : '0',
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <div className="pb-4 pr-6 text-gray-600">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
