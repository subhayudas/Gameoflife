import { GOLFER, MARKET, MARKET_BARS, WHY_GOLF } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Container, SectionHead } from "./Shared";

export default function Audience() {
  return (
    <section id="audience" className="slab-dark relative overflow-hidden py-20 text-white md:py-28">
      <Container>
        <SectionHead
          dark
          eyebrow="The audience"
          title={
            <>
              The golfer.
              <br />
              India’s decision-maker.
            </>
          }
          sub="Golf is where India’s decision-makers spend their time. A partner isn’t only buying reach — they’re buying proximity to the people who decide."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {GOLFER.facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 80}>
              <div className="skeu-dark lift rounded-3xl p-5 text-[16px]">
                <div className="h2-chrome !text-[2.4rem] md:!text-[3.2rem]">{f.value}</div>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/70">{f.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {GOLFER.lifestyle.map((l) => (
            <span key={l} className="skeu-pill rounded-full px-4 py-2 text-[13px] font-semibold text-green-900">
              {l}
            </span>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="skeu-card h-full rounded-3xl p-7 text-[16px] text-ink">
              <h3 className="text-2xl font-black text-green-900">Who plays</h3>
              <div className="mt-6 space-y-6">
                {MARKET_BARS.map((b) => (
                  <div key={b.label}>
                    <div className="mb-2 flex items-end justify-between gap-4">
                      <span className="text-sm font-medium text-ink/75">{b.label}</span>
                      <span className="text-2xl font-black text-green-900">{b.pct}%</span>
                    </div>
                    <div className="skeu-inset h-5 overflow-hidden rounded-full p-[3px]">
                      <div
                        className="h-full rounded-full bg-gradient-to-b from-[#7bd06a] via-[#3e9a3f] to-[#1d6a2b]"
                        style={{ width: `${b.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-ink/60">The average golfer is 32–55 and in their peak earning years.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid h-full grid-cols-2 gap-4">
              {MARKET.map((m) => (
                <div key={m.label} className="skeu-dark lift flex flex-col justify-center rounded-3xl p-5 text-[16px]">
                  <div className="text-3xl font-black tracking-tight md:text-4xl">{m.value}</div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/70">{m.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-black md:text-4xl">Why golf sponsorship works</h3>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {WHY_GOLF.map((w, i) => (
              <Reveal key={w.label} delay={i * 70}>
                <div className="skeu-card lift h-full rounded-3xl p-5 text-[16px] text-ink">
                  <div className="text-4xl font-black text-green-900">{w.value}</div>
                  <p className="mt-2 text-sm leading-snug text-ink/70">{w.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-black md:text-4xl">Ideal partner categories</h3>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {GOLFER.categories.map((c) => (
              <span key={c} className="skeu-dark rounded-full px-4 py-2 text-[13px] font-semibold text-white">
                {c}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
