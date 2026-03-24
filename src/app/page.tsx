import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatIsThis from "@/components/WhatIsThis";
import Phases from "@/components/Phases";
import Modules from "@/components/Modules";
import Commands from "@/components/Commands";
import Agents from "@/components/Agents";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <WhatIsThis />
      <Phases />
      <Modules />
      <Commands />
      <Agents />
      <Footer />
    </>
  );
}
