import React from 'react';
import { Factory, ShieldCheck, Clock, LucideIcon } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const WhyChooseUs: React.FC = () => {
  const features: Feature[] = [
    {
      title: "Harga Kompetitif",
      description: "Kami berkomitmen memberikan harga terbaik dengan kualitas premium. Sistem produksi efisien memastikan nilai maksimal untuk investasi Anda.",
      Icon: Factory,
    },
    {
      title: "Jaminan Kualitas",
      description: "Standar jahitan garmen dengan Quality Control 3 lapis. Bahan premium, awet, dan nyaman dipakai.",
      Icon: ShieldCheck,
    },
    {
      title: "Pengerjaan Tepat Waktu",
      description: "Komitmen tinggi terhadap deadline. Sistem manajemen produksi kami memastikan pesanan Anda selesai sesuai jadwal.",
      Icon: Clock,
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-300 text-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-gray-500 text-sm font-bold tracking-widest uppercase">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4 text-black">
            Mengapa Kami Adalah Mitra Tepat?
          </h2>
          <div className="h-1.5 w-24 bg-black mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-black w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <feature.Icon
                  className="w-7 h-7 text-white"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">
                {feature.title}
              </h3>
              <div className="h-1 w-12 bg-gray-200 mb-4 rounded-full group-hover:bg-black transition-colors duration-300"></div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;