import React from "react";
import Footer from "@/components/Footer";
import AboutHero from "./about-hero";
import CommitmentCard from "./commitment-card";
function AboutContainer() {
  return (
    <main className="px-6 pb-[72px] ">
      <AboutHero />
      <CommitmentCard />
      <Footer />
    </main>
  );
}

export default AboutContainer;
