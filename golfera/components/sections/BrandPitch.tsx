import Image from "next/image";
import Link from "next/link";
import { PARTNERS } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Arrow, BTN_DARK, Container, SectionHead } from "./Shared";

export function PartnerLogos({ eyebrow = "Our partners" }: { eyebrow?: string }) {
  return (
    <div className="text-center">
      <Reveal>
        <span className="eyebrow text-forest-700">{eyebrow}</span>
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
  );
}

// Home teaser: partner logos plus a short brand pitch.
export default function BrandPitch() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <Container>
        <SectionHead
          center
          eyebrow="For brands"
          title="Access, not just reach."
          sub="Our properties put your brand in front of 500+ founders, CXOs and HNI decision-makers every season, on the course, on screen and online."
        />
        <div className="mt-14">
          <PartnerLogos />
        </div>
        <div className="mt-14 flex justify-center">
          <Link href="/partner" className={BTN_DARK}>
            Partner with us <Arrow />
          </Link>
        </div>
      </Container>
    </section>
  );
}
