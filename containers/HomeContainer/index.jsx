import React from "react";
import HomeHero from "./HomeHero";
import CollectionCard from "./CollectionCard";
import ChooseCard from "./ChooseCard";
import Howtowork from "./How-to-work";

function HomeContainer() {
  return (
    <main className="px-6">
      <HomeHero />
      <CollectionCard />
      <ChooseCard />
      <Howtowork />
    </main>
  );
}

export default HomeContainer;
