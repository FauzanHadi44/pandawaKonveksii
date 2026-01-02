import React from 'react';
import { LucideIcon } from 'lucide-react';

interface OrderStepCardProps {
    id: string | number;
    icon: LucideIcon;
    title: string;
    description: string;
}

export const OrderStepCard: React.FC<OrderStepCardProps> = ({
    id,
    icon: Icon,
    title,
    description,
}) => {
    return (
        <div className="relative flex flex-col items-start p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300 group">
            <div className="relative mb-4">
                <div className="w-16 h-16 bg-white rounded-full border border-gray-200 shadow-md flex items-center justify-center group-hover:scale-110 group-hover:border-black transition-all duration-300">
                    <div className="text-gray-400 group-hover:text-black transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                    </div>
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                    {id}
                </div>
            </div>
            <h3 className="text-lg font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                {title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
};
