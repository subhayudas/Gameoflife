import Image from "next/image";
import { PLATFORM } from "@/lib/data";
import { Reveal } from "../Reveal";
import { Container, SectionHead } from "./Shared";

export default function Platform() {
  return (
    <section id="about" className="bg-cream py-20 md:py-28">
      <Container>
        <SectionHead center eyebrow="What we do" title="We create, own and grow sports IP." sub="Properties built like proper sports assets, from the franchise to the fan." />

        <ul className="mt-14 grid gap-px overflow-hidden border border-forest-900/15 bg-forest-900/15 md:grid-cols-3">
          {PLATFORM.map((p, i) => (
            <li key={p.title} className="bg-cream">
              <Reveal delay={i * 90} className="h-full p-4 md:p-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-forest-900">
                  <Image
                    src={p.img}
                    alt=""
                    fill
                    sizes="(min-width:768px) 30vw, 92vw"
                    style={{ objectPosition: p.pos }}
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <h3 className="serif mt-6 text-3xl text-forest-900">{p.title}</h3>
                <p className="mt-3 max-w-xs pb-3 text-[15px] leading-relaxed text-ink/65">{p.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
