import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section" id="footer">
            {/* Right Bottom Cone Background */}
            <img
                src="/assets/images/Cone_01-12.png"
                alt=""
                className="footer-cone"
                aria-hidden="true"
                loading="lazy"
            />

            {/* Main Footer Content */}
            <div className="footer-top">

                {/* Column 1: Logo + Tagline */}
                <div className="footer-col footer-brand">
                    <a href="/" className="footer-logo-link" aria-label="TAISYS Home">
                        <img
                            src="/assets/images/TAISYS-logo.png"
                            alt="TAISYS Logo"
                            className="footer-logo"
                        />
                    </a>
                    <p className="footer-tagline">
                        Taisys leads with purpose and scale, redefining how identity, security and connectivity come together in a digital-first world
                    </p>
                </div>

                {/* Column 2: Resources */}
                <div className="footer-col">
                    <h4 className="footer-col-heading">Resources</h4>
                    <h5 className="footer-link-group-title">About</h5>
                    <ul className="footer-links">
                        <li><a href="#inside-omnicard">Inside OmniCard</a></li>
                        <li><a href="#our-license">Our License</a></li>
                        <li><a href="#media-awards">Media &amp; Awards</a></li>
                        <li><a href="#career">Career</a></li>
                    </ul>
                    <h5 className="footer-link-group-title footer-link-group-title--spaced">Learn</h5>
                    <ul className="footer-links">
                        <li><a href="#blogs">Blogs</a></li>
                        <li><a href="#knowledge-hub">Knowledge Hub</a></li>
                        <li><a href="#user-guides">User Guides</a></li>
                        <li><a href="#faqs">FAQs</a></li>
                    </ul>
                </div>

                {/* Column 3: Resources (duplicate per Figma) */}
                <div className="footer-col">
                    <h4 className="footer-col-heading">Resources</h4>
                    <h5 className="footer-link-group-title">About</h5>
                    <ul className="footer-links">
                        <li><a href="#inside-omnicard">Inside OmniCard</a></li>
                        <li><a href="#our-license">Our License</a></li>
                        <li><a href="#media-awards">Media &amp; Awards</a></li>
                        <li><a href="#career">Career</a></li>
                    </ul>
                    <h5 className="footer-link-group-title footer-link-group-title--spaced">Learn</h5>
                    <ul className="footer-links">
                        <li><a href="#blogs">Blogs</a></li>
                        <li><a href="#knowledge-hub">Knowledge Hub</a></li>
                        <li><a href="#user-guides">User Guides</a></li>
                        <li><a href="#faqs">FAQs</a></li>
                    </ul>
                </div>

                {/* Column 4: Book a Demo + Support + Download + Social */}
                <div className="footer-col footer-cta-col">
                    {/* Book a Demo */}
                    <div className="footer-cta-block">
                        <h4 className="footer-col-heading">Book a Demo</h4>
                        <a href="mailto:connect@omnicard.in" className="footer-email">
                            <span className="footer-email-icon" aria-hidden="true">✉</span>
                            connect@omnicard.in
                        </a>
                    </div>

                    {/* Support Queries */}
                    <div className="footer-cta-block">
                        <h4 className="footer-col-heading">Support Queries</h4>
                        <a href="mailto:care@omnicard.in" className="footer-email footer-email--plain">
                            care@omnicard.in
                        </a>
                    </div>

                    {/* Download App */}
                    <div className="footer-cta-block">
                        <h4 className="footer-col-heading">Download App</h4>
                        <div className="footer-app-badges">
                            <a href="#app-store" className="footer-badge" aria-label="Download on the App Store">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
                            </a>
                            <a href="#google-play" className="footer-badge" aria-label="Get it on Google Play">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
                            </a>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="footer-social">
                        <a href="#youtube" className="footer-social-link" aria-label="YouTube">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
                        </a>
                        <a href="#facebook" className="footer-social-link" aria-label="Facebook">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.2h3.4l-.5 3.5h-2.8v8.4C19.6 23.1 24 18.1 24 12.1z"/></svg>
                        </a>
                        <a href="#twitter" className="footer-social-link" aria-label="X (Twitter)">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.3 1.3h3.5l-7.6 8.7 8.9 11.8h-7l-5.5-7.2-6.3 7.2H.8l8.1-9.3L.4 1.3h7.1l5 6.6 5.8-6.6zm-1.2 18.4h1.9L7.1 3.2H5L17.1 19.7z"/></svg>
                        </a>
                        <a href="#instagram" className="footer-social-link" aria-label="Instagram">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                        <a href="#linkedin" className="footer-social-link" aria-label="LinkedIn">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Large TAISYS Watermark */}
            <div className="footer-watermark" >
                <div className='footer-watermark-text'>
                    TAISYS
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
