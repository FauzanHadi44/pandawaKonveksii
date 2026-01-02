"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { productsData, Product } from '@/src/data/products';
import { ProductCard } from '@/src/components/ui/ProductCard';

const OurProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };
  return (
    <section id="produk" className="py-24 bg-[#F3F3F3] border-b border-gray-300 text-gray-900 font-sans">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-gray-500 text-sm font-bold tracking-widest uppercase">
            Produk Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4 text-black">
            Solusi Konveksi Terlengkap
          </h2>
          <div className="h-1.5 w-24 bg-black mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 leading-relaxed">
            Dari seragam kantor hingga kebutuhan event, kami menyediakan berbagai opsi bahan berkualitas
            yang dapat disesuaikan dengan budget dan kebutuhan Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              imageSrc={product.imageSrc}
              title={product.title}
              category={product.category}
              alternativeMaterialsCount={product.alternativeMaterials.length}
              onClick={() => handleOpenModal(product)}
            />
          ))}
        </div>
      </div>
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-20"
            >
              <X className="w-5 h-5 text-black" />
            </button>
            <div className="relative w-full md:w-5/12 h-64 md:h-auto bg-white flex items-center justify-center p-8">
              <div className="relative w-full h-full">
                <Image
                  src={selectedProduct.imageSrc}
                  alt={selectedProduct.title}
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>
            <div className="w-full md:w-7/12 p-6 md:p-10 overflow-y-auto bg-white">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Spesifikasi Material
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-1 mb-6">
                {selectedProduct.title}
              </h3>
              <div className="space-y-4">
                {selectedProduct.alternativeMaterials.map((material, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-black transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">{material.name}</h4>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        {material.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href={`https://wa.me/6287809446266?text=Halo%20Admin%20Pandawa%20Konveksi%2C%0A%0ASaya%20tertarik%20dengan%20produk%20*${encodeURIComponent(selectedProduct.title)}*%20dan%20ingin%20konsultasi%20lebih%20lanjut%20mengenai%3A%0A-%20Pilihan%20bahan%20yang%20tersedia%0A-%20Harga%20dan%20MOQ%0A-%20Waktu%20pengerjaan%0A%0ATerima%20kasih!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 hover:shadow-lg transition-all flex justify-center items-center gap-2"
                >
                  Konsultasi Produk Ini
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurProductsSection;