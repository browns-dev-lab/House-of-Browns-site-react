import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [designOpen, setDesignOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight">
          House of Browns.
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {/* About */}
          <li>
            <Link to="/about" className="hover:opacity-60 transition-opacity">
              About
            </Link>
          </li>

          {/* Designs */}
          <li
            className="relative"
            onMouseEnter={() => setDesignOpen(true)}
            onMouseLeave={() => setDesignOpen(false)}
          >
            <button className="hover:opacity-60 transition-opacity">
              Designs
            </button>
            {designOpen && (
              <Dropdown wide>
                {designLinks.map((d) => (
                  <DropdownLink key={d.href} href={d.href} label={d.label} />
                ))}
              </Dropdown>
            )}
          </li>

          {/* Case Studies */}
          <li>
            <Link
              to="/case-studies"
              className="hover:opacity-60 transition-opacity"
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
            <button className="hover:opacity-60 transition-opacity">
              Expertise
            </button>
            {expertiseOpen && (
              <Dropdown wide>
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
          className="hidden md:inline-block bg-black text-white text-sm px-5 py-2.5 rounded-full hover:opacity-80 transition-opacity"
        >
          Start a Project
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link
            to="/about"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          {/* Designs */}
          <button
            onClick={() => setDesignOpen(!designOpen)}
            className="mobile-link w-full text-left"
          >
            Designs
          </button>
          {designOpen && (
            <div className="pl-4 flex flex-col gap-2">
              {designLinks.map((d) => (
                <Link
                  key={d.href}
                  to={d.href}
                  className="text-gray-600 hover:text-black transition-colors"
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
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Case Studies
          </Link>

          {/* Expertise */}
          <button
            onClick={() => setExpertiseOpen(!expertiseOpen)}
            className="mobile-link w-full text-left"
          >
            Expertise
          </button>
          {expertiseOpen && (
            <div className="pl-4 flex flex-col gap-2">
              {expertiseLinks.map((e) => (
                <Link
                  key={e.href}
                  to={e.href}
                  className="text-gray-600 hover:text-black transition-colors"
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
            className="bg-black text-white text-center px-5 py-2.5 rounded-full hover:opacity-80 transition-opacity"
            onClick={() => setMenuOpen(false)}
          >
            Start a Project →
          </Link>
        </div>
      )}
    </nav>
  );
}

/* Helpers */
function Dropdown({ children, wide }) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-xl p-3 flex flex-col gap-1 ${
        wide ? "w-52" : "w-40"
      }`}
    >
      {children}
    </div>
  );
}

function DropdownLink({ href, label }) {
  return (
    <Link
      to={href}
      className="px-3 py-2 text-sm rounded-lg hover:bg-gray-50 transition-colors text-gray-700 hover:text-black"
    >
      {label}
    </Link>
  );
}
