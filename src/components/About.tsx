import { useState } from "react";
import { about, profile } from "../data";

function Photo() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="card p-3">
      {failed ? (
        <div className="flex aspect-square items-center justify-center rounded-xl bg-accent/10 font-display text-7xl font-bold text-accent">
          {profile.firstName[0]}
          {profile.lastName[0]}
        </div>
      ) : (
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          onError={() => setFailed(true)}
          className="aspect-square w-full rounded-xl object-cover"
        />
      )}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24">
      <h2 className="section-heading">About me</h2>

      <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_18rem]">
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-muted sm:text-xl sm:leading-[1.75]">
          {about.paragraphs.map((p, idx) => (
            <p key={idx}>
              {p.before}
              <strong className="font-semibold text-fg">{p.bold}</strong>
              {p.after}
            </p>
          ))}
        </div>
        <div className="mx-auto w-full max-w-[18rem] lg:mx-0">
          <Photo />
        </div>
      </div>

      {/* Education */}
      <h3 className="mt-20 font-display text-2xl font-bold tracking-tight sm:text-3xl">Education</h3>
      <ul className="mt-8 grid gap-4">
        {about.education.map((e) => (
          <li key={e.school} className="card flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold">{e.school}</p>
              <p className="mt-1 text-muted">
                {e.detail}, <span className="font-semibold text-fg">{e.score}</span>
              </p>
            </div>
            <p className="font-mono text-sm text-muted">{e.period}</p>
          </li>
        ))}
      </ul>

      {/* Skills */}
      <div className="card mt-20 p-8 sm:p-12">
        <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Skills and tools</h3>
        <div className="mt-10 space-y-7">
          {about.stack.map((g) => (
            <div key={g.group} className="grid gap-3 md:grid-cols-[12rem_1fr] md:items-center">
              <h4 className="text-sm font-semibold text-muted">{g.group}</h4>
              <div className="flex flex-wrap gap-2.5">
                {g.items.map((s) => (
                  <span key={s} className="rounded-lg bg-fg/[0.06] px-4 py-2 text-sm font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
