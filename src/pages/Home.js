import React from "react";
import Navbar from "../components/Navbar/Navbar";
import WhyTwpass from "../components/Sections/WhyTwpass";
import JoinUs from "../components/Sections/JoinUs";
import GetInTouch from "../components/Sections/GetInTouch";
import Footer from "../components/Sections/Footer";
import heroBg from "../assets/images/TWPASS-ALLIANCE.webp";

function Home() {
  return (
    <div className="home-page flow-root overflow-clip relative w-full bg-[#05060d]">
      {/* Top-Right Blue Glow (Tailwind Responsive) */}
      <div className="absolute rounded-full bg-brand-blue pointer-events-none z-10 
           w-[500px] h-[500px] -top-[300px] -right-[200px] blur-[100px] opacity-70
           md:w-[900px] md:h-[900px] md:-top-[650px] md:-right-[450px] md:blur-[180px] md:opacity-85" 
           aria-hidden="true"></div>

      {/* Navbar Component */}
      <Navbar />

      <main>
        {/* ===== HERO SECTION ===== */}
        <section className="relative w-full h-screen min-h-[600px] overflow-clip flex flex-col" id="hero">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/50 after:via-black/20 after:to-transparent after:z-[1]">
            <img
              src={heroBg}
              alt="TWPASS Alliance - Secure Digital Identity"
              loading="eager"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Bottom Cinematic Fade */}
          <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-b from-transparent via-[#05060d]/65 to-[#05060d] z-[5] pointer-events-none" aria-hidden="true"></div>

          {/* Hero Content */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-start text-center mt-[210px] md:mt-[180px] px-4 md:px-5">
            <h1 className="hero-title text-center text-white 
               text-[max(36px,10vw)] md:text-[clamp(60px,9vw,130px)]
               leading-[1.1] md:leading-[1.4] tracking-wider font-bold font-bebas select-none animate-hero-combined opacity-0"
               style={{
                 textShadow: '3px 6px 5.5px #F2640E, 0 0 40px rgba(242, 100, 14, 0.45), 0 0 80px rgba(242, 100, 14, 0.2)'
               }}>
              TWPASS ALLIANCE
            </h1>
          </div>
        </section>

        {/* ===== SECTIONS ===== */}
        <WhyTwpass />
        <JoinUs />
        <GetInTouch />
      </main>

      <Footer />
    </div>
  );
}

export default Home;