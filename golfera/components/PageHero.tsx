import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Container } from "./sections/Shared";

// Compact dark band that opens every interior page.
export default function PageHero({ eyebrow, title, sub, children }: { eyebrow: string; title: ReactNode; sub?: string; children?: ReactNode }) {
  return (
    <section className="bg-forest-900 py-16 text-paper md:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <span className="eyebrow flex items-center gap-3 text-olive">
            <span aria-hidden className="h-px w-10 bg-olive" />
            {eyebrow}
          </span>
          <h1 className="serif mt-6 text-[clamp(2.6rem,6vw,4.8rem)]">{title}</h1>
          {sub && <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 md:text-lg">{sub}</p>}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
