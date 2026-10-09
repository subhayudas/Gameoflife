import { HERO, HERO_IMAGES } from "@/lib/data";
import { Arrow, BTN_GHOST, BTN_PRIMARY, Container } from "./sections/Shared";

export default function Hero() {
  const img = HERO_IMAGES[HERO];
  return (
    <section id="top" className="relative isolate overflow-hidden bg-forest-950 text-paper md:flex md:min-h-[calc(100svh-5rem)] md:items-center">
      {/* Photo sits clean above the copy on phones; behind it on larger screens. */}
      <div className="relative aspect-[4/3] w-full md:absolute md:inset-0 md:-z-20 md:aspect-auto">
        <picture>
          <source media="(min-width:768px)" srcSet={`/img/hero/${HERO}.webp`} />
          <img src={`/img/hero/${HERO}-m.webp`} alt={img.alt} fetchPriority="high" style={{ objectPosition: img.pos }} className="absolute inset-0 h-full w-full object-cover" />
        </picture>
      </div>
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-forest-950/85 via-forest-950/45 to-forest-950/0 md:block" />

      <Container className="py-12 md:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow flex items-center gap-3 text-olive">
            <span aria-hidden className="h-px w-10 bg-olive" />
            Sports IP · Sport-tainment
          </span>
          <h1 className="serif mt-6 text-[clamp(2.9rem,6vw,5.2rem)]">
            Building India’s
            <br />
            next sports IP.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-paper/80 md:text-lg">
            Game of Life Sports is a sport-tainment company. We create, own and grow leagues and properties, starting with golf.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#properties" className={BTN_PRIMARY}>
              Explore properties <Arrow />
            </a>
            <a href="#contact" className={BTN_GHOST}>
              Partner with us
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
