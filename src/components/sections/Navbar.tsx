'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/src/components/ui/button';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-[#F3F3F3] backdrop-blur-xl shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="relative w-16 h-16 rounded-xl bg-black transition-transform duration-300 group-hover:scale-110 overflow-hidden p-2">
                            <div className="w-full h-full rounded-xl flex items-center justify-center">
                                <Image
                                    src="/image/logo.png"
                                    alt="Pandawa Konveksi Logo"
                                    width={60}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <span
                            className={`text-2xl font-black font-gfs-didot transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'
                                }`}
                        >
                            Pandawa Konveksi
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
