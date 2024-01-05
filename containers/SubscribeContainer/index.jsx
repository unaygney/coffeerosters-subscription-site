import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubscribeHero from "./subscribe-hero";
import Howwork from "./Howwork";
import OrderCoffee from "./OrderCoffee";
function SubscribeContainer() {
  return (
    <main className="px-6 pb-[72px] ">
      <Navbar />
      <SubscribeHero />
      <Howwork />
      <OrderCoffee />
      <Footer />
    </main>
  );
}

export default SubscribeContainer;
