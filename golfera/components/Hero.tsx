import Image from "next/image";
import { HERO_STATS } from "@/lib/data";
import { BTN_GHOST, BTN_PRIMARY, Container } from "./sections/Shared";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-green-950 pt-16 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_80%_30%,rgba(200,240,96,0.12),transparent_70%)]" />
      <Container className="grid min-h-[calc(100svh-4rem)] items-center gap-10 pb-12 pt-6 lg:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <span className="eyebrow text-lime">Sports IP · Sport-tainment</span>
          <h1 className="display mt-5 text-[clamp(2.8rem,6.2vw,5.4rem)]">
            Building India’s
            <br />
            next sports IP.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
            Game of Life Sports is a sport-tainment company. We create, own and grow leagues and properties, starting with golf.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#properties" className={BTN_PRIMARY}>
              Explore properties
            </a>
            <a href="#contact" className={BTN_GHOST}>
              Partner with us
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-6">
            {HERO_STATS.map((s) => (
              <div key={s.label}>
                <dt className="display text-3xl text-lime md:text-4xl">{s.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-white/60">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative order-first lg:order-none">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] ring-1 ring-white/15 lg:aspect-[4/3.6]">
            <Image
              src="/img/photo-alma1.webp"
              alt="Golfer at the top of the backswing"
              fill
              priority
              sizes="(min-width:1024px) 45vw, 92vw"
              className="object-cover object-[38%_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 rounded-full bg-lime px-4 py-2 text-xs font-bold tracking-wide text-green-950">
              Play · Grow · Succeed
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
