import React from "react";
import "./Home.css";
import WhyTwpass from "./WhyTwpass";
import JoinUs from "./JoinUs";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home-page">
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section" id="hero">
        {/* Background Image */}
        <div className="hero-bg">
          <img
            src="/assets/images/TWPASS-ALLIANCE.webp"
            alt="TWPASS Alliance - Secure Digital Identity"
            loading="eager"
          />
        </div>

        {/* Top-Right Glow Effect */}
        <div className="hero-glow-top-right" aria-hidden="true"></div>

        {/* Navbar */}
        <nav className="navbar" id="navbar" role="navigation" aria-label="Main navigation">
          {/* Logo */}
          <a href="/" className="navbar-logo" aria-label="TAISYS Home">
            <img
              src="/assets/images/TAISYS-logo.png"
              alt="TAISYS Logo"
            />
          </a>

          {/* Book a Demo CTA */}
          <a href="#book-demo" className="btn-book-demo" id="btn-book-demo">
            Book a demo
          </a>
        </nav>

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">TWPASS ALLIANCE</h1>
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