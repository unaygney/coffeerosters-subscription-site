import React from "react";
import HomeHero from "./HomeHero";
import CollectionCard from "./CollectionCard";
import ChooseCard from "./ChooseCard";

function HomeContainer() {
  return (
    <main className="px-6">
      <HomeHero />
      <CollectionCard />
      <ChooseCard />
      <p>deneme</p>
    </main>
  );
}

export default HomeContainer;
