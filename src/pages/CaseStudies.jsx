export default function CaseStudies() {
  const cases = [
    {
      title: "Early-stage SaaS MVP",
      desc: "Product design, MVP development, and launch strategy for a startup entering a competitive market.",
    },
    {
      title: "Brand & Digital Presence",
      desc: "Brand identity and social systems built from scratch for a new consumer brand.",
    },
    {
      title: "Scaling a Web Platform",
      desc: "Performance optimisation and UX redesign for a growing tech product.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fdfcf9]">
      {/* HERO */}
      <section className="pt-32 pb-20 px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-[#8B5E3C] mb-6">
          Case Studies
        </p>
        <h1 className="font-playfair text-4xl md:text-6xl text-[#1A0F00] mb-6">
          Selected work
        </h1>
        <p className="text-[#4A2C0A] text-lg max-w-xl mx-auto">
          A look at how we’ve helped startups move from idea to execution.
        </p>
      </section>

      {/* CASE GRID */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {cases.map((c, i) => (
            <div
              key={i}
              className="border border-black/10 p-8 hover:shadow-xl transition bg-[#fdfcf9]"
            >
              <p className="text-[#D4A853] uppercase tracking-widest text-xs mb-4">
                Case {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-playfair text-xl text-[#1A0F00] mb-3">
                {c.title}
              </h3>
              <p className="text-[#4A2C0A] mb-6">{c.desc}</p>
              <span className="text-sm uppercase tracking-wider text-[#1A0F00]">
                View case →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* METRICS */}
      <section className="py-24 px-6 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <p className="font-playfair text-3xl text-[#1A0F00]">10+</p>
            <p className="text-[#4A2C0A]">Products launched</p>
          </div>
          <div>
            <p className="font-playfair text-3xl text-[#1A0F00]">5–12 weeks</p>
            <p className="text-[#4A2C0A]">Typical MVP timeline</p>
          </div>
          <div>
            <p className="font-playfair text-3xl text-[#1A0F00]">Founder-led</p>
            <p className="text-[#4A2C0A]">Collaboration model</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="font-playfair text-3xl text-[#1A0F00] mb-6">
          Have a project in mind?
        </h2>
        <a
          href="/contact"
          className="inline-block px-10 py-3 uppercase tracking-widest text-xs border border-[#1A0F00] bg-[#1A0F00] text-[#fdfcf9] hover:bg-transparent hover:text-[#1A0F00] transition"
        >
          Start a conversation
        </a>
      </section>
    </main>
  );
}
