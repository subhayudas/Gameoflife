"use client";

import Image from "next/image";
import { useState } from "react";
import { GOLS_LOGO, NAV } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-forest-900/10 bg-paper/95 backdrop-blur-md">
      <div className="mx-auto grid h-20 w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-5 md:px-8">
        <a href="#top" aria-label="Game of Life Sports" className="block">
          <Image src={GOLS_LOGO.src} alt="Game of Life — Play · Grow · Succeed" width={GOLS_LOGO.w} height={GOLS_LOGO.h} className="h-14 w-auto" priority />
        </a>

        <nav className="hidden justify-self-center md:block" aria-label="Primary">
          <ul className="flex items-center gap-7 text-[13px] font-medium text-forest-900/75 lg:gap-9">
            {NAV.map((n) => (
              <li key={n.label}>
                <a href={n.href} className="py-2 transition hover:text-forest-900">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-start-3 flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-sm bg-forest-900 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-paper transition hover:bg-forest-700 sm:block"
          >
            Partner with us
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-sm border border-forest-900/20 md:hidden"
          >
            <span className="grid gap-1">
              <i className="block h-0.5 w-5 rounded bg-forest-900" />
              <i className="block h-0.5 w-5 rounded bg-forest-900" />
              <i className="block h-0.5 w-5 rounded bg-forest-900" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <ul className="border-t border-forest-900/10 bg-paper px-5 py-2 text-base font-medium text-forest-900 md:hidden">
          {[...NAV, { label: "Partner with us", href: "#contact" }].map((n) => (
            <li key={n.label} className="border-b border-forest-900/10 last:border-0">
              <a href={n.href} onClick={() => setOpen(false)} className="block py-4">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
