"use client";

import React, { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { faqsData } from '@/src/data/faqs';

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <section id="faq" className="py-24 border-b border-gray-300 text-gray-900">
            <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12 lg:gap-24">
                <div className="md:w-1/3">
                    <span className="text-gray-500 font-bold text-sm tracking-widest uppercase mb-2 block">
                        Tanya Jawab
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 text-black">
                        Hal yang Sering <br /> <span className="text-gray-400">Ditanyakan</span>
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Masih ada pertanyaan yang belum terjawab? Jangan ragu untuk chat langsung dengan tim kami.
                    </p>
                    <a
                        href="https://wa.me/6287809446266?text=Halo%20Admin%20Pandawa%20Konveksi%2C%0A%0ASaya%20memiliki%20beberapa%20pertanyaan%20mengenai%3A%0A-%20Produk%20dan%20layanan%0A-%20Harga%20dan%20pemesanan%0A-%20Proses%20produksi%0A%0AMohon%20informasinya.%20Terima%20kasih!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-black text-white font-bold py-4 px-8 rounded-full hover:bg-gray-800 hover:shadow-lg transition-all duration-300 group"
                    >
                        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Chat Admin Sekarang
                    </a>
                </div>
                <div className="md:w-2/3">
                    <div className="space-y-4">
                        {faqsData.map((faq, index) => (
                            <div
                                key={index}
                                className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-gray-50 border-black' : 'bg-white hover:border-gray-300'
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                >
                                    <span className={`font-bold text-lg ${openIndex === index ? 'text-black' : 'text-gray-700'}`}>
                                        {faq.question}
                                    </span>
                                    <span className="ml-4 flex-shrink-0 text-black">
                                        {openIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                                    </span>
                                </button>
                                <div
                                    className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className="text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;