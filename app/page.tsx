import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuoteSection from '@/components/QuoteSection';
import AboutSection from '@/components/AboutSection';
import MaterialsSection from '@/components/MaterialsSection';
import FaucetsSection from '@/components/FaucetsSection';
import SanitarywareSection from '@/components/SanitarywareSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 pt-[70px] md:pt-[102px]">
        <HeroSection />
        <QuoteSection />
        <AboutSection />
        <MaterialsSection />
        <FaucetsSection />
        <SanitarywareSection />
      </main>
      <Footer />
    </div>
  );
}
