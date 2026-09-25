import Image from "next/image";
import { UNIT } from "@/lib/ui";

const CARD = "skeu-card rounded-[1.1em]";

function Avatars() {
  return (
    <div className={`${CARD} flex items-center justify-between rounded-[0.9em] p-[0.35em]`}>
      <div className="flex">
        {[1, 2, 3].map((n, i) => (
          <Image
            key={n}
            src={`/img/player${n}.webp`}
            alt=""
            width={80}
            height={80}
            className={`h-[2.4em] w-[2.4em] rounded-full border-[0.15em] border-white object-cover ${i ? "-ml-[0.55em]" : ""}`}
          />
        ))}
      </div>
      <span className="grid h-[2.4em] w-[2.4em] place-items-center text-[1.2em] text-ink/70">+</span>
      <span className="pr-[0.6em] text-[0.72em] font-medium whitespace-nowrap">15 teams · Season 3</span>
    </div>
  );
}

function Matchday() {
  const cols = [
    { l: "Teams", v: "15", hi: true },
    { l: "Players", v: "10" },
    { l: "Venues", v: "4" },
    { l: "Match days", v: "6" },
    { l: "Finals", v: "16 Dec" },
  ];
  return (
    <div className={`${CARD} p-[0.9em]`}>
      <div className="flex items-center justify-between text-[0.72em] font-semibold">
        <span className="flex items-center gap-[0.4em]">
          <svg viewBox="0 0 16 16" className="h-[1.1em] w-[1.1em]" fill="currentColor" aria-hidden>
            <path d="M3 1h1.6v14H3zM5 2l8 2.6L5 7.2z" />
          </svg>
          QGL Season 3
        </span>
        <span>13 Nov 2026</span>
      </div>
      <div className="mt-[0.9em] grid grid-cols-5 text-center">
        {cols.map((c) => (
          <div key={c.l} className="text-[0.58em] text-ink/60">
            {c.l}
          </div>
        ))}
        {cols.map((c) => (
          <div key={c.l + "v"} className="mt-[0.5em] grid place-items-center text-[0.82em] font-semibold">
            <span className={c.hi ? "skeu-chip grid h-[1.7em] w-[1.7em] place-items-center rounded-full" : ""}>{c.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PrizePool() {
  const bars = [
    { d: "1st", label: "₹3L", v: 3, hi: true },
    { d: "2nd", label: "₹2L", v: 2 },
    { d: "3rd", label: "₹1L", v: 1 },
    { d: "4th", label: "₹0.5L", v: 0.5 },
  ];
  return (
    <div className={`${CARD} p-[0.9em]`}>
      <div className="flex items-center justify-between">
        <span className="text-[0.78em] font-semibold">Prize pool</span>
        <span className="text-[0.62em] text-ink/50">Under 20 teams</span>
      </div>
      <div className="mt-[0.8em] grid grid-cols-4 gap-[0.4em]">
        {bars.map((x) => (
          <div key={x.d} className="flex flex-col items-center gap-[0.3em]">
            <div className="skeu-inset relative flex h-[7.2em] w-full items-end overflow-hidden rounded-full">
              <div
                className={`w-full rounded-full ${x.hi ? "skeu-orange" : "skeu-pill"}`}
                style={{ height: `${Math.max(22, (x.v / 3) * 100)}%` }}
              />
              <span
                className={`absolute inset-x-[0.15em] bottom-[0.15em] rounded-full py-[0.3em] text-center text-[0.55em] font-semibold ${
                  x.hi ? "text-white" : "text-ink/70"
                }`}
              >
                {x.label}
              </span>
            </div>
            <span className={`text-[0.58em] ${x.hi ? "font-semibold text-ink" : "text-ink/40"}`}>{x.d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CourseCard() {
  const stats = [
    { l: "Finals", v: "16 Dec" },
    { l: "Season 3 venues", v: "4 courses" },
    { l: "Teams", v: "15" },
  ];
  return (
    <div className={`${CARD} animate-bob p-[0.9em]`} style={{ animationDelay: "-2s" }}>
      <div className="flex items-center justify-between">
        <span className="text-[0.78em] font-semibold">Qutab Golf Course</span>
        <a href="#properties" aria-label="Explore properties" className="skeu-btn grid h-[1.8em] w-[1.8em] place-items-center rounded-full text-[0.7em]">
          ↗
        </a>
      </div>
      <div className="skeu-bezel relative mt-[0.8em] aspect-[4/4.6] overflow-hidden rounded-[0.9em]">
        <Image src="/img/map.webp" alt="Aerial view of a championship golf hole" fill sizes="320px" className="object-cover" />
      </div>
      <dl className="skeu-inset mt-[0.8em] grid grid-cols-3 divide-x divide-ink/10 rounded-[0.7em] py-[0.6em]">
        {stats.map((s) => (
          <div key={s.l} className="px-[0.5em] text-center">
            <dt className="text-[0.5em] leading-tight text-ink/50">{s.l}</dt>
            <dd className="mt-[0.3em] text-[0.68em] font-bold leading-tight">{s.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className={`${UNIT} relative isolate h-svh min-h-[40em] w-full overflow-hidden`}>
      {/* 1 — background */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <Image src="/img/course.webp" alt="" fill priority sizes="100vw" className="animate-drift object-cover object-[50%_60%]" />
        <div className="absolute inset-x-0 top-[22%] h-[42%] bg-gradient-to-b from-transparent via-white/60 to-transparent lg:top-[26%]" />
      </div>

      {/* 2 — headline */}
      <h1
        className="pointer-events-none absolute inset-x-0 top-[31%] z-[2] select-none whitespace-nowrap text-center font-display text-[min(14.2vw,22.8vh)] font-black uppercase leading-[0.8] tracking-[-0.03em] text-[#0b3a1a] lg:top-[37%]"
        style={{ fontStretch: "62%" }}
      >
        Power your play
      </h1>

      {/* copy */}
      <div className="absolute left-[1.4em] top-[6.2em] z-[2] lg:left-[5.2em] lg:top-[14.5em]">
        <p className="text-[2em] font-semibold leading-none tracking-tight text-[#0d3a1d] lg:text-[2.7em]">
          Game of Life Sports
        </p>
        <p className="mt-[0.5em] text-[1em] text-[#2d5a35] lg:text-[1.2em]">5 golf properties across India</p>
      </div>

      {/* social proof */}
      <div className="absolute right-[1.4em] top-[6.2em] z-[2] text-right lg:right-[5.8em] lg:top-[16.5em]">
        <div className="flex items-center justify-end gap-[0.6em]">
          <span className="text-[1.9em] font-medium italic leading-none tracking-tight text-[#0d3a1d] lg:text-[2.4em]">500+</span>
          <span className="hidden text-left text-[0.7em] font-bold leading-tight tracking-wide text-[#0d3a1d] sm:block lg:text-[0.78em]">
            HNI DECISION-MAKERS
            <br />
            REACHED EVERY SEASON
          </span>
        </div>
      </div>

      {/* 3 — golfer */}
      <div className="pointer-events-none absolute left-[52%] top-[30%] z-[3] h-[62%] -translate-x-[51%] md:left-[45%] md:top-[22%] md:h-[78%] lg:left-[36%] lg:top-[22%] lg:h-[120%]">
        <Image
          src="/img/golfer.webp"
          alt="Golfer completing a driver swing"
          width={1345}
          height={2400}
          priority
          sizes="(min-width:1024px) 60vw, 90vw"
          className="animate-rise h-full w-auto max-w-none select-none"
        />
      </div>

      {/* 4 — floating cards */}
      <div className="absolute bottom-[1.2em] left-[1.2em] z-[4] flex w-[calc(100%-2.4em)] max-w-[24em] flex-col gap-[0.7em] md:w-[15.5em] lg:bottom-[2em] lg:left-[5.2em] lg:w-[18.4em] lg:gap-[0.9em]">
        <Avatars />
        <Matchday />
        <div className="hidden md:block">
          <PrizePool />
        </div>
      </div>

      <div className="absolute bottom-[1.2em] right-[1.2em] z-[4] hidden w-[13em] md:block lg:bottom-[2em] lg:right-[5.1em] lg:w-[18.5em]">
        <CourseCard />
      </div>
    </section>
  );
}
