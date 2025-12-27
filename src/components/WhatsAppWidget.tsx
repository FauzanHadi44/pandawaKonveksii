"use client";

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import Image from 'next/image';

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    const contacts = [
        {
            name: "Admin Pandawa",
            role: "Customer Service",
            phone: "6287809446266",
            message: "Halo, saya ingin bertanya tentang produk Pandawa Konveksi"
        }
    ];

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50">
                {isOpen && (
                    <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl w-80 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
                        <div className="bg-[#25D366] p-4 text-white">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-bold text-lg">Mulai Konsultasi Sekarang</h3>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="hover:bg-white/20 rounded-full p-1 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-sm text-white/90">
                                Hi! Click one of our member below to chat on WhatsApp
                            </p>
                        </div>
                        <div className="p-4 bg-gray-50">
                            <p className="text-sm text-gray-500 mb-4">
                                Chat anda akan dijawab secepat mungkin
                            </p>
                            <div className="space-y-3">
                                {contacts.map((contact, index) => (
                                    <a
                                        key={index}
                                        href={`https://wa.me/${contact.phone}?text=${encodeURIComponent(contact.message)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 bg-white rounded-xl hover:bg-gray-100 transition-all duration-200 border border-gray-200 hover:border-[#25D366] group"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                                            <MessageCircle className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 text-sm">{contact.name}</h4>
                                            <p className="text-xs text-gray-500">{contact.role}</p>
                                        </div>
                                        <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-[#25D366] text-white rounded-full p-4 shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
                >
                    {isOpen ? (
                        <X className="w-7 h-7" />
                    ) : (
                        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
                    )}
                </button>
            </div>
        </>
    );
};

export default WhatsAppWidget;
