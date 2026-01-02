import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
    rating: number;
    content: string;
    name: string;
    role: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
    rating,
    content,
    name,
    role,
}) => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative group h-[400px] flex flex-col">
            <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100 group-hover:text-gray-200 transition-colors" />
            <div className="flex gap-1 mb-6 text-[#C5A968]">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                ))}
            </div>
            <p className="text-gray-600 leading-relaxed mb-auto relative z-10 flex-grow overflow-y-auto">
                "{content}"
            </p>
            <div className="flex items-center gap-4 border-t border-gray-100 pt-6 mt-6">
                <div className="w-12 h-12 rounded-full bg-black text-white font-bold flex items-center justify-center text-lg shadow-md flex-shrink-0">
                    {name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-black text-sm">{name}</h4>
                    <p className="text-xs text-gray-500 font-semibold">{role}</p>
                </div>
            </div>
        </div>
    );
};
