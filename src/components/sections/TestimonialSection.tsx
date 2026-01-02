"use client";

import React from 'react';
import { testimonialsData } from '@/src/data/testimonials';
import { TestimonialCard } from '@/src/components/ui/TestimonialCard';

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
                        <TestimonialCard
                            key={item.id}
                            rating={item.rating}
                            content={item.content}
                            name={item.name}
                            role={item.role}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;