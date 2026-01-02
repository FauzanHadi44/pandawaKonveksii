import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQCardProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

export const FAQCard: React.FC<FAQCardProps> = ({
    question,
    answer,
    isOpen,
    onToggle,
}) => {
    return (
        <div
            className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-gray-50 border-black' : 'bg-white hover:border-gray-300'
                }`}
        >
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
                <span className={`font-bold text-lg ${isOpen ? 'text-black' : 'text-gray-700'}`}>
                    {question}
                </span>
                <span className="ml-4 flex-shrink-0 text-black">
                    {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </span>
            </button>
            <div
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
                    }`}
            >
                <p className="text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                    {answer}
                </p>
            </div>
        </div>
    );
};
