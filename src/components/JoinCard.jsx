import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const JoinCard = ({ title, image, delay = 0 }) => {
  const cardRef = useScrollReveal({ delay });

  return (
    <div
      ref={cardRef}
      className="reveal-up group relative w-full aspect-[3/4] rounded-2xl cursor-pointer overflow-hidden
                 bg-black border-2 border-transparent shadow-lg
                 transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
    >
      {/* Default gradient border */}
      <div
        className="absolute inset-0 rounded-2xl p-[2px] pointer-events-none z-10
                   gradient-border-default transition-opacity duration-350 group-hover:opacity-0"
      />
      {/* Hover gradient border */}
      <div
        className="absolute inset-0 rounded-2xl p-[2px] pointer-events-none z-10
                   gradient-border-hover opacity-0 transition-opacity duration-350 group-hover:opacity-100"
      />

      {/* Image + Overlay */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden z-[1]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover block transition-transform duration-600 ease-out
                     group-hover:scale-[1.06]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(242,100,14,0.55)_0%,transparent_65%),linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.9)_100%)]
                        z-[3] pointer-events-none" />
        {/* Text */}
        <div className="absolute bottom-5 left-5 right-5 z-20">
          <h3 className="font-din text-card-title-lg text-white uppercase transition-transform duration-300 group-hover:translate-x-1">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default JoinCard;
