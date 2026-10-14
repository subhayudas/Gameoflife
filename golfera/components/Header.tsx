"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { GOLS_LOGO, NAV, NAV_CTA } from "@/lib/data";

const BTN_CTA =
  "rounded-sm bg-forest-900 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-paper transition hover:bg-forest-700";

export default function Header() {
  const pathname = usePathname();
  const [mobile, setMobile] = useState(false);
  const [menu, setMenu] = useState(false);
  const [mobileProps, setMobileProps] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);

  // Close menus on navigation (adjust-state-during-render, keyed on the pathname).
  const [seen, setSeen] = useState(pathname);
  if (seen !== pathname) {
    setSeen(pathname);
    setMobile(false);
    setMenu(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenu(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onDown);
    };
  }, []);

  const isActive = (href: string, hasKids?: boolean) =>
    hasKids ? pathname.startsWith("/properties") : href !== "/" && pathname.startsWith(href.split("#")[0]);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-900/10 bg-paper/95 backdrop-blur-md">
      <div className="mx-auto grid h-20 w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-5 md:px-8">
        <Link href="/" aria-label="Game of Life Sports, home" className="block">
          <Image src={GOLS_LOGO.src} alt="Game of Life — Play · Grow · Succeed" width={GOLS_LOGO.w} height={GOLS_LOGO.h} className="h-14 w-auto" priority />
        </Link>

        <nav className="hidden justify-self-center md:block" aria-label="Primary">
          <ul className="flex items-center gap-7 text-[13px] font-medium text-forest-900/75 lg:gap-9">
            {NAV.map((n) =>
              n.children ? (
                <li key={n.label} ref={menuRef} className="relative" onMouseEnter={() => setMenu(true)} onMouseLeave={() => setMenu(false)}>
                  <div className="flex items-center gap-1">
                    <Link href={n.href} className={`py-2 transition hover:text-forest-900 ${isActive(n.href, true) ? "text-forest-900" : ""}`}>
                      {n.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Show properties"
                      aria-expanded={menu}
                      aria-haspopup="true"
                      onClick={() => setMenu(true)}
                      className="grid h-6 w-6 place-items-center rounded-sm hover:text-forest-900"
                    >
                      <svg aria-hidden viewBox="0 0 12 12" className={`h-3 w-3 transition ${menu ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 4.5l4 4 4-4" />
                      </svg>
                    </button>
                  </div>
                  {menu && (
                    <div className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3">
                      <ul className="border border-forest-900/10 bg-paper p-2 shadow-xl shadow-forest-950/10">
                        {n.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} className="flex items-center gap-4 rounded-sm px-3 py-2.5 text-forest-900 transition hover:bg-cream">
                              <Image src={c.logo} alt="" width={64} height={64} className="h-10 w-10 shrink-0 object-contain" />
                              <span className="min-w-0">
                                <span className="block text-[14px] font-semibold leading-tight">{c.label}</span>
                                <span className="mt-0.5 block text-[12px] font-normal text-ink/55">{c.kind}</span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ) : (
                <li key={n.label}>
                  <Link href={n.href} className={`py-2 transition hover:text-forest-900 ${isActive(n.href) ? "text-forest-900" : ""}`} aria-current={isActive(n.href) ? "page" : undefined}>
                    {n.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="col-start-3 flex items-center gap-3">
          <Link href={NAV_CTA.href} className={`hidden sm:block ${BTN_CTA}`}>
            {NAV_CTA.label}
          </Link>
          <button
            aria-label={mobile ? "Close menu" : "Open menu"}
            aria-expanded={mobile}
            onClick={() => setMobile((v) => !v)}
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

      {mobile && (
        <div className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-forest-900/10 bg-paper px-5 py-2 md:hidden">
          <ul className="text-base font-medium text-forest-900">
            {NAV.map((n) => (
              <li key={n.label} className="border-b border-forest-900/10">
                {n.children ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={mobileProps}
                      onClick={() => setMobileProps((v) => !v)}
                      className="flex w-full items-center justify-between py-4 text-left font-medium"
                    >
                      {n.label}
                      <svg aria-hidden viewBox="0 0 12 12" className={`h-3.5 w-3.5 transition ${mobileProps ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 4.5l4 4 4-4" />
                      </svg>
                    </button>
                    {mobileProps && (
                      <ul className="pb-3">
                        {n.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} className="flex items-center gap-3 py-2.5 pl-2 text-[15px] font-normal">
                              <Image src={c.logo} alt="" width={48} height={48} className="h-8 w-8 object-contain" />
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={n.href} className="block py-4">
                    {n.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link href={NAV_CTA.href} className={`my-4 block text-center ${BTN_CTA}`}>
            {NAV_CTA.label}
          </Link>
        </div>
      )}
    </header>
  );
}
