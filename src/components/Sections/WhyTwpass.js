import React, { useEffect, useRef } from "react";
import "./WhyTwpass.css";

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
            entry.target.classList.add("wt-visible");
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
    <section className="wt-section" id="why-twpass" ref={sectionRef}>

      {/* ── Decorative background elements ── */}
      <img
        className="wt-deco wt-deco-ring"
        src={ringDeco}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />

      {/* ── What is TWPASS? ── */}
      <div
        className="wt-intro wt-fade-up"
        ref={introRef}
        id="what-is-twpass"
      >
        {/* Left: text */}
        <div className="wt-intro-text">
          <h2 className="wt-intro-heading">What is TWPASS?</h2>
          <p className="wt-intro-desc">
            TWPASS Alliance turns secure, eSIM technology into a trusted digital
            identity foundation through industry collaboration. By bringing
            together telecom operators, financial institutions, and service
            providers, the TWPASS Alliance enables interoperable identity
            services that work across platforms and sectors.
          </p>
        </div>

        {/* Right: verify image */}
        <div className="wt-intro-img-wrap">
          <img
            className="wt-intro-img"
            src={chatgptImg}
            alt="TWPASS Verify – fingerprint and shield visual"
            loading="lazy"
          />
        </div>
      </div>

      {/* ── Why TWPASS ALLIANCE? ── */}
      <div className="wt-why-block">
        <h2 className="wt-why-heading">Why TWPASS ALLIANCE?</h2>

        <div className="wt-grid" id="wt-features-grid">
          {features.map((feat, i) => (
            <article
              key={feat.id}
              id={`feature-${feat.id}`}
              className="wt-card wt-fade-up"
              ref={(el) => (cardsRef.current[i] = el)}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div className="wt-card-icon" aria-hidden="true">
                <img src={feat.icon} alt={feat.title + " icon"} width="44" height="44" />
              </div>

              {/* Text */}
              <h3 className="wt-card-title">{feat.title}</h3>
              <p className="wt-card-tagline">{feat.tagline}</p>
              <p className="wt-card-desc">{feat.desc}</p>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
