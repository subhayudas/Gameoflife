"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import data from "@/lib/gallery.json";
import { Container, SectionHead } from "./Shared";

type Item = { id: string; c: string; w: number; h: number; fw: number; fh: number };
const ITEMS = data.items as Item[];
const ALT = data.alt as Record<string, string>;

const FILTERS = [
  { key: "all", label: "All" },
  { key: "launch", label: "Launch & press" },
  { key: "auction", label: "Auction" },
  { key: "course", label: "On the course" },
  { key: "brand", label: "Branding" },
  { key: "trophy", label: "Trophy & champions" },
  { key: "celebrate", label: "Celebrations" },
  { key: "people", label: "People" },
  { key: "media", label: "Media & press" },
];

const PAGE = 40;
const thumb = (i: Item) => `/img/gallery/t/${i.id}.webp`;
const full = (i: Item) => `/img/gallery/f/${i.id}.webp`;

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [shown, setShown] = useState(PAGE);
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const list = useMemo(() => (filter === "all" ? ITEMS : ITEMS.filter((i) => i.c === filter)), [filter]);
  const counts = useMemo(() => {
    const c: Record<string, number> = { all: ITEMS.length };
    for (const i of ITEMS) c[i.c] = (c[i.c] ?? 0) + 1;
    return c;
  }, []);

  const step = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + list.length) % list.length)), [list.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      lastFocus.current?.focus();
    };
  }, [open, step]);

  // Warm the neighbouring lightbox frames so arrow-key browsing feels instant.
  useEffect(() => {
    if (open === null) return;
    for (const d of [1, -1]) {
      const n = list[(open + d + list.length) % list.length];
      if (n) new window.Image().src = full(n);
    }
  }, [open, list]);

  const current = open === null ? null : list[open];

  return (
    <section id="gallery" className="bg-ivory py-20 md:py-28">
      <Container>
        <SectionHead eyebrow="Gallery" title="The Season 1 archive" sub={`${ITEMS.length} photographs from launch to final, straight from the League’s own photo library.`} />

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter photographs">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              aria-pressed={filter === f.key}
              onClick={() => {
                setFilter(f.key);
                setShown(PAGE);
              }}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                filter === f.key ? "border-green-900 bg-green-900 text-white" : "border-green-900/25 text-green-900 hover:border-green-900"
              }`}
            >
              {f.label} <span className={filter === f.key ? "text-lime" : "text-ink/45"}>{counts[f.key]}</span>
            </button>
          ))}
        </div>

        <ul className="mt-8 columns-2 gap-3 md:columns-3 lg:columns-4">
          {list.slice(0, shown).map((it, idx) => (
            <li key={it.id} className="mb-3 break-inside-avoid">
              <button
                onClick={(e) => {
                  lastFocus.current = e.currentTarget;
                  setOpen(idx);
                }}
                aria-label={`Open photograph ${idx + 1} of ${list.length}`}
                className="group block w-full overflow-hidden rounded-xl bg-sand"
              >
                <Image
                  src={thumb(it)}
                  alt={ALT[it.c] ?? "72 The League Season 1"}
                  width={it.w}
                  height={it.h}
                  sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                  className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
                />
              </button>
            </li>
          ))}
        </ul>

        {shown < list.length && (
          <div className="mt-8 flex flex-col items-center gap-2">
            <button onClick={() => setShown((s) => s + PAGE)} className="rounded-full bg-green-900 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-green-800">
              Show more
            </button>
            <p className="text-xs text-ink/55">
              Showing {Math.min(shown, list.length)} of {list.length}
            </p>
          </div>
        )}
      </Container>

      {current && (
        <div role="dialog" aria-modal="true" aria-label="Photograph viewer" className="fixed inset-0 z-[60] flex flex-col bg-green-950/[0.97] text-white" onClick={() => setOpen(null)}>
          <div className="flex items-center justify-between px-5 py-4 text-sm" onClick={(e) => e.stopPropagation()}>
            <span className="font-medium text-white/70">
              {open! + 1} / {list.length}
            </span>
            <button ref={closeRef} onClick={() => setOpen(null)} className="rounded-full border border-white/25 px-4 py-2 font-semibold hover:bg-white/10">
              Close
            </button>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 pb-6 md:px-16">
            <Image
              key={current.id}
              src={full(current)}
              alt={ALT[current.c] ?? "72 The League Season 1"}
              width={current.fw}
              height={current.fh}
              sizes="100vw"
              className="max-h-full w-auto max-w-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              aria-label="Previous photograph"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-xl hover:bg-white/20 md:left-5"
            >
              ←
            </button>
            <button
              aria-label="Next photograph"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-xl hover:bg-white/20 md:right-5"
            >
              →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
