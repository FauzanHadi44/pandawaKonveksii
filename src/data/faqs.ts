// data/faqs.ts

export interface FAQ {
    question: string;
    answer: string;
}

export const faqsData: FAQ[] = [
    {
        question: "Berapa minimal pemesanan (MOQ) di sini?",
        answer: "Minimal pemesanan untuk Kemeja, Jaket, dan Celana adalah 24 pcs (2 lusin) per desain. Untuk Kaos Sablon minimal 24 pcs. Jika order di atas 100 pcs, kami berikan harga spesial potongan grosir."
    },
    {
        question: "Berapa lama proses produksinya?",
        answer: "Waktu pengerjaan standar adalah 14-21 hari kerja setelah Desain & DP disepakati. Untuk pesanan urgent (kilat), silakan konsultasikan dengan admin kami untuk penyesuaian jadwal produksi."
    },
    {
        question: "Apakah bisa dibuatkan sampel dulu sebelum produksi massal?",
        answer: "Bisa! Kami menyediakan layanan pembuatan sampel (proofing) untuk order di atas 100 pcs. Biaya sampel gratis jika lanjut produksi (dipotong dari total invoice)."
    },
    {
        question: "Apakah desainnya bisa dibantu buatkan?",
        answer: "Tentu saja. Kami memiliki tim desainer profesional yang siap membantu memvisualisasikan ide seragam Anda secara GRATIS setelah pembayaran Down Payment (DP)."
    },
    {
        question: "Melayani pengiriman ke mana saja?",
        answer: "Kami melayani pengiriman ke seluruh Indonesia menggunakan kargo (Indah Cargo, Lion Parcel, dll) atau ekspedisi reguler (JNE, J&T) sesuai request dan budget Anda."
    }
];
