import Image from 'next/image';

export default function SanitarywareSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-[109px] px-4 md:px-8 lg:px-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[95px] items-center justify-end">
        {/* Content */}
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-[20px] w-full lg:w-[413px] lg:pl-[70px]">
          <h2 className="text-2xl md:text-3xl lg:text-[34px] font-normal leading-[1.2] text-black">
            Sanitaryware
          </h2>

          <p className="text-base md:text-lg lg:text-[18px] font-normal leading-[1.5] text-black">
            Designed for comfort, functionality, and refined aesthetics, our sanitary collections
            redefine the concept of everyday living. Each piece blends clean lines, premium materials,
            and innovative design to create harmonious bathroom spaces that embody elegance and
            practicality.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full lg:w-[700px] h-[250px] md:h-[300px] lg:h-[359px] overflow-hidden">
          <Image
            src="/images/img-Sanitari_home.png"
            alt="Sanitaryware collection"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
