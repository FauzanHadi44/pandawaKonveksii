import React from 'react';
import Image from 'next/image';
import { Building2 } from 'lucide-react';

interface ClientCardProps {
    logo: string;
    name: string;
}

export const ClientCard: React.FC<ClientCardProps> = ({ logo, name }) => {
    return (
        <div className="group relative bg-gray-50 hover:bg-white border border-gray-200 hover:border-black rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Building2 className="w-8 h-8 text-black" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                {/* Logo */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center bg-gray-100 rounded-xl p-3 border border-gray-200">
                    <Image
                        src={logo}
                        alt={`${name} Logo`}
                        width={112}
                        height={112}
                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-600 group-hover:text-black transition-colors duration-300 text-center">
                    {name}
                </h3>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
        </div>
    );
};
