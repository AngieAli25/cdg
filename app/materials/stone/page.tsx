import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UnderUpdateMessage from '@/components/UnderUpdateMessage';

export const metadata = {
  title: 'Stone - CDG Company',
  description: 'Stone collection - Coming soon in our 2026 catalog.',
};

export default function StonePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 pt-[70px] md:pt-[102px]">
        <UnderUpdateMessage />
      </main>
      <Footer />
    </div>
  );
}
