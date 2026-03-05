import React from "react";
import "./Home.css";
import WhyTwpass from "./WhyTwpass";
import JoinUs from "./JoinUs";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";
import taisysLogo from "../assets/images/TAISYS-logo.png";
import heroBg from "../assets/images/TWPASS-ALLIANCE.webp";

function Home() {
  return (
    <div className="home-page flow-root overflow-clip relative w-full bg-[#05060d]">
      {/* Top-Right Blue Glow (Tailwind Responsive) */}
      <div className="absolute rounded-full bg-[#000dff] pointer-events-none z-10 
           w-[500px] h-[500px] -top-[300px] -right-[200px] blur-[100px] opacity-70
           md:w-[900px] md:h-[900px] md:-top-[650px] md:-right-[450px] md:blur-[180px] md:opacity-85" 
           aria-hidden="true"></div>

      {/* Navbar (At root so it sticks across whole page) */}
      <nav className="navbar" id="navbar" role="navigation" aria-label="Main navigation">
        {/* Logo */}
        <a href="/" className="navbar-logo" aria-label="TAISYS Home">
          <img
            src={taisysLogo}
            alt="TAISYS Logo"
          />
        </a>

        {/* Book a Demo CTA */}
        <a href="#book-demo" className="btn-book-demo" id="btn-book-demo">
          Book a demo
        </a>
      </nav>

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

      {/* ===== SECOND MODULE: WHY TWPASS ===== */}
      <WhyTwpass />

      {/* ===== THIRD MODULE: JOIN US ===== */}
      <JoinUs />

      {/* ===== FOURTH MODULE: GET IN TOUCH ===== */}
      <GetInTouch />

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}


export default Home;