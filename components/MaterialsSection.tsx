import Image from 'next/image';
import Link from 'next/link';

export default function MaterialsSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-[109px] px-4 md:px-8 lg:px-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[95px] items-center justify-end">
        {/* Content */}
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-[40px] w-full lg:w-[415px] lg:pl-[70px]">
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-[20px]">
            <h2 className="text-2xl md:text-3xl lg:text-[34px] font-normal leading-[1.2] text-black">
              Materials
            </h2>

            <p className="text-base md:text-lg lg:text-[18px] font-normal leading-[1.5] text-black">
              Discover our exclusive selection of porcelain surfaces — inspired by nature and refined
              through technology. From the timeless elegance of Marble and the raw strength of Stone,
              to the warmth of Wood and the contemporary character of Cement & Resin, each collection
              tells a unique story of texture, color, and design.
            </p>
          </div>

          {/* Button */}
          <Link
            href="/materials"
            className="border-2 border-black rounded-[50px] px-6 md:px-8 lg:px-[30px] py-3 md:py-4 lg:py-[15px] flex items-center gap-2 md:gap-3 lg:gap-[10px] w-fit hover:bg-black hover:text-white transition-colors"
          >
            <span className="text-sm md:text-base lg:text-[18px] font-normal">
              FIND OUT MORE
            </span>
            <div className="w-4 h-4 md:w-5 md:h-5 lg:w-[20px] lg:h-[20px] flex items-center justify-center">
              <Image
                src="/icons/Arrow.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="rotate-180"
              />
            </div>
          </Link>
        </div>

        {/* Image */}
        <div className="relative w-full lg:w-[700px] h-[250px] md:h-[300px] lg:h-[359px] overflow-hidden">
          <Image
            src="/images/img-Materiali2025_home.png"
            alt="Materials showcase"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
