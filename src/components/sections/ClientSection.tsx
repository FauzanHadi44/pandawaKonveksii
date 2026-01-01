"use client";

import React from 'react';
import Image from 'next/image';
import { Building2, Briefcase } from 'lucide-react';
import { clients } from '@/src/data/clients';

const ClientSection = () => {
    return (
        <section className="py-20 bg-white border-b border-gray-200">
            <div className="container mx-auto px-6">
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
                    {clients.map((client) => (
                        <div
                            key={client.id}
                            className="group relative bg-gray-50 hover:bg-white border border-gray-200 hover:border-black rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Building2 className="w-8 h-8 text-black" />
                            </div>
                            <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                                {/* Logo */}
                                <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center bg-gray-100 rounded-xl p-3 border border-gray-200">
                                    <Image
                                        src={client.logo}
                                        alt={`${client.name} Logo`}
                                        width={112}
                                        height={112}
                                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                                <h3 className="text-sm md:text-base font-bold text-gray-600 group-hover:text-black transition-colors duration-300 text-center">
                                    {client.name}
                                </h3>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
                        </div>
                    ))}
                </div>
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