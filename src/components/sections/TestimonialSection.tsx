"use client";

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '@/src/data/testimonials';

const TestimonialSection = () => {

    return (
        <section className="py-24 bg-white border-b border-gray-300 text-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-gray-500 font-bold text-sm tracking-widest uppercase mb-2 block">
                        Testimoni Klien
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
                        Apa Kata Mereka?
                    </h2>
                    <div className="h-1.5 w-20 bg-black mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonialsData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative group"
                        >
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100 group-hover:text-gray-200 transition-colors" />
                            <div className="flex gap-1 mb-6 text-[#C5A968]">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-8 relative z-10 min-h-[80px]">
                                "{item.content}"
                            </p>
                            <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                                <div className="w-12 h-12 rounded-full bg-black text-white font-bold flex items-center justify-center text-lg shadow-md">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-black text-sm">{item.name}</h4>
                                    <p className="text-xs text-gray-500 font-semibold">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TestimonialSection;