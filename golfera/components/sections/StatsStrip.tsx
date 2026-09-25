import { STATS } from "@/lib/data";
import { CountUp, Reveal } from "../Reveal";
import { Container } from "./Shared";

export default function StatsStrip() {
  return (
    <section className="slab-dark relative -mt-px py-14 md:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="h-full">
              <div className="skeu-dark lift h-full rounded-2xl px-4 py-6 text-center text-[16px] md:py-8">
                <div className="h2-chrome !text-[2.6rem] md:!text-[3.4rem]">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <p className="mx-auto mt-3 max-w-[12rem] text-xs font-medium uppercase tracking-wider text-white/75">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
