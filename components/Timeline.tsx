import { IconComponent } from '../types';

interface TimelineItem {
    year: string;
    event: string;
    icon: IconComponent;
}

interface TimelineProps {
    items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
    return (
        <div className="relative border-l-2 border-orange-200 pl-6 space-y-10">
            {items.map((item, index) => (
                <div key={index} className="relative flex items-start">
                    <div className="absolute -left-[38px] top-1 flex items-center justify-center w-8 h-8 bg-orange-100 rounded-full ring-4 ring-white">
                         <item.icon className='w-5 h-5 text-orange-600' />
                    </div>
                    <div className="ml-4">
                        <p className="font-bold text-orange-700 text-md">{item.year}</p>
                        <p className="text-gray-600 text-sm">{item.event}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
