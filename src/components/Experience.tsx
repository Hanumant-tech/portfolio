import { useState } from "react";
import { experience } from "../data";

export default function Experience() {
  const [selected, setSelected] = useState(0);
  const job = experience[selected];

  return (
    <section id="experience" className="py-24">
      <h2 className="section-heading">Experience</h2>

      <div className="mt-14 grid gap-10 lg:grid-cols-[20rem_1fr] lg:gap-14">
        <div role="tablist" aria-label="Employers" className="flex flex-row gap-3 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
          {experience.map((e, idx) => (
            <button
              key={e.company}
              role="tab"
              aria-selected={idx === selected}
              onClick={() => setSelected(idx)}
              className={`whitespace-nowrap rounded-xl px-6 py-4 text-left text-base font-medium transition lg:whitespace-normal ${
                idx === selected
                  ? "bg-accent font-semibold text-accent-fg"
                  : "border border-fg/15 text-fg hover:border-accent hover:text-accent"
              }`}
            >
              {e.company}
            </button>
          ))}
        </div>

        <div key={selected} role="tabpanel" className="animate-fadeUp">
          <h3 className="font-display text-3xl font-bold tracking-tight">{job.role}</h3>
          <p className="mt-3 font-mono text-sm text-muted">
            {job.period}
            {job.place ? `, ${job.place}` : ""}
          </p>
          <ul className="mt-8 space-y-4 text-lg leading-relaxed">
            {job.points.map((p) => (
              <li key={p} className="flex gap-4">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {job.skills.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
