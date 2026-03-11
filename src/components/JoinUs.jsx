import React from "react";
import JoinCard from "./JoinCard";
import useScrollReveal from "../hooks/useScrollReveal";

// Import Assets
import joinUsCone from "../assets/images/Cone_01-9.png";
import mnoImg from "../assets/images/MNO.webp";
import serviceProviderImg from "../assets/images/Servic-Provider.webp";
import paymentGatewayImg from "../assets/images/Payment-Gateway.webp";
import governmentImg from "../assets/images/Government.webp";

const cards = [
  { title: "MNO", img: mnoImg },
  { title: "Service Provider", img: serviceProviderImg },
  { title: "Payment Gateway", img: paymentGatewayImg },
  { title: "Government", img: governmentImg },
];

const JoinUs = () => {
  const headingRef = useScrollReveal({ delay: 0 });
  const btnRef = useScrollReveal({ delay: 150 });

  return (
    <section
      className="relative w-full py-16 sm:py-20 lg:py-24 z-[1]"
      id="join-us"
    >
      {/* Bottom-left radial glow */}
      <div
        className="absolute -bottom-[20%] -left-[10%] w-[70%] h-[80%]
                   bg-[radial-gradient(ellipse_at_center,rgba(12,38,140,0.4)_0%,transparent_60%)]
                   pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Cone decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={joinUsCone}
          alt=""
          className="absolute right-0 top-1/4 lg:top-[-72%] w-[500px] lg:w-[780px] xl:w-[900px] h-auto object-contain opacity-80"
          aria-hidden="true"
          loading="lazy"
        />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 sm:mb-16 gap-6">
          <h2
            ref={headingRef}
            className="reveal-blur font-din text-5xl sm:text-7xl lg:text-8xl xl:text-section-title font-bold text-white uppercase leading-none"
          >
            Join Us
          </h2>
          <button
            ref={btnRef}
            className="reveal-scale btn-primary px-8 py-3 text-sm tracking-wider uppercase font-bold"
          >
            Learn more
          </button>
        </div>

        {/* Cards Grid — staggered reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {cards.map((card, i) => (
            <JoinCard key={i} title={card.title} image={card.img} delay={i * 110} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
