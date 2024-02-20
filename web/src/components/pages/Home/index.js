"use client";

import About from "./About";
import AboutSection from "./AboutSection";
import AppSection from "./App";
import Benefits from "./Benefits";
import Faqs from "./Faqs";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import OurPartners from "./OurPartners";
import OurTeam from "./OurTeam";
import Testimonials from "./Testimonials";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <HowItWorks />
      <Benefits />
      <OurTeam />
      <OurPartners />
      <AppSection />
      <Testimonials />
      <Faqs />
      <About />
    </div>
  );
}

export default HomePage;
