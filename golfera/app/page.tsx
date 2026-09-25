import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import About from "@/components/sections/About";
import Properties from "@/components/sections/Properties";
import Calendar from "@/components/sections/Calendar";
import Audience from "@/components/sections/Audience";
import Ecosystem from "@/components/sections/Ecosystem";
import Leadership from "@/components/sections/Leadership";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <StatsStrip />
      <About />
      <Properties />
      <Calendar />
      <Audience />
      <Ecosystem />
      <Leadership />
      <Contact />
    </main>
  );
}
