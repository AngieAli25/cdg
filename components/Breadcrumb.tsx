import Link from 'next/link';
import Image from 'next/image';

interface BreadcrumbProps {
  items: {
    label: string;
    href: string;
  }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 md:gap-3 text-black lowercase" aria-label="Breadcrumb">
      <Link href="/" className="flex items-center hover:opacity-70 transition-opacity">
        <div className="relative w-5 h-5 md:w-6 md:h-6 rotate-90">
          <Image
            src="/icons/Arrow.svg"
            alt="Back"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2 md:gap-3">
          {index > 0 && (
            <span className="text-lg md:text-[26.7px] font-normal">•</span>
          )}
          <Link
            href={item.href}
            className="text-base md:text-lg lg:text-[25px] font-normal hover:opacity-70 transition-opacity"
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}
