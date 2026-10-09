import Image from "next/image";
import { CALENDAR, CALENDAR_NOTE, PROPERTIES } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Container, SectionHead } from "./Shared";

export default function Calendar() {
  return (
    <section id="calendar" className="bg-paper py-20 md:py-28">
      <Container>
        <SectionHead eyebrow="Calendar" title="Coming up" />
        <ul className="mt-12 border-t border-forest-900/20">
          {CALENDAR.map((c, i) => {
            const prop = PROPERTIES.find((p) => p.id === c.prop);
            return (
              <li key={c.title} className="border-b border-forest-900/20">
                <Reveal delay={i * 80} className="grid items-center gap-x-8 gap-y-2 py-7 md:grid-cols-[1.2fr_1.7fr_1fr_5rem]">
                  <span className="serif text-2xl text-forest-900 md:text-3xl">{c.date}</span>
                  <span className="text-lg font-medium">{c.title}</span>
                  <span className="text-sm text-ink/60">{c.where}</span>
                  {prop && <Image src={prop.logo} alt={`${prop.name} logo`} width={80} height={80} className="hidden h-16 w-auto justify-self-end md:block" />}
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
