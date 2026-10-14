import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import Gallery from "@/components/sections/Gallery";
import { Container, SectionHead } from "@/components/sections/Shared";
import { AWARD } from "@/lib/data";

export const metadata: Metadata = {
  title: "Media",
  description: "The Season 1 photo archive, the Sports Startup of the Year award, press and broadcast coverage, and the docuseries.",
};

const COVERAGE = [
  { value: "86M", label: "Impressions, 72 Season 1" },
  { value: "29M", label: "Cumulative social reach" },
  { value: "56", label: "Articles in national, online and regional press" },
  { value: "₹3 Cr", label: "PR value" },
];

const CHIPS = [
  { href: "#gallery", label: "Gallery" },
  { href: "#award", label: "Award" },
  { href: "#press", label: "Press & broadcast" },
  { href: "#docuseries", label: "Docuseries" },
];

export default function MediaPage() {
  return (
    <>
      <PageHero eyebrow="Media" title="The league, on camera and in print." sub="Photographs, recognition, coverage and the stories we are telling.">
        <ul className="mt-8 flex flex-wrap gap-2">
          {CHIPS.map((c) => (
            <li key={c.href}>
              <a href={c.href} className="inline-block rounded-sm border border-paper/30 px-4 py-2 text-[13px] font-medium text-paper transition hover:bg-paper/10">
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      <Gallery />

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

      <section id="press" className="bg-forest-900 py-20 text-paper md:py-28">
        <Container>
          <SectionHead dark eyebrow="Press and broadcast" title="Covered nationally, broadcast on Eurosport India." />
          <Reveal>
            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-paper/15 pt-10 lg:grid-cols-4">
              {COVERAGE.map((c) => (
                <div key={c.label}>
                  <dt className="serif text-5xl text-olive md:text-6xl">{c.value}</dt>
                  <dd className="mt-3 text-sm text-paper/70">{c.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <Reveal>
              <h3 className="serif text-3xl">Press</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-paper/70">
                National business and sports press, including ANI and Tribune News Service, covered the PGTI launch of 72 The League. Qutab Golf League has been covered by ANI, ABP Live, Mid-Day, Dainik Bhaskar and Devdiscourse, among others.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h3 className="serif text-3xl">Broadcast</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-paper/70">
                72 The League Season 1 aired on Eurosport India across four episodes of about 52 minutes, with 44K to 95K viewers per episode. The Qutab Golf League player auction drew 100K+ live-stream views.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="docuseries" className="bg-paper py-20 md:py-28">
        <Container>
          <SectionHead
            eyebrow="Docuseries"
            title="The story behind the league."
            sub="The Qutab Golf League Season 2 docuseries, produced by The Filmy Monks, streams on Amazon Prime. More long-form content follows."
          />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
