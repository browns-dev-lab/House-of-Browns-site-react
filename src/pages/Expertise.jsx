export default function Expertise() {
  const expertise = [
    {
      title: "Web Development",
      desc: "High-performance websites built for speed, scalability, and clarity.",
    },
    {
      title: "SaaS Build",
      desc: "From MVP to production-ready platforms with real users in mind.",
    },
    {
      title: "App Development",
      desc: "iOS & Android applications designed for usability and growth.",
    },
    {
      title: "Branding",
      desc: "Identity systems that feel intentional, credible, and memorable.",
    },
    {
      title: "Digitalisation",
      desc: "Turning manual workflows into efficient digital systems.",
    },
    {
      title: "Social Media",
      desc: "Content systems that align brand, design, and distribution.",
    },
    {
      title: "Graphic Design",
      desc: "Visual assets that stay consistent across all touchpoints.",
    },
    {
      title: "UI / UX Design",
      desc: "User-first interfaces grounded in clarity and interaction.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fdfcf9]">
      {/* HERO */}
      <section className="pt-32 pb-24 px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-[#8B5E3C] mb-6">
          Expertise
        </p>
        <h1 className="font-playfair text-4xl md:text-6xl text-[#1A0F00] mb-6">
          What we do, and do well
        </h1>
        <p className="max-w-xl mx-auto text-[#4A2C0A] text-lg">
          We design and build digital products for startups, founders, and
          modern businesses that care about quality.
        </p>
      </section>

      {/* CAPABILITIES GRID */}
      <section className="py-24 px-6 bg-[#f5f0e8]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="border border-black/10 p-8 hover:shadow-lg transition"
            >
              <h3 className="font-playfair text-xl text-[#1A0F00] mb-3">
                {item.title}
              </h3>
              <p className="text-[#4A2C0A] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl text-[#1A0F00] mb-6">
            Our approach
          </h2>
          <p className="text-[#4A2C0A] text-lg leading-relaxed">
            We don’t offer everything. We focus on what actually helps products
            launch, scale, and stay relevant. Every engagement starts with
            understanding the problem, not selling a preset solution.
          </p>
        </div>
      </section>

      {/* STACK */}
      <section className="py-24 px-6 bg-[#f5f0e8]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-playfair text-3xl text-[#1A0F00] mb-10">
            Tools & stack
          </h2>
          <p className="text-[#4A2C0A]">
            React · Next.js · Tailwind · Node · Figma · Framer · AWS · Firebase
            · PostgreSQL
          </p>
        </div>
      </section>

      {/* ENGAGEMENT */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          {[
            "Project-based builds",
            "Monthly retainers",
            "Founding product partners",
          ].map((m) => (
            <div key={m} className="border border-black/10 p-8">
              <p className="font-playfair text-lg text-[#1A0F00]">{m}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="font-playfair text-3xl text-[#1A0F00] mb-6">
          Let’s build something meaningful
        </h2>
        <a
          href="/contact"
          className="inline-block px-10 py-3 uppercase tracking-widest text-xs border border-[#1A0F00] bg-[#1A0F00] text-[#fdfcf9] hover:bg-transparent hover:text-[#1A0F00] transition"
        >
          Start a project
        </a>
      </section>
    </main>
  );
}
