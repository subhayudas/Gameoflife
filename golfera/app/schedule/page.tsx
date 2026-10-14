import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Calendar from "@/components/sections/Calendar";

export const metadata: Metadata = {
  title: "Schedule",
  description: "Qutab Golf League Season 3, the 72 The League player auction and Season 2, and the annual invitationals.",
};

export default function SchedulePage() {
  return (
    <>
      <PageHero eyebrow="Schedule" title="What’s on the calendar." sub="Major properties and milestones across the next two seasons." />
      <Calendar full />
      <CtaBand />
    </>
  );
}
