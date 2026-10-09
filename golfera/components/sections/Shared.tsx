import type { ReactNode } from "react";
import { Reveal } from "../Reveal";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 md:px-8 ${className}`}>{children}</div>;
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={`h-4 w-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  dark = false,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className={`eyebrow ${dark ? "text-olive" : "text-forest-700"}`}>{eyebrow}</span>
      <h2 className={`serif mt-4 text-[clamp(2.4rem,5.4vw,4.2rem)] ${dark ? "text-paper" : "text-forest-900"}`}>{title}</h2>
      {sub && <p className={`mt-5 max-w-xl text-base leading-relaxed md:text-lg ${center ? "mx-auto" : ""} ${dark ? "text-paper/70" : "text-ink/65"}`}>{sub}</p>}
    </Reveal>
  );
}

const BTN = "inline-flex items-center justify-center gap-2.5 rounded-sm px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition";
export const BTN_PRIMARY = `${BTN} bg-olive text-forest-950 hover:bg-[#b4b648]`;
export const BTN_DARK = `${BTN} bg-forest-900 text-paper hover:bg-forest-700`;
export const BTN_GHOST = `${BTN} border border-paper/40 text-paper hover:bg-paper/10`;
