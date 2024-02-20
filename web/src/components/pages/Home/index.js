"use client";

import About from "./About";
import AboutSection from "./AboutSection";
import Benefits from "./Benefits";
import Faqs from "./Faqs";
import HeroSection from "./HeroSection";
import OurPartners from "./OurPartners";
import Testimonials from "./Testimonials";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Benefits />
      <OurPartners />
      <Testimonials />
      <Faqs />
      <About />
    </div>
  );
}

export default HomePage;
