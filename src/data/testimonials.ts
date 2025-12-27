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
        name: "Budi Santoso",
        role: "HR Manager, PT Sinar Mas",
        content: "Puas banget sama hasil kemeja PDL-nya. Jahitannya rapi standar garmen, bordirannya presisi. Deadline mepet tapi tim Pandawa bisa selesaikan tepat waktu.",
        rating: 5
    },
    {
        id: 2,
        name: "Sarah Wijaya",
        role: "Ketua Panitia Event, UNDIP",
        content: "Awalnya ragu pesan online, tapi adminnya ramah banget jelasin bahan. Pas barang dateng, kaosnya adem dan sablonnya awet dipake berkali-kali cuci ga pecah.",
        rating: 5
    },
    {
        id: 3,
        name: "Rahmat Hidayat",
        role: "Founder, Coffee Space",
        content: "Udah 3x repeat order apron dan seragam barista di sini. Kualitas konsisten, harga kompetitif dan pelayanan memuaskan. Sukses terus buat Pandawa Konveksi.",
        rating: 5
    }
];
