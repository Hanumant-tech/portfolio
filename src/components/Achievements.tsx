import { achievements, leadership, sports } from "../data";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <h2 className="section-heading">Achievements</h2>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a) => (
          <Reveal key={a.title} className="card p-6">
            <h3 className="font-display text-lg font-bold tracking-tight">{a.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{a.detail}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="font-display text-2xl font-bold tracking-tight">Leadership</h3>
          <ul className="mt-6 divide-y divide-fg/10 border-y border-fg/10">
            {leadership.map((l) => (
              <li key={l.role} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
                <p>
                  <span className="font-semibold">{l.role}</span>
                  <span className="text-muted">, {l.org}</span>
                </p>
                <p className="font-mono text-sm text-muted">{l.period}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold tracking-tight">Sports</h3>
          <ul className="mt-6 divide-y divide-fg/10 border-y border-fg/10">
            {sports.map((s) => (
              <li key={s} className="py-4">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
