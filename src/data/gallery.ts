// src/data/gallery.ts

export interface GalleryItem {
    id: number;
    category: string;
    type: 'image' | 'video';
    src: string;
    thumbnail?: string;
    alt: string;
}

export const galleryData: GalleryItem[] = [
    {
        id: 1,
        category: 'T-Shirt Sablon',
        type: 'image',
        src: '/image/gallery/baju/1.jpeg',
        alt: 'Tangerang Hawks',
    },
    {
        id: 2,
        category: 'T-Shirt Sablon',
        type: 'image',
        src: '/image/gallery/baju/2.jpeg',
        alt: 'Tangerang Hawks',
    },
    {
        id: 3,
        category: 'Polo Jersey',
        type: 'image',
        src: '/image/gallery/baju/3.jpg',
        alt: 'RCB',
    },
    {
        id: 4,
        category: 'Polo',
        type: 'image',
        src: '/image/gallery/baju/4.jpg',
        alt: 'Badan Gizi Nasional RI',
    },
    {
        id: 5,
        category: 'Polo',
        type: 'image',
        src: '/image/gallery/baju/5.jpg',
        alt: 'MOON Billiard',
    },
    {
        id: 6,
        category: 'Polo',
        type: 'image',
        src: '/image/gallery/baju/6.jpg',
        alt: 'Badan Gizi Nasional RI',
    },
    {
        id: 7,
        category: 'Polo',
        type: 'image',
        src: '/image/gallery/baju/7.jpg',
        alt: 'JJL Cocoa Board',
    },
    {
        id: 8,
        category: 'Jaket',
        type: 'image',
        src: '/image/gallery/baju/8.jpg',
        alt: 'PETROSEA',
    },
    {
        id: 9,
        category: 'T-Shirt Sablon',
        type: 'image',
        src: '/image/gallery/baju/9.jpg',
        alt: 'MI Plus Asy-Syukriyyah',
    },
    {
        id: 10,
        category: 'Polo',
        type: 'image',
        src: '/image/gallery/baju/10.jpg',
        alt: 'MOON Billiard',
    },
    {
        id: 11,
        category: 'Vest',
        type: 'image',
        src: '/image/gallery/baju/11.jpg',
        alt: 'SRD',
    },
    {
        id: 12,
        category: 'Setelan PDL',
        type: 'image',
        src: '/image/gallery/baju/12.jpg',
        alt: 'PGM Solution',
    },
    {
        id: 13,
        category: 'Setelan Jersey',
        type: 'image',
        src: '/image/gallery/baju/13.jpg',
        alt: 'Golf Parahyangan',
    },
    {
        id: 14,
        category: 'Dokumentasi',
        type: 'image',
        src: '/image/gallery/baju/14.jpg',
        alt: 'Produksi Bordir',
    },
    {
        id: 15,
        category: 'Dokumentasi',
        type: 'image',
        src: '/image/gallery/baju/15.jpg',
        alt: 'Pengiriman',
    },
    {
        id: 16,
        category: 'Dokumentasi',
        type: 'video',
        src: '/image/gallery/video/1.mov',
        alt: 'Video Dokumentasi Pengiriman',
    },
    {
        id: 17,
        category: 'Dokumentasi',
        type: 'video',
        src: '/image/gallery/video/2.mov',
        alt: 'Video Produksi',
    },
    {
        id: 18,
        category: 'Dokumentasi',
        type: 'video',
        src: '/image/gallery/video/3.mp4',
        alt: 'Testimonial',
    },
    {
        id: 19,
        category: 'Dokumentasi',
        type: 'video',
        src: '/image/gallery/video/4.mp4',
        alt: 'Video Produksi',
    },
    {
        id: 20,
        category: 'Dokumentasi',
        type: 'video',
        src: '/image/gallery/video/5.mov',
        alt: 'Testimonial',
    },
    {
        id: 21,
        category: 'Dokumentasi',
        type: 'video',
        src: '/image/gallery/video/6.mp4',
        alt: 'Video Produksi',
    },
];