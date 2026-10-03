import Image from "next/image";
import { PROPERTIES, type Property } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Container, SectionHead } from "./Shared";

function Card({ p, big }: { p: Property; big?: boolean }) {
  return (
    <article className={`group relative isolate flex overflow-hidden rounded-3xl bg-green-900 text-white ${big ? "min-h-[26rem] md:min-h-[30rem]" : "min-h-[22rem]"}`}>
      <Image
        src={p.photo}
        alt={`${p.name} — ${p.kind}`}
        fill
        sizes={big ? "(min-width:768px) 50vw, 92vw" : "(min-width:768px) 33vw, 92vw"}
        style={{ objectPosition: p.position }}
        className="-z-10 object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-green-950 via-green-950/55 to-green-950/0" />

      <div className="flex w-full flex-col justify-between p-5 md:p-7">
        <div className="flex items-start justify-between">
          <div className="rounded-2xl bg-white p-1.5">
            <Image src={p.logo} alt="" width={120} height={120} className={`w-auto object-contain ${big ? "h-14" : "h-11"}`} />
          </div>
          {p.flagship && <span className="rounded-full bg-lime px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-green-950">Flagship</span>}
        </div>

        <div>
          <span className="eyebrow text-lime">{p.kind}</span>
          <h3 className={`display mt-2 ${big ? "text-[clamp(2.2rem,4.2vw,3.4rem)]" : "text-3xl"}`}>{p.name}</h3>
          <p className={`mt-3 max-w-md text-white/80 ${big ? "text-base" : "text-sm"}`}>{p.line}</p>
          <p className="mt-4 text-xs font-medium text-white/60">
            {p.when} · {p.where}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Properties() {
  const flagships = PROPERTIES.filter((p) => p.flagship);
  const rest = PROPERTIES.filter((p) => !p.flagship);
  return (
    <section id="properties" className="bg-sand py-20 md:py-28">
      <Container>
        <SectionHead eyebrow="Our properties" title="Five properties. Two flagships." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {flagships.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="flex [&>*]:w-full">
              <Card p={p} big />
            </Reveal>
          ))}
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="flex [&>*]:w-full">
              <Card p={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
