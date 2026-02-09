'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { Button } from '@/src/components/ui/button';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/50'
                : 'bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4">
                <div className="flex items-center justify-between h-16 lg:h-18">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group relative z-10">
                        <div className="relative transition-all duration-500 group-hover:scale-105">
                            <Image
                                src="/image/logo/logo02.png"
                                alt="ANSA Konveksi Logo"
                                width={140}
                                height={50}
                                className={`object-contain transition-all duration-500 ${isScrolled ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                                    }`}
                                priority
                            />
                            <Image
                                src="/image/logo/logo01.png"
                                alt="ANSA Konveksi Logo"
                                width={140}
                                height={50}
                                className={`object-contain absolute top-0 left-0 transition-all duration-500 ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                    }`}
                                priority
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
