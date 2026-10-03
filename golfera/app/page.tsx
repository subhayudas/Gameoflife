import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Platform from "@/components/sections/Platform";
import Properties from "@/components/sections/Properties";
import Partner from "@/components/sections/Partner";
import Calendar from "@/components/sections/Calendar";
import Leadership from "@/components/sections/Leadership";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Platform />
      <Properties />
      <Partner />
      <Calendar />
      <Leadership />
      <Contact />
    </main>
  );
}
