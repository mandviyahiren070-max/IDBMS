import React from "react";
import chatgptImg from "../assets/images/ChatGPT Imag.webp";
import useScrollReveal from "../hooks/useScrollReveal";

const WhatIsTwpass = () => {
  const headingRef = useScrollReveal({ delay: 0 });
  const textRef = useScrollReveal({ delay: 120 });
  const imageRef = useScrollReveal({ delay: 80 });

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24" id="what-is-twpass">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

        {/* Left: Text — slides in from left */}
        <div className="flex flex-col gap-5 sm:gap-7">
          <h2
            ref={headingRef}
            className="reveal-blur font-din text-4xl sm:text-6xl lg:text-8xl xl:text-section-title font-bold text-white mb-2 leading-none"
          >
            WHAT IS TWPASS?
          </h2>
          <p
            ref={textRef}
            className="reveal-left text-gray-300 text-sm sm:text-base lg:text-lg xl:text-body-lg leading-relaxed mb-8"
          >
            TWPASS Alliance turns secure, eSIM technology into a trusted digital
            identity foundation through industry collaboration. By bringing
            together telecom operators, financial institutions, and service
            providers, the TWPASS Alliance enables interoperable identity
            services that work across platforms and sectors.
          </p>
        </div>

        {/* Right: Image — slides in from right */}
        <div className="flex items-center justify-center lg:justify-end relative">
          {/* Glow behind image */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-1/2 w-[150%] h-[150%]
                       bg-[radial-gradient(circle_at_center,rgba(0,80,255,0.55)_0%,rgba(0,30,200,0.25)_30%,transparent_70%)]
                       blur-[50px] z-[0] pointer-events-none"
            aria-hidden="true"
          />
          <img
            ref={imageRef}
            className="reveal-right w-full max-w-md lg:max-w-none lg:w-[110%] h-auto object-contain
                       drop-shadow-[0_15px_40px_rgba(0,80,255,0.4)]"
            src={chatgptImg}
            alt="TWPASS Verify – fingerprint and shield visual"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default WhatIsTwpass;
