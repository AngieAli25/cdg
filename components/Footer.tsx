import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#023226] py-12 md:py-16 lg:py-[91px] px-4 md:px-8 lg:px-[70px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-[22px]">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="relative w-10 h-8 md:w-[44px] md:h-[34px]">
                <Image
                  src="/images/Logo bianco.png"
                  alt="CDG Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-[40px] font-normal leading-[1.17] text-white">
                CDG Company
              </h3>
            </div>

            <div className="flex flex-col gap-2 md:gap-3 lg:gap-[15px] text-white font-light text-sm md:text-base lg:text-[16px] lowercase">
              <Link
                href="tel:+971581860713"
                className="hover:opacity-70 transition-opacity"
              >
                Tel. (+97) 1581860713
              </Link>
              <Link
                href="tel:+393922636922"
                className="hover:opacity-70 transition-opacity"
              >
                Tel. (+39) 3922636922
              </Link>
              <Link
                href="mailto:info@cdg-company.com"
                className="hover:opacity-70 transition-opacity"
              >
                info@cdg-company.com
              </Link>
            </div>
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-3 md:gap-4">
            <h4 className="text-white uppercase font-medium text-sm md:text-base lg:text-[16px] mb-1">
              Menù
            </h4>
            <Link
              href="/"
              className="text-white font-light text-sm md:text-base lg:text-[16px] hover:opacity-70 transition-opacity"
            >
              Home
            </Link>
            <Link
              href="/materials"
              className="text-white font-light text-sm md:text-base lg:text-[16px] hover:opacity-70 transition-opacity"
            >
              Materials
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-3 md:gap-4">
            <h4 className="text-white uppercase font-medium text-sm md:text-base lg:text-[16px] mb-1">
              follow us
            </h4>
            <div className="flex gap-3 md:gap-4">
              <Link
                href="#"
                className="text-white hover:opacity-70 transition-opacity"
                aria-label="Instagram"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-white hover:opacity-70 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
