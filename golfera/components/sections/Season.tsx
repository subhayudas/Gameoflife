import Image from "next/image";
import { SEASON_ONE, TROPHY_CRAFT } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Container, SectionHead } from "./Shared";

export default function Season() {
  return (
    <section id="season-one" className="bg-ivory py-20 md:py-28">
      <Container>
        <SectionHead
          eyebrow="72 The League · Season 1"
          title="Season 1, in pictures"
          sub="Delhi NCR, February–March 2026. Six franchises, one trophy, and Rajasthan Regals as the first champions."
        />

        <ol className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {SEASON_ONE.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={(i % 3) * 80} className="h-full">
                <article className="group relative isolate flex aspect-[4/5] overflow-hidden rounded-3xl bg-green-900 text-white">
                  <Image
                    src={s.img}
                    alt=""
                    fill
                    sizes="(min-width:768px) 33vw, 50vw"
                    style={{ objectPosition: s.pos }}
                    className="-z-10 object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-green-950 via-green-950/40 to-transparent" />
                  <div className="mt-auto p-4 md:p-6">
                    <span className="display text-lime">{s.n}</span>
                    <h3 className="display mt-2 text-2xl md:text-4xl">{s.title}</h3>
                    <p className="mt-2 text-xs leading-snug text-white/75 md:text-sm">{s.text}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-5">
          <div className="grid items-center gap-5 rounded-3xl bg-green-900 p-5 text-white md:grid-cols-[1fr_2fr] md:gap-8 md:p-7">
            <div>
              <span className="eyebrow text-lime">The trophy</span>
              <h3 className="display mt-3 text-3xl md:text-5xl">Made by hand.</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">From sketch to mirror finish, every cut, weld and polish done by hand before it reached the podium.</p>
            </div>
            <ul className="grid grid-cols-3 gap-3">
              {TROPHY_CRAFT.map((c) => (
                <li key={c.img} className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image src={c.img} alt={c.alt} fill sizes="(min-width:768px) 22vw, 30vw" className="object-cover" />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-8">
          <a href="#gallery" className="inline-flex items-center gap-2 text-sm font-bold text-green-900 underline-offset-4 hover:underline">
            See the full Season 1 gallery <span aria-hidden>→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
