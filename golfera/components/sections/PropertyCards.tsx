import Image from "next/image";
import Link from "next/link";
import { PROPERTIES, type Property } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Arrow, Container, SectionHead } from "./Shared";

// Photograph on top, text and logo on a clean panel below: nothing is laid over the image.
function Card({ p, big }: { p: Property; big?: boolean }) {
  return (
    <Link href={`/properties/${p.slug}`} className="group flex h-full flex-col overflow-hidden bg-paper ring-1 ring-forest-900/10 transition hover:ring-forest-900/30">
      {p.photo ? (
        <div className={`relative overflow-hidden bg-forest-900 ${big ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
          <Image
            src={p.photo}
            alt={`${p.name} — ${p.kind}`}
            fill
            sizes={big ? "(min-width:1024px) 50vw, 92vw" : "(min-width:768px) 33vw, 92vw"}
            style={{ objectPosition: p.position }}
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
      ) : (
        // No photograph yet: the logo fills the image slot on a cream panel.
        <div className={`flex items-center justify-center bg-cream ${big ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
          <Image
            src={p.logo}
            alt={`${p.name} logo`}
            width={400}
            height={400}
            sizes="(min-width:768px) 20vw, 60vw"
            className="h-auto max-h-[64%] w-auto max-w-[64%] object-contain transition duration-700 group-hover:scale-105"
          />
        </div>
      )}

      <div className={`flex flex-1 ${big ? "gap-5 p-6 md:p-8" : "flex-col gap-4 p-5 md:p-6"}`}>
        {p.photo && <Image src={p.logo} alt={`${p.name} logo`} width={160} height={160} className={`w-auto shrink-0 object-contain ${big ? "h-24 md:h-28" : "h-16 md:h-20"}`} />}
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="eyebrow flex flex-wrap items-center gap-x-3 text-forest-700">
            {p.kind}
            {p.flagship && <span className="rounded-sm bg-olive px-2 py-1 text-[10px] tracking-[0.16em] text-forest-950">Flagship</span>}
          </span>
          <h3 className={`serif mt-2 text-forest-900 ${big ? "text-3xl md:text-4xl" : "text-2xl"}`}>{p.name}</h3>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink/70">{p.line}</p>
          <p className="mt-auto flex items-center justify-between gap-3 border-t border-forest-900/10 pt-3 text-xs font-medium text-ink/60">
            <span className="mt-4 block">
              {p.when} · {p.where}
            </span>
            <Arrow className="mt-4 h-5 w-5 shrink-0 text-forest-900 transition group-hover:translate-x-1" />
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function PropertyCards() {
  const flagships = PROPERTIES.filter((p) => p.flagship);
  const rest = PROPERTIES.filter((p) => !p.flagship);
  return (
    <section id="properties" className="bg-paper py-20 md:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHead eyebrow="Our properties" title="Five properties. Two flagships." sub="From a professional league to the alumni invitationals that fill the Qutab fairways." />
          <Reveal>
            <Link href="/schedule" className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-forest-900 hover:text-forest-700">
              View schedule <Arrow className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {flagships.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="h-full">
              <Card p={p} big />
            </Reveal>
          ))}
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="h-full">
              <Card p={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
