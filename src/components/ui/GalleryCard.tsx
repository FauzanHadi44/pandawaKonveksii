import React from 'react';
import Image from 'next/image';

interface GalleryCardProps {
    type: 'image' | 'video';
    src: string;
    alt: string;
    category: string;
    onClick?: () => void;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({
    type,
    src,
    alt,
    category,
    onClick,
}) => {
    return (
        <div
            className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 cursor-pointer"
            onClick={onClick}
        >
            <div className="relative w-full h-full">
                {type === 'video' ? (
                    <video
                        src={src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-gray-300 text-xs font-bold uppercase mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {category}
                </span>
                <h4 className="text-white font-bold text-lg leading-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {alt}
                </h4>
            </div>
        </div>
    );
};
