import React from "react";
import Footer from "@/components/Footer";
import AboutHero from "./about-hero";
import CommitmentCard from "./commitment-card";
import QualityCard from "./quality-card";
import Locations from "./locations";
import Navbar from "@/components/Navbar";
function AboutContainer() {
  return (
    <main className="px-6 pb-[72px] ">
      <Navbar />
      <AboutHero />
      <CommitmentCard />
      <QualityCard />
      <Locations />
      <Footer />
    </main>
  );
}

export default AboutContainer;
