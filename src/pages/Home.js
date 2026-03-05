import React from "react";
import "./Home.css";
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
      <div className="absolute rounded-full bg-[#000dff] pointer-events-none z-10 
           w-[500px] h-[500px] -top-[300px] -right-[200px] blur-[100px] opacity-70
           md:w-[900px] md:h-[900px] md:-top-[650px] md:-right-[450px] md:blur-[180px] md:opacity-85" 
           aria-hidden="true"></div>

      {/* Navbar Component */}
      <Navbar />

      <main>
        {/* ===== HERO SECTION ===== */}
        <section className="hero-section" id="hero">
          {/* Background Image */}
          <div className="hero-bg">
            <img
              src={heroBg}
              alt="TWPASS Alliance - Secure Digital Identity"
              loading="eager"
            />
          </div>

          {/* Hero Content */}
          <div className="hero-content mt-[210px] md:mt-[180px] px-4 md:px-5">
            <h1 className="hero-title text-center text-white 
               text-[max(36px,10vw)] md:text-[clamp(60px,9vw,130px)]
               leading-[1.1] md:leading-[1.4] tracking-wider font-bold">
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