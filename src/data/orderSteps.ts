// data/orderSteps.ts

import { LucideIcon } from 'lucide-react';

export interface OrderStep {
    id: string;
    title: string;
    description: string;
    icon: string; // Icon name from lucide-react
}

export const orderStepsData: OrderStep[] = [
    {
        id: "01",
        title: "Konsultasi & Desain",
        description: "Hubungi admin kami untuk diskusi model, bahan, dan jumlah. Belum punya desain? Tim kami bantu buatkan GRATIS.",
        icon: "MessageSquare"
    },
    {
        id: "02",
        title: "Penawaran & DP",
        description: "Kami berikan penawaran harga terbaik. Setelah deal, cukup bayar DP 50% agar pesanan masuk antrean produksi.",
        icon: "FileText"
    },
    {
        id: "03",
        title: "Proses Produksi",
        description: "Pesanan diproses (Potong, Sablon/Bordir, Jahit) dengan Quality Control ketat. Kami update progress berkala.",
        icon: "Settings"
    },
    {
        id: "04",
        title: "Pelunasan & Kirim",
        description: "Barang jadi dan lolos QC. Lakukan pelunasan, lalu barang kami kirim ke alamat Anda via ekspedisi terpercaya.",
        icon: "Truck"
    }
];
