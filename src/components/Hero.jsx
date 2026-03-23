import React from "react";
import heroBg from "../assets/images/TWPASS-ALLIANCE.webp";
import imagee from "../assets/images/image.png";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen min-h-[500px] sm:min-h-[600px] overflow-hidden flex flex-col"
      id="hero"
    >
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(5, 6, 13)" // brand-dark
        gradientBackgroundEnd="rgb(10, 13, 26)"   // brand-dark-card
        firstColor="0, 13, 255"      // deep electric blue
        secondColor="255, 120, 40"   // glowing amber
        thirdColor="0, 13, 255"      // deep blue
        fourthColor="255, 120, 40"   // glowing amber
        fifthColor="0, 13, 255"      // deep blue
        containerClassName="absolute inset-0 z-0"
      >
        {/* Main Hero Content & Image Container */}
        <div className="absolute inset-0 z-30 flex flex-col items-center hero-content-padding px-4">
          {/* Title at the top */}
          <div className="relative z-40 text-center">
            <h1
              className="hero-glow font-din select-none animate-hero-combined
                         hero-title-responsive leading-none tracking-wider font-bold"
            >
              TWPASS ALLIANCE
            </h1>
          </div>

          {/* Prominent Image at the bottom */}
          <div className="relative w-full  flex-1 flex justify-center items-end overflow-hidden">
            <img
              src={imagee}
              alt="TWPASS Security Visualization"
              loading="eager"
              className="hero-image-responsive"
            />
          </div>
        </div>
      </BackgroundGradientAnimation>

      {/* Enhanced Bottom Cinematic Fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-b from-transparent via-brand-dark/30 to-brand-dark z-[15] pointer-events-none"
        aria-hidden="true"
      />

    </section>
  );
};

export default Hero;


