import { useEffect, useRef, useState } from "react";
import { projects } from "../data";
import type { Project } from "../data";
import ProjectMock from "./ProjectMock";
import Reveal from "./Reveal";
import { ExternalLinkIcon, GithubIcon } from "./Icons";

function PreviewContent({ p }: { p: Project }) {
  if (p.image) {
    return <img src={p.image} alt={p.title} className="h-auto w-full rounded-xl" />;
  }
  return <ProjectMock kind={p.preview} />;
}

const overlayBtn =
  "inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-black/60 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-black/80";

function Preview({ p }: { p: Project }) {
  const hasLinks = Boolean(p.github || p.live);

  return (
    <div className="group relative rounded-3xl border border-fg/15 bg-surface p-3 shadow-xl shadow-fg/5">
      {/* With links set, hovering blurs the preview and shows GitHub / Live buttons */}
      <div
        className={`overflow-hidden rounded-xl transition duration-500 ${
          hasLinks ? "group-hover:scale-[1.02] group-hover:blur-md group-hover:brightness-50 group-focus-within:blur-md group-focus-within:brightness-50" : ""
        }`}
      >
        <PreviewContent p={p} />
      </div>

      {hasLinks && (
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" className={overlayBtn}>
              <GithubIcon className="h-5 w-5" />
              GitHub
            </a>
          )}
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" className={overlayBtn}>
              <ExternalLinkIcon className="h-5 w-5" />
              Live demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ p, index, total }: { p: Project; index: number; total: number }) {
  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <div>
        <p className="font-mono text-sm text-muted">
          Project {index + 1} of {total}
        </p>
        <h3 className="mt-3 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{p.title}</h3>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">{p.blurb}</p>
        <div className="mt-7 flex flex-wrap gap-2.5">
          {p.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        {/* Touch screens have no hover, so show the links under the text there */}
        {(p.github || p.live) && (
          <div className="mt-7 hidden gap-6 text-sm font-semibold [@media(hover:none)]:flex">
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                GitHub ↗
              </a>
            )}
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                Live demo ↗
              </a>
            )}
          </div>
        )}
      </div>
      <Preview p={p} />
    </article>
  );
}

const Heading = () => <h2 className="section-heading">Projects</h2>;

/** Which project is showing, based on how far the tall section has been scrolled. */
function useActiveProject(ref: React.RefObject<HTMLElement>, count: number, stepVh: number) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const step = window.innerHeight * stepVh;
      const scrolled = -el.getBoundingClientRect().top;
      setActive(Math.min(count - 1, Math.max(0, Math.floor(scrolled / step))));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, count, stepVh]);

  return active;
}

const STEP_VH = 0.8; // scroll distance each project gets, as a fraction of screen height

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const active = useActiveProject(ref, projects.length, STEP_VH);

  return (
    <section id="projects" ref={ref}>
      {/* Large screens: heading stays pinned under the navbar, projects swap while you scroll */}
      <div className="relative hidden lg:block" style={{ height: `calc(100vh + ${projects.length * STEP_VH * 100}vh)` }}>
        <div className="sticky top-0 flex h-screen flex-col pt-28">
          <Heading />
          <div className="relative flex-1">
            {projects.map((p, i) => {
              const state =
                i === active
                  ? "translate-y-0 opacity-100"
                  : i < active
                  ? "pointer-events-none -translate-y-24 opacity-0"
                  : "pointer-events-none translate-y-24 opacity-0";
              return (
                <div
                  key={p.title}
                  aria-hidden={i !== active}
                  className={`absolute inset-0 flex items-center transition-all duration-700 ease-out motion-reduce:transition-none ${state}`}
                >
                  <div className="w-full">
                    <ProjectCard p={p} index={i} total={projects.length} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Small screens: normal stacked list */}
      <div className="py-24 lg:hidden">
        <Heading />
        <div className="mt-14 space-y-20">
          {projects.map((p, i) => (
            <Reveal key={p.title}>
              <ProjectCard p={p} index={i} total={projects.length} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
