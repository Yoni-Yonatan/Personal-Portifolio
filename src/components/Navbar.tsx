import React, { useState } from 'react';

const NAV_LINKS = [
  { name: 'Projects', href: '#projects' },
  { name: 'Stack', href: '#stack' },
  { name: 'Experience', href: '#experience' },
  { name: 'About', href: '#about' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-10 w-full px-5 sm:px-8 py-4 sm:py-5 flex justify-between items-center">
        {/* Logo (left) */}
        <a
          href="/"
          className="flex flex-row items-center gap-3 select-none group"
        >
          <span
            className="text-[21px] sm:text-[26px] tracking-tight text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Yoni Yonatan®
          </span>
          <span
            className="text-[25px] sm:text-[30px] text-white select-none leading-none"
            style={{ letterSpacing: '-0.02em' }}
            aria-hidden="true"
          >
            ✳︎
          </span>
        </a>

        {/* Desktop nav links (center, hidden below md) */}
        <div className="hidden md:flex items-center text-[23px] text-white">
          {NAV_LINKS.map((link, idx) => (
            <React.Fragment key={link.name}>
              <a
                href={link.href}
                className="hover:opacity-60 transition-opacity"
              >
                {link.name}
              </a>
              {idx < NAV_LINKS.length - 1 && (
                <span className="select-none">,&nbsp;</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Desktop CTA (right, hidden below md) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-[23px] text-white underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile hamburger (visible below md) */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="flex md:hidden flex-col justify-center items-center gap-[5px] w-8 h-8 p-1 focus:outline-none cursor-pointer"
        >
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 transform origin-center ${
              isOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 transform origin-center ${
              isOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay (z-index: 9) */}
      <div
        className={`md:hidden fixed inset-0 z-[9] bg-black/90 backdrop-blur-md flex flex-col justify-center items-start px-8 gap-8 transition-opacity duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={closeMenu}
            className="text-[32px] font-medium text-white hover:opacity-70 transition-opacity"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={closeMenu}
          className="text-[32px] font-medium text-white underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          Get in touch
        </a>
      </div>
    </>
  );
}
