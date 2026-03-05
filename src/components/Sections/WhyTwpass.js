import React, { useEffect, useRef } from "react";

// Import Icons
import enhancedSecurityIcon from "../../assets/icons/Enhanced-Security.svg";
import seamlessInteroperabilityIcon from "../../assets/icons/Seamless-Interoperability.svg";
import elevatedUserTrustIcon from "../../assets/icons/empty-wallet-add.svg";
import simplifiedOnboardingIcon from "../../assets/icons/Simplified-Onboarding.svg";
import scalableServicesIcon from "../../assets/icons/Scalable Services.svg";
import universalTechIcon from "../../assets/icons/Universal & Future-Proof Technology.svg";

// Import Images
import ringDeco from "../../assets/images/Rring.webp";
import chatgptImg from "../../assets/images/ChatGPT Imag.webp";

/* ─── Feature card data ─────────────────────────────────────────── */
const features = [
  {
    id: "enhanced-security",
    icon: enhancedSecurityIcon,
    title: "Enhanced Security",
    tagline: "Security starts at the hardware level →",
    desc: "Security starts at the hardware level. Identity is anchored within a secure eSIM element, providing robust protection against fraud, SMS OTP scams, and a wide range of malicious attacks.",
  },
  {
    id: "seamless-interoperability",
    icon: seamlessInteroperabilityIcon,
    title: "Seamless Interoperability",
    tagline: "Your identity goes wherever you go →",
    desc: "By leveraging eSIM technology, TWPASS integrates seamlessly with service platforms, allowing users to carry their identity wallet anywhere and transact securely worldwide.",
  },
  {
    id: "elevated-user-trust",
    icon: elevatedUserTrustIcon,
    title: "Elevated User Trust",
    tagline: "Trust begins with user control →",
    desc: "TWPASS enables passwordless, data-less login experiences that give users full control over their data, strengthening trust and confidence.",
  },
  {
    id: "simplified-onboarding",
    icon: simplifiedOnboardingIcon,
    title: "Simplified Onboarding",
    tagline: "User onboarding has never been easier →",
    desc: "With TWPASS, users can onboard to your platform quickly and seamlessly.",
  },
  {
    id: "scalable-services",
    icon: scalableServicesIcon,
    title: "Scalable Services",
    tagline: "Scale without limits →",
    desc: "Grow globally and integrate across services using digital identity credentials, payments, and digital assets.",
  },
  {
    id: "universal-technology",
    icon: universalTechIcon,
    title: "Universal & Future-Proof Technology",
    tagline: "Built for today. Ready for what's next →",
    desc: "Security starts at the hardware level. Identity is anchored within a secure eSIM element, providing robust protection against fraud, SMS OTP scams, and a wide range of malicious attacks.",
  },
];

/* ─── Component ────────────────────────────────────────────────── */
export default function WhyTwpass() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const introRef = useRef(null);

  /* Intersection-observer fade-in animations */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-[40px]");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    if (introRef.current) observer.observe(introRef.current);
    cardsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className="relative w-full z-[0]
                 -mt-[120px] p-[100px_0_120px]
                 max-[900px]:mt-0 max-[900px]:pt-10
                 max-[600px]:p-[70px_0_90px]
                 before:content-[''] before:absolute before:top-[10%] before:-right-[5%] before:w-[55vw] before:h-[55vw] before:max-w-[900px] before:max-h-[900px] before:rounded-full before:bg-[radial-gradient(circle_at_center,rgba(30,60,220,0.22)_0%,rgba(10,20,80,0.08)_55%,transparent_75%)] before:pointer-events-none before:z-0" 
      id="why-twpass" 
      ref={sectionRef}
    >

      {/* ── Decorative background elements ── */}
      <img
        className="absolute pointer-events-none user-select-none z-0 w-[1375px] h-[1375px] top-[5%] -left-[320px] object-contain
                   max-[900px]:w-[500px] max-[900px]:h-[500px] max-[900px]:-left-[240px] max-[900px]:-top-10
                   max-[600px]:hidden"
        src={ringDeco}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />

      {/* ── What is TWPASS? ── */}
      <div
        className="relative z-[1] w-[90%] max-w-[95%] mx-auto grid grid-cols-2 max-[900px]:grid-cols-1 gap-[48px] max-[900px]:gap-10 items-center mb-24 max-[900px]:mb-[72px] max-[900px]:pt-[3rem] max-[600px]:pt-[4rem] opacity-0 translate-y-[40px] transition-all duration-[700ms] cubic-bezier(0.4, 0, 0.2, 1)"
        ref={introRef}
        id="what-is-twpass"
      >
        {/* Left: text */}
        <div className="flex flex-col gap-7">
          <h2 className="font-bebas text-[clamp(42px,5vw,80px)] max-[600px]:text-[clamp(36px,10vw,56px)] font-black leading-none tracking-normal text-white m-0">What is TWPASS?</h2>
          <p className="font-mulish text-[clamp(14px,1.15vw,17px)] font-normal leading-[1.4] text-white tracking-normal max-w-[480px] m-0">
            TWPASS Alliance turns secure, eSIM technology into a trusted digital
            identity foundation through industry collaboration. By bringing
            together telecom operators, financial institutions, and service
            providers, the TWPASS Alliance enables interoperable identity
            services that work across platforms and sectors.
          </p>
        </div>

        {/* Right: verify image */}
        <div className="flex items-center justify-end max-[900px]:justify-center relative h-full before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[180%] before:h-[180%] before:bg-[radial-gradient(circle_at_center,rgba(0,80,255,0.55)_0%,rgba(0,30,200,0.25)_30%,transparent_70%)] before:blur-[50px] before:z-[-1] before:pointer-events-none">
          <img
            className="w-[110%] max-w-none max-[900px]:w-full max-[900px]:max-w-[550px] h-auto object-contain drop-shadow-[0_15px_40px_rgba(0,80,255,0.4)] translate-x-[5%] max-[900px]:translate-x-0"
            src={chatgptImg}
            alt="TWPASS Verify – fingerprint and shield visual"
            loading="lazy"
          />
        </div>
      </div>

      {/* ── Why TWPASS ALLIANCE? ── */}
      <div className="relative z-[1] w-[90%] max-w-[95%] mx-auto mt-0">
        <h2 className="font-bebas text-[clamp(46px,6vw,90px)] max-[600px]:text-[clamp(36px,10vw,60px)] font-black leading-none tracking-[0.02em] text-white m-0 mb-14 max-[600px]:mb-9">Why TWPASS ALLIANCE?</h2>

        <div className="grid grid-cols-[repeat(3,1fr)] max-[900px]:grid-cols-[repeat(2,1fr)] max-[600px]:grid-cols-1 gap-[18px] max-[900px]:gap-5 max-[600px]:gap-4" id="wt-features-grid">
          {features.map((feat, i) => (
            <article
              key={feat.id}
              id={`feature-${feat.id}`}
              className="group relative rounded-[29px] max-[600px]:rounded-[20px] p-[10px_20px] md:p-[28px_24px_32px] max-[600px]:p-[24px_20px_28px] min-h-[249px] box-border bg-white/5 backdrop-blur-[40px] border-2 border-transparent transition-all duration-[350ms] cubic-bezier(0.4, 0, 0.2, 1) cursor-default hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] opacity-0 translate-y-[40px]"
              ref={(el) => (cardsRef.current[i] = el)}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Complex Border Effect */}
              <div 
                className="absolute inset-0 rounded-[29px] max-[600px]:rounded-[20px] p-[2px] pointer-events-none z-0 bg-[linear-gradient(135.72deg,rgba(255,255,255,0.27)_8.53%,rgba(255,255,255,0)_60.59%,rgba(255,255,255,0.33)_93.17%)] transition-opacity duration-[350ms] group-hover:opacity-0"
                style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }}
              ></div>
              <div 
                className="absolute inset-0 rounded-[29px] max-[600px]:rounded-[20px] p-[2px] pointer-events-none z-0 bg-[linear-gradient(136.15deg,rgba(255,173,126,0.90)_8.56%,rgba(255,215,192,0.90)_31.42%,rgba(255,174,127,0.90)_69.16%,rgba(255,255,255,0.90)_100%)] opacity-0 transition-opacity duration-[350ms] group-hover:opacity-100"
                style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }}
              ></div>

              {/* Icon */}
              <div className="relative z-[1] w-14 h-14 mb-5 flex items-center justify-center" aria-hidden="true">
                <img src={feat.icon} alt={feat.title + " icon"} width="44" height="44" className="w-11 h-11 object-contain" />
              </div>

              {/* Text */}
              <h3 className="relative z-[1] font-mulish text-[clamp(16px,1.3vw,20px)] font-bold text-white m-0 mb-[10px] leading-[1.25]">{feat.title}</h3>
              <p className="relative z-[1] font-mulish text-[clamp(12px,0.9vw,14px)] font-semibold text-white/55 m-0 mb-[14px] leading-[1.4]">{feat.tagline}</p>
              <p className="relative z-[1] font-mulish text-[clamp(12px,0.85vw,13.5px)] font-normal text-white/55 m-0 leading-[1.65]">{feat.desc}</p>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
