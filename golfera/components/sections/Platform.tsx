import { PLATFORM } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Container } from "./Shared";

export default function Platform() {
  return (
    <section className="bg-ivory py-16 md:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {PLATFORM.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="border-t-2 border-green-900 pt-5">
                <h3 className="display text-2xl text-green-900">{p.title}</h3>
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-ink/65">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
