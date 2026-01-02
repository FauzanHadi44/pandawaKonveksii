import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
    imageSrc: string;
    title: string;
    category: string;
    alternativeMaterialsCount: number;
    onClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    imageSrc,
    title,
    category,
    alternativeMaterialsCount,
    onClick,
}) => {
    return (
        <div
            onClick={onClick}
            className="group cursor-pointer bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative flex flex-col h-full"
        >
            <div className="relative aspect-square w-full bg-gray-100 overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                    <span className="text-[10px] md:text-xs font-bold text-white tracking-wide uppercase">
                        {category}
                    </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="p-4 border-t border-gray-100 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-black transition-colors">
                        {title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                        Tersedia {alternativeMaterialsCount} opsi bahan pilihan.
                    </p>
                </div>
                <div className="mt-3 flex items-center text-xs font-semibold text-black gap-2 group/btn">
                    Lihat Detail Bahan
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </div>
            </div>
        </div>
    );
};
