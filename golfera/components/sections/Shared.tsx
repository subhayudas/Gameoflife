import type { ReactNode } from "react";
import { Reveal } from "../Reveal";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 md:px-8 ${className}`}>{children}</div>;
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  dark = false,
  align = "left",
  wide = false,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  wide?: boolean;
}) {
  return (
    <Reveal className={align === "center" ? wide ? "mx-auto max-w-5xl text-center" : "mx-auto max-w-3xl text-center" : "max-w-4xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={`${dark ? "h2-chrome" : "h2-display"} mt-5`}>{title}</h2>
      {sub && <p className={`mt-6 max-w-2xl text-base leading-relaxed md:text-lg ${dark ? "text-white/80" : "text-ink/75"} ${align === "center" ? "mx-auto" : ""}`}>{sub}</p>}
    </Reveal>
  );
}
