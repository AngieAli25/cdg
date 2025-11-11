import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  name: string;
  code: string;
  size: string;
  finish: string;
  image: string;
  href: string;
}

export default function ProductCard({
  name,
  code,
  size,
  finish,
  image,
  href
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white hover:shadow-lg transition-shadow duration-300"
    >
      {/* Product Image */}
      <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 md:p-5 lg:p-6">
        <h3 className="text-base md:text-lg lg:text-xl font-normal text-black mb-2">
          {name}
        </h3>

        <div className="space-y-1 text-sm md:text-base text-gray-600">
          <p>
            <span className="font-medium">Code:</span> {code}
          </p>
          <p>
            <span className="font-medium">Size:</span> {size}
          </p>
          <p>
            <span className="font-medium">Finish:</span> {finish}
          </p>
        </div>
      </div>
    </Link>
  );
}
