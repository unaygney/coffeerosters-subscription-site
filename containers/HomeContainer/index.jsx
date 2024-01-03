import React from "react";
import HomeHero from "./HomeHero";
import CollectionCard from "./HomeHero/CollectionCard";

function HomeContainer() {
  return (
    <main className="px-6">
      <HomeHero />
      <CollectionCard />
    </main>
  );
}

export default HomeContainer;
