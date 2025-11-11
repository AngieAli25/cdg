import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white flex items-center justify-between px-4 md:px-[70px] py-5 md:py-[23px] w-full z-50 shadow-sm">
      <div className="relative h-10 w-12 md:h-[56px] md:w-[70px]">
        <Image
          src="/images/Logo bianco.png"
          alt="CDG Company Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 lg:gap-[60px] items-center text-black uppercase text-sm lg:text-[16px] font-light">
        <Link
          href="/"
          className="hover:opacity-70 transition-opacity"
        >
          Homepage
        </Link>
        <Link
          href="/materials"
          className="hover:opacity-70 transition-opacity"
        >
          Materials
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1.5 w-6 h-6"
        aria-label="Menu"
      >
        <span className="w-full h-0.5 bg-black"></span>
        <span className="w-full h-0.5 bg-black"></span>
        <span className="w-full h-0.5 bg-black"></span>
      </button>
    </nav>
  );
}
