"use client";

import React from 'react';
import { Building2, Briefcase } from 'lucide-react';

const ClientSection = () => {
    const clients = [
        "Pertamina",
        "Bank BRI",
        "Telkom Indonesia",
        "Shopee",
    ];

    return (
        <section className="py-20 bg-white border-b border-gray-200">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full mb-4">
                        <Briefcase className="w-4 h-4 text-black" />
                        <span className="text-gray-700 font-bold text-sm tracking-wider uppercase">
                            Dipercaya Oleh
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
                        Menjadi Pilihan Utama <br />
                        <span className="text-gray-500">Berbagai Perusahaan & Instansi</span>
                    </h2>
                    <div className="h-1 w-20 bg-black mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-50 hover:bg-white border border-gray-200 hover:border-black rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Building2 className="w-8 h-8 text-black" />
                            </div>

                            {/* Client Name */}
                            <div className="relative z-10">
                                <h3 className="text-lg md:text-xl font-bold text-gray-400 group-hover:text-black transition-colors duration-300 text-center">
                                    {client}
                                </h3>
                            </div>

                            {/* Bottom Accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom Text */}
                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm">
                        Dan masih banyak lagi perusahaan & organisasi yang mempercayai kami
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ClientSection;