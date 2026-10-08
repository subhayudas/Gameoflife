import Image from "next/image";
import { AUDIENCE, BRAND_OFFER, BRAND_SPOTS, PARTNERS } from "@/lib/data";
import { Reveal } from "../Reveal";
import { BTN_PRIMARY, Container, SectionHead } from "./Shared";

export default function Partner() {
  return (
    <section id="partner" className="bg-green-950 py-20 text-white md:py-28">
      <Container>
        <SectionHead dark eyebrow="For brands" title="What brands can do with GOLS" sub="Four ways in, from presence to ownership." />

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {BRAND_OFFER.map((b, i) => (
            <Reveal key={b.title} delay={i * 80} className="bg-green-950">
              <div className="h-full p-7 md:p-8">
                <span className="display text-lime">{b.n}</span>
                <h3 className="display mt-6 text-3xl">{b.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/65">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <Reveal>
            <span className="eyebrow text-lime">Where your brand shows up</span>
          </Reveal>
          <ul className="mt-5 grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
            {BRAND_SPOTS.map((b, i) => (
              <li key={b.title}>
                <Reveal delay={i * 80} className="h-full">
                  <figure className="group relative isolate flex aspect-[4/5] overflow-hidden rounded-3xl bg-green-900">
                    <Image
                      src={b.img}
                      alt={`${b.title} at 72 The League`}
                      fill
                      sizes="(min-width:1024px) 25vw, 50vw"
                      style={{ objectPosition: b.pos }}
                      className="-z-10 object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-green-950 via-green-950/30 to-transparent" />
                    <figcaption className="mt-auto p-4 md:p-5">
                      <h3 className="display text-xl md:text-3xl">{b.title}</h3>
                      <p className="mt-1.5 text-xs leading-snug text-white/70 md:text-sm">{b.text}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <dl className="grid grid-cols-3 gap-6">
            {AUDIENCE.map((a) => (
              <div key={a.label}>
                <dt className="display text-3xl text-lime md:text-4xl">{a.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-white/60">{a.label}</dd>
              </div>
            ))}
          </dl>
          <ul className="grid grid-cols-3 gap-3" aria-label="Partners">
            {PARTNERS.map((p) => (
              <li key={p.alt} className="h-20 overflow-hidden rounded-xl bg-white p-1.5">
                <Image src={p.src} alt={p.alt} width={160} height={70} className="h-full w-full object-contain mix-blend-multiply" />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <a href="#contact" className={BTN_PRIMARY}>
            Partner with us
          </a>
        </div>
      </Container>
    </section>
  );
}
