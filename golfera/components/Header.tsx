"use client";

import Image from "next/image";
import { useState } from "react";
import { NAV } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-green-950/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" aria-label="Game of Life Sports" className="rounded-lg bg-white px-2 py-1">
          <Image src="/img/logo-gols.webp" alt="Game of Life — Play · Grow · Succeed" width={200} height={140} className="h-9 w-auto" priority />
        </a>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-6 text-sm font-medium text-white/80 lg:gap-8">
            {NAV.map((n) => (
              <li key={n.label}>
                <a href={n.href} className="transition hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-green-950 transition hover:brightness-95 sm:block">
            Partner with us
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 md:hidden"
          >
            <span className="grid gap-1">
              <i className="block h-0.5 w-4 rounded bg-white" />
              <i className="block h-0.5 w-4 rounded bg-white" />
              <i className="block h-0.5 w-4 rounded bg-white" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <ul className="border-t border-white/10 bg-green-950 px-5 py-3 text-base font-medium text-white md:hidden">
          {[...NAV, { label: "Partner with us", href: "#contact" }].map((n) => (
            <li key={n.label}>
              <a href={n.href} onClick={() => setOpen(false)} className="block py-3">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
