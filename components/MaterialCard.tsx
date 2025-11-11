import Image from 'next/image';
import Link from 'next/link';

interface MaterialCardProps {
  title: string;
  image: string;
  href: string;
  width?: 'full' | 'half';
  height?: 'tall' | 'normal';
}

export default function MaterialCard({
  title,
  image,
  href,
  width = 'half',
  height = 'normal'
}: MaterialCardProps) {
  const widthClass = width === 'full' ? 'w-full' : 'w-full lg:w-[calc(50%-15px)]';
  const heightClass = height === 'tall'
    ? 'h-[300px] md:h-[450px] lg:h-[580px]'
    : 'h-[300px] md:h-[400px] lg:h-[555px]';

  return (
    <Link
      href={href}
      className={`${widthClass} ${heightClass} relative group overflow-hidden block`}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
      </div>

      <div className="absolute bottom-6 md:bottom-8 lg:bottom-10 left-6 md:left-8 lg:left-10 text-white z-10">
        <h3 className="text-2xl md:text-4xl lg:text-[50px] font-normal mb-2 md:mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-sm md:text-lg lg:text-[25px] font-normal lowercase opacity-90">
          /materials
        </p>
      </div>
    </Link>
  );
}
