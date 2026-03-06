import React from "react";
import MainLayout from "../layouts/MainLayout";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhatIsTwpass from "../components/WhatIsTwpass";
import WhyAlliance from "../components/WhyAlliance";
import JoinUs from "../components/JoinUs";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <MainLayout>
      <Navbar />
      <main>
        <Hero />
        <WhatIsTwpass />
        <WhyAlliance />
        <JoinUs />
        <ContactSection />
      </main>
      <Footer />
    </MainLayout>
  );
}

export default Home;