import { research } from "../data";

export default function Research() {
  return (
    <section id="research" className="py-24">
      <h2 className="section-heading">Research</h2>

      <div className="card mt-14 grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_17rem] lg:gap-14">
        <div>
          <p className="text-sm font-semibold text-accent">
            {research.type}, {research.venue}
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl">{research.title}</h3>
          <p className="mt-2 text-sm text-muted">{research.meta}</p>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{research.summary}</p>
          <ul className="mt-6 space-y-3 text-base leading-relaxed">
            {research.details.map((d) => (
              <li key={d} className="flex gap-4">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {research.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-xl bg-accent/10 p-8">
          <p className="font-display text-5xl font-extrabold tracking-tight text-accent">{research.result.value}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{research.result.label}</p>
        </div>
      </div>
    </section>
  );
}
