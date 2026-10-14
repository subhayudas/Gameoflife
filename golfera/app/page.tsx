import Hero from "@/components/Hero";
import CtaBand from "@/components/CtaBand";
import Stats from "@/components/sections/Stats";
import Platform from "@/components/sections/Platform";
import PropertyCards from "@/components/sections/PropertyCards";
import Calendar from "@/components/sections/Calendar";
import BrandPitch from "@/components/sections/BrandPitch";
import LeadershipTeaser from "@/components/sections/LeadershipTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Platform link />
      <PropertyCards />
      <Calendar />
      <BrandPitch />
      <LeadershipTeaser />
      <CtaBand />
    </>
  );
}
