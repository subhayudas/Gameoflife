import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/sections/Stats";
import Platform from "@/components/sections/Platform";
import Properties from "@/components/sections/Properties";
import Season from "@/components/sections/Season";
import Partner from "@/components/sections/Partner";
import Calendar from "@/components/sections/Calendar";
import Leadership from "@/components/sections/Leadership";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <Platform />
      <Properties />
      <Season />
      <Partner />
      <Calendar />
      <Leadership />
      <Gallery />
      <Contact />
    </main>
  );
}
