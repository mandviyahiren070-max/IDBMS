import React, { useRef, useEffect } from "react";

const FeatureCard = ({ icon, title, tagline, description, delay = 0 }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
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
    <article
      ref={cardRef}
      className="group relative rounded-2xl lg:rounded-[29px] p-5 sm:p-6 lg:p-7
                 min-h-[200px] sm:min-h-[240px]
                 bg-white/5 backdrop-blur-[40px] border-2 border-transparent
                 transition-all duration-350 cursor-default
                 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]
                 opacity-0 translate-y-10"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Default gradient border */}
      <div
        className="absolute inset-0 rounded-2xl lg:rounded-[29px] p-[2px] pointer-events-none z-0
                   gradient-border-default transition-opacity duration-350 group-hover:opacity-0"
      />
      {/* Hover gradient border */}
      <div
        className="absolute inset-0 rounded-2xl lg:rounded-[29px] p-[2px] pointer-events-none z-0
                   gradient-border-hover opacity-0 transition-opacity duration-350 group-hover:opacity-100"
      />

      {/* Icon */}
      <div className="relative z-[1] w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-5 flex items-center justify-center" aria-hidden="true">
        <img
          src={icon}
          alt=""
          width="44"
          height="44"
          className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <h3 className="relative z-[1] font-mulish text-base sm:text-lg font-bold text-white mb-2 leading-tight">
        {title}
      </h3>
      <p className="relative z-[1] font-mulish text-xs sm:text-sm font-semibold text-white/55 mb-3 leading-snug">
        {tagline}
      </p>
      <p className="relative z-[1] font-mulish text-xs sm:text-[13px] font-normal text-white/55 leading-relaxed">
        {description}
      </p>
    </article>
  );
};

export default FeatureCard;
