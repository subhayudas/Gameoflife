import Image from "next/image";
import { KAPIL, LEADERS } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Container, SectionHead } from "./Shared";

export default function Leadership() {
  return (
    <section id="leadership" className="slab-dark relative overflow-hidden py-20 text-white md:py-28">
      <Container>
        <SectionHead
          dark
          eyebrow="Leadership"
          title={
            <>
              The people behind
              <br />
              72 The League
            </>
          }
          sub="Sports administrators, business builders and golf legends steering India’s exclusive professional golf league."
        />

        <Reveal>
          <div className="skeu-card mt-12 grid overflow-hidden rounded-[2rem] text-[16px] text-ink md:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-96 bg-[#e9eef4]">
              <Image src={KAPIL.img} alt={KAPIL.name} fill sizes="(min-width:768px) 40vw, 90vw" className="object-cover object-top" />
            </div>
            <div className="flex flex-col justify-center p-7 md:p-12">
              <span className="eyebrow self-start">President · DP World PGTI</span>
              <h3 className="mt-4 text-4xl font-black leading-none text-green-900 md:text-5xl">{KAPIL.name}</h3>
              <p className="mt-1 text-xl font-bold text-orange-600">{KAPIL.role}</p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/75">{KAPIL.bio}</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-5">
          {LEADERS.map((l, i) => (
            <Reveal key={l.name} delay={(i % 5) * 70}>
              <article className="skeu-card lift flex h-full flex-col rounded-3xl p-3 text-[16px] text-ink">
                <div className="skeu-bezel relative aspect-square overflow-hidden rounded-2xl">
                  <Image src={l.img} alt={l.name} fill sizes="(min-width:1024px) 18vw, 45vw" className="object-cover" />
                </div>
                <h3 className="mt-4 px-1 text-base font-extrabold leading-tight text-green-900">{l.name}</h3>
                <p className="mt-1.5 px-1 pb-2 text-[13px] leading-relaxed text-ink/65">{l.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
