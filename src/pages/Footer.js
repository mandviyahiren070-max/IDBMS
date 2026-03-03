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
                            <span className="footer-email-icon" aria-hidden="true">
                                <img src="/assets/icons/Email.svg" alt="Email" />
                            </span>
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
                            <img src="/assets/icons/youtube.svg" alt="YouTube" />
                        </a>
                        <a href="#facebook" className="footer-social-link" aria-label="Facebook">
                            <img src="/assets/icons/facebook.svg" alt="Facebook" />
                        </a>
                        <a href="#twitter" className="footer-social-link" aria-label="X (Twitter)">
                            <img src="/assets/icons/X_logo_2023_(white)%201.svg" alt="X" />
                        </a>
                        <a href="#instagram" className="footer-social-link" aria-label="Instagram">
                            <img src="/assets/icons/instagram.svg" alt="Instagram" />
                        </a>
                        <a href="#linkedin" className="footer-social-link" aria-label="LinkedIn">
                            <img src="/assets/icons/linkedin.svg" alt="LinkedIn" />
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
