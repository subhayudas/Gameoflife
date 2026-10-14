import Image from "next/image";
import Link from "next/link";
import { COUNCIL, KAPIL, KAPIL_LINE } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Arrow, Container, SectionHead } from "./Shared";

export default function LeadershipTeaser() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHead eyebrow="Leadership" title="Backed by people who build sport" />
          <Reveal>
            <Link href="/leadership" className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-forest-900 hover:text-forest-700">
              Meet the team <Arrow className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>

        <Reveal>
          <figure className="mt-12">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-forest-900 md:aspect-[21/9]">
              <Image src="/img/s1/council.webp" alt="The Governing Council on stage at 72 The League" fill sizes="(min-width:1280px) 1216px, 94vw" className="object-cover object-[50%_55%]" />
            </div>
            <figcaption className="mt-3 text-sm text-ink/60">The 72 The League Governing Council, in League blazers.</figcaption>
          </figure>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="h-full">
            <div className="flex h-full items-center gap-5 bg-forest-900 p-5 text-paper md:gap-8 md:p-7">
              <Image src={KAPIL.img!} alt={KAPIL.name} width={200} height={290} className="h-36 w-28 shrink-0 rounded-xl object-cover object-top md:h-48 md:w-36" />
              <div>
                <h3 className="serif text-3xl md:text-5xl">{KAPIL.name}</h3>
                <p className="eyebrow mt-3 text-olive">{KAPIL.role}</p>
                <p className="mt-4 hidden max-w-xl text-paper/70 sm:block">{KAPIL_LINE}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="h-full">
            <div className="h-full bg-paper p-5 ring-1 ring-forest-900/10 md:p-7">
              <span className="eyebrow text-forest-700">Governing Council</span>
              <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-6">
                {COUNCIL.map((c) => (
                  <li key={c.name} className="flex items-center gap-3">
                    <Image src={c.img!} alt="" width={96} height={96} className="h-12 w-12 shrink-0 rounded-full object-cover" />
                    <span className="serif text-lg leading-tight text-forest-900">{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
