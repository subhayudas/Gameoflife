// Content is sourced from the GOLS brand deck, property fact sheets and the
// events calendar in /data. Kept deliberately short — the site complements the
// decks, it does not replicate them. No sponsorship pricing lives here.

// ───────────────────────────── Navigation ─────────────────────────────

export const GOLS_LOGO = { src: "/img/logos/gols.webp", w: 578, h: 402 };
export const GOLS_LOGO_LIGHT = { src: "/img/logos/gols-l.webp", w: 578, h: 402 };

export const CONTACT = {
  email: "contact@golsports.in",
  titans: "titanscup@golsports.in",
};

// Add the verified profile URLs here and they appear in the footer. Entries with an
// empty href are skipped, so nothing is ever linked until it is real.
export const SOCIALS: { label: string; href: string }[] = [
  { label: "Instagram", href: "" },
  { label: "LinkedIn", href: "" },
  { label: "YouTube", href: "" },
  { label: "X", href: "" },
];

// ───────────────────────────── Properties ─────────────────────────────

export type Logo = { src: string; alt: string; w: number; h: number; cls: string };

export type Property = {
  id: string;
  slug: string;
  name: string;
  kind: string;
  line: string;
  when: string;
  where: string;
  logo: string;
  logoLight: string;
  photo: string;
  position?: string;
  flagship?: boolean;
  /** Hero: next date headline + small print. */
  next: { label: string; value: string; sub: string };
  /** Hero: short format chips. */
  chips: string[];
  /** "What it is", in two lines. */
  about: [string, string];
  /** Format, venue and teams. */
  format: string[];
  venues: string[];
  teams: string[];
  teamsTitle?: string;
  venuePhoto?: { src: string; alt: string; pos?: string };
  /** Past edition or highlights. */
  past: {
    eyebrow: string;
    title: string;
    intro?: string;
    stats?: { value: string; label: string }[];
    rows?: { k: string; v: string; sub?: string }[];
  };
  /** Sponsors for that property. */
  sponsors: {
    title: string;
    logos: Logo[];
    names?: string[];
    empty?: string;
  };
};

const L = {
  indusind: { src: "/img/logos/indusind.webp", alt: "IndusInd Bank", w: 567, h: 72, cls: "h-7 md:h-8" },
  eurosport: { src: "/img/logos/eurosport.webp", alt: "Eurosport", w: 317, h: 69, cls: "h-7 md:h-8" },
  pgti: { src: "/img/logos/pgti.webp", alt: "DP World PGTI", w: 247, h: 170, cls: "h-14 md:h-16" },
  max: { src: "/img/logos/max.webp", alt: "Max Estates", w: 254, h: 127, cls: "h-12 md:h-14" },
  eugenix: { src: "/img/logos/eugenix.webp", alt: "Eugenix Hair Sciences", w: 376, h: 89, cls: "h-9 md:h-10" },
  mg: { src: "/img/logos/mg.webp", alt: "MG Motor", w: 178, h: 178, cls: "h-14 md:h-16" },
} satisfies Record<string, Logo>;

const QUTAB_PHOTO = { src: "/img/gallery/f/105.webp", alt: "Players on the fairway in front of the Qutab Golf Course clubhouse", pos: "50% 55%" };

export const PROPERTIES: Property[] = [
  {
    id: "72",
    slug: "72-the-league",
    name: "72 The League",
    kind: "Professional league",
    line: "India’s exclusive, PGTI-sanctioned professional golf league.",
    when: "Season 2 · 21 Feb – 5 Mar 2027",
    where: "Pune & Mumbai",
    logo: "/img/logos/72.webp",
    logoLight: "/img/logos/72-l.webp",
    photo: "/img/s1/props72.webp",
    position: "50% 35%",
    flagship: true,
    next: { label: "Next date", value: "28 Nov 2026", sub: "Season 2 player auction, Delhi. Season 2 plays 21 Feb – 5 Mar 2027." },
    chips: ["6 franchises", "60 players", "Match play", "PGTI-sanctioned"],
    about: [
      "India’s first exclusive, PGTI-sanctioned professional golf league, recognised by the International Golf Federation.",
      "Six city franchises build their squads at a live player auction, then play match-play golf across a two-week calendar.",
    ],
    format: [
      "6 city-based franchises",
      "10 players per team: 60 players, filled by player auction",
      "Match play across a two-week league calendar",
      "Sanctioned by PGTI and recognised by the IGF",
    ],
    venues: ["Season 2 · Aamby Valley, Pune", "Season 2 · Oxford and Bombay Presidency, Mumbai", "Season 1 · Classic Golf & Country Club, Jaypee Greens and Qutab Golf Course, Delhi NCR"],
    teams: ["Six franchises, each owned by a business or sporting leader", "Season 1 champions: Rajasthan Regals", "Season 1 runners-up: UP Prometheans"],
    past: {
      eyebrow: "Season 1 · 21 Feb – 6 Mar 2026",
      title: "What Season 1 delivered",
      intro: "Delhi NCR hosted the first edition. Rajasthan Regals beat UP Prometheans 12–3 at Qutab Golf Course in the final.",
      stats: [
        { value: "86M", label: "Impressions" },
        { value: "29M", label: "Cumulative social reach" },
        { value: "56", label: "Articles across national, online and regional press" },
        { value: "₹3 Cr", label: "PR value" },
      ],
      rows: [
        { k: "Eurosport India", v: "44K – 95K viewers per episode", sub: "Four episodes of about 52 minutes each" },
        { k: "Launch", v: "National press coverage", sub: "Kapil Dev called the league a strong commercial opportunity" },
      ],
    },
    sponsors: {
      title: "Season 1 partners",
      logos: [L.indusind, L.eurosport, L.pgti],
      names: ["IndusInd Bank · Powered by", "Eurosport · Broadcast", "DP World PGTI · Sanctioning"],
    },
  },
  {
    id: "qgl",
    slug: "qutab-golf-league",
    name: "Qutab Golf League",
    kind: "Amateur team league",
    line: "India’s first franchise-owned amateur golf league, built to behave like sports IP.",
    when: "Season 3 · 13 Nov – 16 Dec 2026",
    where: "Delhi NCR",
    logo: "/img/logos/qgl.webp",
    logoLight: "/img/logos/qgl-l.webp",
    photo: "/img/gallery/f/106.webp",
    position: "50% 60%",
    flagship: true,
    next: { label: "Next date", value: "13 Nov 2026", sub: "Season 3 opens at Qutab Golf Course with the Inaugural Match and Launch Evening." },
    chips: ["15 teams and growing", "Match play", "Max handicap 18", "Delhi NCR"],
    about: [
      "India’s first franchise-owned, city-culture-driven amateur team golf league: closer to an IPL-style property than a golf tournament.",
      "Every team fields a junior and a woman or senior player, so the league grows the game as it plays it.",
    ],
    format: [
      "10 players per team: 6 play each match day, 8 on Finals day",
      "Match play, maximum handicap 18",
      "No auction in Season 3: owners draft directly, subject to handicap verification",
      "Every team fields a junior (under 18) and a woman or senior player; no more than two IGU-ranked players",
    ],
    venues: ["Qutab Golf Course, New Delhi", "Jaypee Wishtown Golf Course, Noida", "Jaypee Greens Golf & Spa Resort, Greater Noida", "ITC Classic Golf & Country Club, Manesar"],
    teams: ["15 teams and growing, up from 10 in Season 2", "Franchise-owned, with team identity built around city culture"],
    venuePhoto: QUTAB_PHOTO,
    past: {
      eyebrow: "Seasons 1 and 2",
      title: "Two seasons in the books",
      intro: "Season 1 launched the league at a single venue. Season 2 widened it to three courses and a streamed docuseries.",
      stats: [
        { value: "1M+", label: "Social views, Season 1" },
        { value: "650K+", label: "Accounts reached" },
        { value: "100K+", label: "Live-stream views of the player auction" },
        { value: "500+", label: "Decision-makers reached each season" },
      ],
      rows: [
        { k: "Season 1 · 4 Jan – 1 Mar 2025", v: "Qutab Golf Course", sub: "10 teams, 16 players per team, auction-drafted" },
        { k: "Season 2 · 7 Nov – 6 Dec 2025", v: "Qutab GC, ITC Classic, Jaypee Greens", sub: "10 teams, round robin, then Champions Trophy and Plate Championship finals" },
        { k: "Season 2 docuseries", v: "On Amazon Prime", sub: "Produced by The Filmy Monks" },
      ],
    },
    sponsors: {
      title: "Season 2 partners",
      logos: [L.max, L.eugenix, L.mg],
      names: ["Also: Speedays"],
    },
  },
  {
    id: "alma",
    slug: "alma-mater-invitational",
    name: "The Alma Mater Invitational",
    kind: "Alumni invitational",
    line: "Nine of Delhi’s top schools. One day of tradition and rivalry.",
    when: "Annual",
    where: "Qutab Golf Course, Delhi",
    logo: "/img/logos/alma.webp",
    logoLight: "/img/logos/alma-l.webp",
    photo: "/img/gallery/f/130.webp",
    position: "50% 55%",
    next: { label: "Next date", value: "To be announced", sub: "An annual event at Qutab Golf Course, New Delhi." },
    chips: ["9 alumni teams", "100–115 players", "Shotgun start", "Gala night"],
    about: [
      "An annual invitational uniting alumni teams from nine of Delhi’s most prestigious schools.",
      "Played on tradition, rivalry and friendship, then closed with a gala night and prize ceremony.",
    ],
    format: ["9 alumni teams", "Field of 100–115 players", "Shotgun start at 12:30 PM", "Gala night and prize ceremony from 6:30 PM"],
    venues: ["Qutab Golf Course, New Delhi"],
    teamsTitle: "The nine teams",
    teams: [
      "Modern School (Vasant Vihar)",
      "DPS (Mathura Road and RK Puram)",
      "The British School",
      "Vasant Valley School",
      "St. Columba’s School",
      "Dipsite Golfing Fraternity",
      "Air Force Bal Bharati School",
      "The Shri Ram School",
      "Modern Eagles",
    ],
    venuePhoto: QUTAB_PHOTO,
    past: {
      eyebrow: "Editions",
      title: "A growing tradition",
      intro: "The first edition played in 2024. Edition 2 was set for Friday 11 September 2026 at Qutab Golf Course.",
      rows: [
        { k: "Edition 1 · 2024", v: "Qutab Golf Course", sub: "The inaugural alumni invitational" },
        { k: "Edition 2 · Friday 11 September 2026", v: "Qutab Golf Course", sub: "Shotgun start 12:30 PM · Field of 100–115 · Gala night and prize ceremony from 6:30 PM" },
      ],
    },
    sponsors: {
      title: "Partners",
      logos: [],
      empty: "Partners for the next edition are yet to be announced. Title, gold and silver positions are open.",
    },
  },
  {
    id: "dgf",
    slug: "dipsite-golfing-fraternity",
    name: "Dipsite Golfing Fraternity",
    kind: "Alumni golfing bash",
    line: "The DPS alumni network, where influence meets affluence.",
    when: "Annual",
    where: "Qutab Golf Course, Delhi",
    logo: "/img/logos/dgf.webp",
    logoLight: "/img/logos/dgf-l.webp",
    photo: "/img/gallery/f/619.webp",
    position: "50% 50%",
    next: { label: "Next date", value: "To be announced", sub: "An annual bash at Qutab Golf Course, New Delhi." },
    chips: ["DPS alumni", "100–115 players", "300+ attendees", "Celebrity gala"],
    about: [
      "The annual golfing bash of the DPS alumni network, positioned where influence meets affluence.",
      "CEOs, entrepreneurs, investors and industry leaders spend a day of sport and connection together.",
    ],
    format: [
      "Annual golfing bash for DPS alumni",
      "Field of 100–115 players, 300+ expected attendees",
      "Shotgun start at 12:30 PM",
      "Gala night and prize ceremony at 7:00 PM with celebrity entertainment",
    ],
    venues: ["Qutab Golf Course, New Delhi"],
    teams: ["Open to DPS alumni: C-suite, entrepreneurs, investors and industry leaders", "On-course contests: Longest Drive, Closest to the Pin, Reach the Stars, Putting Champion, Straightest Drive"],
    teamsTitle: "Who plays",
    venuePhoto: QUTAB_PHOTO,
    past: {
      eyebrow: "Latest edition",
      title: "The 2025 bash",
      intro: "A closed, high-trust network of DPS alumni, brought together on the fairways.",
      rows: [
        { k: "Friday 24 October 2025", v: "Qutab Golf Course, New Delhi", sub: "Shotgun start 12:30 PM · Gala night and prize ceremony 7:00 PM" },
        { k: "Attendance", v: "100–115 players, 300+ expected attendees" },
      ],
    },
    sponsors: {
      title: "2023 edition partners",
      logos: [L.mg],
      names: ["IHCL", "SIX5SIX", "Envee Optix", "The Advanced Gloster", "Adhiraaj Valley", "Fresh Street Banquets"],
    },
  },
  {
    id: "titans",
    slug: "titans-cup",
    name: "The Titans Cup",
    kind: "Head-to-head invitational",
    line: "Relive the rivalry: Dipsite Falcons vs Modern Eagles.",
    when: "Annual",
    where: "Qutab Golf Course, Delhi",
    logo: "/img/logos/titans.webp",
    logoLight: "/img/logos/titans-l.webp",
    photo: "/img/gallery/f/744.webp",
    position: "50% 40%",
    next: { label: "Next date", value: "To be announced", sub: "An annual invitational at Qutab Golf Course, New Delhi." },
    chips: ["2 teams", "Head to head", "100 players", "#ReliveTheRivalry"],
    about: [
      "A two-team invitational built on the school rivalry between the Dipsite Falcons and the Modern Eagles.",
      "One headline rivalry rather than a crowded field, promoted jointly by Game of Life Sports and Sports Boulevard.",
    ],
    format: ["Two teams, head to head", "A single headline rivalry, not a multi-team league", "100 participants", "Prize ceremony 6:00 PM, gala night from 7:00 PM"],
    venues: ["Qutab Golf Course, New Delhi"],
    teamsTitle: "The teams",
    teams: ["Dipsite Falcons", "Modern Eagles"],
    venuePhoto: QUTAB_PHOTO,
    past: {
      eyebrow: "Latest edition",
      title: "The 2025 invitational",
      rows: [
        { k: "Wednesday 1 October 2025", v: "Qutab Golf Course, New Delhi", sub: "Shotgun start 12:30 PM · 100 participants" },
        { k: "Evening", v: "Prize ceremony at 6:00 PM, gala night from 7:00 PM" },
      ],
    },
    sponsors: {
      title: "Partners",
      logos: [],
      empty: "Partners are yet to be announced. Title, gold and silver positions are open.",
    },
  },
];

export const propertyBySlug = (slug: string) => PROPERTIES.find((p) => p.slug === slug);

export const NAV = [
  { label: "About", href: "/about" },
  { label: "Properties", href: "/#properties", children: PROPERTIES.map((p) => ({ label: p.name, href: `/properties/${p.slug}`, logo: p.logo, kind: p.kind })) },
  { label: "Schedule", href: "/schedule" },
  { label: "Leadership", href: "/leadership" },
  { label: "Media", href: "/media" },
];
export const NAV_CTA = { label: "Partner with us", href: "/partner" };

// ───────────────────────────── Home / About ─────────────────────────────

// Hero photograph. hero-1 is the primary; hero-2 (Qutab clubhouse) is the alternate.
export const HERO_IMAGES = {
  "hero-1": { alt: "A player plays out of a bunker during 72 The League Season 1", pos: "62% 55%" },
  "hero-2": { alt: "A player hits down the fairway toward the Qutab Golf Course clubhouse", pos: "50% 55%" },
} as const;
export const HERO: keyof typeof HERO_IMAGES = "hero-1";

export const HERO_STATS = [
  { value: "5", label: "Sports properties" },
  { value: "500+", label: "Decision-makers every season" },
  { value: "86M", label: "Impressions, 72 Season 1" },
];

export const PLATFORM = [
  { title: "League IP", text: "Franchise-led leagues built and owned like proper sports properties.", img: "/img/s1/trophy.webp", pos: "50% 40%", contain: true },
  { title: "Grassroots", text: "10-year State Golf Association partnerships, plus junior and women’s pathways.", img: "/img/gallery/f/761.webp", pos: "50% 50%" },
  { title: "Fan layer", text: "Broadcast on Eurosport India, OTT docuseries, fantasy golf and a league app.", img: "/img/s1/broadcast.webp", pos: "50% 50%" },
];

export const GRASSROOTS = [
  { title: "State Golf Associations", text: "10-year partnerships to develop golf and create new pathways for junior and grassroots programmes." },
  { title: "Juniors and schools", text: "72 Juniors and a School Open bring young golfers into the league ecosystem." },
  { title: "Course management", text: "A partnership with the Golf Course Superintendents & Managers Association of India builds skills in course care." },
];

export const FAN_LAYER = [
  { title: "Broadcast", text: "72 The League Season 1 aired on Eurosport India, drawing 44K to 95K viewers per episode." },
  { title: "OTT docuseries", text: "The QGL Season 2 docuseries, produced by The Filmy Monks, streams on Amazon Prime." },
  { title: "Fantasy golf", text: "Dream Team fantasy golf sits inside the 72 The League app, so fans play along all season." },
  { title: "League app", text: "Quizzes, rewards and an end-of-season coffee table book keep fans engaged between rounds." },
];

export const SEASON_ONE = [
  { n: "01", title: "Launch", text: "PGTI and Game of Life unveil the league to the media in Delhi.", img: "/img/s1/launch.webp", pos: "50% 40%" },
  { n: "02", title: "Auction", text: "Six franchises build their squads in a live player auction.", img: "/img/s1/auction.webp", pos: "30% 50%" },
  { n: "03", title: "Teams", text: "Franchise launches, like UP Prometheans’, give each team its identity.", img: "/img/s1/teams.webp", pos: "50% 50%" },
  { n: "04", title: "Rounds", text: "Team matches across Delhi NCR’s leading courses.", img: "/img/s1/rounds.webp", pos: "50% 55%" },
  { n: "05", title: "The final", text: "Rajasthan Regals beat UP Prometheans 12–3 at Qutab Golf Course.", img: "/img/s1/final.webp", pos: "50% 40%" },
  { n: "06", title: "Trophy", text: "Handcrafted by artisans, from sheet metal to mirror finish.", img: "/img/s1/trophy.webp", pos: "50% 40%", contain: true },
];

export const TROPHY_CRAFT = [
  { img: "/img/s1/craft1.webp", alt: "Artisan welding the 72 The League trophy" },
  { img: "/img/s1/craft2.webp", alt: "Artisan polishing the 72 The League trophy" },
  { img: "/img/s1/craft3.webp", alt: "Hand-drawn sketch of the trophy design" },
];

export const SEASON_TWO = {
  dates: "21 Feb – 5 Mar 2027",
  where: "Pune and Mumbai",
  venues: "Aamby Valley, Pune · Oxford and Bombay Presidency, Mumbai",
  auction: "Player auction · 28 November 2026 · Delhi",
  targets: [
    { value: "50M+", label: "Social views, impressions and reach" },
    { value: "100+", label: "Pieces of user-generated content" },
    { value: "20+", label: "Articles in national and business press" },
  ],
};

export const LEAGUE_YEAR = [
  { title: "Play", text: "72 Pro-Ams in all six franchise cities, pairing pros with amateurs." },
  { title: "Access", text: "First Swing clinics, an Auction Night and an Awards Night." },
  { title: "Connect", text: "The 72 Business Networking Forum for owners, CXOs and entrepreneurs." },
  { title: "Amplify", text: "The 72 The League app with Dream Team fantasy golf." },
  { title: "Grow", text: "Women in 72 and the 72 Juniors / School Open." },
];

export const AWARD = {
  eyebrow: "Recognition",
  title: "Sports Startup of the Year",
  line: "Game of Life Sports named Winner – Silver at the Sports Awards 2026.",
  img: "/img/s1/award.webp",
};

// ───────────────────────────── Partner ─────────────────────────────

export const BRAND_OFFER = [
  { n: "01", title: "Visibility", text: "Title and presenting rights across jerseys, courses, broadcast and digital." },
  { n: "02", title: "Engagement", text: "On-course activations, hosted teams and content your audience actually follows." },
  { n: "03", title: "Business access", text: "Time with 500+ founders, CXOs and HNI decision-makers every season." },
  { n: "04", title: "Custom IP", text: "Co-create a league, team or invitational built around your brand." },
];

export const BRAND_SPOTS = [
  { title: "Tee boxes", text: "League and sponsor walls at every hole.", img: "/img/s1/tee.webp", pos: "55% 50%" },
  { title: "Team vans", text: "Franchise-branded transport on site.", img: "/img/s1/van.webp", pos: "50% 55%" },
  { title: "Caddie bibs", text: "Your mark on every bag-carrier.", img: "/img/s1/bib.webp", pos: "50% 45%" },
  { title: "Broadcast", text: "Live on Eurosport India, with on-screen branding.", img: "/img/s1/broadcast.webp", pos: "50% 50%" },
];

export const AUDIENCE = [
  { value: "₹75L+", label: "Average household income" },
  { value: "35–64", label: "Peak earning years" },
  { value: "C-suite", label: "Founders, promoters & CEOs" },
];

// Full-colour transparent logos, set directly on the page — never on a photo or a tile.
export const PARTNERS: Logo[] = [L.indusind, L.eurosport, L.pgti, L.max, L.eugenix, L.mg];

// ───────────────────────────── Schedule ─────────────────────────────

export type CalItem = { slug: string; title: string; date: string; where: string };

// Major properties and milestones only — not individual match days.
export const CALENDAR: CalItem[] = [
  { slug: "qutab-golf-league", title: "Qutab Golf League · Season 3", date: "13 Nov – 16 Dec 2026", where: "Delhi NCR · 4 courses" },
  { slug: "72-the-league", title: "72 The League · Player auction", date: "28 Nov 2026", where: "Delhi" },
  { slug: "72-the-league", title: "72 The League · Season 2", date: "21 Feb – 5 Mar 2027", where: "Pune & Mumbai" },
];

export const CALENDAR_ANNUAL = ["alma-mater-invitational", "dipsite-golfing-fraternity", "titans-cup"];
export const CALENDAR_NOTE = "Alma Mater Invitational, DGF and The Titans Cup return annually. Next dates to be announced.";

// ───────────────────────────── Leadership ─────────────────────────────

export type Person = { title: string; name: string; role?: string; img?: string; portrait?: boolean };

export const FOUNDERS: Person[] = [
  { title: "Mr", name: "Samant Sikka", role: "Fintech and growth leader", img: "/img/leader-sikka.webp" },
  { title: "Mr", name: "Amit Kharabanda", role: "Entrepreneur and strategic investor", img: "/img/leader-kharabanda.webp" },
];

export const ADVISORS: Person[] = [
  { title: "Mr", name: "Shouvik" },
  { title: "Mr", name: "Joy Bhattacharjya", role: "Architect of Indian sports leagues", img: "/img/leader-joy.webp" },
  { title: "Mr", name: "Aditya Ghosh", role: "Co-founder, Akasa Air", img: "/img/leader-ghosh.webp" },
  { title: "Mr", name: "Sundeep" },
  { title: "Mr", name: "Arjun Nowar" },
];

export const KAPIL: Person = {
  title: "Mr",
  name: "Kapil Dev",
  role: "President, DP World PGTI · The Torchbearer",
  img: "/img/s1/kapil.webp",
  portrait: true,
};
export const KAPIL_LINE = "India’s most celebrated sporting export, connecting golf to the country’s cricket-loving millions.";

export const COUNCIL: Person[] = [
  { title: "Mr", name: "Amandeep Johl", role: "CEO, PGTI", img: "/img/leader-johl.webp" },
  { title: "Mr", name: "Amrit Mathur", role: "Commissioner, 72 The League", img: "/img/leader-mathur.webp" },
  { title: "Mr", name: "Nikesh Arora", role: "Business visionary and strategist", img: "/img/leader-nikesh.webp" },
  { title: "Mrs", name: "Kiran Nadar", role: "Chairperson, KNMA · PGTI Board", img: "/img/leader-nadar.webp" },
];
