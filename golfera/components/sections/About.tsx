import Image from "next/image";
import { PILLARS } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Container, SectionHead } from "./Shared";

export default function About() {
  return (
    <section id="about" className="paper relative overflow-hidden py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHead
              eyebrow="About Game of Life Sports"
              title={<>A sport‑tainment<br />platform</>}
              sub="Incorporated in 2023, Game of Life Sports builds and operates multiple sports IPs across professional and amateur golf — promoting talent, engaging a new generation of fans with technology and format innovation, and creating pathways for the wider golf ecosystem."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={i * 90}>
                  <div className="skeu-card lift h-full rounded-2xl p-5 text-[16px]">
                    <div className="skeu-orange mb-3 grid h-9 w-9 place-items-center rounded-full text-sm font-black text-white">0{i + 1}</div>
                    <h3 className="text-lg font-bold text-green-900">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={150}>
            <div className="relative mx-auto max-w-md">
              <div className="skeu-card rounded-[2rem] p-3 text-[16px] [transform:perspective(1200px)_rotateY(-6deg)_rotateX(2deg)]">
                <div className="skeu-bezel relative aspect-square overflow-hidden rounded-[1.5rem]">
                  <Image src="/img/gen-ball.webp" alt="Golf ball on a tee" fill sizes="(min-width:1024px) 400px, 90vw" className="object-cover" />
                </div>
              </div>
              <div className="skeu-pill absolute -bottom-5 -left-3 rounded-2xl px-5 py-3 text-[16px] md:-left-8">
                <p className="text-[0.7rem] font-bold uppercase tracking-widest text-ink/50">Incorporated</p>
                <p className="text-2xl font-black text-green-900">2023</p>
              </div>
              <div className="skeu-pill absolute -right-3 top-8 rounded-2xl px-5 py-3 text-[16px] md:-right-8">
                <p className="text-[0.7rem] font-bold uppercase tracking-widest text-ink/50">Portfolio</p>
                <p className="text-2xl font-black text-green-900">5 IPs</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
