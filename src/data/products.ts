// data/products.ts

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
        category: "Best Seller",
        title: "Kemeja PDH / Korsa",
        imageSrc: "/image/baju/kemeja.jpg",
        alternativeMaterials: [
            { name: "American Drill", description: "Paling populer. Tebal sedang, tekstur miring tegas, awet." },
            { name: "Japan Drill", description: "Lebih tebal, kandungan katun lebih banyak, lebih adem & kuat." },
            { name: "Taipan Tropical", description: "Premium. Tanpa tekstur miring, sangat halus, standar instansi." },
        ]
    },
    {
        id: 2,
        category: "Outerwear",
        title: "Jaket & Hoodie",
        imageSrc: "/image/baju/jersey.jpg",
        alternativeMaterials: [
            { name: "Taslan Waterproof", description: "Anti-air (seperti daun talas), cocok untuk jaket outdoor/motor." },
            { name: "Fleece Cotton", description: "Berbulu di dalam, hangat & lembut. Standar distro untuk hoodie." },
            { name: "Parasut Mikro", description: "Tipis, ringan, cocok untuk jaket olahraga/windbreaker." },
        ]
    },
    {
        id: 3,
        category: "Casual",
        title: "Kaos Sablon (T-Shirt)",
        imageSrc: "/image/baju/jersey.jpg",
        alternativeMaterials: [
            { name: "Cotton Combed 30s", description: "Standar distro. Tipis, sangat adem, menyerap keringat." },
            { name: "Cotton Combed 24s", description: "Sedikit lebih tebal dari 30s, tidak menerawang." },
            { name: "Cotton Bamboo", description: "Anti-bakteri, sangat halus, dan lebih eco-friendly." },
        ]
    },
    {
        id: 4,
        category: "Semi-Formal",
        title: "Polo Shirt Bordir",
        imageSrc: "/image/baju/jersey.jpg",
        alternativeMaterials: [
            { name: "Lacoste CVC", description: "Pori-pori khas polo (honeycomb), susut minim, warna awet." },
            { name: "Lacoste Cotton", description: "100% Katun, sangat menyerap keringat tapi sedikit menyusut." },
            { name: "Polyester PE", description: "Pilihan ekonomis untuk budget event massal." },
        ]
    },
    {
        id: 5,
        category: "Sportwear",
        title: "Jersey Olahraga",
        imageSrc: "/image/baju/jersey.jpg",
        alternativeMaterials: [
            { name: "Drifit Milano", description: "Tekstur zig-zag halus, jatuh, dan cepat kering (anti-UV)." },
            { name: "Drifit Benzema", description: "Tekstur pori heksagon, tipis, dan sangat ringan." },
            { name: "Serena", description: "Permukaan rata, licin, elastis, dan fit di badan." },
        ]
    },
    {
        id: 6,
        category: "Bottoms",
        title: "Celana (Formal/Training)",
        imageSrc: "/image/baju/jersey.jpg",
        alternativeMaterials: [
            { name: "Cotton Twill (Chino)", description: "Melar (stretch), nyaman untuk celana kerja santai." },
            { name: "Diadora", description: "Bagian dalam berbulu halus, luar mengkilap. Standar celana training." },
            { name: "Ripstop", description: "Tekstur kotak-kotak, anti-sobek. Khusus celana lapangan/cargo." },
        ]
    },
];