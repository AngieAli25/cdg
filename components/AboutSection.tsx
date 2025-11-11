import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="w-full bg-[#dce2e0] py-12 md:py-20 lg:py-[120px] px-4 md:px-8 lg:px-[70px]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[90px] items-center">
        {/* Image */}
        <div className="relative w-full lg:w-[550px] h-[300px] md:h-[450px] lg:h-[588px] overflow-hidden">
          <Image
            src="/images/Img-Aboutus_home.png"
            alt="Interior design showcase"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-[36px] w-full lg:w-[460px]">
          <div className="flex flex-col gap-3 md:gap-4 lg:gap-[18px]">
            <h2 className="text-5xl md:text-7xl lg:text-[120px] font-normal leading-[1.2] text-black whitespace-nowrap">
              about us.
            </h2>

            <h3 className="text-xl md:text-2xl lg:text-[34px] font-normal leading-[1.2] text-[#212529]">
              Norman Foster Foundation
            </h3>

            <p className="text-base md:text-lg lg:text-[18px] font-normal leading-[1.5] text-[#212529]">
              With over ten years of experience in the ceramics industry, we design and distribute
              high-quality porcelain stoneware surfaces worldwide. From wood-, marble-, and stone-effect
              collections to large architectural formats, we combine aesthetics, technology, and
              long-lasting performance. Our mission is to offer versatile and sustainable solutions
              designed to enhance every space with elegance and functionality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
