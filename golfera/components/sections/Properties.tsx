"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ALMA_SCHOOLS,
  BROADCAST,
  PROPERTIES,
  QGL_PRIZES,
  QGL_SCHEDULE,
  QGL_SEASONS,
  TARGETS_72,
  type Property,
  type PropertyId,
} from "@/lib/data";
import { Reveal } from "../Reveal";
import { Container, SectionHead } from "./Shared";

const pick = (id: PropertyId) => window.dispatchEvent(new CustomEvent("select-property", { detail: id }));

function PropertyCards() {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
      {PROPERTIES.map((p, i) => (
        <Reveal key={p.id} delay={i * 80} className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}>
          <a
            href="#explorer"
            onClick={() => pick(p.id)}
            className="skeu-card lift group flex h-full flex-col rounded-3xl p-5 text-[16px]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="skeu-inset grid h-24 w-24 shrink-0 place-items-center rounded-2xl p-2">
                <Image src={p.logo} alt="" width={120} height={120} className="max-h-full w-auto object-contain mix-blend-multiply" />
              </div>
              <span className="text-5xl font-black leading-none text-green-900/15">{p.no}</span>
            </div>
            <span className="mt-4 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-ink/50">{p.kind}</span>
            <h3 className="mt-1 text-2xl font-extrabold leading-tight text-green-900">{p.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.tagline}</p>
            <div className="mt-auto pt-5">
              <div className="skeu-inset flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-xl px-4 py-3 text-sm">
                <span className="font-bold text-green-900">{p.headlineDate}</span>
                <span className="text-ink/60">{p.headlineVenue}</span>
              </div>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-green-700 transition-transform group-hover:translate-x-1">
                Explore property <span aria-hidden>→</span>
              </span>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}

function Tile({ value, label, dark }: { value: string; label: string; dark?: boolean }) {
  return (
    <div className={`${dark ? "skeu-dark" : "skeu-card"} rounded-2xl px-4 py-5 text-center text-[16px]`}>
      <div className={`text-3xl font-black tracking-tight md:text-4xl ${dark ? "text-white" : "text-green-900"}`}>{value}</div>
      <div className={`mt-1 text-xs font-medium uppercase tracking-wider ${dark ? "text-white/70" : "text-ink/55"}`}>{label}</div>
    </div>
  );
}

function Block({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`skeu-card rounded-3xl p-6 text-[16px] ${className}`}>
      <h4 className="mb-3 inline-block rounded-full bg-[#0b6aa8] px-4 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-white">
        {title}
      </h4>
      {children}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm leading-relaxed text-ink/80">
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <span className="skeu-orange mt-[0.45rem] h-2 w-2 shrink-0 rounded-full" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function Broadcast() {
  const max = 100;
  return (
    <Block title="Eurosport India broadcast · Season 1" className="lg:col-span-2">
      <p className="mb-4 text-sm text-ink/65">Daily average reach across four tracked episodes (thousands of viewers).</p>
      <div className="grid grid-cols-4 gap-3">
        {BROADCAST.map((b) => (
          <div key={b.ep} className="flex flex-col items-center gap-2">
            <span className="text-sm font-black text-green-900">{b.reach}K</span>
            <div className="skeu-inset relative mx-auto flex h-44 w-14 items-end overflow-hidden rounded-full p-1">
              <div className="skeu-orange w-full rounded-full" style={{ height: `${(b.reach / max) * 100}%` }} />
            </div>
            <span className="text-xs font-bold text-ink/70">{b.ep}</span>
            <span className="text-[0.68rem] text-ink/45">
              {b.date} · {b.mins} min
            </span>
          </div>
        ))}
      </div>
    </Block>
  );
}

function Extras({ p }: { p: Property }) {
  if (p.id === "72")
    return (
      <>
        <Broadcast />
        <Block title="Season 2 targets" className="lg:col-span-1">
          <div className="grid grid-cols-2 gap-3">
            {TARGETS_72.map((t) => (
              <div key={t.label} className="skeu-inset rounded-xl px-3 py-3">
                <div className="text-xl font-black text-green-900">{t.value}</div>
                <div className="text-[0.7rem] leading-tight text-ink/60">{t.label}</div>
              </div>
            ))}
          </div>
        </Block>
      </>
    );
  if (p.id === "qgl")
    return (
      <>
        <Block title="Seasons at a glance" className="lg:col-span-3">
          <div className="grid gap-4 md:grid-cols-3">
            {QGL_SEASONS.map((s) => (
              <div key={s.s} className={`${s.status === "Upcoming" ? "skeu-dark text-white" : "skeu-inset"} rounded-2xl p-4 text-[16px]`}>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black">{s.s}</span>
                  <span className={`rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider ${s.status === "Upcoming" ? "skeu-orange text-white" : "bg-green-900/10 text-green-900"}`}>
                    {s.status}
                  </span>
                </div>
                <p className="mt-2 text-sm font-semibold">{s.dates}</p>
                <p className={`text-sm ${s.status === "Upcoming" ? "text-white/75" : "text-ink/65"}`}>{s.venue}</p>
                <p className={`mt-2 text-xs ${s.status === "Upcoming" ? "text-white/70" : "text-ink/55"}`}>
                  <b>{s.teams} teams</b> · {s.note}
                </p>
              </div>
            ))}
          </div>
        </Block>
        <Block title="Season 3 schedule" className="lg:col-span-2">
          <ol className="relative space-y-4 border-l-2 border-green-900/15 pl-6">
            {QGL_SCHEDULE.map((m) => (
              <li key={m.n} className="relative">
                <span className={`absolute -left-[2.15rem] top-0.5 grid h-6 w-6 place-items-center rounded-full text-[0.65rem] font-black text-white ${m.note === "Finals" ? "skeu-orange" : "skeu-dark"}`}>
                  {m.n}
                </span>
                <p className="text-sm font-bold text-green-900">
                  {m.date} {m.note && <span className="ml-1 rounded-full bg-green-900/10 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider">{m.note}</span>}
                </p>
                <p className="text-sm text-ink/65">{m.venue}</p>
              </li>
            ))}
          </ol>
        </Block>
        <Block title="Season 3 prize pool" className="lg:col-span-1">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[0.65rem] uppercase tracking-wider text-ink/50">
                <th className="pb-2 font-bold">Position</th>
                <th className="pb-2 font-bold">&lt; 20 teams</th>
                <th className="pb-2 font-bold">20 teams</th>
              </tr>
            </thead>
            <tbody>
              {QGL_PRIZES.map((r, i) => (
                <tr key={r.pos} className="border-t border-ink/10">
                  <td className={`py-2.5 ${i === 0 ? "font-black text-green-900" : "font-medium"}`}>{r.pos}</td>
                  <td className="py-2.5 font-semibold">{r.under20}</td>
                  <td className="py-2.5 font-semibold">{r.over20}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Block>
      </>
    );
  if (p.id === "alma")
    return (
      <Block title="The nine teams" className="lg:col-span-3">
        <div className="flex flex-wrap gap-2.5">
          {ALMA_SCHOOLS.map((s, i) => (
            <span key={s} className="skeu-pill rounded-full px-4 py-2 text-sm font-semibold text-green-900 text-[14px]">
              <span className="mr-2 text-ink/35">{String(i + 1).padStart(2, "0")}</span>
              {s}
            </span>
          ))}
        </div>
      </Block>
    );
  return null;
}

function Panel({ p }: { p: Property }) {
  return (
    <div className="animate-[rise_0.6s_ease-out_both]">
      <div className="skeu-dark relative overflow-hidden rounded-[2rem] p-6 text-[16px] text-white md:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl bg-white p-2">
                <Image src={p.logo} alt={`${p.name} logo`} width={120} height={120} className="max-h-full w-auto object-contain" />
              </div>
              <div>
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white/60">
                  {p.no} · {p.kind}
                </span>
                <h3 className="text-3xl font-black leading-tight md:text-4xl">{p.name}</h3>
              </div>
            </div>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">{p.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="skeu-pill rounded-full px-4 py-2 text-sm font-bold text-green-900">📅 {p.headlineDate}</span>
              <span className="skeu-pill rounded-full px-4 py-2 text-sm font-bold text-green-900">📍 {p.headlineVenue}</span>
            </div>
          </div>
          <div className={`grid gap-4 ${p.photos.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
            {p.photos.map((src, i) => (
              <div key={src} className={`skeu-bezel relative overflow-hidden rounded-2xl ${p.photos.length > 1 ? "aspect-[4/5]" : "aspect-[16/10]"} ${i === 1 ? "mt-6" : ""}`}>
                <Image src={src} alt={`${p.name} event photography`} fill sizes="(min-width:1024px) 30vw, 90vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {p.media && (
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {p.media.map((m) => (
            <Tile key={m.label} value={m.value} label={m.label} />
          ))}
        </div>
      )}

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <Block title="Format">
          <Bullets items={p.format} />
        </Block>
        <Block title="Audience profile">
          <Bullets items={p.audience} />
        </Block>
        <Block title="What sets it apart">
          <Bullets items={p.apart} />
        </Block>

        <Block title="Key facts" className="lg:col-span-2">
          <dl className="grid gap-x-8 gap-y-4 md:grid-cols-2">
            {p.details.map((d) => (
              <div key={d.label}>
                <dt className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink/45">{d.label}</dt>
                <dd className="mt-0.5 text-sm font-medium leading-relaxed text-ink/85">{d.value}</dd>
              </div>
            ))}
          </dl>
        </Block>
        {p.mediaNotes && (
          <Block title="Media coverage">
            <Bullets items={p.mediaNotes} />
          </Block>
        )}

        <Extras p={p} />

        {(p.sponsorLogos || p.sponsors) && (
          <Block title="Partners" className="lg:col-span-3">
            {p.sponsorLogos && (
              <div className="flex flex-wrap items-center gap-4">
                {p.sponsorLogos.map((l) => (
                  <div key={l.alt} className="skeu-inset grid h-20 min-w-32 place-items-center rounded-2xl px-5">
                    <Image src={l.src} alt={l.alt} width={220} height={90} className="max-h-14 w-auto object-contain mix-blend-multiply" />
                  </div>
                ))}
              </div>
            )}
            {p.sponsors?.map((s) => (
              <div key={s.title} className="mt-4">
                <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink/45">{s.title}</p>
                <div className="flex flex-wrap gap-2">
                  {s.names.map((n) => (
                    <span key={n} className="skeu-pill rounded-full px-3.5 py-1.5 text-[13px] font-semibold text-green-900">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Block>
        )}
      </div>

      <div className="mt-10">
        <h4 className="text-2xl font-black text-green-900 md:text-3xl">{p.tiersTitle}</h4>
        <div className={`mt-5 grid gap-5 sm:grid-cols-2 ${p.tiers.length === 4 ? "lg:grid-cols-4" : p.tiers.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-3"}`}>
          {p.tiers.map((t, i) => (
            <div key={t.name} className={`${i === 0 ? "skeu-dark text-white" : "skeu-card"} lift flex flex-col rounded-3xl p-5 text-[16px]`}>
              <div className="flex items-start justify-between gap-2">
                <span className={`text-sm font-bold uppercase tracking-wider ${i === 0 ? "text-white/70" : "text-ink/55"}`}>{t.name}</span>
                {t.status && (
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider ${i === 0 ? "bg-white/15" : "bg-green-900/10 text-green-900"}`}>{t.status}</span>
                )}
              </div>
              <div className={`mt-2 text-3xl font-black tracking-tight ${i === 0 ? "text-white" : "text-green-900"}`}>{t.price}</div>
              {t.note && <p className={`mt-2 text-sm leading-relaxed ${i === 0 ? "text-white/75" : "text-ink/65"}`}>{t.note}</p>}
              {t.perks && (
                <ul className={`mt-3 space-y-1.5 text-[13px] ${i === 0 ? "text-white/85" : "text-ink/75"}`}>
                  {t.perks.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="text-orange-500">✓</span>
                      {x}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        {p.tiersFootnote && <p className="mt-4 max-w-3xl text-sm text-ink/60">{p.tiersFootnote}</p>}
        {p.contact && (
          <a href={`mailto:${p.contact}`} className="skeu-btn mt-5 inline-block rounded-xl px-5 py-3 text-sm font-bold text-green-900">
            ✉ {p.contact}
          </a>
        )}
      </div>
    </div>
  );
}

function Explorer() {
  const [id, setId] = useState<PropertyId>("72");
  useEffect(() => {
    const h = (e: Event) => setId((e as CustomEvent<PropertyId>).detail);
    window.addEventListener("select-property", h);
    return () => window.removeEventListener("select-property", h);
  }, []);
  const p = PROPERTIES.find((x) => x.id === id)!;
  return (
    <div id="explorer" className="mt-20 scroll-mt-24">
      <Reveal>
        <div role="tablist" aria-label="Properties" className="flex flex-wrap justify-center gap-3">
          {PROPERTIES.map((x) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={id === x.id}
              onClick={() => setId(x.id)}
              className="skeu-tab flex items-center gap-3 rounded-2xl px-4 py-2.5 text-sm font-bold text-[14px]"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white p-1">
                <Image src={x.logo} alt="" width={40} height={40} className="max-h-full w-auto object-contain" />
              </span>
              {x.short}
            </button>
          ))}
        </div>
      </Reveal>
      <div className="mt-10" role="tabpanel">
        <Panel key={p.id} p={p} />
      </div>
    </div>
  );
}

export default function Properties() {
  return (
    <section id="properties" className="relative overflow-hidden bg-gradient-to-b from-[#e1e9d6] via-[#eef1e6] to-[#e1e9d6] py-20 md:py-28">
      <Container>
        <SectionHead
          eyebrow="Our five properties"
          title={<>Five properties.<br />One golf ecosystem.</>}
          sub="Each with its own audience, format and commercial identity — from a PGTI-sanctioned professional league to rivalry-driven alumni invitationals."
        />
        <PropertyCards />
        <Explorer />
      </Container>
    </section>
  );
}
