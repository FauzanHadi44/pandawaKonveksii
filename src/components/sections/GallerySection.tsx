"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Plus } from 'lucide-react';
import { galleryData, GalleryItem } from '@/src/data/gallery';
import { GalleryCard } from '@/src/components/ui/GalleryCard';

const GallerySection = () => {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
    const [visibleCount, setVisibleCount] = useState<number>(6);
    const visibleItems = galleryData.slice(0, visibleCount);
    const hasMore = visibleCount < galleryData.length;
    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    return (
        <section className="py-24 border-b border-gray-300 font-sans">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <span className="text-gray-400 font-bold text-sm tracking-widest uppercase mb-2 block">
                        Galeri Produksi
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
                        Showcase & Hasil Jadi
                    </h2>
                    <div className="h-1.5 w-24 bg-black mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-500 leading-relaxed">
                        Intip kualitas jahitan dan detail sablon/bordir dari ratusan proyek yang telah kami selesaikan.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleItems.map((item) => (
                        <GalleryCard
                            key={item.id}
                            type={item.type}
                            src={item.src}
                            alt={item.alt}
                            category={item.category}
                            onClick={() => setSelectedItem(item)}
                        />
                    ))}

                </div>
                {hasMore && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={handleLoadMore}
                            className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-gray-300 rounded-full text-sm font-bold text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                        >
                            Lihat Lebih Banyak
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                )}
                {selectedItem && (
                    <div
                        className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300"
                        onClick={() => setSelectedItem(null)}
                    >
                        <button
                            className="absolute top-6 right-6 z-50 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                            onClick={() => setSelectedItem(null)}
                        >
                            <X className="w-8 h-8 text-white" />
                        </button>
                        <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                            {selectedItem.type === 'video' ? (
                                <video controls autoPlay playsInline className="w-full h-full object-contain bg-black rounded-lg">
                                    <source src={selectedItem.src} type="video/mp4" />
                                    <source src={selectedItem.src} type="video/quicktime" />
                                </video>
                            ) : (
                                <div className="relative w-full h-full">
                                    <Image src={selectedItem.src} alt={selectedItem.alt} fill className="object-contain" />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default GallerySection;