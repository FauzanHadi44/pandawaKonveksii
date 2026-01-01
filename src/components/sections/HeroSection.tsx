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
            <div className="relative z-10 max-w-5xl mx-auto text-center px-4 space-y-6 md:space-y-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-snug md:leading-tight drop-shadow-sm">
                    <span className="relative inline-block whitespace-nowrap mr-2 sm:mr-3">
                        <span className="relative z-10">Garansi 100%</span>
                        <div className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-[#C5A968] -rotate-1 transform -skew-x-6 opacity-90"></div>
                    </span>
                    <br className="hidden md:block" />
                    Apabila Hasil Tidak Sesuai
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-medium">
                    Spesialis pembuatan kemeja, jaket, dan seragam dengan standar kualitas garmen. Pengerjaan tepat waktu, harga kompetitif, dan bergaransi.
                </p>
                <div className="pt-2 md:pt-4">
                    <Button
                        asChild
                        size="lg"
                        className="px-8 py-6 text-lg rounded-full bg-white border-2 border-white text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        <a
                            href="https://wa.me/6287809446266?text=Halo%20Pandawa%20Konveksi,%20saya%20tertarik%20untuk%20konsultasi%20dan%20memesan%20produk%20konveksi.%20Mohon%20informasi%20lebih%20lanjut."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Hubungi Kami
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
