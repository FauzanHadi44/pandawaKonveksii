export interface MaterialOption {
    name: string;
    description: string;
}

export interface Product {
    id: number;
    category: string;
    title: string;
    imageSrc: string;
    alternativeMaterials: MaterialOption[];
}

export const productsData: Product[] = [
    {
        id: 1,
        category: "Semi-Formal",
        title: "Kemeja PDH / Korsa",
        imageSrc: "/image/produk/kemeja.png",
        alternativeMaterials: [
            { 
                name: "American Drill", 
                description: "Serat miring kokoh, awet, warna tahan lama. Cocok untuk seragam lapangan (PDL)." 
            },
            { 
                name: "Oxford", 
                description: "Tekstur bintik halus, tipis, dan sangat adem. Favorit untuk kemeja kantor indoor." 
            },
            { 
                name: "High Twist", 
                description: "Licin, jatuh, dan anti-kusut. Memberikan kesan rapi dan formal seharian." 
            },
            { 
                name: "Semi Wool", 
                description: "Premium, tebal, dan berwibawa. Standar tertinggi untuk Jas dan Celana Formal." 
            },
        ]
    },
    {
        id: 2,
        category: "Outerwear",
        title: "Jaket Bomber / Parka & Hoodie",
        imageSrc: "/image/produk/jaket.png",
        alternativeMaterials: [
            { 
                name: "Taslan Latex", 
                description: "Waterproof Premium. Tebal, anti-air (efek daun talas), dan tahan angin." 
            },
            { 
                name: "Micro NS", 
                description: "Sporty Windbreaker. Sangat ringan, halus, dan mudah dilipat. Cocok untuk olahraga." 
            },
            { 
                name: "Baby Canvas", 
                description: "Vintage Look. Tekstur serat kain yang kuat dan maskulin. Spesialis jaket Parka." 
            },
            { 
                name: "Cotton Fleece", 
                description: "Best Seller. Tebal, empuk, bagian dalam berbulu halus. Sangat nyaman & hangat." 
            },
            { 
                name: "Baby Terry", 
                description: "Tropical Fit. Lebih tipis dan adem (tekstur handuk). Cocok untuk pemakaian harian." 
            },
            { 
                name: "PE Fleece", 
                description: "Budget Option. Bahan sintetis tebal dan awet. Solusi hemat untuk pesanan banyak." 
            },
        ]
    },
    {
        id: 3,
        category: "Casual",
        title: "Kaos Sablon (T-Shirt)",
        imageSrc: "/image/produk/kaos.png",
        alternativeMaterials: [
            { name: "Cotton Combed 24s", description: "Standar Distro. 100% Katun, tebal sedang, sangat halus & adem. Tidak menerawang." },
            { name: "PE Double (DKPE)", description: "Bahan Tebal Ekonomis. Rajutan ganda yang kokoh, awet, cocok untuk seragam sekolah." },
            { name: "PE Single (SKPE)", description: "Paling Ekonomis. Tipis, ringan, dan harga sangat terjangkau. Khusus budget promosi/partai." },
        ]
    },
    {
        id: 4,
        category: "Semi-Formal",
        title: "Polo Shirt Bordir",
        imageSrc: "/image/produk/polo.png",
        alternativeMaterials: [
            { 
                name: "Lacoste PE", 
                description: "Ekonomis & Awet. Bahan sintetis yang kuat, anti-kusut, cocok untuk budget promosi massal." 
            },
            { 
                name: "Lacoste CVC", 
                description: "Best Seller. Campuran dominan katun. Adem, menyerap keringat, dan tidak mudah menyusut." 
            },
            { 
                name: "Lacoste Cotton", 
                description: "100% Katun Premium. Sangat halus, dingin, dan eksklusif. Standar kualitas distro/retail." 
            },
        ]
    },
    {
        id: 5,
        category: "Sportwear",
        title: "Polo Shirt (Printing/Sublim)",
        imageSrc: "/image/produk/poloPrinting.png",
        alternativeMaterials: [
            { 
                name: "Dryfit Milano", 
                description: "Best Seller. Motif Zig-Zag, modern, dan daya serap keringat terbaik." 
            },
            { 
                name: "Dryfit Benzema", 
                description: "Motif Hexagon. Paling ringan, tipis, dan super adem (maksimal airflow)." 
            },
            { 
                name: "Dryfit Serena", 
                description: "Tekstur rata, padat, dan sangat halus di kulit. Hasil printing tajam." 
            },
            { 
                name: "Dryfit Nike", 
                description: "Motif bintik jarum klasik. Bahan kuat dan awet untuk pemakaian jangka panjang." 
            },
            { 
                name: "Spandek Poly", 
                description: "Elastis & Body Fit. Cocok untuk manset/dalaman atau jersey sepeda." 
            },
        ]
    },
    {
        id: 6,
        category: "Sportwear",
        title: "Jersey Olahraga",
        imageSrc: "/image/produk/jersey.png",
        alternativeMaterials: [
            { 
                name: "Dryfit Milano", 
                description: "Best Seller. Motif Zig-Zag, modern, dan daya serap keringat terbaik." 
            },
            { 
                name: "Dryfit Benzema", 
                description: "Motif Hexagon. Paling ringan, tipis, dan super adem (maksimal airflow)." 
            },
            { 
                name: "Dryfit Serena", 
                description: "Tekstur rata, padat, dan sangat halus di kulit. Hasil printing tajam." 
            },
            { 
                name: "Dryfit Nike", 
                description: "Motif bintik jarum klasik. Bahan kuat dan awet untuk pemakaian jangka panjang." 
            },
            { name: "Dryfit Emboss (Premium Textured)", description: "Premium Look. Motif timbul 3D yang elegan dan mengkilap. Pilihan terbaik untuk tampil eksklusif." },
        ]
    },
    {
        id: 7,
        category: "Bottoms",
        title: "Celana (Formal/Training)",
        imageSrc: "/image/produk/celana.png",
        alternativeMaterials: [
            { 
                name: "American Drill", 
                description: "Standar Seragam Kerja. Kuat, awet, tahan gesekan. Pilihan ekonomis terbaik." 
            },
            { 
                name: "Japan Drill", 
                description: "Premium Workwear. Lebih tebal dan adem (kandungan katun tinggi). Warna tajam." 
            },
            { 
                name: "Cotton Twill (Chino)", 
                description: "Smart Casual. Bahan stretch (melar) yang nyaman dan fleksibel untuk gerak." 
            },
            { 
                name: "High Twist", 
                description: "Formal Office. Bahan licin, jatuh, dan anti-kusut. Kesan sangat rapi." 
            },
            { 
                name: "Diadora", 
                description: "Training Sporty. Bagian luar mengkilap, dalam hangat. Standar celana olahraga instansi." 
            },
        ]
    },
];