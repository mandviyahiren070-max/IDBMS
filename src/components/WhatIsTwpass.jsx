import React, { useRef, useEffect } from "react";
import chatgptImg from "../assets/images/ChatGPT Imag.webp";

const WhatIsTwpass = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-10");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24" id="what-is-twpass">
      <div
        ref={sectionRef}
        className="section-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center
                   opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        {/* Left: Text */}
        <div className="flex flex-col gap-5 sm:gap-7">
            <h2 className="font-din text-4xl sm:text-6xl lg:text-8xl xl:text-section-title font-bold text-white mb-6 leading-none">
              WHAT IS TWPASS?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg xl:text-body-lg leading-relaxed mb-8">
            TWPASS Alliance turns secure, eSIM technology into a trusted digital
            identity foundation through industry collaboration. By bringing
            together telecom operators, financial institutions, and service
            providers, the TWPASS Alliance enables interoperable identity
            services that work across platforms and sectors.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex items-center justify-center lg:justify-end relative">
          {/* Glow behind image */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%]
                       bg-[radial-gradient(circle_at_center,rgba(0,80,255,0.55)_0%,rgba(0,30,200,0.25)_30%,transparent_70%)]
                       blur-[50px] z-[-1] pointer-events-none"
            aria-hidden="true"
          />
          <img
            className="w-full max-w-md lg:max-w-none lg:w-[110%] h-auto object-contain
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
