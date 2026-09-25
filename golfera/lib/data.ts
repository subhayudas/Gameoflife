// All content is sourced from the GOLS brand deck, property fact sheets,
// talking points and the events & sponsor calendar in /data.

export type PropertyId = "72" | "qgl" | "alma" | "dgf" | "titans";

export type Tier = { name: string; price: string; note?: string; perks?: string[]; status?: string };

export type Property = {
  id: PropertyId;
  no: string;
  name: string;
  short: string;
  tagline: string;
  logo: string;
  photos: string[];
  accent: string;
  kind: string;
  headlineDate: string;
  headlineVenue: string;
  format: string[];
  details: { label: string; value: string }[];
  audience: string[];
  apart: string[];
  media?: { value: string; label: string }[];
  mediaNotes?: string[];
  sponsors?: { title: string; names: string[] }[];
  sponsorLogos?: { src: string; alt: string }[];
  tiersTitle: string;
  tiers: Tier[];
  tiersFootnote?: string;
  contact?: string;
};

export const NAV = [
  { label: "Home", href: "#top" },
  { label: "Properties", href: "#properties" },
  { label: "Calendar", href: "#calendar" },
  { label: "Audience", href: "#audience" },
  { label: "Leadership", href: "#leadership" },
];

export const STATS = [
  { value: 5, suffix: "", label: "Golf properties" },
  { value: 500, suffix: "+", label: "HNI decision-makers a season" },
  { value: 15, suffix: "", label: "QGL teams in Season 3" },
  { value: 86, suffix: "M", label: "Impressions, 72 Season 1" },
  { value: 17, suffix: "+", label: "Golf courses in the QGL network" },
];

export const PILLARS = [
  {
    title: "72 The League",
    text: "India’s exclusive professional, franchise-led golf league, in partnership with PGTI under a long-term agreement.",
  },
  {
    title: "Qutab Golf League",
    text: "Delhi NCR’s premier amateur golf league, now entering its third season with golfers from 17+ golf courses.",
  },
  {
    title: "State Golf Associations",
    text: "10-year partnerships with State Golf Associations to grow golf and open new junior and grassroots pathways.",
  },
  {
    title: "GCS&MAI Partnership",
    text: "Working with the Golf Course Superintendents & Managers Association of India on skills in course management and maintenance.",
  },
];

export const PROPERTIES: Property[] = [
  {
    id: "72",
    no: "01",
    name: "72 The League",
    short: "72",
    tagline: "India’s exclusive, PGTI-sanctioned professional golf league, recognised by the International Golf Federation.",
    logo: "/img/logo-72.webp",
    photos: ["/img/photo-72.webp"],
    accent: "#1c3d7a",
    kind: "Professional league",
    headlineDate: "21 Feb – 5 Mar 2027",
    headlineVenue: "Pune & Mumbai",
    format: [
      "6 city-based franchises",
      "10 players per team — 60 players, filled by auction",
      "Match play across a two-week calendar",
    ],
    details: [
      { label: "Season 1 · Completed", value: "21 Feb – 6 Mar 2026 · Delhi NCR — Classic Golf & Country Club, Jaypee Greens, Qutab Golf Course" },
      { label: "Season 2 · Upcoming", value: "21 Feb – 5 Mar 2027 · Pune (Aamby Valley) & Mumbai (Oxford & Bombay Presidency)" },
      { label: "Player auction", value: "28 November, Delhi" },
      { label: "Sanction", value: "PGTI-sanctioned · recognised by the International Golf Federation" },
    ],
    audience: [
      "HNIs, promoters, founders, CEOs and C-suite decision-makers",
      "Household income ₹75 lakh+, aged 35–64",
      "Luxury car owners, premium cardholders, elite club members, 1–2 international trips a year",
      "Active in capital markets and luxury real estate",
    ],
    apart: [
      "India’s first exclusive, officially sanctioned pro-golf league",
      "‘72’ signals even par, perfection and mastery — an ambigram of balance and fairness",
      "Access-driven sponsorship: proximity to C-suite decision-makers, not just broadcast reach",
      "Backed by industry veterans and seasoned investors for governance, scale and sustainability",
    ],
    media: [
      { value: "56", label: "Articles" },
      { value: "₹3 Cr", label: "PR value" },
      { value: "29M", label: "Reach" },
      { value: "86M", label: "Impressions" },
    ],
    mediaNotes: [
      "Launch covered by national business and sports press, including ANI and Tribune News Service.",
      "Instagram reached 335% of its target views.",
      "Season 1 broadcast on Eurosport India — 44K to 95K viewers per episode.",
    ],
    sponsorLogos: [
      { src: "/img/logo-gols.webp", alt: "Game of Life — organising partner" },
      { src: "/img/sp-indusind.webp", alt: "IndusInd Bank — powered by partner" },
      { src: "/img/sp-eurosport.webp", alt: "Eurosport — broadcast partner" },
      { src: "/img/sp-pgti.webp", alt: "DP World PGTI — sanctioning partner" },
    ],
    tiersTitle: "Season 2 partnership tiers",
    tiers: [
      { name: "Title Sponsor", price: "₹5 Cr", note: "Highest visibility — the sponsor’s name on the league itself.", status: "Available" },
      { name: "Powered By Sponsor", price: "₹3 Cr", note: "Strong secondary branding.", status: "Held by IndusInd Bank" },
      { name: "Associate Sponsor", price: "₹1 Cr", note: "A lighter entry point with real visibility.", status: "Available" },
    ],
    tiersFootnote:
      "Every tier includes jersey branding, on-course signage, broadcast and livestream presence, event presence and social & digital content.",
  },
  {
    id: "qgl",
    no: "02",
    name: "Qutab Golf League",
    short: "QGL",
    tagline: "India’s first-of-its-kind amateur team golf league — franchise-owned, city-culture driven, built to behave like sports IP.",
    logo: "/img/logo-qgl.webp",
    photos: ["/img/photo-qgl1.webp", "/img/photo-qgl2.webp"],
    accent: "#4a8a1f",
    kind: "Amateur team league",
    headlineDate: "13 Nov – 16 Dec 2026",
    headlineVenue: "Delhi NCR · 4 courses",
    format: [
      "10 players per team — 6 play each match day, 8 on Finals day",
      "Match play, maximum handicap 18",
      "Owners draft directly in Season 3 (no auction), subject to handicap verification",
      "Every team fields a junior (under 18), a woman or senior player, and at most 2 IGU-ranked players",
    ],
    details: [
      { label: "Season 1 · Completed", value: "4 Jan – 1 Mar 2025 · Qutab Golf Course · 10 teams, 16 players each (12 owner picks + 4 auction)" },
      { label: "Season 2 · Completed", value: "7 Nov – 6 Dec 2025 · Qutab GC, ITC Classic (Manesar), Jaypee Greens (Gr. Noida) · 10 teams, round robin + Champions Trophy / Plate Championship finals" },
      { label: "Season 3 · Upcoming", value: "13 Nov – 16 Dec 2026 · Qutab GC, Jaypee Wishtown, Jaypee Greens, ITC Classic Manesar · 15 teams and growing" },
      { label: "Key dates", value: "EOI 30 Jun 2026 · Teams final 15 Aug · Handicap Review 14 & 21 Sep · Final handicaps 1 Oct 2026" },
    ],
    audience: [
      "C-suite, senior management, entrepreneurs, defence and bureaucrats across Delhi NCR",
      "Median age 35+, disposable income ₹75 lakh+",
      "Over 500 HNI decision-makers reached per season",
      "Luxury car owners, elite club members, investors in capital markets and real estate",
    ],
    apart: [
      "Structural inclusivity — every team fields women, junior and senior/services players",
      "‘Category monopoly’ — zero-dilution association with premium Delhi-NCR golf",
      "‘Sponsor’s Team’ turns sponsorship into a season-long client hospitality platform",
      "Team ownership fee cut 53% in Season 3 to widen participation",
    ],
    media: [
      { value: "1M+", label: "Social views" },
      { value: "650K+", label: "Accounts reached" },
      { value: "500K+", label: "Launch-week impressions" },
      { value: "100K+", label: "Auction live-stream views" },
    ],
    mediaNotes: [
      "Season 1 press: ANI, ABP Live, Lokmat Times, Devdiscourse, Mid-Day, Dainik Bhaskar and more.",
      "Season 2: OTT docuseries by The Filmy Monks on Amazon Prime, print in TOI, Panache and DT, a Golf Plus magazine partnership and outdoor advertising across NCR.",
      "Individual posts and reels have reached 95K to 380K+ views.",
    ],
    sponsors: [
      { title: "Season 2 partners", names: ["Max Estates", "Eugenix", "MG Motor", "Speedays"] },
      { title: "Season 1 partners included", names: ["Callaway", "Jack Daniel’s", "MG", "Sobha", "Golf Plus Monthly", "Kairali", "Asia Spa Resort", "The Amber Vermont Estate"] },
    ],
    sponsorLogos: [
      { src: "/img/sp-max.webp", alt: "Max Estates" },
      { src: "/img/sp-eugenix.webp", alt: "Eugenix Hair Sciences" },
      { src: "/img/sp-mg.webp", alt: "MG Motor" },
    ],
    tiersTitle: "Season 3 partnership tiers",
    tiers: [
      { name: "Title Sponsor", price: "₹50 Lakh", note: "Complete category monopoly — instant synonymy with premium golf in Delhi." },
      { name: "Powered By Sponsor", price: "₹25 Lakh", note: "Strong secondary visibility across the league." },
      { name: "Sponsor’s Team", price: "₹20 Lakh", note: "Own a full QGL team as a client platform — 30+ high-value relationships, goody bags and match-day prizes.", status: "New tier" },
      { name: "Associate Sponsor", price: "₹9 Lakh", note: "A lighter entry with meaningful visibility." },
    ],
    tiersFootnote:
      "All tiers get on-ground signage, digital and print amplification and an end-of-season ROI report. Team ownership is separate: ₹5.5L (Season 2 owners), ₹6L (Season 1 returning), ₹6.5L (new) + GST.",
  },
  {
    id: "alma",
    no: "03",
    name: "The Alma Mater Invitational",
    short: "Alma Mater",
    tagline: "An annual invitational uniting alumni teams from nine of Delhi’s most prestigious schools — tradition, rivalry and friendship.",
    logo: "/img/logo-alma.webp",
    photos: ["/img/photo-alma1.webp", "/img/photo-alma2.webp"],
    accent: "#1a3a9c",
    kind: "Alumni invitational",
    headlineDate: "Fri, 11 Sep 2026",
    headlineVenue: "Qutab Golf Course, New Delhi",
    format: [
      "9 alumni teams · field size 100–115",
      "Shotgun start 12:30 PM",
      "Entertainment, drinks and dinner",
      "Gala night and prize ceremony from 6:30 PM",
    ],
    details: [
      { label: "Edition", value: "#2 · 2026 (Edition #1 was played in 2024)" },
      { label: "Theme", value: "“Tradition & Rivalry” and “Community & Friendship”" },
      { label: "Venue", value: "Qutab Golf Course, New Delhi" },
    ],
    audience: [
      "Median age 35+, average disposable income ₹75 lakh+",
      "C-suite, senior management, entrepreneurs, defence and bureaucrats",
      "Delhi NCR · owners of ₹1 Cr+ automobiles · elite golf club members",
    ],
    apart: [
      "A cross-school alumni network spanning nine of Delhi’s most prestigious schools",
      "Broader reach than any single-institution property",
      "Title tier includes exclusive attendee data access — name, email, phone, organisation, position",
    ],
    tiersTitle: "Edition #2 partnership tiers",
    tiers: [
      {
        name: "Title Sponsor",
        price: "₹10 Lakh + GST",
        perks: ["Naming rights", "Branding on 9 tee boxes (focus Tee 1 & 10)", "6 runner boards", "4 playing slots", "On-site activation stall", "Attendee data access"],
      },
      { name: "Gold / Car Sponsor", price: "₹6 Lakh + GST", perks: ["6 tee boxes", "4 runner boards", "2 playing slots", "Collaborative social posts"] },
      { name: "Silver Sponsor", price: "₹3 Lakh + GST", perks: ["3 tee boxes", "3 runner boards", "1 playing slot", "Collateral logo placement"] },
    ],
  },
  {
    id: "dgf",
    no: "04",
    name: "Dipsite Golfing Fraternity",
    short: "DGF",
    tagline: "The annual golfing bash of the DPS alumni network — where influence meets affluence.",
    logo: "/img/logo-dgf.webp",
    photos: ["/img/photo-dgf.webp"],
    accent: "#1e6b34",
    kind: "Alumni golfing bash",
    headlineDate: "Fri, 24 Oct 2025",
    headlineVenue: "Qutab Golf Course, New Delhi",
    format: [
      "DPS alumni — CEOs, entrepreneurs, investors and industry leaders",
      "Field 100–115 · 300+ expected attendees",
      "Shotgun start 12:30 PM",
      "Gala night and prize ceremony at 7:00 PM, with celebrity entertainment",
    ],
    details: [
      { label: "Annual Golfing Bash", value: "2025 edition · Friday, 24 October 2025" },
      { label: "Positioning", value: "“Where Influence meets Affluence.”" },
    ],
    audience: [
      "DPS alumni — C-suite, senior management, entrepreneurs, defence and bureaucrats",
      "Median age 35+, disposable income ₹75 lakh+ · Delhi NCR",
      "50 lakh+ automobile owners, premium cardholders, elite club members",
    ],
    apart: ["Direct access to a closed, high-trust DPS alumni network of CXOs, investors and industry leaders"],
    sponsors: [
      { title: "Past sponsors · 2023 edition", names: ["IHCL", "MG", "SIX5SIX", "Envee Optix", "The Advanced Gloster", "Adhiraaj Valley", "Fresh Street Banquets"] },
    ],
    tiersTitle: "2025 partnership tiers",
    tiers: [
      { name: "Title Sponsor", price: "₹10 Lakh + GST", status: "1 slot", perks: ["Naming rights", "4 playing slots", "6 runner boards", "8 Instagram + 8 LinkedIn posts"] },
      { name: "Gold Sponsor", price: "₹5 Lakh + GST", status: "2 slots", perks: ["2 playing slots", "3 runner boards", "4 Instagram + 2 LinkedIn posts"] },
      { name: "Car Sponsor", price: "₹5 Lakh + GST", status: "1 slot", perks: ["2 cars on display", "4 runner boards", "4 Instagram + 4 LinkedIn posts"] },
      { name: "Silver Sponsor", price: "₹3 Lakh + GST", status: "3 slots", perks: ["1 playing slot", "Entrance arch logo", "2 runner boards"] },
      {
        name: "Skill Prizes",
        price: "₹2 Lakh + GST",
        status: "5 slots",
        perks: ["Longest Drive", "Closest to the Pin", "Reach the Stars", "Putting Champion", "Straightest Drive"],
      },
    ],
  },
  {
    id: "titans",
    no: "05",
    name: "The Titans Cup",
    short: "Titans Cup",
    tagline: "“Relive the Rivalry” — a two-team invitational built on the school rivalry between the Dipsite Falcons and the Modern Eagles.",
    logo: "/img/logo-titans.webp",
    photos: ["/img/photo-titans.webp"],
    accent: "#1b4fbf",
    kind: "Head-to-head invitational",
    headlineDate: "Wed, 1 Oct 2025",
    headlineVenue: "Qutab Golf Course, New Delhi",
    format: [
      "Two teams, head to head — not a multi-team league",
      "Promoted jointly by Game of Life Sports and Sports Boulevard",
      "Field size 100 participants · shotgun start 12:30 PM",
      "Prize ceremony 6:00 PM · gala night from 7:00 PM",
    ],
    details: [
      { label: "Invitational", value: "2025 edition · Wednesday, 1 October 2025" },
      { label: "Hashtag", value: "#ReliveTheRivalry" },
    ],
    audience: [
      "C-suite, entrepreneurs, defence and bureaucrats across Delhi NCR",
      "Median age 35+, income ₹75 lakh+",
      "Alumni of top Delhi schools",
    ],
    apart: [
      "One headline head-to-head rivalry",
      "Sponsors back a single story, not a crowded multi-team field",
    ],
    tiersTitle: "2025 partnership tiers",
    tiers: [
      { name: "Title Sponsor", price: "₹10 Lakh + GST", status: "1 slot", perks: ["Naming rights", "4 playing slots", "6 runner boards", "On-site activation stall", "4 Instagram posts", "Registration page & emailer"] },
      { name: "Gold Sponsor", price: "₹5 Lakh + GST", status: "2 slots", perks: ["2 playing slots", "3 runner boards", "On-site activation stall", "2 Instagram posts"] },
      { name: "Silver Sponsor", price: "₹3 Lakh + GST", status: "3 slots", perks: ["1 playing slot", "Entrance arch logo", "2 runner boards", "Thank-you emailer"] },
    ],
    contact: "titanscup@golsports.in",
  },
];

export const ALMA_SCHOOLS = [
  "Modern School (Vasant Vihar)",
  "DPS Mathura Road & RK Puram",
  "The British School",
  "Vasant Valley School",
  "St. Columba’s School",
  "Dipsite Golfing Fraternity",
  "Air Force Bal Bharati School",
  "The Shri Ram School",
  "Modern Eagles",
];

export const BROADCAST = [
  { ep: "E1", date: "14 Mar", reach: 95, mins: 52 },
  { ep: "E2", date: "15 Mar", reach: 66, mins: 52 },
  { ep: "E3", date: "21 Mar", reach: 44, mins: 53 },
  { ep: "E4", date: "22 Mar", reach: 60, mins: 53 },
];

export const TARGETS_72 = [
  { value: "50M+", label: "Social views, impressions & reach" },
  { value: "2–3%", label: "Engagement on Instagram & LinkedIn" },
  { value: "100+", label: "Pieces of user-generated content" },
  { value: "20+", label: "Articles in national & business press" },
  { value: "3–5×", label: "Engagement lift for sponsor brands" },
];

export const QGL_SEASONS = [
  { s: "Season 1", dates: "4 Jan – 1 Mar 2025", venue: "Qutab Golf Course", teams: 10, note: "Auction-drafted (12 owner picks + 4 auction), 16 players a team", status: "Completed" },
  { s: "Season 2", dates: "7 Nov – 6 Dec 2025", venue: "Qutab GC · ITC Classic · Jaypee Greens", teams: 10, note: "Round robin + Champions Trophy / Plate finals, 14 players a team", status: "Completed" },
  { s: "Season 3", dates: "13 Nov – 16 Dec 2026", venue: "Qutab GC · Jaypee Wishtown · Jaypee Greens · ITC Classic", teams: 15, note: "Direct drafting by owners, 10 players a team", status: "Upcoming" },
];

export const QGL_SCHEDULE = [
  { n: 1, date: "Fri, 13 Nov 2026", venue: "Qutab Golf Course, New Delhi", note: "Inaugural Match & Launch Evening" },
  { n: 2, date: "Fri, 20 Nov 2026", venue: "Jaypee Wishtown Golf Course, Noida" },
  { n: 3, date: "Wed, 25 Nov 2026", venue: "Jaypee Greens Golf & Spa Resort, Gr. Noida" },
  { n: 4, date: "Thu, 3 Dec 2026", venue: "ITC Classic Golf & Country Club, Manesar" },
  { n: 5, date: "Fri, 11 Dec 2026", venue: "Venue TBD", note: "Networking Dinner" },
  { n: 6, date: "Wed, 16 Dec 2026", venue: "Qutab Golf Course, New Delhi", note: "Finals" },
];

export const QGL_PRIZES = [
  { pos: "1st · Winner", under20: "₹3 Lacs", over20: "₹3.5 Lacs" },
  { pos: "2nd · Runner-up", under20: "₹2 Lacs", over20: "₹2.5 Lacs" },
  { pos: "3rd place", under20: "₹1 Lac", over20: "₹1.5 Lacs" },
  { pos: "4th place", under20: "₹0.5 Lac", over20: "₹1 Lac" },
];

export type CalEvent = {
  id: string;
  prop: PropertyId;
  title: string;
  date: string;
  sort: string;
  venue: string;
  note?: string;
  group: "upcoming" | "past";
};

export const EVENTS: CalEvent[] = [
  { id: "e1", prop: "alma", title: "The Alma Mater Invitational · Edition #2", date: "Fri, 11 Sep 2026", sort: "2026-09-11", venue: "Qutab Golf Course, New Delhi", note: "Shotgun 12:30 PM · Gala from 6:30 PM", group: "upcoming" },
  { id: "e2", prop: "qgl", title: "QGL Season 3 · Match day 1", date: "Fri, 13 Nov 2026", sort: "2026-11-13", venue: "Qutab Golf Course, New Delhi", note: "Inaugural Match & Launch Evening", group: "upcoming" },
  { id: "e3", prop: "qgl", title: "QGL Season 3 · Match day 2", date: "Fri, 20 Nov 2026", sort: "2026-11-20", venue: "Jaypee Wishtown Golf Course, Noida", group: "upcoming" },
  { id: "e4", prop: "qgl", title: "QGL Season 3 · Match day 3", date: "Wed, 25 Nov 2026", sort: "2026-11-25", venue: "Jaypee Greens Golf & Spa Resort, Greater Noida", group: "upcoming" },
  { id: "e5", prop: "72", title: "72 The League · Season 2 player auction", date: "28 November", sort: "2026-11-28", venue: "Delhi", group: "upcoming" },
  { id: "e6", prop: "qgl", title: "QGL Season 3 · Match day 4", date: "Thu, 3 Dec 2026", sort: "2026-12-03", venue: "ITC Classic Golf & Country Club, Manesar", group: "upcoming" },
  { id: "e7", prop: "qgl", title: "QGL Season 3 · Networking Dinner", date: "Fri, 11 Dec 2026", sort: "2026-12-11", venue: "Venue TBD", group: "upcoming" },
  { id: "e8", prop: "qgl", title: "QGL Season 3 · Finals", date: "Wed, 16 Dec 2026", sort: "2026-12-16", venue: "Qutab Golf Course, New Delhi", group: "upcoming" },
  { id: "e9", prop: "72", title: "72 The League · Season 2", date: "21 Feb – 5 Mar 2027", sort: "2027-02-21", venue: "Pune: Aamby Valley · Mumbai: Oxford & Bombay Presidency", note: "Six franchise teams", group: "upcoming" },
  { id: "e10", prop: "titans", title: "The Titans Cup · Invitational 2025", date: "Wed, 1 Oct 2025", sort: "2025-10-01", venue: "Qutab Golf Course, New Delhi", note: "2026 date to be confirmed", group: "past" },
  { id: "e11", prop: "dgf", title: "DGF · Annual Golfing Bash 2025", date: "Fri, 24 Oct 2025", sort: "2025-10-24", venue: "Qutab Golf Course, New Delhi", note: "2026 date to be confirmed", group: "past" },
  { id: "e12", prop: "qgl", title: "QGL Season 2", date: "7 Nov – 6 Dec 2025", sort: "2025-11-07", venue: "Qutab GC · ITC Classic · Jaypee Greens", group: "past" },
  { id: "e13", prop: "72", title: "72 The League · Season 1", date: "21 Feb – 6 Mar 2026", sort: "2026-02-21", venue: "Delhi NCR — Classic Golf & Country Club, Jaypee Greens, Qutab GC", group: "past" },
  { id: "e14", prop: "qgl", title: "QGL Season 1", date: "4 Jan – 1 Mar 2025", sort: "2025-01-04", venue: "Qutab Golf Course", group: "past" },
];

export const GOLFER = {
  persona: "The Golfer — the most valuable customer in sport",
  facts: [
    { value: "₹75L+", label: "Average household income" },
    { value: "35–64", label: "Age range · peak earning years" },
    { value: "1–2", label: "International trips a year" },
    { value: "C-suite", label: "HNIs, founders, promoters & CEOs" },
  ],
  lifestyle: [
    "Luxury car owners",
    "Amex / Citi Gold cardholders",
    "Elite golf club members",
    "Capital-market investors",
    "Luxury real-estate buyers",
    "Delhi NCR residents",
  ],
  categories: [
    "Automobiles",
    "Financial services & wealth",
    "Luxury real estate",
    "Hospitality",
    "Aviation, travel & tourism",
    "Electronics",
    "Lifestyle & watches",
    "Clothing & sports",
    "Food & beverage",
    "Furniture",
  ],
};

export const MARKET = [
  { value: "₹2,500 Cr+", label: "India golf market value" },
  { value: "18–22%", label: "Annual market growth" },
  { value: "1M+", label: "Active golfers, up from 500K in 2015" },
  { value: "+45%", label: "Youth participation growth in 3 years" },
];

export const MARKET_BARS = [
  { label: "Golfers earning above ₹50 lakh a year", pct: 95 },
  { label: "Golfers who are business owners or C-suite", pct: 78 },
  { label: "Business professionals who see golf as ‘the sport of business’", pct: 54 },
];

export const WHY_GOLF = [
  { value: "3–5×", label: "Higher emotional affinity than regular advertising" },
  { value: "6×", label: "More professionals call golf the sport of business than motorsport" },
  { value: "<1%", label: "Golf participation in India vs 3–5% in developed markets" },
  { value: "59 yrs", label: "Rolex’s unbroken investment in golf" },
];

export const ECOSYSTEM = [
  { key: "Play", img: "/img/gen-hills.webp", text: "6 cities × 72 Pro-Ams — pros and amateurs on the same course." },
  { key: "Amplify", img: "/img/gen-gala.webp", text: "72 The League app, Dream Team fantasy golf, quizzes, rewards and an end-of-season coffee-table book." },
  { key: "Access", img: "/img/gen-juniors.webp", text: "6 × First Swing for non-golfers, golf clinics and prizes, plus an auction night and an awards night." },
  { key: "Grow", img: "/img/gen-women.webp", text: "Women in 72, 72 Juniors and a School Open." },
  { key: "Connect", img: "/img/gen-network.webp", text: "72 Business Networking Forum for franchise owners, CXOs, entrepreneurs and business leaders." },
];

export const PARTNERS = [
  { src: "/img/sp-indusind.webp", alt: "IndusInd Bank" },
  { src: "/img/sp-eurosport.webp", alt: "Eurosport" },
  { src: "/img/sp-pgti.webp", alt: "DP World PGTI" },
  { src: "/img/sp-max.webp", alt: "Max Estates" },
  { src: "/img/sp-eugenix.webp", alt: "Eugenix Hair Sciences" },
  { src: "/img/sp-mg.webp", alt: "MG Motor" },
];

export const PRESS = [
  "ANI",
  "Tribune News Service",
  "ABP Live",
  "Lokmat Times",
  "Devdiscourse",
  "Mid-Day",
  "Dainik Bhaskar",
  "Times of India",
  "Golf Plus",
  "Amazon Prime",
  "Eurosport India",
];

export const LEADERS = [
  { name: "Mr. Nikesh Arora", img: "/img/leader-nikesh.webp", bio: "Business visionary and corporate strategist with Fortune 500 leadership experience." },
  { name: "Mr. Amitabh Kant", img: "/img/leader-kant.webp", bio: "Business visionary and corporate strategist with Fortune 500 leadership experience." },
  { name: "Mrs. Kiran Nadar", img: "/img/leader-nadar.webp", bio: "Philanthropist, Chairperson of the Kiran Nadar Museum of Art and PGTI Board Member strengthening India’s golf ecosystem." },
  { name: "Mr. Amandeep Johl", img: "/img/leader-johl.webp", bio: "CEO of PGTI with 34+ years in Indian golf — National Amateur Champion (1989), 20 years on the Asian Tour, founding member of the Asian Tour and former India national coach." },
  { name: "Mr. Amrit Mathur", img: "/img/leader-mathur.webp", bio: "Sports administrator who transformed Indian cricket for 30+ years as BCCI General Manager, Team India Manager and IPL Delhi Daredevils COO — now Commissioner of 72 The League." },
  { name: "Mr. Aditya Ghosh", img: "/img/leader-ghosh.webp", bio: "Co-founder of Akasa Air, former President of IndiGo (2008–2018), former CEO of OYO Hotels & Homes and WEF Young Global Leader." },
  { name: "Mr. Joy Bhattacharjya", img: "/img/leader-joy.webp", bio: "Architect of major Indian sports leagues. Sports producer who orchestrated the FIFA U-17 World Cup, was integral to the IPL’s inception and led Kolkata Knight Riders to titles in 2012 and 2014." },
  { name: "Mr. Amit Kharabanda", img: "/img/leader-kharabanda.webp", bio: "Serial entrepreneur, strategic investor and business architect with deep expertise in building scalable ventures." },
  { name: "Mr. Samant Sikka", img: "/img/leader-sikka.webp", bio: "Fintech leader and growth specialist with a proven record scaling high-value enterprises." },
  { name: "Wg. Cdr. Arun K. Singh", img: "/img/leader-arun.webp", bio: "Former Director General, Indian Golf Union — institutional golf expertise." },
];

export const KAPIL = {
  name: "Mr. Kapil Dev",
  role: "The Torchbearer",
  img: "/img/leader-kapil.webp",
  bio: "His presidency at DP World PGTI brings extraordinary value that transcends golf itself: cross-sport credibility that connects golf to India’s cricket-obsessed masses, celebrity influence that opens doors at the highest corporate and government levels, corporate authority trusted by boardrooms, and global recognition as India’s most celebrated sporting export.",
};

export const CONTACT = {
  email: "contact@golsports.in",
  titans: "titanscup@golsports.in",
};
