import React from 'react';

// Import Assets
import footerCone from "../assets/images/Cone_01-12.png";
import taisysLogo from "../assets/images/TAISYS-logo.png";
import emailIcon from "../assets/icons/Email.svg";
import youtubeIcon from "../assets/icons/youtube.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import xIcon from "../assets/icons/X_logo_2023_(white) 1.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

const Footer = () => {
    return (
        <footer
            id="footer"
            style={{ position: 'relative', marginTop: '74px', width: '100%', backgroundColor: '#35353550', overflow: 'hidden', paddingTop: '80px' }}
        >
            {/* Right Bottom Cone Background */}
            <img
                src={footerCone}
                alt=""
                aria-hidden="true"
                loading="lazy"
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '1400px',
                    height: 'auto',
                    objectFit: 'contain',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    zIndex: 0,
                    opacity: 1,
                }}
            />

            {/* Main Footer Content — 4-column grid via inline style */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'grid',
                    gridTemplateColumns: '260px 1fr 1fr 280px',
                    gap: '48px',
                    width: '90%',
                    maxWidth: '1200px',
                    margin: '68px auto 0',
                }}
                className="footer-grid"
            >
                {/* Column 1: Logo + Tagline */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <a href="/" aria-label="TAISYS Home" style={{ display: 'inline-block' }}>
                        <img src={taisysLogo} alt="TAISYS Logo" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
                    </a>
                    <p style={{ fontFamily: 'Mulish, sans-serif', fontSize: '14px', fontWeight: 400, lineHeight: 1.6, color: 'rgba(255,255,255,0.80)', margin: 0, maxWidth: '357px' }}>
                        Taisys leads with purpose and scale, redefining how identity, security and connectivity come together in a digital-first world
                    </p>
                </div>

                {/* Column 2: Resources */}
                <ResourceColumn />

                {/* Column 3: Resources (duplicate per Figma) */}
                <ResourceColumn />

                {/* Column 4: Book a Demo + Support + Download + Social */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    {/* Book a Demo */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <h4 className="font-bebas" style={{ fontSize: '22px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', margin: 0 }}>
                            Book a Demo
                        </h4>
                        <a
                            href="mailto:connect@omnicard.in"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'Mulish, sans-serif', fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.60)', textDecoration: 'none' }}
                            onMouseOver={e => e.currentTarget.style.color = 'rgba(255,255,255,1)'}
                            onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.60)'}
                        >
                            <img src={emailIcon} alt="" aria-hidden="true" style={{ height: '14px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.6, flexShrink: 0 }} />
                            connect@omnicard.in
                        </a>
                    </div>

                    {/* Support Queries */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <h4 className="font-bebas" style={{ fontSize: '22px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', margin: 0 }}>
                            Support Queries
                        </h4>
                        <a
                            href="mailto:care@omnicard.in"
                            style={{ fontFamily: 'Mulish, sans-serif', fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.60)', textDecoration: 'none' }}
                            onMouseOver={e => e.currentTarget.style.color = 'rgba(255,255,255,1)'}
                            onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.60)'}
                        >
                            care@omnicard.in
                        </a>
                    </div>

                    {/* Download App */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <h4 className="font-bebas" style={{ fontSize: '22px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', margin: 0 }}>
                            Download App
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap' }}>
                            <a href="#app-store" aria-label="Download on the App Store">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                    alt="App Store"
                                    style={{ height: '36px', width: 'auto', borderRadius: '6px', display: 'block' }}
                                />
                            </a>
                            <a href="#google-play" aria-label="Get it on Google Play">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Google Play"
                                    style={{ height: '36px', width: 'auto', borderRadius: '6px', display: 'block' }}
                                />
                            </a>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
                        {[
                            { href: "#youtube",   icon: youtubeIcon,   label: "YouTube"   },
                            { href: "#facebook",  icon: facebookIcon,  label: "Facebook"  },
                            { href: "#twitter",   icon: xIcon,         label: "X"         },
                            { href: "#instagram", icon: instagramIcon, label: "Instagram" },
                            { href: "#linkedin",  icon: linkedinIcon,  label: "LinkedIn"  },
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                aria-label={social.label}
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s' }}
                                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <img
                                    src={social.icon}
                                    alt={social.label}
                                    style={{ width: '24px', height: '24px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Large TAISYS Watermark */}
            <div
                style={{
                    width: '90%',
                    maxWidth: '1200px',
                    margin: '50px auto 0',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    position: 'relative',
                    zIndex: 10,
                }}
            >
                <svg width="100%" viewBox="0 0 1000 400" style={{ width: '100%', height: 'auto', transform: 'translateY(8%)', overflow: 'visible' }}>
                    <text
                        x="0"
                        y="360"
                        textLength="1000"
                        lengthAdjust="spacing"
                        style={{
                            fontFamily: '"DIN Condensed", "Bebas Neue", sans-serif',
                            fontWeight: 500,
                            fontSize: '430px',
                            fill: '#ffffff34',
                            textTransform: 'uppercase',
                        }}
                    >
                        TAISYS
                    </text>
                </svg>
            </div>

            {/* Responsive styles */}
            <style>{`
                @media (max-width: 1100px) {
                    .footer-grid {
                        grid-template-columns: 1fr 1fr !important;
                        gap: 40px !important;
                    }
                    .footer-grid > *:first-child,
                    .footer-grid > *:last-child {
                        grid-column: 1 / -1;
                    }
                }
                @media (max-width: 700px) {
                    .footer-grid {
                        grid-template-columns: 1fr !important;
                        gap: 36px !important;
                        width: 92% !important;
                    }
                }
                footer#footer a {
                    color: rgba(255,255,255,0.60) !important;
                }
                footer#footer a:visited {
                    color: rgba(255,255,255,0.60) !important;
                }
                footer#footer a:hover {
                    color: rgba(255,255,255,1) !important;
                }
            `}</style>
        </footer>
    );
};

/* Extracted resource column to avoid repetition */
const ResourceColumn = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h4 className="font-bebas" style={{ fontSize: '22px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', margin: '0 0 20px 0' }}>
            Resources
        </h4>
        <h5 style={{ fontFamily: 'Mulish, sans-serif', fontSize: '15px', fontWeight: 500, color: '#fff', margin: '0 0 12px 0', letterSpacing: '0.04em' }}>
            About
        </h5>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['Inside OmniCard', 'Our License', 'Media & Awards', 'Career'].map(item => (
                <li key={item}>
                    <a
                        href={`#${item.toLowerCase().replace(/\s+/g, '-').replace('&', '')}`}
                        style={{ fontFamily: 'Mulish, sans-serif', fontSize: '14px', fontWeight: 400, textDecoration: 'none', lineHeight: 1.4, color: 'rgba(255,255,255,0.60)' }}
                        onMouseOver={e => e.currentTarget.style.color = 'rgba(255,255,255,1)'}
                        onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.60)'}
                    >
                        {item}
                    </a>
                </li>
            ))}
        </ul>
        <h5 style={{ fontFamily: 'Mulish, sans-serif', fontSize: '15px', fontWeight: 700, color: '#fff', margin: '30px 0 12px 0', letterSpacing: '0.04em' }}>
            Learn
        </h5>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['Blogs', 'Knowledge Hub', 'User Guides', 'FAQs'].map(item => (
                <li key={item}>
                    <a
                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                        style={{ fontFamily: 'Mulish, sans-serif', fontSize: '14px', fontWeight: 400, textDecoration: 'none', lineHeight: 1.4, color: 'rgba(255,255,255,0.60)' }}
                        onMouseOver={e => e.currentTarget.style.color = 'rgba(255,255,255,1)'}
                        onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.60)'}
                    >
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default Footer;
