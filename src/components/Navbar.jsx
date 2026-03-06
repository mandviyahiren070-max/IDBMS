import React, { useState } from "react";
import taisysLogo from "../assets/images/TAISYS-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-4 sm:top-6 z-[100] flex items-center justify-between mx-auto -mb-32
                 w-[94%] sm:w-[92%] lg:w-[90%] max-w-figma
                 px-6 sm:px-8 lg:px-10 py-4 sm:py-5
                 rounded-full glass-card
                 shadow-[0_4px_30px_rgba(0,0,0,0.15)]
                 transition-all duration-300 animate-navbar-slide
                 hover:border-white/30 hover:shadow-[0_4px_40px_rgba(0,0,0,0.25)]"
      id="navbar"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <a href="/" className="flex items-center h-6 sm:h-7 lg:h-9" aria-label="TAISYS Home">
        <img
          src={taisysLogo}
          alt="TAISYS Logo"
          className="h-full w-auto object-contain"
        />
      </a>

      {/* Book a Demo CTA */}
      <a
        href="#get-in-touch"
        className="btn-primary px-4 sm:px-5 lg:px-7 py-[7px] sm:py-2 lg:py-2.5
                   text-[13px] sm:text-sm lg:text-base leading-none"
        id="btn-book-demo"
      >
        Book a demo
      </a>
    </nav>
  );
};

export default Navbar;
