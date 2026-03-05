import React from "react";
import taisysLogo from "../../assets/images/TAISYS-logo.png";

const Navbar = () => {
  return (
    <nav 
      className="sticky top-7 z-[100] flex items-center justify-between mx-auto -mb-[100px] mt-7 rounded-full bg-white/5 backdrop-blur-[18px] border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.15)] transition-all duration-300 animate-navbar-slide
                 w-[90%] max-w-[1100px] px-7 py-3
                 hover:border-white/30 hover:shadow-[0_4px_40px_rgba(0,0,0,0.25)]
                 max-[1024px]:w-[92%] max-[1024px]:px-[22px] max-[1024px]:py-2.5
                 max-[768px]:w-[94%] max-[768px]:px-[18px] max-[768px]:py-2.5 max-[768px]:mt-4
                 max-[480px]:w-[96%] max-[480px]:px-3.5 max-[480px]:py-2 max-[480px]:mt-3" 
      id="navbar" 
      role="navigation" 
      aria-label="Main navigation"
    >
      {/* Logo */}
      <a href="/" className="flex items-center h-9 max-[768px]:h-7 max-[480px]:h-6" aria-label="TAISYS Home">
        <img src={taisysLogo} alt="TAISYS Logo" className="h-full w-auto object-contain" />
      </a>

      {/* Book a Demo CTA */}
      <a 
        href="#book-demo" 
        className="inline-flex items-center justify-center border-none rounded-full bg-gradient-to-br from-brand-orange to-brand-orange-light text-white font-mulish font-bold text-center cursor-pointer transition-all duration-300 shadow-[0_2px_12px_rgba(242,100,14,0.35)] no-underline whitespace-nowrap
                   px-7 py-2.5 text-base leading-none
                   hover:bg-gradient-to-br hover:from-brand-orange-light hover:to-brand-orange hover:shadow-[0_4px_20px_rgba(242,100,14,0.55)] hover:-translate-y-px active:translate-y-px active:shadow-[0_1px_6px_rgba(242,100,14,0.3)]
                   max-[768px]:px-5 max-[768px]:py-2 max-[768px]:text-sm
                   max-[480px]:px-4 max-[480px]:py-[7px] max-[480px]:text-[13px]" 
        id="btn-book-demo"
      >
        Book a demo
      </a>
    </nav>
  );
};

export default Navbar;
