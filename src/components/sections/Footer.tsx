"use client";

import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-600 pt-20 pb-10 border-t border-gray-200 font-sans">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <div className="mb-6 w-40 h-20 rounded-xl bg-white shadow-lg flex items-center justify-center p-2">
                            <Image
                                src="/image/logo/logo1.png"
                                alt="ANSA Konveksi Logo"
                                width={200}
                                height={200}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-sm leading-relaxed mb-6 text-gray-500">
                            Mitra konveksi terpercaya untuk kebutuhan seragam kerja, event, dan komunitas. Kualitas garmen dengan harga kompetitif.
                        </p>
                        <div className="text-sm bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <p className="font-bold text-black mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Jam Operasional:
                            </p>
                            <p>Senin - Sabtu: 08.00 - 17.00 WIB</p>
                            <p className="text-red-400 mt-1">Minggu: Libur</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-black">Menu Cepat</h3>
                        <ul className="space-y-3 text-sm">
                            {[
                                { name: 'Beranda', href: '#' },
                                { name: 'Produk Kami', href: '#produk' },
                                { name: 'Cara Pemesanan', href: '#cara-pesan' },
                                { name: 'FAQ', href: '#faq' }
                            ].map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="hover:text-black hover:pl-2 transition-all duration-300 flex items-center gap-2 group">
                                        <ArrowRight className="w-3 h-3 text-gray-300 group-hover:text-black transition-colors" />
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-black">Hubungi Kami</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3 group">
                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <a
                                    href="https://maps.app.goo.gl/MKb48AwkMEXvHpQH9?g_st=ic"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 hover:text-black transition-colors cursor-pointer"
                                >
                                    PANDAWA GARMENT TANGERANG<br />
                                    Jl. Ciledug Raya No.7, RT.001/RW.002,<br />
                                    Cipadu, Kec. Larangan,<br />
                                    Kota Tangerang, Banten 15154
                                </a>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span>+62 87809446266 (WA)</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <a href="mailto:masdimclothing@gmail.com" className="hover:text-black transition-colors">
                                    masdimclothing@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-black">Ikuti Kami</h3>
                        <div className="flex gap-4 mb-8">
                            <a href="https://www.instagram.com/pandawakonveksi_?igsh=MTA5dzdtend1bnpyYg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-black hover:border-black hover:text-white transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="mailto:masdimclothing@gmail.com" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-black hover:border-black hover:text-white transition-all duration-300">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="tel:+6287809446266" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-black hover:border-black hover:text-white transition-all duration-300">
                                <Phone className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="text-xs text-gray-400 mb-2 font-semibold uppercase tracking-wider">Butuh Penawaran?</p>
                        <a href="mailto:masdimclothing@gmail.com" className="bg-black text-white text-sm font-bold py-3 px-6 rounded-lg hover:bg-gray-800 hover:shadow-lg transition-all w-full md:w-auto flex items-center justify-center gap-2">
                            Kirim Email
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>
                </div>
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} <span className="text-black font-bold">ANSA Konveksi</span>. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-400 font-medium">
                        <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;