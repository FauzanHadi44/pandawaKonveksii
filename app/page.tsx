import HeroSection from "../src/components/sections/HeroSection";
import ClientSection from "../src/components/sections/ClientSection";
import WhyChooseUsSection from "../src/components/sections/WhyChooseUsSection";
import OurProductsSection from "../src/components/sections/OurProductsSection";
import HowToOrderSection from "../src/components/sections/HowToOrderSection";
import FaqSection from "../src/components/sections/FaqSection";
import TestimonialSection from "../src/components/sections/TestimonialSection";
import GallerySection from "../src/components/sections/GallerySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3F3F3]">
      <HeroSection />
      <WhyChooseUsSection />
      <OurProductsSection />
      <GallerySection />
      <TestimonialSection />
      <HowToOrderSection />
      <FaqSection />
      <ClientSection />
    </div>
  );
}
