import Image from "next/image";
import Link from "next/link";
import { CONTACT, GOLS_LOGO, NAV, NAV_CTA, PROPERTIES, SOCIALS } from "@/lib/data";
import { Container } from "./sections/Shared";

export default function Footer() {
  const socials = SOCIALS.filter((s) => s.href);
  return (
    <footer className="bg-forest-950 py-14 text-paper/65">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
          <div>
            <span className="inline-flex rounded-xl bg-paper px-3 py-2">
              <Image src={GOLS_LOGO.src} alt="Game of Life — Play · Grow · Succeed" width={GOLS_LOGO.w} height={GOLS_LOGO.h} className="h-14 w-auto" />
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">We create, own and grow sports IP, starting with golf.</p>
            <a href={`mailto:${CONTACT.email}`} className="mt-5 inline-block text-sm font-medium text-paper underline underline-offset-4 hover:text-olive">
              {CONTACT.email}
            </a>
            {socials.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium" aria-label="Social media">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-8 text-sm sm:grid-cols-3">
            <ul className="space-y-3 font-medium">
              {NAV.filter((n) => !n.children).map((n) => (
                <li key={n.label}>
                  <Link href={n.href} className="hover:text-paper">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={NAV_CTA.href} className="text-olive hover:text-paper">
                  {NAV_CTA.label}
                </Link>
              </li>
            </ul>
            <div className="sm:col-span-2">
              <Link href="/#properties" className="eyebrow text-paper/45 hover:text-paper">
                Properties
              </Link>
              <ul className="mt-4 space-y-3 font-medium sm:columns-2">
                {PROPERTIES.map((p) => (
                  <li key={p.slug} className="break-inside-avoid">
                    <Link href={`/properties/${p.slug}`} className="hover:text-paper">
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
        <p className="mt-12 border-t border-paper/10 pt-6 text-xs text-paper/45">© {new Date().getFullYear()} Game of Life Sports</p>
      </Container>
    </footer>
  );
}
