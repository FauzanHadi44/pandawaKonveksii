// data/testimonials.ts

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    rating: number;
}

export const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: "Andi Prasetyo",
        role: "Procurement Manager, RCB",
        content: "Pandawa Konveksi sangat profesional dalam menangani pesanan seragam karyawan kami. Kualitas jahitan rapi, bahan premium, dan pengiriman tepat waktu. Sangat recommended untuk perusahaan yang butuh konveksi berkualitas.",
        rating: 5
    },
    {
        id: 2,
        name: "Dian Permata",
        role: "General Manager, Parahyangan Golf Bandung",
        content: "Kami memesan polo shirt untuk staff dan member golf club. Hasilnya luar biasa! Bahan breathable, bordiran logo sangat presisi, dan warna tetap cerah setelah dicuci berkali-kali. Pelayanan tim Pandawa juga sangat responsif.",
        rating: 5
    },
    {
        id: 3,
        name: "Michael Tan",
        role: "Operations Director, Southlinks Country Club Batam",
        content: "Sudah beberapa kali order seragam staff dan merchandise di Pandawa Konveksi. Konsisten dengan kualitas tinggi, harga kompetitif, dan selalu on-time delivery. Partner terpercaya untuk kebutuhan konveksi kami.",
        rating: 5
    },
    {
        id: 4,
        name: "Bambang Sutrisno",
        role: "HR & GA Manager, Manuli Hydraulics",
        content: "Pesanan wearpack dan seragam kerja untuk tim produksi kami dikerjakan dengan sangat baik. Bahan kuat dan tahan lama, jahitan rapi standar industri. Pandawa Konveksi memahami kebutuhan industri manufaktur.",
        rating: 5
    },
    {
        id: 5,
        name: "Ustadzah Fitri Rahmawati",
        role: "Kepala Sekolah, SMP IT As-Syukriyyah",
        content: "Alhamdulillah, seragam sekolah untuk siswa-siswi kami sangat memuaskan. Bahan nyaman untuk anak-anak, jahitan kuat, dan harga terjangkau. Tim Pandawa juga sabar melayani revisi desain sampai sesuai keinginan sekolah.",
        rating: 5
    },
    {
        id: 6,
        name: "Rudi Hartono",
        role: "Marketing Manager, Futanlux Paint",
        content: "Kami order jaket dan polo shirt untuk tim sales. Kualitas sablon dan bordiran logo perusahaan sangat tajam dan rapi. Bahan juga nyaman dipakai seharian untuk aktivitas lapangan. Terima kasih Pandawa Konveksi!",
        rating: 5
    },
    {
        id: 7,
        name: "Steven Wijaya",
        role: "Owner, Moon Billiard",
        content: "Seragam staff dan merchandise Moon Billiard dikerjakan dengan detail yang sempurna. Desainnya keren, kualitas printing bagus, dan harga sangat bersahabat. Pasti order lagi untuk cabang baru kami.",
        rating: 5
    },
    {
        id: 8,
        name: "Tommy Gunawan",
        role: "Owner, Sun Billiard",
        content: "Pandawa Konveksi adalah pilihan tepat untuk kebutuhan seragam dan merchandise billiard club kami. Proses cepat, hasil memuaskan, dan tim sangat kooperatif. Highly recommended!",
        rating: 5
    },
    {
        id: 9,
        name: "Agus Setiawan",
        role: "Owner, Warkop 2 Lanta",
        content: "Apron dan seragam barista untuk kedai kopi kami hasilnya keren banget! Bahan berkualitas, sablon awet, dan desainnya sesuai dengan konsep warkop kami. Pelayanan ramah dan harga terjangkau. Sukses terus Pandawa!",
        rating: 5
    }
];
