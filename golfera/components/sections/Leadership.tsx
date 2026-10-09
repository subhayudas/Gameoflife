import Image from "next/image";
import { AWARD, KAPIL, LEADERS } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Container, SectionHead } from "./Shared";

export default function Leadership() {
  return (
    <section id="leadership" className="bg-cream py-20 md:py-28">
      <Container>
        <SectionHead eyebrow="Leadership" title="Backed by people who build sport" />

        <Reveal>
          <figure className="mt-12">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-forest-900 md:aspect-[21/9]">
              <Image src="/img/s1/council.webp" alt="The Governing Council on stage at 72 The League" fill sizes="(min-width:1280px) 1216px, 94vw" className="object-cover object-[50%_55%]" />
            </div>
            <figcaption className="mt-3 text-sm text-ink/60">The Governing Council, in League blazers.</figcaption>
          </figure>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
          <Reveal className="h-full">
            <div className="flex h-full items-center gap-5 bg-forest-900 p-5 text-paper md:gap-8 md:p-7">
              <Image src={KAPIL.img} alt={KAPIL.name} width={200} height={290} className="h-36 w-28 shrink-0 rounded-xl object-cover object-top md:h-48 md:w-36" />
              <div>
                <h3 className="serif text-3xl md:text-5xl">{KAPIL.name}</h3>
                <p className="eyebrow mt-3 text-olive">{KAPIL.role}</p>
                <p className="mt-4 hidden max-w-xl text-paper/70 sm:block">{KAPIL.line}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="h-full">
            <div className="flex h-full items-center gap-5 bg-paper p-5 ring-1 ring-forest-900/10 md:gap-6 md:p-7">
              <Image src={AWARD.img} alt="Game of Life Sports receiving the Sports Startup of the Year award" width={200} height={355} className="h-36 w-20 shrink-0 rounded-xl object-cover object-[50%_35%] md:h-48 md:w-28" />
              <div>
                <span className="eyebrow text-forest-700">{AWARD.eyebrow}</span>
                <h3 className="serif mt-3 text-2xl text-forest-900 md:text-3xl">{AWARD.title}</h3>
                <p className="mt-3 text-sm leading-snug text-ink/65">{AWARD.line}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {LEADERS.map((l, i) => (
            <li key={l.name}>
              <Reveal delay={(i % 5) * 60}>
                <Image src={l.img} alt={l.name} width={240} height={240} className="aspect-square w-full max-w-[9rem] rounded-full object-cover" />
                <h3 className="serif mt-4 text-xl leading-tight text-forest-900">{l.name}</h3>
                <p className="mt-1.5 max-w-[14rem] text-[13px] leading-snug text-ink/60">{l.role}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
