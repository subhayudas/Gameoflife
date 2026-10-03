import type { ReactNode } from "react";
import { Reveal } from "../Reveal";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 md:px-8 ${className}`}>{children}</div>;
}

export function SectionHead({ eyebrow, title, sub, dark = false }: { eyebrow: string; title: ReactNode; sub?: string; dark?: boolean }) {
  return (
    <Reveal className="max-w-3xl">
      <span className={`eyebrow ${dark ? "text-lime" : "text-green-800"}`}>{eyebrow}</span>
      <h2 className={`display mt-4 text-[clamp(2.6rem,6.5vw,5rem)] ${dark ? "text-white" : "text-green-900"}`}>{title}</h2>
      {sub && <p className={`mt-5 max-w-xl text-base leading-relaxed md:text-lg ${dark ? "text-white/70" : "text-ink/65"}`}>{sub}</p>}
    </Reveal>
  );
}

export const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-green-950 transition hover:brightness-95";
export const BTN_GHOST =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10";
