import React from "react";
import FeatureCard from "./FeatureCard";

// Import Icons
import enhancedSecurityIcon from "../assets/icons/Enhanced-Security.svg";
import seamlessInteroperabilityIcon from "../assets/icons/Seamless-Interoperability.svg";
import elevatedUserTrustIcon from "../assets/icons/empty-wallet-add.svg";
import simplifiedOnboardingIcon from "../assets/icons/Simplified-Onboarding.svg";
import scalableServicesIcon from "../assets/icons/Scalable Services.svg";
import universalTechIcon from "../assets/icons/Universal & Future-Proof Technology.svg";

// Import decorative image
import ringDeco from "../assets/images/Rring.webp";

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

const WhyAlliance = () => {
  return (
    <section
      className="relative w-full py-12 sm:py-16 lg:py-20 z-0"
      id="why-twpass"
    >
      {/* Background radial glow */}
      <div
        className="absolute top-[10%] -right-[5%] w-[55vw] h-[55vw] max-w-[900px] max-h-[900px] rounded-full
                   bg-[radial-gradient(circle_at_center,rgba(30,60,220,0.22)_0%,rgba(10,20,80,0.08)_55%,transparent_75%)]
                   pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Ring decoration */}
      <img
        className="absolute pointer-events-none select-none z-0 hidden sm:block w-[400px] lg:w-[900px] top-[-65%] object-contain"
        src={ringDeco}
        alt=""
        aria-hidden="true" 
        loading="lazy"
      />

      <div className="section-container relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-din text-4xl sm:text-6xl lg:text-8xl xl:text-section-title font-bold text-white mb-6 uppercase leading-none">
            Why TWPASS Alliance?
          </h2>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          id="wt-features-grid"
        >
          {features.map((feat, i) => (
            <FeatureCard
              key={feat.id}
              icon={feat.icon}
              title={feat.title}
              tagline={feat.tagline}
              description={feat.desc}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAlliance;
