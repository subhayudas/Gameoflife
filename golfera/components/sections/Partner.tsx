import Image from "next/image";
import { AUDIENCE, BRAND_OFFER, BRAND_SPOTS, PARTNERS } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Arrow, BTN_DARK, Container, SectionHead } from "./Shared";

export default function Partner() {
  return (
    <section id="partner" className="bg-cream py-20 md:py-28">
      <Container>
        <SectionHead eyebrow="For brands" title="What brands can do with GOLS" sub="Four ways in, from presence to ownership." />

        <ul className="mt-12 grid border-t border-forest-900/20 sm:grid-cols-2 lg:grid-cols-4">
          {BRAND_OFFER.map((b, i) => (
            <li key={b.title} className="border-b border-forest-900/20 sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0 lg:[&:nth-child(odd)]:border-r">
              <Reveal delay={i * 80} className="h-full p-6 md:p-8">
                <span className="serif text-xl text-olive-deep">{b.n}</span>
                <h3 className="serif mt-8 text-3xl text-forest-900">{b.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{b.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-20">
          <Reveal>
            <span className="eyebrow text-forest-700">Where your brand shows up</span>
          </Reveal>
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-6 lg:grid-cols-4">
            {BRAND_SPOTS.map((b, i) => (
              <li key={b.title}>
                <Reveal delay={i * 80} className="h-full">
                  <figure className="group">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-forest-900">
                      <Image
                        src={b.img}
                        alt={`${b.title} at 72 The League`}
                        fill
                        sizes="(min-width:1024px) 22vw, 46vw"
                        style={{ objectPosition: b.pos }}
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="mt-4">
                      <h3 className="serif text-2xl text-forest-900">{b.title}</h3>
                      <p className="mt-1.5 text-sm leading-snug text-ink/65">{b.text}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <Reveal className="mt-20">
          <div className="bg-forest-900 px-6 py-10 text-paper md:px-12 md:py-14">
            <span className="eyebrow text-olive">The audience</span>
            <dl className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-paper/15">
              {AUDIENCE.map((a) => (
                <div key={a.label} className="sm:px-8 sm:first:pl-0">
                  <dt className="serif text-5xl text-olive md:text-6xl">{a.value}</dt>
                  <dd className="mt-3 text-sm text-paper/70">{a.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <div className="mt-20 text-center">
          <Reveal>
            <span className="eyebrow text-forest-700">Our partners</span>
          </Reveal>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-9 md:gap-x-16" aria-label="Partners">
            {PARTNERS.map((p, i) => (
              <li key={p.alt}>
                <Reveal delay={i * 60}>
                  <Image src={p.src} alt={p.alt} width={p.w} height={p.h} className={`w-auto object-contain ${p.cls}`} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 flex justify-center">
          <a href="#contact" className={BTN_DARK}>
            Partner with us <Arrow />
          </a>
        </div>
      </Container>
    </section>
  );
}
