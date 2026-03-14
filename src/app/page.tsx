import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
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
      <Phases />
      <Modules />
      <Commands />
      <Agents />
      <Footer />
    </>
  );
}
