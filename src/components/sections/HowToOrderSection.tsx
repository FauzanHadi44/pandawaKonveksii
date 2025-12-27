"use client";

import React from 'react';
import { MessageSquare, FileText, Settings, Truck, ArrowRight, LucideIcon } from 'lucide-react';
import { orderStepsData } from '@/src/data/orderSteps';

const HowToOrderSection = () => {
    // Icon mapping
    const iconMap: Record<string, LucideIcon> = {
        MessageSquare,
        FileText,
        Settings,
        Truck
    };

    const steps = orderStepsData.map(step => ({
        ...step,
        iconComponent: iconMap[step.icon]
    }));
    return (
        <section id="cara-pesan" className="py-24 bg-white border-b border-gray-300 text-gray-900 font-sans">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left Side - Steps Grid (order-2 on mobile, order-1 on desktop) */}
                    <div className="lg:w-2/3 order-2 lg:order-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {steps.map((step, index) => (
                                <div key={index} className="relative flex flex-col items-start p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300 group">
                                    {/* Icon and Number */}
                                    <div className="relative mb-4">
                                        <div className="w-16 h-16 bg-white rounded-full border border-gray-200 shadow-md flex items-center justify-center group-hover:scale-110 group-hover:border-black transition-all duration-300">
                                            <div className="text-gray-400 group-hover:text-black transition-colors duration-300">
                                                {step.iconComponent && <step.iconComponent className="w-6 h-6" />}
                                            </div>
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                                            {step.id}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Title and CTA (order-1 on mobile, order-2 on desktop) */}
                    <div className="lg:w-1/3 text-center lg:text-left order-1 lg:order-2">
                        <span className="text-gray-500 font-bold text-sm tracking-widest uppercase mb-3 block">
                            Alur Pemesanan
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
                            4 Langkah Mudah Memesan
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Kami buat prosesnya simpel, transparan, dan tanpa ribet.
                        </p>

                        <a
                            href="https://wa.me/6287809446266?text=Halo%20Admin%20Pandawa%20Konveksi%2C%0A%0ASaya%20ingin%20konsultasi%20gratis%20mengenai%3A%0A-%20Jenis%20produk%20yang%20saya%20butuhkan%0A-%20Bahan%20yang%20tersedia%0A-%20Harga%20dan%20MOQ%0A-%20Waktu%20pengerjaan%0A%0ATerima%20kasih!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white font-bold py-4 px-8 rounded-full hover:bg-gray-800 hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
                        >
                            Mulai Konsultasi Gratis
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToOrderSection;