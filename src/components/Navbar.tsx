import { useState } from "react";
import { profile } from "../data";
import { sections, useActiveSection, useTheme } from "../hooks";
import { CloseIcon, DownloadIcon, MenuIcon, MoonIcon, SunIcon } from "./Icons";

export default function Navbar() {
  const active = useActiveSection();
  const [theme, toggleTheme] = useTheme();
  const [open, setOpen] = useState(false);

  const themeBtn = (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-fg/15 text-fg transition hover:border-accent hover:text-accent"
    >
      {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-fg/10 bg-bg/80 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#home" className="font-display text-lg font-bold tracking-tight">
          {profile.firstName} <span className="text-muted">{profile.lastName[0]}.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {sections.map((s) => {
            const on = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={on ? "true" : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    on ? "text-accent" : "text-muted hover:text-fg"
                  }`}
                >
                  {s.label}
                  <span
                    className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded bg-accent transition-transform duration-300 ${
                      on ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a href={profile.resume} download className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-fg transition hover:opacity-90 sm:inline-flex">
            <DownloadIcon className="h-4 w-4" />
            Resume
          </a>
          {themeBtn}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-fg/15 transition hover:border-accent hover:text-accent lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-fg/10 bg-bg px-5 pb-5 pt-2 lg:hidden">
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-fg/5 py-3.5 text-base font-medium ${
                    active === s.id ? "text-accent" : "text-fg"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={profile.resume} download className="pill-btn-solid mt-5 w-full justify-center">
            <DownloadIcon className="h-4 w-4" />
            Download resume
          </a>
        </div>
      )}
    </header>
  );
}
