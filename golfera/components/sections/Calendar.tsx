import Image from "next/image";
import Link from "next/link";
import { CALENDAR, CALENDAR_ANNUAL, CALENDAR_NOTE, propertyBySlug } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Arrow, Container, SectionHead } from "./Shared";

// `full` adds the annual invitationals ("dates TBA") and the footnote; the home teaser omits them.
export default function Calendar({ full = false }: { full?: boolean }) {
  return (
    <section id="calendar" className="bg-paper py-20 md:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHead eyebrow={full ? "Schedule" : "Calendar"} title="Coming up" />
          {!full && (
            <Reveal>
              <Link href="/schedule" className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-forest-900 hover:text-forest-700">
                Full schedule <Arrow className="h-5 w-5" />
              </Link>
            </Reveal>
          )}
        </div>
        <ul className="mt-12 border-t border-forest-900/20">
          {CALENDAR.map((c, i) => {
            const prop = propertyBySlug(c.slug);
            return (
              <li key={c.title} className="border-b border-forest-900/20">
                <Reveal delay={i * 80}>
                  <Link href={`/properties/${c.slug}`} className="group grid items-center gap-x-8 gap-y-2 py-7 md:grid-cols-[1.2fr_1.7fr_1fr_5rem]">
                    <span className="serif text-2xl text-forest-900 md:text-3xl">{c.date}</span>
                    <span className="text-lg font-medium group-hover:underline group-hover:underline-offset-4">{c.title}</span>
                    <span className="text-sm text-ink/60">{c.where}</span>
                    {prop && <Image src={prop.logo} alt={`${prop.name} logo`} width={80} height={80} className="hidden h-16 w-auto justify-self-end md:block" />}
                  </Link>
                </Reveal>
              </li>
            );
          })}
          {full &&
            CALENDAR_ANNUAL.map((slug, i) => {
              const prop = propertyBySlug(slug)!;
              return (
                <li key={slug} className="border-b border-forest-900/20">
                  <Reveal delay={(i + CALENDAR.length) * 80}>
                    <Link href={`/properties/${slug}`} className="group grid items-center gap-x-8 gap-y-2 py-7 md:grid-cols-[1.2fr_1.7fr_1fr_5rem]">
                      <span className="serif text-2xl text-ink/45 md:text-3xl">Annual · dates TBA</span>
                      <span className="text-lg font-medium group-hover:underline group-hover:underline-offset-4">{prop.name}</span>
                      <span className="text-sm text-ink/60">{prop.where}</span>
                      <Image src={prop.logo} alt={`${prop.name} logo`} width={80} height={80} className="hidden h-16 w-auto justify-self-end md:block" />
                    </Link>
                  </Reveal>
                </li>
              );
            })}
        </ul>
        {full && <p className="mt-6 text-sm text-ink/60">{CALENDAR_NOTE}</p>}
      </Container>
    </section>
  );
}
