import Image from "next/image";
import { CALENDAR, CALENDAR_NOTE, PROPERTIES } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Container, SectionHead } from "./Shared";

export default function Calendar() {
  return (
    <section id="calendar" className="bg-ivory py-20 md:py-28">
      <Container>
        <SectionHead eyebrow="Calendar" title="Coming up" />
        <ul className="mt-10 border-t border-green-900/20">
          {CALENDAR.map((c, i) => {
            const prop = PROPERTIES.find((p) => p.id === c.prop);
            return (
              <li key={c.title} className="border-b border-green-900/20">
                <Reveal delay={i * 80} className="grid items-center gap-2 py-6 md:grid-cols-[1.3fr_1.6fr_1fr_3rem] md:gap-6">
                  <span className="display text-2xl text-green-900 md:text-3xl">{c.date}</span>
                  <span className="text-lg font-semibold">{c.title}</span>
                  <span className="text-sm text-ink/60">{c.where}</span>
                  {prop && <Image src={prop.logo} alt="" width={80} height={80} className="hidden h-12 w-auto md:block" />}
                </Reveal>
              </li>
            );
          })}
        </ul>
        <p className="mt-6 text-sm text-ink/60">{CALENDAR_NOTE}</p>
      </Container>
    </section>
  );
}
