import React from "react";
import Navbar from "@/components/Navbar";
import HomeHero from "./HomeHero";
import CollectionCard from "./CollectionCard";
import ChooseCard from "./ChooseCard";
import Howtowork from "./How-to-work";
import Footer from "@/components/Footer";
function HomeContainer() {
  return (
    <main className="px-6 pb-[72px] ">
      <Navbar />
      <HomeHero />
      <CollectionCard />
      <ChooseCard />
      <Howtowork />
      <Footer />
    </main>
  );
}

export default HomeContainer;
