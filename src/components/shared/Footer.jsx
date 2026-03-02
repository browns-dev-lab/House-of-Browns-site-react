import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1A0F00] text-[#F5F0E8] relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute -bottom-10 -right-10 text-[180px] font-playfair font-black text-white/5 pointer-events-none select-none">
        BROWNS
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div>
            <span className="block text-[10px] tracking-[0.35em] uppercase text-[#C4956A]">
              House of
            </span>
            <span className="font-playfair font-black text-[26px]">
              Browns<span className="text-[#D4A853]">.</span>
            </span>
            <p className="mt-4 text-sm text-white/55 leading-relaxed">
              A studio collaborating with startups to build products, brands,
              and digital presence that actually scale.
            </p>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#D4A853] mb-4">
              Expertise
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link
                  to="/expertise/web-development"
                  className="hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/expertise/saas-build"
                  className="hover:text-white transition-colors"
                >
                  SaaS Build
                </Link>
              </li>
              <li>
                <Link
                  to="/expertise/app-development"
                  className="hover:text-white transition-colors"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/expertise/branding"
                  className="hover:text-white transition-colors"
                >
                  Branding
                </Link>
              </li>
              <li>
                <Link
                  to="/expertise/social-media"
                  className="hover:text-white transition-colors"
                >
                  Social Media
                </Link>
              </li>
              <li>
                <Link
                  to="/expertise/graphic-design"
                  className="hover:text-white transition-colors"
                >
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link
                  to="/expertise/ui-ux-design"
                  className="hover:text-white transition-colors"
                >
                  UI / UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Designs */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#D4A853] mb-4">
              Designs
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link
                  to="/designs/neumorphism"
                  className="hover:text-white transition-colors"
                >
                  Neumorphism
                </Link>
              </li>
              <li>
                <Link
                  to="/designs/glassmorphism"
                  className="hover:text-white transition-colors"
                >
                  Glassmorphism
                </Link>
              </li>
              <li>
                <Link
                  to="/designs/liquid-glass"
                  className="hover:text-white transition-colors"
                >
                  Liquid Glass
                </Link>
              </li>
              <li>
                <Link
                  to="/designs/brutalist"
                  className="hover:text-white transition-colors"
                >
                  Brutalist
                </Link>
              </li>
              <li>
                <Link
                  to="/designs/claymorphism"
                  className="hover:text-white transition-colors"
                >
                  Claymorphism
                </Link>
              </li>
              <li>
                <Link
                  to="/designs/animated"
                  className="hover:text-white transition-colors"
                >
                  Animated
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Contact */}
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#D4A853] mb-4">
                Company
              </h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li>
                  <Link
                    to="/case-studies"
                    className="hover:text-white transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#D4A853] mb-4">
                Contact
              </h4>
              <a
                href="mailto:hello@houseofbrowns.com"
                className="font-playfair italic text-sm text-white/60 block mb-2 hover:text-white transition-colors"
              >
                hello@houseofbrowns.com
              </a>
              <p className="text-xs tracking-wide text-white/40">
                India · Working globally
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
