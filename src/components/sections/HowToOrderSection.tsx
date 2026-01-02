"use client";

import React from 'react';
import { MessageSquare, FileText, Settings, Truck, ArrowRight, LucideIcon } from 'lucide-react';
import { orderStepsData } from '@/src/data/orderSteps';
import { OrderStepCard } from '@/src/components/ui/OrderStepCard';

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
                    <div className="lg:w-2/3 order-2 lg:order-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {steps.map((step, index) => (
                                <OrderStepCard
                                    key={index}
                                    id={step.id}
                                    icon={step.iconComponent}
                                    title={step.title}
                                    description={step.description}
                                />
                            ))}
                        </div>
                    </div>
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