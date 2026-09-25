"use client";

import Image from "next/image";
import { useState } from "react";
import { NAV } from "@/lib/data";
import { UNIT } from "@/lib/ui";


export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={`${UNIT} pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[1.4em] pt-[1.2em] lg:px-[5.2em] lg:pt-[2em]`}
    >
      <a href="#top" className="skeu-pill pointer-events-auto flex items-center rounded-[0.9em] px-[0.7em] py-[0.25em]" aria-label="Game of Life Sports">
        <Image src="/img/logo-gols.webp" alt="Game of Life — Play · Grow · Succeed" width={200} height={140} className="h-[3.4em] w-auto mix-blend-multiply" priority />
      </a>

      <nav className="skeu-pill pointer-events-auto absolute left-1/2 hidden -translate-x-1/2 rounded-[0.9em] px-[0.5em] py-[0.35em] md:block">
        <ul className="flex items-center text-[0.95em] font-medium text-ink">
          {NAV.map((n) => (
            <li key={n.label}>
              <a href={n.href} className="block rounded-[0.6em] px-[0.95em] py-[0.7em] transition-colors hover:bg-green-900/10">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="pointer-events-auto flex items-center gap-[1.2em]">
        <a href="#contact" className="skeu-btn hidden rounded-[0.8em] px-[1.1em] py-[0.8em] text-[0.95em] font-semibold text-green-900 sm:block">
          Partner with us
        </a>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="skeu-btn grid h-[2.9em] w-[2.9em] place-items-center rounded-[0.8em] md:hidden"
        >
          <span className="grid gap-[0.28em]">
            <i className="block h-[0.14em] w-[1.1em] rounded bg-ink" />
            <i className="block h-[0.14em] w-[1.1em] rounded bg-ink" />
            <i className="block h-[0.14em] w-[1.1em] rounded bg-ink" />
          </span>
        </button>
      </div>

      {open && (
        <div className="skeu-card pointer-events-auto absolute right-[1.4em] top-[5.2em] w-[16em] rounded-[1.1em] p-[0.6em] md:hidden">
          <ul className="text-[1.05em] font-medium">
            {[...NAV, { label: "Partner with us", href: "#contact" }].map((n) => (
              <li key={n.label}>
                <a href={n.href} onClick={() => setOpen(false)} className="block rounded-[0.7em] px-[0.9em] py-[0.8em] hover:bg-green-900/10">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
