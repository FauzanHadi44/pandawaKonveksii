'use client';

import { Button } from '@/src/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
            style={{
                backgroundImage: 'url(/image/hero.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                <h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
                >
                    Solusi Konveksi Terbaik & Terpercaya
                </h1>

                {/* Subjudul */}
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                    Spesialis pembuatan kemeja, jaket, dan seragam dengan standar kualitas garmen. Pengerjaan tepat waktu, harga kompetitif, dan bergaransi.
                </p>

                {/* Button */}
                <div className="pt-4">
                    <Button
                        asChild
                        size="lg"
                        className="px-10 py-6 text-xl rounded-full bg-white border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                        <Link href="/kontak">
                            Hubungi Kami
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
