// Content is sourced from the GOLS brand deck, property fact sheets and the
// events calendar in /data. Kept deliberately short — the site complements the
// decks, it does not replicate them. No sponsorship pricing lives here.

export const NAV = [
  { label: "Properties", href: "#properties" },
  { label: "Season 1", href: "#season-one" },
  { label: "Partner", href: "#partner" },
  { label: "Calendar", href: "#calendar" },
  { label: "Leadership", href: "#leadership" },
  { label: "Gallery", href: "#gallery" },
];

// Hero photograph. hero-1 is the primary; hero-2 (Qutab clubhouse) is the alternate —
// swap the key to change the home-page hero.
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
  { title: "League IP", text: "Franchise-led leagues built and owned like proper sports properties.", img: "/img/s1/trophy.webp", pos: "50% 40%" },
  { title: "Grassroots", text: "10-year State Golf Association partnerships, plus junior and women’s pathways.", img: "/img/gallery/f/761.webp", pos: "50% 50%" },
  { title: "Fan layer", text: "Broadcast on Eurosport India, OTT docuseries, fantasy golf and a league app.", img: "/img/s1/broadcast.webp", pos: "50% 50%" },
];

export type Property = {
  id: string;
  name: string;
  kind: string;
  line: string;
  when: string;
  where: string;
  logo: string;
  photo: string;
  position?: string;
  flagship?: boolean;
};

export const PROPERTIES: Property[] = [
  {
    id: "72",
    name: "72 The League",
    kind: "Professional league",
    line: "India’s exclusive, PGTI-sanctioned professional golf league.",
    when: "Season 2 · 21 Feb – 5 Mar 2027",
    where: "Pune & Mumbai",
    logo: "/img/logos/72.webp",
    photo: "/img/s1/props72.webp",
    position: "50% 35%",
    flagship: true,
  },
  {
    id: "qgl",
    name: "Qutab Golf League",
    kind: "Amateur team league",
    line: "India’s first franchise-owned amateur golf league, built to behave like sports IP.",
    when: "Season 3 · 13 Nov – 16 Dec 2026",
    where: "Delhi NCR",
    logo: "/img/logos/qgl.webp",
    photo: "/img/gallery/f/106.webp",
    position: "50% 60%",
    flagship: true,
  },
  {
    id: "alma",
    name: "The Alma Mater Invitational",
    kind: "Alumni invitational",
    line: "Nine of Delhi’s top schools. One day of tradition and rivalry.",
    when: "Annual",
    where: "Qutab Golf Course, Delhi",
    logo: "/img/logos/alma.webp",
    photo: "/img/gallery/f/130.webp",
    position: "50% 55%",
  },
  {
    id: "dgf",
    name: "Dipsite Golfing Fraternity",
    kind: "Alumni golfing bash",
    line: "The DPS alumni network, where influence meets affluence.",
    when: "Annual",
    where: "Qutab Golf Course, Delhi",
    logo: "/img/logos/dgf.webp",
    photo: "/img/gallery/f/613.webp",
    position: "50% 55%",
  },
  {
    id: "titans",
    name: "The Titans Cup",
    kind: "Head-to-head invitational",
    line: "Relive the rivalry: Dipsite Falcons vs Modern Eagles.",
    when: "Annual",
    where: "Qutab Golf Course, Delhi",
    logo: "/img/logos/titans.webp",
    photo: "/img/gallery/f/744.webp",
    position: "50% 40%",
  },
];

export const SEASON_ONE = [
  { n: "01", title: "Launch", text: "PGTI and Game of Life unveil the league to the media in Delhi.", img: "/img/s1/launch.webp", pos: "50% 40%" },
  { n: "02", title: "Auction", text: "Six franchises build their squads in a live player auction.", img: "/img/s1/auction.webp", pos: "30% 50%" },
  { n: "03", title: "Teams", text: "Franchise launches, like UP Prometheans’, give each team its identity.", img: "/img/s1/teams.webp", pos: "50% 50%" },
  { n: "04", title: "Rounds", text: "Team matches across Delhi NCR’s leading courses.", img: "/img/s1/rounds.webp", pos: "50% 55%" },
  { n: "05", title: "The final", text: "Rajasthan Regals beat UP Prometheans 12–3 at Qutab Golf Course.", img: "/img/s1/final.webp", pos: "50% 40%" },
  { n: "06", title: "Trophy", text: "Handcrafted by artisans, from sheet metal to mirror finish.", img: "/img/s1/trophy.webp", pos: "50% 40%" },
];

export const TROPHY_CRAFT = [
  { img: "/img/s1/craft1.webp", alt: "Artisan welding the 72 The League trophy" },
  { img: "/img/s1/craft2.webp", alt: "Artisan polishing the 72 The League trophy" },
  { img: "/img/s1/craft3.webp", alt: "Hand-drawn sketch of the trophy design" },
];

export const BRAND_SPOTS = [
  { title: "Tee boxes", text: "League and sponsor walls at every hole.", img: "/img/s1/tee.webp", pos: "55% 50%" },
  { title: "Team vans", text: "Franchise-branded transport on site.", img: "/img/s1/van.webp", pos: "50% 55%" },
  { title: "Caddie bibs", text: "Your mark on every bag-carrier.", img: "/img/s1/bib.webp", pos: "50% 45%" },
  { title: "Broadcast", text: "Live on Eurosport India, with on-screen branding.", img: "/img/s1/broadcast.webp", pos: "50% 50%" },
];

export const AWARD = {
  eyebrow: "Recognition",
  title: "Sports Startup of the Year",
  line: "Game of Life Sports named Winner – Silver at the Sports Awards 2026.",
  img: "/img/s1/award.webp",
};

export const BRAND_OFFER = [
  { n: "01", title: "Visibility", text: "Title and presenting rights across jerseys, courses, broadcast and digital." },
  { n: "02", title: "Engagement", text: "On-course activations, hosted teams and content your audience actually follows." },
  { n: "03", title: "Business access", text: "Time with 500+ founders, CXOs and HNI decision-makers every season." },
  { n: "04", title: "Custom IP", text: "Co-create a league, team or invitational built around your brand." },
];

export const AUDIENCE = [
  { value: "₹75L+", label: "Average household income" },
  { value: "35–64", label: "Peak earning years" },
  { value: "C-suite", label: "Founders, promoters & CEOs" },
];

// Full-colour transparent logos, set directly on the page — never on a photo or a tile.
export const PARTNERS = [
  { src: "/img/logos/indusind.webp", alt: "IndusInd Bank", w: 567, h: 72, cls: "h-7 md:h-8" },
  { src: "/img/logos/eurosport.webp", alt: "Eurosport", w: 317, h: 69, cls: "h-7 md:h-8" },
  { src: "/img/logos/pgti.webp", alt: "DP World PGTI", w: 247, h: 170, cls: "h-14 md:h-16" },
  { src: "/img/logos/max.webp", alt: "Max Estates", w: 254, h: 127, cls: "h-12 md:h-14" },
  { src: "/img/logos/eugenix.webp", alt: "Eugenix Hair Sciences", w: 376, h: 89, cls: "h-9 md:h-10" },
  { src: "/img/logos/mg.webp", alt: "MG Motor", w: 178, h: 178, cls: "h-14 md:h-16" },
];

export type CalItem = { prop: string; title: string; date: string; where: string; status?: string };

// Major properties and milestones only — not individual match days.
export const CALENDAR: CalItem[] = [
  { prop: "qgl", title: "Qutab Golf League · Season 3", date: "13 Nov – 16 Dec 2026", where: "Delhi NCR · 4 courses" },
  { prop: "72", title: "72 The League · Player auction", date: "28 Nov 2026", where: "Delhi" },
  { prop: "72", title: "72 The League · Season 2", date: "21 Feb – 5 Mar 2027", where: "Pune & Mumbai" },
];

export const CALENDAR_NOTE = "Alma Mater Invitational, DGF and The Titans Cup return annually. Next dates to be announced.";

export const LEADERS = [
  { name: "Nikesh Arora", role: "Business visionary & strategist", img: "/img/leader-nikesh.webp" },
  { name: "Amitabh Kant", role: "Business visionary & strategist", img: "/img/leader-kant.webp" },
  { name: "Kiran Nadar", role: "Chairperson, KNMA · PGTI Board", img: "/img/leader-nadar.webp" },
  { name: "Amandeep Johl", role: "CEO, PGTI", img: "/img/leader-johl.webp" },
  { name: "Amrit Mathur", role: "Commissioner, 72 The League", img: "/img/leader-mathur.webp" },
  { name: "Aditya Ghosh", role: "Co-founder, Akasa Air", img: "/img/leader-ghosh.webp" },
  { name: "Joy Bhattacharjya", role: "Architect of Indian sports leagues", img: "/img/leader-joy.webp" },
  { name: "Amit Kharabanda", role: "Entrepreneur & strategic investor", img: "/img/leader-kharabanda.webp" },
  { name: "Samant Sikka", role: "Fintech & growth leader", img: "/img/leader-sikka.webp" },
  { name: "Wg. Cdr. Arun K. Singh", role: "Former DG, Indian Golf Union", img: "/img/leader-arun.webp" },
];

export const KAPIL = {
  name: "Kapil Dev",
  role: "President, DP World PGTI · The Torchbearer",
  line: "India’s most celebrated sporting export, connecting golf to the country’s cricket-loving millions.",
  img: "/img/s1/kapil.webp",
};

export const GOLS_LOGO = { src: "/img/logos/gols.webp", w: 578, h: 402 };
export const GOLS_LOGO_LIGHT = { src: "/img/logos/gols-l.webp", w: 578, h: 402 };

export const CONTACT = {
  email: "contact@golsports.in",
  titans: "titanscup@golsports.in",
};
