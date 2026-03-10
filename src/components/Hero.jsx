import React, { useRef } from "react";
import heroBg from "../assets/images/TWPASS-ALLIANCE.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container = useRef();
  const boxRef = useRef();
  const leftLabelRef = useRef();
  const rightLabelRef = useRef();
  const bottomLabelRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 1,
      },
    });

    tl.to(boxRef.current, {
      scale: 2.5,
      borderRadius: "0px",
      duration: 1,
      ease: "power2.inOut",
    })
    .to([leftLabelRef.current, rightLabelRef.current, bottomLabelRef.current], {
      opacity: 0,
      y: (i) => (i === 2 ? 50 : -50),
      duration: 0.5,
      ease: "power2.inOut",
    }, 0);
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative w-full h-screen overflow-hidden bg-brand-dark flex items-center justify-center"
      id="hero"
    >
      {/* Background/Base layer */}
      <div className="absolute inset-0 z-0 bg-brand-dark" />

      {/* Labels */}
      <div className="absolute inset-0 z-20 pointer-events-none p-8 sm:p-12 lg:p-20 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div 
            ref={leftLabelRef}
            className="max-w-[300px] text-3xl sm:text-4xl lg:text-5xl font-din font-bold text-white leading-tight"
          >
            De-identified<br />Mobile Identity
          </div>
          <div 
            ref={rightLabelRef}
            className="max-w-[300px] text-right text-3xl sm:text-4xl lg:text-5xl font-din font-bold text-white leading-tight"
          >
            For an<br />Agentic AI<br />Ready Future
          </div>
        </div>
        
        <div className="flex justify-start items-end">
          <div 
            ref={bottomLabelRef}
            className="text-lg sm:text-xl font-mulish font-medium text-white/80"
          >
            Visit Us MWC26 Barcelona<br />Hall 5 Stand: 5A61
          </div>
        </div>
      </div>

      {/* Central Animated Box */}
      <div 
        ref={boxRef}
        className="relative z-10 w-[60vw] h-[60vh] sm:w-[50vw] sm:h-[50vh] lg:w-[40vw] lg:h-[40vh] rounded-3xl overflow-hidden shadow-2xl"
      >
        <img
          src={heroBg}
          alt="TWPASS Alliance"
          className="w-full h-full object-cover"
        />
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
