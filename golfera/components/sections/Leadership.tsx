import Image from "next/image";
import { KAPIL, LEADERS } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Container, SectionHead } from "./Shared";

export default function Leadership() {
  return (
    <section id="leadership" className="bg-sand py-20 md:py-28">
      <Container>
        <SectionHead eyebrow="Leadership" title="Backed by people who build sport" />

        <Reveal>
          <div className="mt-12 flex items-center gap-5 rounded-3xl bg-green-900 p-5 text-white md:gap-8 md:p-7">
            <Image src={KAPIL.img} alt={KAPIL.name} width={200} height={290} className="h-32 w-24 shrink-0 rounded-2xl object-cover object-top md:h-44 md:w-32" />
            <div>
              <h3 className="display text-3xl md:text-5xl">{KAPIL.name}</h3>
              <p className="eyebrow mt-2 text-lime">{KAPIL.role}</p>
              <p className="mt-3 hidden max-w-xl text-white/70 sm:block">{KAPIL.line}</p>
            </div>
          </div>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {LEADERS.map((l, i) => (
            <li key={l.name}>
              <Reveal delay={(i % 5) * 60}>
                <Image src={l.img} alt={l.name} width={240} height={240} className="aspect-square w-full max-w-[9rem] rounded-full object-cover" />
                <h3 className="mt-4 text-base font-bold leading-tight text-green-900">{l.name}</h3>
                <p className="mt-1 max-w-[14rem] text-[13px] leading-snug text-ink/60">{l.role}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
