import React from 'react';

interface TooltipProps {
  text: string;
}

const Tooltip = ({ text }: TooltipProps) => {
  // Regex to capture <Tooltip>, <strong> and <mark> tags
  const regex = /(<Tooltip text='([^']+)'>([^<]+)<\/Tooltip>|<strong>([^<]+)<\/strong>|<mark>([^<]+)<\/mark>)/g;
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        if (!part) return null;

        // Check for <Tooltip>
        let match = part.match(/<Tooltip text='([^']+)'>([^<]+)<\/Tooltip>/);
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

        // Check for <strong>
        match = part.match(/<strong>([^<]+)<\/strong>/);
        if (match) {
          return <strong key={index}>{match[1]}</strong>;
        }

        // Check for <mark>
        match = part.match(/<mark>([^<]+)<\/mark>/);
        if (match) {
          return <mark key={index} className="bg-orange-200 text-orange-800 font-bold px-1 rounded">{match[1]}</mark>;
        }

        // It's a plain text part
        return part;
      })}
    </>
  );
};

export default Tooltip;
