import Image from "next/image";
import Link from "next/link";
import { type Property, SEASON_TWO, LEAGUE_YEAR } from "@/lib/data";
import CtaBand from "./CtaBand";
import { Reveal } from "./Reveal";
import Season from "./sections/Season";
import { Arrow, BTN_PRIMARY, Container, SectionHead } from "./sections/Shared";

function Hero({ p }: { p: Property }) {
  return (
    <section className="bg-forest-900 text-paper">
      <Container className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <nav aria-label="Breadcrumb" className="eyebrow flex items-center gap-2 text-paper/55">
            <Link href="/#properties" className="hover:text-paper">
              Properties
            </Link>
            <span aria-hidden>/</span>
            <span className="text-olive">{p.kind}</span>
          </nav>
          <Image src={p.logoLight} alt={`${p.name} logo`} width={160} height={160} priority className="mt-8 h-24 w-auto object-contain md:h-28" />
          <h1 className="serif mt-6 text-[clamp(2.6rem,6vw,4.6rem)]">{p.name}</h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-paper/80 md:text-lg">{p.line}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {p.chips.map((c) => (
              <li key={c} className="rounded-sm border border-paper/25 px-3 py-1.5 text-[12px] font-medium text-paper/85">
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-8 border-l-2 border-olive pl-5">
            <span className="eyebrow text-olive">{p.next.label}</span>
            <p className="serif mt-2 text-3xl md:text-4xl">{p.next.value}</p>
            <p className="mt-2 max-w-md text-sm text-paper/65">{p.next.sub}</p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={`/partner?property=${p.slug}#contact`} className={BTN_PRIMARY}>
              Partner with this property <Arrow />
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-forest-950">
          <Image src={p.photo} alt={`${p.name} — ${p.kind}`} fill priority sizes="(min-width:1024px) 46vw, 92vw" style={{ objectPosition: p.position }} className="object-cover" />
        </div>
      </Container>
    </section>
  );
}

function About({ p }: { p: Property }) {
  return (
    <section className="bg-cream py-16 md:py-24">
      <Container>
        <Reveal className="max-w-4xl">
          <span className="eyebrow text-forest-700">What it is</span>
          <p className="serif mt-5 text-[clamp(1.7rem,3.4vw,2.6rem)] text-forest-900">{p.about[0]}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">{p.about[1]}</p>
        </Reveal>
      </Container>
    </section>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="eyebrow border-b border-forest-900/20 pb-3 text-forest-700">{title}</h3>
      <ul className="mt-4 space-y-3 text-[15px] leading-snug text-ink/80">
        {items.map((i) => (
          <li key={i} className="flex gap-3">
            <span aria-hidden className="mt-2 h-1 w-3 shrink-0 bg-olive" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Format({ p }: { p: Property }) {
  return (
    <section className="bg-paper py-16 md:py-24">
      <Container>
        <SectionHead eyebrow="The details" title="Format, venue and teams" />
        <div className={`mt-12 grid gap-10 ${p.venuePhoto ? "lg:grid-cols-[1fr_1.4fr]" : ""}`}>
          {p.venuePhoto && (
            <Reveal>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-forest-900">
                  <Image src={p.venuePhoto.src} alt={p.venuePhoto.alt} fill sizes="(min-width:1024px) 40vw, 92vw" style={{ objectPosition: p.venuePhoto.pos }} className="object-cover" />
                </div>
                <figcaption className="mt-3 text-sm text-ink/60">Qutab Golf Course, New Delhi</figcaption>
              </figure>
            </Reveal>
          )}
          <Reveal delay={100}>
            <div className={`grid gap-10 ${p.venuePhoto ? "sm:grid-cols-2" : "md:grid-cols-3"}`}>
              <div className={p.venuePhoto ? "sm:col-span-2" : ""}>
                <List title="Format" items={p.format} />
              </div>
              <List title={p.venues.length > 1 ? "Venues" : "Venue"} items={p.venues} />
              <List title={p.teamsTitle ?? "Teams"} items={p.teams} />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

// `light` keeps the section off the dark Season 1 gallery that follows it on the 72 page.
function Past({ p, light = false }: { p: Property; light?: boolean }) {
  const { past } = p;
  const rule = light ? "border-forest-900/20" : "border-paper/15";
  return (
    <section className={`py-16 md:py-24 ${light ? "bg-paper text-ink" : "bg-forest-900 text-paper"}`}>
      <Container>
        <SectionHead dark={!light} eyebrow={past.eyebrow} title={past.title} sub={past.intro} />
        {past.stats && (
          <Reveal>
            <dl className={`mt-12 grid grid-cols-2 gap-8 border-t pt-10 lg:grid-cols-4 ${rule}`}>
              {past.stats.map((s) => (
                <div key={s.label}>
                  <dt className={`serif text-5xl md:text-6xl ${light ? "text-forest-900" : "text-olive"}`}>{s.value}</dt>
                  <dd className={`mt-3 text-sm ${light ? "text-ink/65" : "text-paper/70"}`}>{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}
        {past.rows && (
          <ul className={`mt-12 border-t ${rule}`}>
            {past.rows.map((r, i) => (
              <li key={r.k} className={`border-b ${rule}`}>
                <Reveal delay={i * 80} className="grid gap-x-8 gap-y-1 py-6 md:grid-cols-[1fr_1.4fr]">
                  <span className={`eyebrow self-center ${light ? "text-forest-700" : "text-olive"}`}>{r.k}</span>
                  <span>
                    <span className="serif block text-2xl">{r.v}</span>
                    {r.sub && <span className={`mt-1 block text-sm ${light ? "text-ink/60" : "text-paper/60"}`}>{r.sub}</span>}
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}

function Sponsors({ p }: { p: Property }) {
  const s = p.sponsors;
  return (
    <section className="bg-paper py-16 md:py-24">
      <Container>
        <SectionHead eyebrow="Sponsors" title={s.title} />
        {s.logos.length > 0 && (
          <ul className="mt-12 flex flex-wrap items-center gap-x-12 gap-y-9 md:gap-x-16" aria-label={s.title}>
            {s.logos.map((l, i) => (
              <li key={l.alt}>
                <Reveal delay={i * 60}>
                  <Image src={l.src} alt={l.alt} width={l.w} height={l.h} className={`w-auto object-contain ${l.cls}`} />
                </Reveal>
              </li>
            ))}
          </ul>
        )}
        {s.names && (
          <Reveal>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-[15px] font-medium text-ink/70">
              {s.names.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </Reveal>
        )}
        {s.empty && <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/65">{s.empty}</p>}
        <Reveal className="mt-12">
          <Link href={`/partner?property=${p.slug}#contact`} className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-forest-900 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-paper transition hover:bg-forest-700">
            Partner with this property <Arrow />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

// Extra sections that only 72 The League carries: Season 2, the year-round programme.
function SeasonTwo() {
  return (
    <section id="season-two" className="bg-cream py-16 md:py-24">
      <Container>
        <SectionHead eyebrow="Season 2 · Upcoming" title={SEASON_TWO.dates} sub={`${SEASON_TWO.venues}. ${SEASON_TWO.auction}.`} />
        <Reveal>
          <p className="eyebrow mt-14 text-forest-700">Season 2 targets</p>
          <dl className="mt-6 grid grid-cols-2 gap-8 border-t border-forest-900/20 pt-10 lg:grid-cols-3">
            {SEASON_TWO.targets.map((t) => (
              <div key={t.label}>
                <dt className="serif text-5xl text-forest-900 md:text-6xl">{t.value}</dt>
                <dd className="mt-3 text-sm text-ink/65">{t.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <p className="eyebrow text-forest-700">More than a two-week league</p>
          </Reveal>
          <ul className="mt-6 grid border-t border-forest-900/20 sm:grid-cols-2 lg:grid-cols-5">
            {LEAGUE_YEAR.map((y, i) => (
              <li key={y.title} className="border-b border-forest-900/20 lg:border-r lg:last:border-r-0">
                <Reveal delay={i * 60} className="h-full p-5 md:p-6">
                  <h3 className="serif text-2xl text-forest-900">{y.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink/65">{y.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default function PropertyPage({ p }: { p: Property }) {
  const is72 = p.id === "72";
  return (
    <>
      <Hero p={p} />
      <About p={p} />
      <Format p={p} />
      {is72 && <SeasonTwo />}
      <Past p={p} light={is72} />
      {is72 && <Season />}
      <Sponsors p={p} />
      <CtaBand />
    </>
  );
}
