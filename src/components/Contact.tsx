import { useEffect, useRef, useState } from "react";
import { profile } from "../data";
import { GithubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./Icons";

/** A line that grows from the centre to full width when it scrolls into view. */
function GrowLine() {
  const ref = useRef<HTMLDivElement>(null);
  const [grown, setGrown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGrown(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-8 flex h-0.5 w-full justify-center">
      <div
        className={`h-0.5 rounded bg-accent transition-[width] duration-[1400ms] ease-out motion-reduce:transition-none ${
          grown ? "w-full" : "w-0"
        }`}
      />
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <h2 className="section-heading">Contact</h2>

      <div className="flex flex-col items-center py-20 text-center">
        <p className="text-lg text-muted">Open to entry-level roles and projects.</p>
        <div className="mt-6 inline-block">
          <p className="font-display text-[clamp(3rem,11vw,8rem)] font-extrabold leading-none tracking-tight">Let's talk</p>
          <GrowLine />
        </div>
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <a href={`mailto:${profile.email}`} className="pill-btn-solid">
            <MailIcon className="h-5 w-5" />
            Email me
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="pill-btn">
            <LinkedInIcon className="h-5 w-5" />
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="pill-btn">
            <GithubIcon className="h-5 w-5" />
            GitHub
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="pill-btn">
            <PhoneIcon className="h-5 w-5" />
            {profile.phone}
          </a>
        </div>
        <p className="mt-8 text-sm text-muted">{profile.email} · {profile.location}</p>
      </div>

      <p className="mt-6 border-t border-fg/10 pt-8 text-center text-sm text-muted">© {new Date().getFullYear()} {profile.name}</p>
    </section>
  );
}
