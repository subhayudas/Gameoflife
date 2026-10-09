import Image from "next/image";
import { SEASON_ONE, TROPHY_CRAFT } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Arrow, Container, SectionHead } from "./Shared";

export default function Season() {
  return (
    <section id="season-one" className="bg-forest-900 py-20 text-paper md:py-28">
      <Container>
        <SectionHead
          dark
          eyebrow="72 The League · Season 1"
          title="Season 1, in pictures"
          sub="Delhi NCR, February–March 2026. Six franchises, one trophy, and Rajasthan Regals as the first champions."
        />

        <ol className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {SEASON_ONE.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={(i % 3) * 80} className="h-full">
                <article className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-forest-950">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 92vw"
                      style={{ objectPosition: s.pos }}
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline gap-4">
                    <span className="serif text-xl text-olive">{s.n}</span>
                    <h3 className="serif text-3xl">{s.title}</h3>
                  </div>
                  <p className="mt-2 max-w-sm pl-9 text-[15px] leading-relaxed text-paper/65">{s.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-20">
          <div className="grid items-center gap-8 bg-olive p-6 text-forest-950 md:grid-cols-[1fr_2fr] md:gap-12 md:p-10">
            <div>
              <span className="eyebrow text-forest-900/80">The trophy</span>
              <h3 className="serif mt-3 text-4xl md:text-5xl">Made by hand.</h3>
              <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-forest-950/75">From sketch to mirror finish, every cut, weld and polish done by hand before it reached the podium.</p>
            </div>
            <ul className="grid grid-cols-3 gap-3 md:gap-4">
              {TROPHY_CRAFT.map((c) => (
                <li key={c.img} className="relative aspect-[3/4] overflow-hidden rounded-xl bg-forest-900">
                  <Image src={c.img} alt={c.alt} fill sizes="(min-width:768px) 22vw, 30vw" className="object-cover" />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-10">
          <a href="#gallery" className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-paper hover:text-olive">
            See the full Season 1 gallery <Arrow className="h-5 w-5" />
          </a>
        </div>
      </Container>
    </section>
  );
}
