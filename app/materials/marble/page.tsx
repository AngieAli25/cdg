import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Marble - CDG Company',
  description: 'Explore our exclusive collection of marble-inspired porcelain surfaces.',
};

const marbleTypes = [
  {
    id: 'verde-alpi',
    name: 'Verde Alpi',
    description: 'An intense, deep green marble crossed by white and grey veins. Elegant and bold, perfect for natural yet sophisticated interiors.',
    image: '/images/marble/verde-alpi-main.png',
    detailImages: ['/images/marble/verde-alpi-detail.png'],
    sizes: [
      { label: '120x278 cm', inches: '49"x109"' },
      { label: '120x120 cm', inches: '48"x48"' },
      { label: '60x120 cm', inches: '24"x48"' }
    ]
  },
  {
    id: 'blue-river',
    name: 'Blue River',
    description: 'A marble with soft blue-grey tones reminiscent of flowing water. Its light, dynamic veining creates a fluid and contemporary look, ideal for modern design projects.',
    image: '/images/marble/blue-river-main.png',
    detailImages: ['/images/marble/blue-river-detail.png'],
    sizes: [
      { label: '120x278 cm', inches: '49"x109"' },
      { label: '120x120 cm', inches: '48"x48"' },
      { label: '60x120 cm', inches: '24"x48"' }
    ]
  },
  {
    id: 'grey-marble',
    name: 'Grey Marble',
    description: 'A refined grey marble with a uniform tone and subtle texture. Its neutral color makes it extremely versatile, suitable for any architectural context.',
    image: '/images/marble/grey-marble-main.png',
    detailImages: ['/images/marble/grey-marble-detail.png'],
    sizes: [
      { label: '120x278 cm', inches: '49"x109"' },
      { label: '120x120 cm', inches: '48"x48"' },
      { label: '60x120 cm', inches: '24"x48"' }
    ]
  },
  {
    id: 'pearl-onyx',
    name: 'Pearl Onyx',
    description: 'A translucent onyx with pearly shades and soft, wave-like veining. Precious and luminous, perfect for backlit walls and dramatic interior accents.',
    image: '/images/marble/pearl-onyx-main.png',
    detailImages: ['/images/marble/pearl-onyx-detail.png'],
    sizes: [
      { label: '120x278 cm', inches: '49"x109"' },
      { label: '120x120 cm', inches: '48"x48"' },
      { label: '60x120 cm', inches: '24"x48"' }
    ]
  },
  {
    id: 'champagne-quartz',
    name: 'Champagne Quartz',
    description: 'A quartz stone in warm beige and light golden tones. Its natural brilliance and crystalline structure bring elegance and brightness to any space.',
    image: '/images/marble/champagne-quartz-main.png',
    detailImages: ['/images/marble/champagne-quartz-detail.png'],
    sizes: [
      { label: '120x278 cm', inches: '49"x109"' },
      { label: '120x120 cm', inches: '48"x48"' },
      { label: '60x120 cm', inches: '24"x48"' },
      { label: '60x60 cm', inches: '24"x24"' },
      { label: '30x60 cm', inches: '12"x24"' }
    ]
  },
  {
    id: 'violet-arabesque',
    name: 'Violet Arabesque',
    description: 'A rare and distinctive marble featuring a white base with purple and burgundy arabesque-like veins. Luxurious and expressive, ideal for artistic and prestigious interiors.',
    image: '/images/marble/violet-arabesque-main.png',
    detailImages: ['/images/marble/violet-arabesque-detail.png'],
    sizes: [
      { label: '120x278 cm', inches: '49"x109"' },
      { label: '120x120 cm', inches: '48"x48"' },
      { label: '60x120 cm', inches: '24"x48"' }
    ]
  },
  {
    id: 'calacatta-emerald',
    name: 'Calacatta Emerald',
    description: 'A refined variation of Calacatta marble, featuring an ivory-white background with green and golden veining. Sophisticated and original, it bridges classic elegance with modern style.',
    image: '/images/marble/calacatta-emerald-main.png',
    detailImages: ['/images/marble/calacatta-emerald-detail.png'],
    sizes: [
      { label: '120x278 cm', inches: '49"x109"' },
      { label: '120x120 cm', inches: '48"x48"' },
      { label: '60x120 cm', inches: '24"x48"' }
    ]
  },
  {
    id: 'golden-borg',
    name: 'Golden Borg',
    description: 'A marble with a warm base enriched by golden and amber veins in harmonious patterns. It evokes luxury and radiance, perfect for refined and opulent environments.',
    image: '/images/marble/golden-borg-main.png',
    detailImages: ['/images/marble/golden-borg-detail.png'],
    sizes: [
      { label: '120x278 cm', inches: '49"x109"' },
      { label: '120x120 cm', inches: '48"x48"' },
      { label: '60x120 cm', inches: '24"x48"' }
    ]
  },
  {
    id: 'calacatta-prestige',
    name: 'Calacatta Prestige',
    description: 'Iconic and timeless, it features a pure white background crossed by golden and grey veins. A symbol of Italian elegance, ideal for both classic and contemporary spaces.',
    image: '/images/marble/calacatta-gold-main.png',
    detailImages: ['/images/marble/calacatta-gold-detail.png'],
    sizes: [
      { label: '120x278 cm', inches: '49"x109"' },
      { label: '120x120 cm', inches: '48"x48"' },
      { label: '60x120 cm', inches: '24"x48"' },
      { label: '60x60 cm', inches: '24"x24"' },
      { label: '30x60 cm', inches: '12"x24"' }
    ]
  },
  {
    id: 'calacatta-oro',
    name: 'Calacatta Oro',
    description: 'An exclusive selection of Calacatta marble with strong, well-defined veins on a pristine white background. Majestic and refined, ideal for high-end architectural projects.',
    image: '/images/marble/calacatta-oro-main.png',
    detailImages: ['/images/marble/calacatta-oro-detail.png'],
    sizes: [
      { label: '120x278 cm', inches: '49"x109"' },
      { label: '120x120 cm', inches: '48"x48"' },
      { label: '60x120 cm', inches: '24"x48"' },
      { label: '60x60 cm', inches: '24"x24"' },
      { label: '30x60 cm', inches: '12"x24"' }
    ]
  },
  {
    id: 'statuario',
    name: 'Statuario',
    description: 'A brilliant white marble with fine, even grey veining. The embodiment of purity and harmony, perfect for minimalist and elegant designs.',
    image: '/images/marble/statuario-main.png',
    detailImages: ['/images/marble/statuario-detail.png'],
    sizes: [
      { label: '120x278 cm', inches: '49"x109"' },
      { label: '120x120 cm', inches: '48"x48"' },
      { label: '60x120 cm', inches: '24"x48"' }
    ]
  },
  {
    id: 'pure-statuario',
    name: 'Pure Statuario',
    description: 'A premium version of Statuario marble, with a crystalline white background and more intense, dramatic veining. It adds monumental elegance and prestige to any architectural space.',
    image: '/images/marble/pure-statuario-main.png',
    detailImages: ['/images/marble/pure-statuario-detail.png'],
    sizes: [
      { label: '120x278 cm', inches: '49"x109"' },
      { label: '120x120 cm', inches: '48"x48"' },
      { label: '60x120 cm', inches: '24"x48"' },
      { label: '60x60 cm', inches: '24"x24"' },
      { label: '30x60 cm', inches: '12"x24"' }
    ]
  }
];

export default function MarblePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 px-4 md:px-8 lg:px-[70px] pt-[90px] md:pt-[130px] lg:pt-[140px] pb-8 md:pb-12 lg:pb-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-4 md:mb-6 lg:mb-8 text-sm md:text-base lg:text-[25px] lowercase text-black">
          <Link href="/" className="hover:opacity-70 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="rotate-180">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link href="/" className="hover:opacity-70 transition-opacity">home</Link>
          <span>•</span>
          <span>materials</span>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl md:text-6xl lg:text-[100px] font-normal text-[#212529] mb-6 md:mb-10 lg:mb-16 leading-tight">
          Marble
        </h1>

        {/* Filter Tabs */}
        <div className="flex gap-4 md:gap-6 lg:gap-[30px] mb-8 md:mb-12 lg:mb-16 overflow-x-auto pb-2">
          <button className="text-lg md:text-xl lg:text-[25px] font-normal text-black py-2 border-b-2 border-black whitespace-nowrap">
            All
          </button>
          <button className="text-lg md:text-xl lg:text-[25px] font-normal text-black py-2 hover:border-b-2 hover:border-black transition-all whitespace-nowrap">
            Marble
          </button>
          <button className="text-lg md:text-xl lg:text-[25px] font-normal text-black py-2 hover:border-b-2 hover:border-black transition-all whitespace-nowrap">
            Stone
          </button>
          <button className="text-lg md:text-xl lg:text-[25px] font-normal text-black py-2 hover:border-b-2 hover:border-black transition-all whitespace-nowrap">
            Wood
          </button>
          <button className="text-lg md:text-xl lg:text-[25px] font-normal text-black py-2 hover:border-b-2 hover:border-black transition-all whitespace-nowrap">
            Cement & Resin
          </button>
        </div>

        {/* Marble Collection */}
        <div className="space-y-12 md:space-y-16 lg:space-y-[100px]">
          {marbleTypes.map((marble, index) => (
            <div key={marble.id} className="space-y-6 md:space-y-8 lg:space-y-[50px]">
              {/* Main Image */}
              <Link
                href={`/materials/marble/${marble.id}`}
                className="block relative w-full h-[400px] md:h-[600px] lg:h-[832px] overflow-hidden group"
              >
                <Image
                  src={marble.image}
                  alt={marble.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-8 md:left-12 lg:left-16 text-white z-10">
                  <h2 className="text-3xl md:text-4xl lg:text-[50px] font-normal mb-2 leading-tight">
                    {marble.name}
                  </h2>
                  <p className="text-base md:text-lg lg:text-[25px] opacity-80">/marble</p>
                </div>
              </Link>

              {/* Details Section */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-[50px]">
                {/* Left: Detail Images */}
                {index % 2 === 0 ? (
                  <div className="relative w-full lg:w-[350px] h-[400px] md:h-[500px] lg:h-[614px] flex-shrink-0 overflow-hidden">
                    <Image
                      src={marble.detailImages[0]}
                      alt={`${marble.name} detail`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : null}

                {/* Center/Right: Description and Sizes */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-2xl md:text-3xl lg:text-[34px] font-normal leading-tight">
                      {marble.name}
                    </h3>
                    <p className="text-base md:text-lg lg:text-[18px] leading-relaxed text-black">
                      {marble.description}
                    </p>
                  </div>

                  <div className="mt-8 md:mt-10 lg:mt-12 space-y-4 md:space-y-6">
                    <h4 className="text-xl md:text-2xl lg:text-[28px] font-normal">Standard size:</h4>

                    {/* Size Options - Visual boxes */}
                    <div className="flex gap-4 md:gap-6 flex-wrap">
                      {marble.sizes.map((size, sizeIndex) => (
                        <div
                          key={sizeIndex}
                          className={`
                            border-2 border-black rounded-lg
                            ${sizeIndex === 0 ? 'w-[185px] h-[84px]' : ''}
                            ${sizeIndex === 1 ? 'w-[81px] h-[84px]' : ''}
                            ${sizeIndex === 2 ? 'w-[106px] h-[46px]' : ''}
                            ${sizeIndex === 3 ? 'w-[46px] h-[46px]' : ''}
                            ${sizeIndex === 4 ? 'w-[46px] h-[30px]' : ''}
                          `}
                        />
                      ))}
                    </div>

                    {/* Size Labels - cm and inches */}
                    <div className="flex gap-4 md:gap-6 flex-wrap text-sm md:text-base">
                      {marble.sizes.map((size, sizeIndex) => (
                        <div
                          key={sizeIndex}
                          className={`
                            ${sizeIndex === 0 ? 'w-[185px]' : ''}
                            ${sizeIndex === 1 ? 'w-[81px]' : ''}
                            ${sizeIndex === 2 ? 'w-[106px]' : ''}
                            ${sizeIndex === 3 ? 'w-[46px]' : ''}
                            ${sizeIndex === 4 ? 'w-[46px]' : ''}
                          `}
                        >
                          <p className="text-center text-sm md:text-base">{size.label}</p>
                          <p className="text-center text-sm md:text-base">{size.inches}</p>
                        </div>
                      ))}
                    </div>

                    <p className="text-lg md:text-xl lg:text-[28px] font-normal mt-6">
                      Sizes and thickness on demand
                    </p>
                  </div>
                </div>

                {/* Right: Detail Images (for odd indices) */}
                {index % 2 === 1 ? (
                  <div className="relative w-full lg:w-[350px] h-[400px] md:h-[500px] lg:h-[614px] flex-shrink-0 overflow-hidden">
                    <Image
                      src={marble.detailImages[0]}
                      alt={`${marble.name} detail`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
