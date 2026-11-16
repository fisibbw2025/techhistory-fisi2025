import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import {
  SLIDE_MS,
  berlinToday,
  categoryLabel,
  dayMonthLabel,
  formatClock,
  formatLongDate,
  loadDay,
  storiesFor,
  yearsAgoLabel,
  type Story,
} from "@/lib/chronicle";

const SPOTLIGHTS = [
  { label: "Heute", month: 0, day: 0 },
  { label: "4. Nov", month: 11, day: 4 },
  { label: "2. Nov", month: 11, day: 2 },
  { label: "15. Nov", month: 11, day: 15 },
  { label: "25. Aug", month: 8, day: 25 },
  { label: "1. Jan", month: 1, day: 1 },
  { label: "12. Mai", month: 5, day: 12 },
];

const PILLARS = [
  {
    title: "Systeme",
    text: "Kernel, Distributionen und Container — die Schicht, auf der Server und Arbeitsplätze heute laufen.",
  },
  {
    title: "Netze",
    text: "Namen, Routing und Protokolle. Ohne sie bleibt aus Adressen kein dienstfähiges Netz.",
  },
  {
    title: "Hardware",
    text: "Vom Relais bis zur GPU: warum Rechner so gebaut sind, wie sie im Labor stehen.",
  },
];

export function ChroniclePage() {
  const today = berlinToday();
  const [when, setWhen] = useState({ month: today.month, day: today.day });
  const [pinned, setPinned] = useState(false);
  const [stories, setStories] = useState<Story[]>(() => storiesFor(today.month, today.day));
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [clock, setClock] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  const playingRef = useRef(playing);
  const indexRef = useRef(index);
  const lenRef = useRef(stories.length);
  const elapsedRef = useRef(0);

  playingRef.current = playing;
  indexRef.current = index;
  lenRef.current = stories.length;

  const safeIndex = stories.length ? index % stories.length : 0;
  const story = stories[safeIndex];

  useEffect(() => {
    setReady(true);
    const tick = () => setClock(formatClock());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (pinned) return;
    const id = window.setInterval(() => {
      const next = berlinToday();
      setWhen((current) =>
        current.month === next.month && current.day === next.day
          ? current
          : { month: next.month, day: next.day },
      );
    }, 30000);
    return () => window.clearInterval(id);
  }, [pinned]);

  useEffect(() => {
    const local = storiesFor(when.month, when.day);
    setStories(local);
    setIndex(0);
    elapsedRef.current = 0;
    setProgress(0);
    let cancel = false;
    loadDay(when.month, when.day).then((next) => {
      if (!cancel) setStories(next);
    });
    return () => {
      cancel = true;
    };
  }, [when.month, when.day]);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!playingRef.current || lenRef.current === 0) return;
      elapsedRef.current += 100;
      setProgress(Math.min(1, elapsedRef.current / SLIDE_MS));
      if (elapsedRef.current >= SLIDE_MS) {
        elapsedRef.current = 0;
        setProgress(0);
        setIndex((indexRef.current + 1) % lenRef.current);
      }
    }, 100);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(-1);
      } else if (event.key === " ") {
        event.preventDefault();
        setPlaying((value) => !value);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function go(delta: number) {
    if (!stories.length) return;
    elapsedRef.current = 0;
    setProgress(0);
    setIndex((current) => (current + delta + stories.length) % stories.length);
  }

  function jump(next: number) {
    elapsedRef.current = 0;
    setProgress(0);
    setIndex(next);
  }

  function selectDate(month: number, day: number, followToday: boolean) {
    setPinned(!followToday);
    if (followToday) {
      const live = berlinToday();
      setWhen({ month: live.month, day: live.day });
      return;
    }
    setWhen({ month, day });
  }

  const isoYear = berlinToday().year;
  const iso = `${isoYear}-${String(when.month).padStart(2, "0")}-${String(when.day).padStart(2, "0")}`;

  return (
    <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-6 md:px-8 md:py-10">
      <header className="border-b-2 border-fg pb-4">
        <p className="font-mono text-xs text-cyan">TechDock · Schauraum</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-fg md:text-5xl">Heute in der IT-Geschichte</h1>
            <p className="mt-2 max-w-xl text-base text-muted">
              Kurz erzählt: was an diesem Tag in der Technik passiert ist, und warum es noch zählt.
            </p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-base text-fg">{formatLongDate(when.month, when.day)}</p>
            <p className="font-mono text-lg text-cyan tabular-nums">{clock ?? "––:––:––"}</p>
          </div>
        </div>
      </header>

      <section className="mt-6 grid min-w-0 items-start gap-4 lg:grid-cols-12" aria-label="Meilenstein des Tages">
        <article className="frame panel flex min-w-0 flex-col justify-between gap-8 p-5 md:p-8 lg:col-span-8">
          {story ? (
            <div key={story.id} className="slide-in flex flex-col gap-5">
              <p className="font-mono text-xs text-muted">
                {categoryLabel(story.category)}
                {" · "}
                {yearsAgoLabel(story.year, isoYear)}
                {" · "}
                {story.exact ? "an diesem Tag" : dayMonthLabel(story.day, story.month)}
              </p>

              <p className="font-mono text-5xl font-semibold text-amber md:text-6xl">{story.year}</p>
              <h2 className="text-2xl leading-snug font-semibold text-fg md:text-3xl">{story.title}</h2>

              <p className="max-w-3xl text-base leading-relaxed text-fg md:text-lg">{story.description}</p>

              <blockquote className="border-l-4 border-amber bg-panel-2 px-4 py-3">
                <p className="font-mono text-xs text-muted">Was heute noch zählt</p>
                <p className="mt-2 text-base leading-relaxed text-fg">{story.context}</p>
              </blockquote>

              {story.tags.length > 0 ? (
                <ul className="flex flex-wrap gap-x-3 gap-y-1">
                  {story.tags.map((tag) => (
                    <li key={tag} className="font-mono text-xs text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}

          <div className="mt-2">
            <div className="mb-2 flex items-center justify-between font-mono text-xs text-muted">
              <span>
                {String(safeIndex + 1).padStart(2, "0")} / {String(stories.length).padStart(2, "0")}
              </span>
              <span>{playing ? "Wechselt alle 45 Sekunden" : "Angehalten"}</span>
            </div>
            <div className="h-2 bg-panel-2">
              <div className="h-full bg-cyan" style={{ width: `${progress * 100}%` }} />
            </div>
          </div>
        </article>

        <aside className="flex min-w-0 flex-col gap-4 lg:col-span-4">
          <div className="panel flex min-h-0 min-w-0 flex-1 flex-col p-4">
            <div className="mb-3 flex items-baseline justify-between gap-3 border-b border-line pb-2">
              <h3 className="text-base font-semibold text-fg">An diesem Tag</h3>
              <span className="font-mono text-xs text-muted">{stories.length}</span>
            </div>
            <div className="scroll-thin flex min-w-0 gap-3 overflow-x-auto pb-1 lg:max-h-[28rem] lg:flex-1 lg:flex-col lg:overflow-y-auto">
              {stories.map((item, itemIndex) => {
                const active = itemIndex === safeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => jump(itemIndex)}
                    aria-current={active ? "true" : undefined}
                    className={cn(
                      "min-w-64 shrink-0 border-b border-line p-3 text-left lg:min-w-0 lg:shrink",
                      active ? "bg-panel-2" : "hover:bg-panel-2",
                    )}
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-mono text-sm text-amber">{item.year}</span>
                      <span className="truncate font-mono text-xs text-muted">
                        {categoryLabel(item.category)}
                      </span>
                    </div>
                    <p className={cn("mt-1 line-clamp-2 text-sm leading-snug", active ? "text-cyan underline" : "text-fg")}>
                      {item.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {story ? (
            <p className="px-1 text-sm leading-relaxed text-fg">
              Mehr dazu:{" "}
              <a href={story.articleUrl} target="_blank" rel="noreferrer" className="text-cyan underline">
                {story.articleName} auf Wikipedia
              </a>
            </p>
          ) : null}
        </aside>
      </section>

      <section className="mt-5 flex flex-col gap-4" aria-label="Steuerung">
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="ghost" aria-label="Vorheriger Meilenstein" onClick={() => go(-1)} className="px-3">
            <ChevronLeft className="size-4" />
          </Button>
          <Button variant="solid" onClick={() => setPlaying((value) => !value)} className="min-w-32">
            {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
            {playing ? "Pause" : "Weiter"}
          </Button>
          <Button variant="ghost" aria-label="Nächster Meilenstein" onClick={() => go(1)} className="px-3">
            <ChevronRight className="size-4" />
          </Button>
          <label className="ml-auto flex items-center gap-2 text-sm text-muted">
            <span className="hidden sm:inline">Datum</span>
            {ready ? (
              <input
                type="date"
                value={iso}
                onChange={(event) => {
                  const value = event.target.value;
                  if (!value) return;
                  const [, month, day] = value.split("-").map(Number);
                  if (!month || !day) return;
                  selectDate(month, day, false);
                }}
                className="h-11 border border-line bg-panel px-3 text-sm text-fg"
              />
            ) : (
              <span className="inline-block h-11 w-36 border border-line bg-panel" />
            )}
          </label>
        </div>
        <div className="flex flex-wrap gap-2">
          {SPOTLIGHTS.map((spot) => {
            const active =
              spot.month === 0
                ? !pinned
                : pinned && when.month === spot.month && when.day === spot.day;
            return (
              <button
                key={spot.label}
                type="button"
                onClick={() => selectDate(spot.month, spot.day, spot.month === 0)}
                className={cn(
                  "min-h-11 border px-3 text-sm",
                  active ? "border-fg bg-panel text-cyan underline" : "border-line bg-panel text-fg hover:border-fg",
                )}
              >
                {spot.label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="mt-12 border-t border-fg pt-8" aria-label="Über die Chronik">
        <h2 className="text-2xl font-semibold text-fg">Für den Schauraum und den Unterricht</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          Die Chronik bleibt bei Informatik. Jeder Eintrag sagt, was damals geschah und warum es in
          heutigen Systemen, Netzen und im Code noch eine Rolle spielt.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="panel p-4">
              <h3 className="text-lg font-semibold text-fg">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-10 border-t border-line py-5 font-mono text-xs text-muted">
        <p>TechDock · Heute in der IT-Geschichte</p>
        <p className="mt-1">Systemintegration und Anwendungsentwicklung</p>
      </footer>
    </div>
  );
}
