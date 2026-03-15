import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [designOpen, setDesignOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);

  const designLinks = [
    { label: "Neumorphism", href: "/designs/neumorphism" },
    { label: "Skeuomorphism", href: "/designs/skeuomorphism" },
    { label: "Glassmorphism", href: "/designs/glassmorphism" },
    { label: "Liquid Glass", href: "/designs/liquid-glass" },
    { label: "Contemporary", href: "/designs/contemporary" },
    { label: "Brutalist", href: "/designs/brutalist" },
    { label: "Claymorphism", href: "/designs/claymorphism" },
    { label: "Animated", href: "/designs/animated" },
  ];

  const expertiseLinks = [
    { label: "Web Development", href: "/expertise/web-development" },
    { label: "SaaS Build", href: "/expertise/saas-build" },
    { label: "App Development", href: "/expertise/app-development" },
    { label: "Branding", href: "/expertise/branding" },
    { label: "Digitalisation", href: "/expertise/digitalisation" },
    { label: "Social Media", href: "/expertise/social-media" },
    { label: "Graphic Design", href: "/expertise/graphic-design" },
    { label: "UI / UX Design", href: "/expertise/ui-ux-design" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/55 to-transparent">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-white text-[1rem] font-bold tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          House of Browns.
        </Link>

        {/* Desktop: links + CTA pushed to right */}
        <div className="hidden md:flex items-center gap-7">
          <ul className="flex items-center gap-7 list-none m-0 p-0">
            <li>
              <Link
                to="/about"
                className="text-white/80 hover:text-white text-[0.7rem] font-semibold tracking-[0.1em] uppercase transition-all duration-200"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                About
              </Link>
            </li>

            {/* Designs */}
            <li
              className="relative"
              onMouseEnter={() => setDesignOpen(true)}
              onMouseLeave={() => setDesignOpen(false)}
            >
              <button
                className="text-white/80 hover:text-white text-[0.7rem] font-semibold tracking-[0.1em] uppercase bg-transparent border-none cursor-pointer p-0 transition-all duration-200"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Designs
              </button>
              {designOpen && (
                <Dropdown>
                  {designLinks.map((d) => (
                    <DropdownLink key={d.href} href={d.href} label={d.label} />
                  ))}
                </Dropdown>
              )}
            </li>

            <li>
              <Link
                to="/case-studies"
                className="text-white/80 hover:text-white text-[0.7rem] font-semibold tracking-[0.1em] uppercase transition-all duration-200"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Case Studies
              </Link>
            </li>

            {/* Expertise */}
            <li
              className="relative"
              onMouseEnter={() => setExpertiseOpen(true)}
              onMouseLeave={() => setExpertiseOpen(false)}
            >
              <button
                className="text-white/80 hover:text-white text-[0.7rem] font-semibold tracking-[0.1em] uppercase bg-transparent border-none cursor-pointer p-0 transition-all duration-200"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Expertise
              </button>
              {expertiseOpen && (
                <Dropdown>
                  {expertiseLinks.map((e) => (
                    <DropdownLink key={e.href} href={e.href} label={e.label} />
                  ))}
                </Dropdown>
              )}
            </li>
          </ul>

          {/* CTA */}
          <Link
            to="/contact"
            className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase px-5 py-2 bg-white text-black hover:bg-black hover:text-white transition-all duration-300"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-0"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-black/95 backdrop-blur-md px-6 py-5 flex flex-col gap-4 text-[0.7rem] font-semibold tracking-[0.1em] uppercase"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <Link
            to="/about"
            className="text-white/80 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <button
            onClick={() => setDesignOpen(!designOpen)}
            className="text-white/80 hover:text-white text-left bg-transparent border-none cursor-pointer text-[0.7rem] font-semibold tracking-[0.1em] uppercase p-0"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Designs
          </button>
          {designOpen && (
            <div className="pl-4 flex flex-col gap-2">
              {designLinks.map((d) => (
                <Link
                  key={d.href}
                  to={d.href}
                  className="text-white/50 hover:text-white transition-colors text-[0.65rem]"
                  onClick={() => {
                    setMenuOpen(false);
                    setDesignOpen(false);
                  }}
                >
                  {d.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            to="/case-studies"
            className="text-white/80 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Case Studies
          </Link>

          <button
            onClick={() => setExpertiseOpen(!expertiseOpen)}
            className="text-white/80 hover:text-white text-left bg-transparent border-none cursor-pointer text-[0.7rem] font-semibold tracking-[0.1em] uppercase p-0"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Expertise
          </button>
          {expertiseOpen && (
            <div className="pl-4 flex flex-col gap-2">
              {expertiseLinks.map((e) => (
                <Link
                  key={e.href}
                  to={e.href}
                  className="text-white/50 hover:text-white transition-colors text-[0.65rem]"
                  onClick={() => {
                    setMenuOpen(false);
                    setExpertiseOpen(false);
                  }}
                >
                  {e.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            to="/contact"
            className="mt-2 text-center bg-white text-black px-5 py-2.5 font-bold tracking-[0.14em] hover:bg-black hover:text-white border border-white transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Start a Project
          </Link>
        </div>
      )}
    </nav>
  );
}

function Dropdown({ children }) {
  return (
    <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-52 bg-black/95 backdrop-blur-md border border-white/10 p-1.5 flex flex-col gap-0.5 z-50">
      {children}
    </div>
  );
}

function DropdownLink({ href, label }) {
  return (
    <Link
      to={href}
      className="px-3 py-2 text-[0.65rem] font-medium tracking-[0.08em] uppercase text-white/60 hover:text-white hover:bg-white/8 transition-all duration-200"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {label}
    </Link>
  );
}
