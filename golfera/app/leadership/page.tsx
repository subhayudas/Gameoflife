import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container, SectionHead } from "@/components/sections/Shared";
import { ADVISORS, COUNCIL, FOUNDERS, KAPIL, KAPIL_LINE, type Person } from "@/lib/data";

export const metadata: Metadata = {
  title: "Leadership",
  description: "The founders, advisors and the 72 The League Governing Council behind Game of Life Sports.",
};

function Avatar({ p, size }: { p: Person; size: string }) {
  if (p.img) return <Image src={p.img} alt={`${p.title} ${p.name}`} width={288} height={288} className={`${size} rounded-full object-cover`} />;
  const initials = p.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  return (
    <span aria-hidden className={`${size} serif grid place-items-center rounded-full bg-forest-900 text-3xl text-olive md:text-4xl`}>
      {initials}
    </span>
  );
}

function PersonGrid({ people, size, cols }: { people: Person[]; size: string; cols: string }) {
  return (
    <ul className={`mt-12 grid gap-x-6 gap-y-12 ${cols}`}>
      {people.map((p, i) => (
        <li key={p.name}>
          <Reveal delay={(i % 5) * 60}>
            <Avatar p={p} size={size} />
            <h3 className="serif mt-5 text-2xl leading-tight text-forest-900">
              {p.title} {p.name}
            </h3>
            {p.role && <p className="mt-2 max-w-[16rem] text-[14px] leading-snug text-ink/60">{p.role}</p>}
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export default function LeadershipPage() {
  return (
    <>
      <PageHero eyebrow="Leadership" title="Backed by people who build sport." sub="The founders, advisors and the Governing Council behind Game of Life Sports and 72 The League." />

      <section id="founders" className="bg-paper py-20 md:py-28">
        <Container>
          <SectionHead eyebrow="Founders" title="Founders" />
          <PersonGrid people={FOUNDERS} size="h-40 w-40 md:h-48 md:w-48" cols="grid-cols-2 md:grid-cols-3 lg:grid-cols-4" />
        </Container>
      </section>

      <section id="advisors" className="bg-cream py-20 md:py-28">
        <Container>
          <SectionHead eyebrow="Advisors" title="Advisors" />
          <PersonGrid people={ADVISORS} size="h-32 w-32 md:h-36 md:w-36" cols="grid-cols-2 md:grid-cols-3 lg:grid-cols-5" />
        </Container>
      </section>

      <section id="governing-council" className="bg-paper py-20 md:py-28">
        <Container>
          <SectionHead eyebrow="72 The League" title="Governing Council" />

          <Reveal>
            <figure className="mt-12">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-forest-900 md:aspect-[21/9]">
                <Image src="/img/s1/council.webp" alt="The Governing Council on stage at 72 The League" fill sizes="(min-width:1280px) 1216px, 94vw" className="object-cover object-[50%_55%]" />
              </div>
              <figcaption className="mt-3 text-sm text-ink/60">The Governing Council, in League blazers.</figcaption>
            </figure>
          </Reveal>

          <Reveal className="mt-8">
            <div className="flex items-center gap-5 bg-forest-900 p-5 text-paper md:gap-8 md:p-7">
              <Image src={KAPIL.img!} alt={KAPIL.name} width={200} height={290} className="h-36 w-28 shrink-0 rounded-xl object-cover object-top md:h-52 md:w-40" />
              <div>
                <h3 className="serif text-3xl md:text-5xl">
                  {KAPIL.title} {KAPIL.name}
                </h3>
                <p className="eyebrow mt-3 text-olive">{KAPIL.role}</p>
                <p className="mt-4 hidden max-w-xl text-paper/70 sm:block">{KAPIL_LINE}</p>
              </div>
            </div>
          </Reveal>

          <PersonGrid people={COUNCIL} size="h-32 w-32 md:h-36 md:w-36" cols="grid-cols-2 md:grid-cols-4" />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
