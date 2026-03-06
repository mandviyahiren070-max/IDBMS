import React from "react";
import heroBg from "../assets/images/TWPASS-ALLIANCE.webp";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen min-h-[500px] sm:min-h-[600px] overflow-hidden flex flex-col"
      id="hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/50 after:via-black/20 after:to-transparent after:z-[1]">
        <img
          src={heroBg}
          alt="TWPASS Alliance - Secure Digital Identity"
          loading="eager"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Bottom Cinematic Fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-b from-transparent via-brand-dark/65 to-brand-dark z-[5] pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-start text-center mt-40 sm:mt-44 lg:mt-48 px-4">
        <h1
          className="hero-glow font-din text-white select-none animate-hero-combined opacity-0
                     text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-hero
                     leading-none tracking-wider font-bold"
        >
          TWPASS ALLIANCE
        </h1>
      </div>
    </section>
  );
};

export default Hero;
