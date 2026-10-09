import { HERO_STATS } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Container } from "./Shared";

export default function Stats() {
  return (
    <section aria-label="Key numbers" className="bg-forest-900 text-paper">
      <Container>
        <dl className="grid grid-cols-1 divide-y divide-paper/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {HERO_STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="px-2 py-9 text-center sm:px-8 sm:py-12">
              <dt className="serif text-5xl text-olive md:text-6xl">{s.value}</dt>
              <dd className="mt-3 text-sm text-paper/70">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
