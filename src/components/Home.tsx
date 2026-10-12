import { useEffect, useState } from "react";
import { profile } from "../data";

export default function Home() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % profile.rotating.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="flex min-h-screen flex-col items-center justify-center px-2 pt-16 text-center">
      <p className="animate-fadeUp text-lg text-muted sm:text-xl">Hello, I'm</p>
      <h1
        className="mt-3 animate-fadeUp font-display text-[clamp(2.75rem,10vw,8rem)] font-extrabold leading-[1.02] tracking-tight"
        style={{ animationDelay: "0.1s" }}
      >
        {profile.firstName}
        <br className="sm:hidden" /> {profile.lastName}
      </h1>

      <div
        className="mt-7 flex animate-fadeUp flex-wrap items-center justify-center gap-3 text-lg text-muted sm:gap-4 sm:text-2xl"
        style={{ animationDelay: "0.2s" }}
      >
        <span>{profile.role}</span>
        <span className="inline-flex h-11 min-w-[11rem] items-center justify-center rounded-lg border border-accent/30 bg-accent/10 px-4 font-mono text-lg font-bold text-accent sm:h-12 sm:text-2xl">
          <span key={i} className="animate-chip">
            {profile.rotating[i]}
          </span>
        </span>
      </div>

      <p className="mt-6 max-w-xl animate-fadeUp text-base text-muted sm:text-lg" style={{ animationDelay: "0.25s" }}>
        AI/ML intern at ISRO's Space Applications Centre. Final-year B.Tech, {profile.location.split(",")[0]}.
      </p>

      <div className="mt-10 flex animate-fadeUp flex-wrap justify-center gap-4" style={{ animationDelay: "0.3s" }}>
        <a href="#projects" className="pill-btn-solid">
          View my work
        </a>
        <a href={profile.resume} download className="pill-btn">
          Download resume
        </a>
      </div>
    </section>
  );
}
