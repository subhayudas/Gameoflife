import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import Platform from "@/components/sections/Platform";
import { Container, SectionHead } from "@/components/sections/Shared";
import Stats from "@/components/sections/Stats";
import { AWARD, FAN_LAYER, GRASSROOTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Game of Life Sports creates, owns and grows sports IP: league IP, grassroots partnerships and a fan layer, starting with golf.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="We create, own and grow sports IP." sub="Game of Life Sports is a sport-tainment company, starting with golf." />

      <section className="bg-paper py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow text-forest-700">Our mission</span>
            <h2 className="serif mt-4 text-[clamp(2.2rem,4.6vw,3.6rem)] text-forest-900">Properties built like proper sports assets.</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-base leading-relaxed text-ink/75 md:text-lg">
              <p>
                Incorporated in 2023, Game of Life Sports builds and operates sports IP across professional and amateur golf, and creates pathways for the wider golf ecosystem to grow.
              </p>
              <p>
                We are a sport-tainment platform built around the league format: promoting talent, engaging a new generation of fans with technology and format innovation, and creating lasting value for everyone in the ecosystem.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <Platform eyebrow="Three pillars" title="League IP, grassroots and the fan layer." sub="Three connected pillars that turn a golf league into a lasting sports property." />
      <Stats />

      <section id="grassroots" className="bg-paper py-20 md:py-28">
        <Container>
          <SectionHead
            eyebrow="Grassroots"
            title="Growing the game from the bottom up."
            sub="10-year partnerships with State Golf Associations to develop golf and create new pathways for junior and grassroots programmes."
          />
          <ul className="mt-12 grid border-t border-forest-900/20 sm:grid-cols-2 lg:grid-cols-4">
            {GRASSROOTS.map((g, i) => (
              <li key={g.title} className="border-b border-forest-900/20 sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0">
                <Reveal delay={i * 80} className="h-full p-6 md:p-8">
                  <h3 className="serif text-2xl text-forest-900">{g.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{g.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="fan-layer" className="bg-forest-900 py-20 text-paper md:py-28">
        <Container>
          <SectionHead dark eyebrow="The fan layer" title="Taking the league to the fan." sub="Technology and content that turn a two-week league into a year-round relationship." />
          <ul className="mt-12 grid gap-px overflow-hidden border border-paper/15 bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
            {FAN_LAYER.map((f, i) => (
              <li key={f.title} className="bg-forest-900">
                <Reveal delay={i * 80} className="h-full p-6 md:p-8">
                  <span className="serif text-xl text-olive">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="serif mt-8 text-3xl">{f.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-paper/65">{f.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="award" className="bg-cream py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="grid items-center gap-8 bg-paper p-6 ring-1 ring-forest-900/10 md:grid-cols-[auto_1fr] md:gap-12 md:p-10">
              <Image src={AWARD.img} alt="Game of Life Sports receiving the Sports Startup of the Year award" width={200} height={355} className="h-64 w-36 rounded-xl object-cover object-[50%_35%] md:h-80 md:w-44" />
              <div>
                <span className="eyebrow text-forest-700">{AWARD.eyebrow}</span>
                <h2 className="serif mt-4 text-[clamp(2.2rem,4.6vw,3.6rem)] text-forest-900">{AWARD.title}</h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">{AWARD.line}</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
