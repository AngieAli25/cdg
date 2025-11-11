import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterTabs from '@/components/FilterTabs';
import MaterialCard from '@/components/MaterialCard';

export const metadata = {
  title: 'Materials - CDG Company',
  description: 'Explore our exclusive collection of porcelain surfaces inspired by nature and refined through technology.',
};

export default function MaterialsPage() {
  const categories = ['All', 'Marble', 'Stone', 'Wood', 'Cement & Resin'];

  const materials = [
    {
      title: 'Marble',
      image: '/images/img-marble_materials.png',
      href: '/materials/marble',
      width: 'full' as const,
      height: 'tall' as const
    },
    {
      title: 'Stone',
      image: '/images/img-stone_materials.png',
      href: '/materials/stone',
      width: 'half' as const,
      height: 'normal' as const
    },
    {
      title: 'Wood',
      image: '/images/img-wood_materials.png',
      href: '/materials/wood',
      width: 'half' as const,
      height: 'normal' as const
    },
    {
      title: 'Cement & resin',
      image: '/images/img-cement&resin_materials.png',
      href: '/materials/cement-resin',
      width: 'full' as const,
      height: 'tall' as const
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 px-4 md:px-8 lg:px-[70px] pt-[90px] md:pt-[130px] lg:pt-[140px] pb-8 md:pb-12 lg:pb-16">
        {/* Page Title */}
        <h1 className="text-4xl md:text-6xl lg:text-[100px] font-normal text-[#212529] mb-6 md:mb-10 lg:mb-16 leading-tight">
          Materials
        </h1>

        {/* Filter Tabs */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <FilterTabs categories={categories} />
        </div>

        {/* Materials Grid */}
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6 md:gap-8 lg:gap-[30px]">
          {materials.map((material) => (
            <MaterialCard
              key={material.title}
              title={material.title}
              image={material.image}
              href={material.href}
              width={material.width}
              height={material.height}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
