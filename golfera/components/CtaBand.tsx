import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Arrow, BTN_PRIMARY, Container } from "./sections/Shared";

export default function CtaBand() {
  return (
    <section className="bg-forest-900 py-20 text-paper md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow flex items-center gap-3 text-olive">
            <span aria-hidden className="h-px w-10 bg-olive" />
            Partner with us
          </span>
          <h2 className="serif mt-5 text-[clamp(3rem,7vw,5.6rem)]">Build with us.</h2>
          <p className="mt-6 max-w-md text-lg text-paper/75">Join a GOLS property or create a new one together.</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href="/partner" className={BTN_PRIMARY}>
              Partner with us <Arrow />
            </Link>
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
  );
}
