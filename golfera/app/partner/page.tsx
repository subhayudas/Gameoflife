import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PartnerLogos } from "@/components/sections/BrandPitch";
import { Container, SectionHead } from "@/components/sections/Shared";
import { AUDIENCE, BRAND_OFFER, BRAND_SPOTS, CONTACT, PROPERTIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Partner with us",
  description: "Visibility, engagement, business access and custom IP across five golf properties. Start a conversation with Game of Life Sports.",
};

export default function PartnerPage() {
  return (
    <>
      <PageHero eyebrow="Partner with us" title="Where brands meet decision-makers." sub="Four ways in, from presence to ownership, across five golf properties." />

      <section className="bg-cream py-20 md:py-28">
        <Container>
          <SectionHead eyebrow="For brands" title="What brands can do with GOLS" />
          <ul className="mt-12 grid border-t border-forest-900/20 sm:grid-cols-2 lg:grid-cols-4">
            {BRAND_OFFER.map((b, i) => (
              <li key={b.title} className="border-b border-forest-900/20 sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0 lg:[&:nth-child(odd)]:border-r">
                <Reveal delay={i * 80} className="h-full p-6 md:p-8">
                  <span className="serif text-xl text-olive-deep">{b.n}</span>
                  <h3 className="serif mt-8 text-3xl text-forest-900">{b.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{b.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <SectionHead eyebrow="Where your brand shows up" title="On the course, on screen, on the team." />
          <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-6 lg:grid-cols-4">
            {BRAND_SPOTS.map((b, i) => (
              <li key={b.title}>
                <Reveal delay={i * 80} className="h-full">
                  <figure className="group">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-forest-900">
                      <Image
                        src={b.img}
                        alt={`${b.title} at 72 The League`}
                        fill
                        sizes="(min-width:1024px) 22vw, 46vw"
                        style={{ objectPosition: b.pos }}
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="mt-4">
                      <h3 className="serif text-2xl text-forest-900">{b.title}</h3>
                      <p className="mt-1.5 text-sm leading-snug text-ink/65">{b.text}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-forest-900 py-16 text-paper md:py-24">
        <Container>
          <Reveal>
            <span className="eyebrow text-olive">The audience</span>
            <dl className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-paper/15">
              {AUDIENCE.map((a) => (
                <div key={a.label} className="sm:px-8 sm:first:pl-0">
                  <dt className="serif text-5xl text-olive md:text-6xl">{a.value}</dt>
                  <dd className="mt-3 text-sm text-paper/70">{a.label}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 max-w-2xl text-[15px] leading-relaxed text-paper/65">
              HNIs, promoters, founders and CEOs. Luxury car owners, premium cardholders and elite club members who invest in capital markets and luxury real estate, and travel abroad once or twice a year.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <Container>
          <PartnerLogos />
        </Container>
      </section>

      <section id="contact" className="bg-paper py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow text-forest-700">Get in touch</span>
            <h2 className="serif mt-4 text-[clamp(2.4rem,5vw,3.8rem)] text-forest-900">Tell us what you’re building.</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/65 md:text-lg">
              Join one of our {PROPERTIES.length} properties or create a new one together.
            </p>
            <p className="mt-8 text-sm text-ink/60">Or write to us directly</p>
            <a href={`mailto:${CONTACT.email}`} className="mt-1 inline-block text-lg font-medium text-forest-900 underline underline-offset-4 hover:text-forest-700">
              {CONTACT.email}
            </a>
          </Reveal>
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
