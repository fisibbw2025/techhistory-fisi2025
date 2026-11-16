import { MILESTONES, type Milestone } from "@/data/milestones";

export const SLIDE_MS = 45000;

export type Story = {
  id: string;
  year: number;
  month: number;
  day: number;
  category: string;
  title: string;
  description: string;
  context: string;
  exact: boolean;
  articleUrl: string;
  articleName: string;
  tags: string[];
};

const MONTHS = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

const CATEGORY_LABELS: Record<string, string> = {
  "NETZWERK & DNS": "Netzwerk",
  "IT-SECURITY & KRYPTO": "Sicherheit",
  "HARDWARE & SENSORIK": "Hardware",
  "HARDWARE & CHIPS": "Hardware",
  "OPERATING SYSTEMS": "Systeme",
  "LINUX & CONTAINER": "Systeme",
  "SOFTWARE & CODE": "Software",
  "PIONIERE DER INFORMATIK": "Pioniere",
};

const IT_TERMS =
  /\b(computer|rechner|supercomputer|mainframe|mikroprozessor|prozessor|halbleiter|transistor|integrierter schaltkreis|mikrochip|arbeitsspeicher|festplatte|betriebssystem|linux|unix|windows|ms-dos|macos|android|ios|debian|ubuntu|fedora|software|quellcode|open source|open-source|programmiersprache|algorithmus|compiler|datenbank|internet|arpanet|world wide web|webbrowser|webseite|domain name system|tcp\/ip|ethernet|glasfaser|netzwerkprotokoll|rechenzentrum|kryptographie|verschlüsselung|computervirus|computerwurm|cyberangriff|firewall|it-sicherheit|apple|microsoft|ibm|intel|amd|nvidia|cisco|atari|commodore|amiga|nintendo|playstation|xbox|videospiel|spielkonsole|künstliche intelligenz|cern|icann|ietf|ascii|unicode|zuse|turing|torvalds|berners-lee)\b/i;

const OFF_TOPIC =
  /\b(wahl|präsidentschaftswahl|bundestagswahl|parlament|bundestag|landtag|kongress|senat|präsident|bundeskanzler|minister|premierminister|regierung|partei|koalition|könig|königin|kaiser|zar|herzog|fürst|prinz|papst|bischof|kardinal|kirche|kloster|krieg|weltkrieg|bürgerkrieg|schlacht|armee|truppen|soldaten|wehrmacht|offensive|belagerung|luftangriff|bombenangriff|attentat|mord|ermordung|hinrichtung|massaker|genozid|terroranschlag|entführung|putsch|revolution|aufstand|friedensvertrag|waffenstillstand|kapitulation|verfassung|unabhängigkeit|kolonie|erdbeben|tsunami|wirbelsturm|hurrikan|taifun|vulkanausbruch|überschwemmung|hungersnot|flugzeugabsturz|zugunglück|schiffbruch|grubenunglück|fußball|weltmeisterschaft|europameisterschaft|olympische|olympiasieger|tennis|boxen|formel 1|tour de france|schauspieler|schauspielerin|regisseur|sänger|sängerin|musiker|komponist|band|musikalbum|single-charts|kinofilm|spielfilm|fernsehserie|telenovela|roman|gedicht|schriftsteller|dichter|oper|theater|uraufführung|gemälde|maler|nobelpreis für literatur|friedensnobelpreis)\b/i;

type WikiPage = {
  normalizedtitle?: string;
  description?: string;
  extract?: string;
  content_urls?: { desktop?: { page?: string } };
};

type WikiEvent = {
  year?: number;
  text?: string;
  pages?: WikiPage[];
};

export function berlinToday() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Berlin",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  const [year, month, day] = parts.split("-").map(Number);
  return { year, month, day };
}

export function formatLongDate(month: number, day: number) {
  const { year } = berlinToday();
  const date = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
  return new Intl.DateTimeFormat("de-DE", {
    timeZone: "Europe/Berlin",
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);
}

export function formatClock(date = new Date()) {
  return new Intl.DateTimeFormat("de-DE", {
    timeZone: "Europe/Berlin",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

export function categoryLabel(category: string) {
  return CATEGORY_LABELS[category] ?? "Informatik";
}

export function yearsAgoLabel(year: number, nowYear: number) {
  const diff = nowYear - year;
  if (diff <= 0) return "In diesem Jahr";
  if (diff === 1) return "Vor einem Jahr";
  return `Vor ${diff} Jahren`;
}

export function dayMonthLabel(day: number, month: number) {
  return `${day}. ${MONTHS[month - 1] ?? ""}`;
}

function wikiUrl(title: string) {
  return `https://de.wikipedia.org/wiki/${encodeURIComponent(title)}`;
}

function fromMilestone(item: Milestone, exact: boolean): Story {
  return {
    id: `${item.year}-${item.articleTitle.toLowerCase()}`,
    year: item.year,
    month: item.month,
    day: item.day,
    category: item.category,
    title: item.title,
    description: item.description,
    context: item.context,
    exact,
    articleUrl: wikiUrl(item.articleTitle),
    articleName: item.articleTitle.replace(/_/g, " "),
    tags: item.tags.slice(0, 4),
  };
}

function classify(text: string) {
  const t = text.toLowerCase();
  if (/(krypt|verschlüssel|nsa|sicherheit|security|wurm|virus|cyber|firewall|cert|ipsec)/.test(t)) {
    return "IT-SECURITY & KRYPTO";
  }
  if (/(internet|netzwerk|web|arpanet|browser|domain|dns|icann|tcp|ethernet|glasfaser|ietf|rfc|cern)/.test(t)) {
    return "NETZWERK & DNS";
  }
  if (/(linux|unix|windows|betriebssystem|macos|debian|ubuntu|fedora|kernel|ms-dos|android|ios|docker|container)/.test(t)) {
    return "OPERATING SYSTEMS";
  }
  if (/(chip|prozessor|mikroprozessor|transistor|halbleiter|computer|rechner|zuse|eniac|c64|macintosh|ibm|intel|amd|nvidia|hardware|speicher|festplatte|maus|kinect|playstation|xbox|atari|konsole)/.test(t)) {
    return "HARDWARE & CHIPS";
  }
  return "SOFTWARE & CODE";
}

function contextFor(category: string) {
  switch (category) {
    case "IT-SECURITY & KRYPTO":
      return "Zeigt, wie historische Schwachstellen und Kryptographie in heutigen Schutzkonzepten weiterleben: Absicherung, Updates und saubere Systemgrenzen.";
    case "NETZWERK & DNS":
      return "Ohne offene Protokolle, Namensauflösung und Paketvermittlung gäbe es weder Campus-Netze noch die Dienste, die heute darüber laufen.";
    case "OPERATING SYSTEMS":
    case "LINUX & CONTAINER":
      return "Kernel, Prozesse und Pakete sind das Fundament von Servern, Arbeitsplätzen und Containern im aktuellen Betrieb.";
    case "HARDWARE & CHIPS":
    case "HARDWARE & SENSORIK":
      return "Vom diskreten Schaltkreis zur integrierten CPU und GPU: diese Linie erklärt, warum heutige Rechner so gebaut sind.";
    default:
      return "Sprachen, Werkzeuge und offene Zusammenarbeit haben geprägt, wie Software heute entsteht und gepflegt wird.";
  }
}

function finalize(stories: Story[]) {
  const exactRank = (story: Story) => (story.exact ? 1 : 0);
  return [...stories]
    .sort((a, b) => exactRank(b) - exactRank(a) || a.year - b.year)
    .slice(0, 8);
}

export function storiesFor(month: number, day: number): Story[] {
  const seen = new Set<string>();
  const stories: Story[] = [];

  for (const item of MILESTONES) {
    if (item.month !== month || item.day !== day) continue;
    const story = fromMilestone(item, true);
    if (seen.has(story.id)) continue;
    seen.add(story.id);
    stories.push(story);
  }

  if (stories.length < 6) {
    const sameMonth = MILESTONES.filter((item) => item.month === month && item.day !== day).sort(
      (a, b) => Math.abs(a.day - day) - Math.abs(b.day - day),
    );
    const otherMonths = MILESTONES.filter((item) => item.month !== month);
    for (const item of [...sameMonth, ...otherMonths]) {
      if (stories.length >= 6) break;
      const story = fromMilestone(item, false);
      if (seen.has(story.id)) continue;
      seen.add(story.id);
      stories.push(story);
    }
  }

  return finalize(stories);
}

export async function loadDay(month: number, day: number): Promise<Story[]> {
  const seen = new Set<string>();
  const stories: Story[] = [];

  const push = (story: Story) => {
    if (seen.has(story.id)) return;
    seen.add(story.id);
    stories.push(story);
  };

  for (const item of MILESTONES) {
    if (item.month === month && item.day === day) push(fromMilestone(item, true));
  }

  const mm = String(month).padStart(2, "0");
  const dd = String(day).padStart(2, "0");

  try {
    const response = await fetch(
      `https://de.wikipedia.org/api/rest_v1/feed/onthisday/events/${mm}/${dd}`,
      { headers: { Accept: "application/json" } },
    );
    if (response.ok) {
      const data = (await response.json()) as { events?: WikiEvent[] };
      for (const entry of data.events ?? []) {
        if (!entry.text || !entry.year) continue;
        const headline = entry.text.trim();
        const page = entry.pages?.[0];
        const extract = page
          ? `${page.normalizedtitle ?? ""} ${page.description ?? ""} ${page.extract ?? ""}`
          : "";
        const combined = `${headline} ${extract}`;
        if (OFF_TOPIC.test(combined)) continue;
        if (!IT_TERMS.test(headline)) continue;

        const articleName = page?.normalizedtitle || headline.slice(0, 80);
        const category = classify(combined);
        let description = headline;
        if (page?.extract && page.extract.length > 50) {
          const clean = page.extract.replace(/\s+/g, " ").trim();
          description =
            clean.length > 340 ? `${clean.slice(0, 330).replace(/\s+\S*$/, "")}…` : clean;
        }
        const tags = (entry.pages ?? [])
          .slice(0, 3)
          .map((item) => (item.normalizedtitle ?? "").replace(/_/g, " "))
          .filter(Boolean);

        push({
          id: `${entry.year}-${articleName.toLowerCase()}`,
          year: entry.year,
          month,
          day,
          category,
          title: headline,
          description,
          context: contextFor(category),
          exact: true,
          articleUrl: page?.content_urls?.desktop?.page || wikiUrl(articleName),
          articleName: articleName.replace(/_/g, " "),
          tags: tags.length ? tags.slice(0, 4) : [categoryLabel(category)],
        });
      }
    }
  } catch {
    // Kuratierte Einträge bleiben stehen, wenn das Netz gerade nicht mitspielt.
  }

  if (stories.length < 6) {
    const sameMonth = MILESTONES.filter((item) => item.month === month && item.day !== day).sort(
      (a, b) => Math.abs(a.day - day) - Math.abs(b.day - day),
    );
    const otherMonths = MILESTONES.filter((item) => item.month !== month);
    for (const item of [...sameMonth, ...otherMonths]) {
      if (stories.length >= 6) break;
      push(fromMilestone(item, false));
    }
  }

  return finalize(stories);
}
