import Image from "next/image";
import { CONTACT, GOLS_LOGO_LIGHT, NAV } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Arrow, BTN_PRIMARY, Container } from "./Shared";

export default function Contact() {
  return (
    <>
      <section id="contact" className="bg-forest-900 py-20 text-paper md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow flex items-center gap-3 text-olive">
              <span aria-hidden className="h-px w-10 bg-olive" />
              Partner with us
            </span>
            <h2 className="serif mt-5 text-[clamp(3rem,7vw,5.6rem)]">Build with us.</h2>
            <p className="mt-6 max-w-md text-lg text-paper/75">Join a GOLS property or create a new one together.</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href={`mailto:${CONTACT.email}`} className={BTN_PRIMARY}>
                Partner with us <Arrow />
              </a>
              <a href={`mailto:${CONTACT.email}`} className="text-sm font-medium text-paper/80 underline underline-offset-4 hover:text-paper">
                {CONTACT.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-forest-950">
              <Image src="/img/s1/contact.webp" alt="Rajasthan Regals and the League team after the final" fill sizes="(min-width:1024px) 52vw, 92vw" className="object-cover" />
            </div>
          </Reveal>
        </Container>
      </section>

      <footer className="bg-forest-950 py-10 text-paper/60">
        <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-5">
            <Image src={GOLS_LOGO_LIGHT.src} alt="Game of Life — Play · Grow · Succeed" width={GOLS_LOGO_LIGHT.w} height={GOLS_LOGO_LIGHT.h} className="h-14 w-auto" />
            <p className="text-sm">© Game of Life Sports</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm font-medium">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="hover:text-paper">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </footer>
    </>
  );
}
