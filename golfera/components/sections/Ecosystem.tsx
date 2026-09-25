import Image from "next/image";
import { ECOSYSTEM, PARTNERS, PRESS } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Container, SectionHead } from "./Shared";

export default function Ecosystem() {
  const press = [...PRESS, ...PRESS];
  return (
    <section id="ecosystem" className="paper relative overflow-hidden pt-20 md:pt-28">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <SectionHead
            eyebrow="72 The League · year-round"
            title={
              <>
                From a 3-week league
                <br />
                to a 365-day platform
              </>
            }
            sub="Built around golf, people and relationships — five pillars that keep partners in front of the right audience all year, not just for two weeks."
          />
          <Reveal delay={120}>
            <div className="skeu-card mx-auto grid h-36 w-36 place-items-center rounded-full p-3 text-[16px] md:h-44 md:w-44">
              <Image src="/img/logo-72.webp" alt="72 The League" width={200} height={200} className="rounded-full mix-blend-multiply" />
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {ECOSYSTEM.map((e, i) => (
            <Reveal key={e.key} delay={i * 90}>
              <article className="skeu-card lift group h-full overflow-hidden rounded-3xl p-2.5 text-[16px]">
                <div className="skeu-bezel relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={e.img}
                    alt=""
                    fill
                    sizes="(min-width:1024px) 20vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052c1a]/90 via-transparent to-transparent" />
                  <span className="skeu-pill absolute left-3 top-3 rounded-full px-3 py-1 text-[0.65rem] font-black uppercase tracking-widest text-green-900">
                    0{i + 1}
                  </span>
                  <h3 className="h2-chrome absolute bottom-3 left-4 !text-[2.4rem]">{e.key}</h3>
                </div>
                <p className="px-2 pb-2 pt-4 text-sm leading-relaxed text-ink/75">{e.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <SectionHead
            align="center" wide
            eyebrow="Partners & press"
            title={
              <>
                Trusted by
                <br />
                the brands we play with
              </>
            }
          />
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
            {PARTNERS.map((p, i) => (
              <Reveal key={p.alt} delay={i * 60}>
                <div className="skeu-card lift grid h-28 place-items-center rounded-3xl px-6 text-[16px]">
                  <Image src={p.src} alt={p.alt} width={220} height={90} className="max-h-16 w-auto object-contain mix-blend-multiply" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>

      <div className="skeu-dark mt-20 overflow-hidden py-5 text-[16px]" aria-label="Press coverage">
        <div className="marquee flex w-max gap-12 whitespace-nowrap">
          {press.map((n, i) => (
            <span key={i} className="flex items-center gap-12 text-lg font-bold uppercase tracking-[0.2em] text-white/85">
              {n} <span className="text-orange-400">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
