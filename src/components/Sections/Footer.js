import React from 'react';

// Import Assets
import footerCone from "../../assets/images/Cone_01-12.png";
import taisysLogo from "../../assets/images/TAISYS-logo.png";
import emailIcon from "../../assets/icons/Email.svg";
import youtubeIcon from "../../assets/icons/youtube.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import xIcon from "../../assets/icons/X_logo_2023_(white) 1.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";

const Footer = () => {
    return (
        <footer className="relative mt-[74px] w-full bg-[#0f0f13] isolate overflow-hidden pt-20" id="footer">
            {/* Right Bottom Cone Background */}
            <img
                src={footerCone}
                alt=""
                className="absolute bottom-0 right-0 w-[800px] h-auto object-contain pointer-events-none select-none z-0 opacity-70 max-[700px]:w-[320px] max-[700px]:opacity-50"
                aria-hidden="true"
                loading="lazy"
            />

            {/* Main Footer Content */}
            <div className="relative z-[1] grid grid-cols-[260px_1fr_1fr_280px] max-[1100px]:grid-cols-2 max-[700px]:grid-cols-1 gap-12 max-[1100px]:gap-10 max-[700px]:gap-9 w-[90%] max-[700px]:w-[92%] max-w-[1200px] mx-auto mt-[68px]">

                {/* Column 1: Logo + Tagline */}
                <div className="flex flex-col gap-5 max-[1100px]:col-span-full">
                    <a href="/" className="inline-block" aria-label="TAISYS Home">
                        <img
                            src={taisysLogo}
                            alt="TAISYS Logo"
                            className="h-9 w-auto object-contain"
                        />
                    </a>
                    <p className="font-mulish text-[14px] font-normal leading-[1.6] tracking-normal text-white/80 m-0 max-w-[357px]">
                        Taisys leads with purpose and scale, redefining how identity, security and connectivity come together in a digital-first world
                    </p>
                </div>

                {/* Column 2: Resources */}
                <div className="flex flex-col">
                    <h4 className="font-bebas text-[22px] font-bold tracking-[0.06em] uppercase text-white m-[0_0_20px_0]">Resources</h4>
                    <h5 className="font-mulish text-[15px] font-bold text-white m-[0_0_12px_0] tracking-normal tracking-wide">About</h5>
                    <ul className="list-none m-0 p-0 flex flex-col gap-2">
                        <li><a href="#inside-omnicard" className="font-mulish text-[14px] font-normal text-white/60 no-underline transition-colors duration-200 hover:text-white leading-[1.4]">Inside OmniCard</a></li>
                        <li><a href="#our-license" className="font-mulish text-[14px] font-normal text-white/60 no-underline transition-colors duration-200 hover:text-white leading-[1.4]">Our License</a></li>
                        <li><a href="#media-awards" className="font-mulish text-[14px] font-normal text-white/60 no-underline transition-colors duration-200 hover:text-white leading-[1.4]">Media &amp; Awards</a></li>
                        <li><a href="#career" className="font-mulish text-[14px] font-normal text-white/60 no-underline transition-colors duration-200 hover:text-white leading-[1.4]">Career</a></li>
                    </ul>
                    <h5 className="font-mulish text-[15px] font-bold text-white m-[30px_0_12px_0] tracking-normal tracking-wide">Learn</h5>
                    <ul className="list-none m-0 p-0 flex flex-col gap-2">
                        <li><a href="#blogs" className="font-mulish text-[14px] font-normal text-white/60 no-underline transition-colors duration-200 hover:text-white leading-[1.4]">Blogs</a></li>
                        <li><a href="#knowledge-hub" className="font-mulish text-[14px] font-normal text-white/60 no-underline transition-colors duration-200 hover:text-white leading-[1.4]">Knowledge Hub</a></li>
                        <li><a href="#user-guides" className="font-mulish text-[14px] font-normal text-white/60 no-underline transition-colors duration-200 hover:text-white leading-[1.4]">User Guides</a></li>
                        <li><a href="#faqs" className="font-mulish text-[14px] font-normal text-white/60 no-underline transition-colors duration-200 hover:text-white leading-[1.4]">FAQs</a></li>
                    </ul>
                </div>

                {/* Column 3: Resources (duplicate per Figma) */}
                <div className="flex flex-col">
                    <h4 className="font-bebas text-[22px] font-bold tracking-[0.06em] uppercase text-white m-[0_0_20px_0]">Resources</h4>
                    <h5 className="font-mulish text-[15px] font-bold text-white m-[0_0_12px_0] tracking-normal tracking-wide">About</h5>
                    <ul className="list-none m-0 p-0 flex flex-col gap-2">
                        <li><a href="#inside-omnicard" className="font-mulish text-[14px] font-normal text-white/60 no-underline transition-colors duration-200 hover:text-white leading-[1.4]">Inside OmniCard</a></li>
                        <li><a href="#our-license" className="font-mulish text-[14px] font-normal text-white/60 no-underline transition-colors duration-200 hover:text-white leading-[1.4]">Our License</a></li>
                        <li><a href="#media-awards" className="font-mulish text-[14px] font-normal text-white/60 no-underline transition-colors duration-200 hover:text-white leading-[1.4]">Media &amp; Awards</a></li>
                        <li><a href="#career" className="font-mulish text-[14px] font-normal text-white/60 no-underline transition-colors duration-200 hover:text-white leading-[1.4]">Career</a></li>
                    </ul>
                    <h5 className="font-mulish text-[15px] font-bold text-white m-[30px_0_12px_0] tracking-normal tracking-wide">Learn</h5>
                    <ul className="list-none m-0 p-0 flex flex-col gap-2">
                        <li><a href="#blogs" className="font-mulish text-[14px] font-normal text-white/60 no-underline transition-colors duration-200 hover:text-white leading-[1.4]">Blogs</a></li>
                        <li><a href="#knowledge-hub" className="font-mulish text-[14px] font-normal text-white/60 no-underline transition-colors duration-200 hover:text-white leading-[1.4]">Knowledge Hub</a></li>
                        <li><a href="#user-guides" className="font-mulish text-[14px] font-normal text-white/60 no-underline transition-colors duration-200 hover:text-white leading-[1.4]">User Guides</a></li>
                        <li><a href="#faqs" className="font-mulish text-[14px] font-normal text-white/60 no-underline transition-colors duration-200 hover:text-white leading-[1.4]">FAQs</a></li>
                    </ul>
                </div>

                {/* Column 4: Book a Demo + Support + Download + Social */}
                <div className="flex flex-col gap-8 max-[1100px]:col-span-full">
                    {/* Book a Demo */}
                    <div className="flex flex-col gap-2.5">
                        <h4 className="font-bebas text-[22px] font-bold tracking-[0.06em] uppercase text-white m-0">Book a Demo</h4>
                        <a href="mailto:connect@omnicard.in" className="inline-flex items-center gap-2 font-mulish text-[14px] font-medium text-white/60 no-underline transition-colors duration-200 hover:text-white">
                            <span className="flex items-center justify-center opacity-80" aria-hidden="true">
                                <img src={emailIcon} alt="Email" className="h-[14px] w-auto object-contain grayscale opacity-70" />
                            </span>
                            connect@omnicard.in
                        </a>
                    </div>

                    {/* Support Queries */}
                    <div className="flex flex-col gap-2.5">
                        <h4 className="font-bebas text-[22px] font-bold tracking-[0.06em] uppercase text-white m-0">Support Queries</h4>
                        <a href="mailto:care@omnicard.in" className="inline-flex items-center gap-0 font-mulish text-[14px] font-medium text-white/60 no-underline transition-colors duration-200 hover:text-white">
                            care@omnicard.in
                        </a>
                    </div>

                    {/* Download App */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-bebas text-[22px] font-bold tracking-[0.06em] uppercase text-white m-0">Download App</h4>
                        <div className="flex flex-row gap-2.5 flex-wrap">
                            <a href="#app-store" className="group" aria-label="Download on the App Store">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-9 w-auto rounded-md block transition-opacity duration-200 group-hover:opacity-85" />
                            </a>
                            <a href="#google-play" className="group" aria-label="Get it on Google Play">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-9 w-auto rounded-md block transition-opacity duration-200 group-hover:opacity-85" />
                            </a>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex flex-row gap-4 items-center flex-wrap mt-1 justify-between mr-12">
                        {[
                            { href: "#youtube", icon: youtubeIcon, label: "YouTube" },
                            { href: "#facebook", icon: facebookIcon, label: "Facebook" },
                            { href: "#twitter", icon: xIcon, label: "X" },
                            { href: "#instagram", icon: instagramIcon, label: "Instagram" },
                            { href: "#linkedin", icon: linkedinIcon, label: "LinkedIn" }
                        ].map((social, i) => (
                            <a 
                                key={i} 
                                href={social.href} 
                                className="flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 opacity-100" 
                                aria-label={social.label}
                            >
                                <img 
                                    src={social.icon} 
                                    alt={social.label} 
                                    style={{ width: '19.957px', height: '13.968px' }}
                                    className="object-contain filter brightness-0 invert" 
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Large TAISYS Watermark */}
            <div className="w-[90%] max-[700px]:w-[92%] max-w-[1200px] mx-auto mt-20 max-[1100px]:mt-12 flex items-end justify-center pointer-events-none select-none relative z-10">
                <svg width="100%" viewBox="0 0 1000 400" className="w-full h-auto translate-y-[8%] overflow-visible">
                    <text 
                        x="0" 
                        y="360" 
                        textLength="1000"
                        lengthAdjust="spacing"
                        style={{
                            fontFamily: '"DIN Condensed", "Bebas Neue", sans-serif',
                            fontWeight: 700,
                            fontSize: '430px',
                            fill: 'rgba(255, 255, 255, 0.08)',
                            textTransform: 'uppercase'
                        }}
                    >
                        TAISYS
                    </text>
                </svg>
            </div>
        </footer>
    );
};

export default Footer;
