import Image from 'next/image';

export default function FaucetsSection() {
  return (
    <section className="w-full bg-[#dce2e0] py-12 md:py-16 lg:py-[104px] px-4 md:px-8 lg:px-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[80px] items-center">
        {/* Image */}
        <div className="relative w-full lg:w-[700px] h-[250px] md:h-[300px] lg:h-[359px] overflow-hidden">
          <Image
            src="/images/Img-rubinetteria_home.png"
            alt="Faucets collection"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-[20px] w-full lg:w-[415px]">
          <h2 className="text-2xl md:text-3xl lg:text-[34px] font-normal leading-[1.2] text-black">
            Faucets
          </h2>

          <p className="text-base md:text-lg lg:text-[18px] font-normal leading-[1.5] text-black">
            Our faucet collections combine refined design, advanced technology, and exceptional
            functionality. From minimalist lines to bold architectural shapes, every piece is crafted
            to complement contemporary interiors, ensuring durability, precision, and timeless
            elegance in every detail.
          </p>
        </div>
      </div>
    </section>
  );
}
