import type { Project } from "../data";

/* Simple designed previews, drawn with the theme colours, shown until you add real screenshots. */

const frame = "flex aspect-[16/10] w-full flex-col overflow-hidden rounded-xl border border-fg/10 bg-bg";

function Bar({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-fg/10 bg-surface px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-fg/20" />
      <span className="h-2.5 w-2.5 rounded-full bg-fg/20" />
      <span className="h-2.5 w-2.5 rounded-full bg-fg/20" />
      <span className="ml-3 text-xs font-medium text-muted">{title}</span>
    </div>
  );
}

function EcoMind() {
  const tiles = [
    { k: "PM2.5", v: "18", u: "µg/m³", s: "Safe", c: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" },
    { k: "CO", v: "4.2", u: "ppm", s: "Moderate", c: "bg-amber-500/15 text-amber-600 dark:text-amber-400" },
    { k: "O3", v: "31", u: "ppb", s: "Safe", c: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" },
    { k: "Temp", v: "29°", u: "C", s: "Safe", c: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" },
  ];
  const bars = [30, 42, 38, 55, 48, 62, 50, 44, 58, 40, 35, 46];
  return (
    <div className={frame} role="img" aria-label="Illustrative preview of the EcoMind dashboard">
      <Bar title="EcoMind · Live environment" />
      <div className="grid flex-1 grid-cols-4 gap-2.5 p-4">
        {tiles.map((t) => (
          <div key={t.k} className="rounded-lg border border-fg/10 bg-surface p-2.5">
            <p className="text-[10px] font-medium text-muted">{t.k}</p>
            <p className="mt-1 font-display text-xl font-bold leading-none">{t.v}</p>
            <p className="text-[9px] text-muted">{t.u}</p>
            <span className={`mt-2 inline-block rounded px-1.5 py-0.5 text-[9px] font-semibold ${t.c}`}>{t.s}</span>
          </div>
        ))}
        <div className="col-span-4 flex items-end gap-1.5 rounded-lg border border-fg/10 bg-surface p-3">
          {bars.map((h, i) => (
            <span key={i} className="flex-1 rounded-sm bg-accent/70" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Market() {
  const items = [
    { n: "Tomatoes", p: "₹32 / kg", d: "4 km" },
    { n: "Onions", p: "₹26 / kg", d: "7 km" },
    { n: "Jowar", p: "₹41 / kg", d: "12 km" },
  ];
  return (
    <div className={frame} role="img" aria-label="Illustrative preview of the Farmer Marketplace">
      <Bar title="Farmer Marketplace · Near you" />
      <div className="grid flex-1 grid-cols-3 gap-3 p-4">
        {items.map((it) => (
          <div key={it.n} className="flex flex-col rounded-lg border border-fg/10 bg-surface p-2.5">
            <div className="flex-1 rounded-md bg-accent/15" />
            <p className="mt-2 text-xs font-semibold">{it.n}</p>
            <p className="text-[10px] text-muted">
              {it.p} · {it.d}
            </p>
            <span className="mt-2 rounded bg-accent py-1 text-center text-[10px] font-semibold text-accent-fg">Order</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Fire() {
  return (
    <div className={frame} role="img" aria-label="Illustrative preview of the Fire Reporting System">
      <Bar title="Fire Reporting · New report" />
      <div className="grid flex-1 grid-cols-[1.2fr_1fr] gap-3 p-4">
        <div className="flex flex-col gap-2 rounded-lg border border-fg/10 bg-surface p-3">
          <p className="text-[10px] font-medium text-muted">Location</p>
          <div className="h-5 rounded border border-fg/15" />
          <p className="text-[10px] font-medium text-muted">Details</p>
          <div className="flex-1 rounded border border-fg/15" />
          <span className="rounded bg-red-500 py-1.5 text-center text-[10px] font-semibold text-white">Send alert</span>
        </div>
        <div className="flex flex-col gap-2 rounded-lg border border-fg/10 bg-surface p-3">
          <p className="text-[10px] font-medium text-muted">Admin queue</p>
          {["Received", "Dispatched", "Resolved"].map((s, i) => (
            <div key={s} className="flex items-center gap-2 rounded bg-fg/[0.05] px-2 py-1.5">
              <span className={`h-2 w-2 rounded-full ${["bg-red-500", "bg-amber-500", "bg-emerald-500"][i]}`} />
              <span className="text-[10px] font-medium">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectMock({ kind }: { kind: Project["preview"] }) {
  if (kind === "ecomind") return <EcoMind />;
  if (kind === "market") return <Market />;
  return <Fire />;
}
