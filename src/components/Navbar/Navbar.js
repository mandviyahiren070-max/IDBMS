import React from "react";
import "./Navbar.css";
import taisysLogo from "../../assets/images/TAISYS-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar" role="navigation" aria-label="Main navigation">
      {/* Logo */}
      <a href="/" className="navbar-logo" aria-label="TAISYS Home">
        <img src={taisysLogo} alt="TAISYS Logo" />
      </a>

      {/* Book a Demo CTA */}
      <a href="#book-demo" className="btn-book-demo" id="btn-book-demo">
        Book a demo
      </a>
    </nav>
  );
};

export default Navbar;
