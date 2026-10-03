// Content is sourced from the GOLS brand deck, property fact sheets and the
// events calendar in /data. Kept deliberately short — the site complements the
// decks, it does not replicate them. No sponsorship pricing lives here.

export const NAV = [
  { label: "Properties", href: "#properties" },
  { label: "Partner", href: "#partner" },
  { label: "Calendar", href: "#calendar" },
  { label: "Leadership", href: "#leadership" },
];

export const HERO_STATS = [
  { value: "5", label: "Sports properties" },
  { value: "500+", label: "Decision-makers every season" },
  { value: "86M", label: "Impressions, 72 Season 1" },
];

export const PLATFORM = [
  { title: "League IP", text: "Franchise-led leagues built and owned like proper sports properties." },
  { title: "Grassroots", text: "10-year State Golf Association partnerships, plus junior and women’s pathways." },
  { title: "Fan layer", text: "Broadcast on Eurosport India, OTT docuseries, fantasy golf and a league app." },
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
    logo: "/img/logo-72.webp",
    photo: "/img/photo-72.webp",
    flagship: true,
  },
  {
    id: "qgl",
    name: "Qutab Golf League",
    kind: "Amateur team league",
    line: "India’s first franchise-owned amateur golf league, built to behave like sports IP.",
    when: "Season 3 · 13 Nov – 16 Dec 2026",
    where: "Delhi NCR",
    logo: "/img/logo-qgl.webp",
    photo: "/img/photo-qgl2.webp",
    position: "18% 40%",
    flagship: true,
  },
  {
    id: "alma",
    name: "The Alma Mater Invitational",
    kind: "Alumni invitational",
    line: "Nine of Delhi’s top schools. One day of tradition and rivalry.",
    when: "Annual",
    where: "Qutab Golf Course, Delhi",
    logo: "/img/logo-alma.webp",
    photo: "/img/photo-alma2.webp",
    position: "42% 50%",
  },
  {
    id: "dgf",
    name: "Dipsite Golfing Fraternity",
    kind: "Alumni golfing bash",
    line: "The DPS alumni network, where influence meets affluence.",
    when: "Annual",
    where: "Qutab Golf Course, Delhi",
    logo: "/img/logo-dgf.webp",
    photo: "/img/photo-dgf.webp",
  },
  {
    id: "titans",
    name: "The Titans Cup",
    kind: "Head-to-head invitational",
    line: "Relive the rivalry: Dipsite Falcons vs Modern Eagles.",
    when: "Annual",
    where: "Qutab Golf Course, Delhi",
    logo: "/img/logo-titans.webp",
    photo: "/img/photo-titans.webp",
  },
];

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

export const PARTNERS = [
  { src: "/img/sp-indusind.webp", alt: "IndusInd Bank" },
  { src: "/img/sp-eurosport.webp", alt: "Eurosport" },
  { src: "/img/sp-pgti.webp", alt: "DP World PGTI" },
  { src: "/img/sp-max.webp", alt: "Max Estates" },
  { src: "/img/sp-eugenix.webp", alt: "Eugenix Hair Sciences" },
  { src: "/img/sp-mg.webp", alt: "MG Motor" },
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
  img: "/img/leader-kapil.webp",
};

export const CONTACT = {
  email: "contact@golsports.in",
  titans: "titanscup@golsports.in",
};
