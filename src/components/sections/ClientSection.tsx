"use client";

import React from 'react';
import { Briefcase } from 'lucide-react';
import { clients } from '@/src/data/clients';
import { ClientCard } from '@/src/components/ui/ClientCard';

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
                        <ClientCard key={client.id} logo={client.logo} name={client.name} />
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