"use client";

import Image from "next/image";
import { useState } from "react";
import { EVENTS, PROPERTIES, type CalEvent, type PropertyId } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Container, SectionHead } from "./Shared";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function Row({ e, i }: { e: CalEvent; i: number }) {
  const p = PROPERTIES.find((x) => x.id === e.prop)!;
  const d = e.sort.slice(8, 10);
  const m = MONTHS[Number(e.sort.slice(5, 7)) - 1];
  const finals = /Finals/.test(e.title);
  return (
    <Reveal delay={Math.min(i, 4) * 60}>
      <li className="relative pl-16 md:pl-24">
        <span
          className={`absolute left-0 top-1 grid h-14 w-12 place-items-center rounded-2xl text-center leading-none md:h-16 md:w-16 ${
            finals ? "skeu-orange text-white" : "skeu-dark text-white"
          }`}
        >
          <span>
            <span className="block text-xl font-black md:text-2xl">{d}</span>
            <span className="block text-[0.6rem] font-bold uppercase tracking-widest opacity-80">{m}</span>
          </span>
        </span>
        <div className="skeu-card lift rounded-3xl p-5 text-[16px]">
          <div className="flex items-start gap-4">
            <div className="skeu-inset grid h-14 w-14 shrink-0 place-items-center rounded-xl p-1.5">
              <Image src={p.logo} alt="" width={60} height={60} className="max-h-full w-auto object-contain mix-blend-multiply" />
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-extrabold leading-tight text-green-900">{e.title}</h3>
              <p className="mt-1 text-sm font-semibold text-ink/80">{e.date}</p>
              <p className="text-sm text-ink/60">📍 {e.venue}</p>
              {e.note && (
                <p className="mt-1.5 inline-block rounded-full bg-green-900/10 px-3 py-0.5 text-xs font-semibold text-green-900">{e.note}</p>
              )}
            </div>
          </div>
        </div>
      </li>
    </Reveal>
  );
}

export default function Calendar() {
  const [f, setF] = useState<PropertyId | "all">("all");
  const ok = (e: CalEvent) => f === "all" || e.prop === f;
  const up = EVENTS.filter((e) => e.group === "upcoming" && ok(e)).sort((a, b) => a.sort.localeCompare(b.sort));
  const past = EVENTS.filter((e) => e.group === "past" && ok(e)).sort((a, b) => b.sort.localeCompare(a.sort));
  const tabs = [{ id: "all" as const, short: "All events" }, ...PROPERTIES];
  return (
    <section id="calendar" className="paper relative py-20 md:py-28">
      <Container>
        <SectionHead
          eyebrow="Events calendar"
          title={
            <>
              The season
              <br />
              ahead
            </>
          }
          sub="Every match day, gala night and league window across the Game of Life Sports portfolio."
        />
        <div role="tablist" aria-label="Filter events" className="mt-10 flex flex-wrap gap-3">
          {tabs.map((x) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={f === x.id}
              onClick={() => setF(x.id)}
              className="skeu-tab rounded-full px-5 py-2.5 text-[14px] font-bold"
            >
              {x.short}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="mb-6 flex items-center gap-3 text-2xl font-black text-green-900">
              <span className="skeu-orange inline-block h-3 w-3 rounded-full" /> Upcoming
            </h3>
            {up.length ? (
              <ol className="relative space-y-6 before:absolute before:bottom-4 before:left-6 before:top-4 before:w-0.5 before:bg-green-900/20 md:before:left-8">
                {up.map((e, i) => (
                  <Row key={e.id} e={e} i={i} />
                ))}
              </ol>
            ) : (
              <p className="text-ink/60">No upcoming dates for this property yet.</p>
            )}
          </div>
          <div>
            <h3 className="mb-6 flex items-center gap-3 text-2xl font-black text-green-900">
              <span className="inline-block h-3 w-3 rounded-full bg-green-900/30" /> Past editions
            </h3>
            {past.length ? (
              <ol className="space-y-5">
                {past.map((e, i) => (
                  <Row key={e.id} e={e} i={i} />
                ))}
              </ol>
            ) : (
              <p className="text-ink/60">No past editions listed.</p>
            )}
            <p className="mt-6 text-sm text-ink/55">The Titans Cup and DGF 2026 dates are to be confirmed.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
