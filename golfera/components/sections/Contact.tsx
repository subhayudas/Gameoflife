import Image from "next/image";
import { CONTACT, NAV } from "@/lib/data";
import { Reveal } from "../Reveal";
import { BTN_PRIMARY, Container } from "./Shared";

export default function Contact() {
  return (
    <>
      <section id="contact" className="relative isolate overflow-hidden bg-green-900 py-24 text-white md:py-32">
        <Image src="/img/s1/contact.webp" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-green-900 via-green-900/70 to-green-950" />
        <Container>
          <Reveal className="max-w-3xl">
            <span className="eyebrow text-lime">Partner with us</span>
            <h2 className="display mt-4 text-[clamp(3.4rem,10vw,8rem)]">Build with us.</h2>
            <p className="mt-6 max-w-lg text-lg text-white/75">Join a GOLS property or create a new one together.</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href={`mailto:${CONTACT.email}`} className={BTN_PRIMARY}>
                Partner with us
              </a>
              <a href={`mailto:${CONTACT.email}`} className="text-sm font-medium text-white/80 underline-offset-4 hover:underline">
                {CONTACT.email}
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      <footer className="bg-green-950 py-8 text-white/60">
        <Container className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-white px-2 py-1">
              <Image src="/img/logo-gols.webp" alt="Game of Life — Play · Grow · Succeed" width={160} height={110} className="h-9 w-auto" />
            </div>
            <p className="text-sm">© Game of Life Sports</p>
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
