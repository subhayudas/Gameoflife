import Image from "next/image";
import { CONTACT, NAV } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Container } from "./Shared";

export default function Contact() {
  return (
    <>
      <section id="contact" className="relative overflow-hidden bg-[#052c1a] py-20 text-white md:py-28">
        <Image src="/img/gen-hills.webp" alt="" fill sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#052c1a] via-[#052c1a]/70 to-[#052c1a]" />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <span className="eyebrow">Let’s connect</span>
              <h2 className="h2-chrome mt-5">
                Play your part
                <br />
                in the game
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                Partner with a Game of Life Sports property. We’ll send the full deck — visuals, schedule and exactly what each tier includes — and set up a call to find the right fit for your brand.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={`mailto:${CONTACT.email}`} className="skeu-btn rounded-2xl px-7 py-4 text-base font-black text-green-900">
                  ✉ {CONTACT.email}
                </a>
                <a href={`mailto:${CONTACT.titans}`} className="skeu-dark rounded-2xl px-7 py-4 text-base font-bold text-white">
                  The Titans Cup · {CONTACT.titans}
                </a>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="skeu-card mx-auto max-w-sm rounded-[2rem] p-3 text-[16px] [transform:perspective(1200px)_rotateY(7deg)_rotateX(2deg)]">
                <div className="skeu-bezel relative aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                  <Image src="/img/gen-trophy.webp" alt="Championship trophy on the fairway" fill sizes="(min-width:1024px) 30vw, 80vw" className="object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <footer className="bg-[#031d12] py-10 text-white/70">
        <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-white px-2 py-1">
              <Image src="/img/logo-gols.webp" alt="Game of Life — Play · Grow · Succeed" width={160} height={110} className="h-12 w-auto" />
            </div>
            <p className="text-sm">© Game of Life Sports. Incorporated 2023.</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="hover:text-white">
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
