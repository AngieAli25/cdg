import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[600px] lg:h-[730px]">
      <div className="absolute inset-0">
        <Image
          src="/images/Img-hero_home.png"
          alt="Modern bathroom design"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="absolute bottom-8 md:bottom-16 lg:bottom-[120px] left-4 md:left-8 lg:left-[70px] text-white z-10 max-w-[90%] md:max-w-[80%] lg:max-w-none">
        <h1 className="text-3xl md:text-5xl lg:text-[60px] font-normal mb-3 md:mb-4 leading-tight">
          Designed to inspire
        </h1>
        <p className="text-sm md:text-lg lg:text-[24px] font-normal leading-tight">
          For those who seek beauty, functionality, and timeless style.
        </p>
      </div>
    </section>
  );
}
