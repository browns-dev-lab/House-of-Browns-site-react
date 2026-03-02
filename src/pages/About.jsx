export default function About() {
  const beliefs = [
    "Clarity beats complexity",
    "Design is how things work",
    "Startups need partners, not agencies",
    "Speed matters, but direction matters more",
    "Good work compounds over time",
  ];

  const steps = [
    {
      title: "Think like founders",
      desc: "We align with your goals, constraints, and timelines from day one.",
    },
    {
      title: "Build lean",
      desc: "We prioritise what moves the needle — MVPs, not overengineering.",
    },
    {
      title: "Design for growth",
      desc: "Everything we build is meant to scale, adapt, and evolve.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fdfcf9]">
      {/* ABOUT HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-[#8B5E3C] mb-6">
            About House of Browns
          </p>
          <h1 className="font-playfair text-4xl md:text-6xl text-[#1A0F00] leading-tight mb-6">
            We collaborate with startups
            <br />
            to build things that matter.
          </h1>
          <p className="text-[#4A2C0A] text-lg max-w-2xl mx-auto">
            House of Browns is a creative-tech studio helping early teams turn
            ideas into products, brands, and systems that scale.
          </p>
        </div>
      </section>

      {/* STUDIO STORY */}
      <section className="py-24 px-6 bg-[#f5f0e8]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A0F00]">
            The studio behind
            <br /> the work
          </h2>
          <div className="space-y-6 text-[#4A2C0A] leading-relaxed">
            <p>
              House of Browns didn’t start as a traditional agency. It began
              with a desire to build products — and evolved into a studio that
              helps startups do the same.
            </p>
            <p>
              We work closely with founders, not as vendors, but as
              collaborators. Strategy, execution, and iteration happen side by
              side.
            </p>
            <p>
              Every project is treated like it’s our own startup on the line.
            </p>
          </div>
        </div>
      </section>

      {/* BELIEFS */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl text-[#1A0F00] mb-12">
            What we believe
          </h2>

          <ul className="space-y-6">
            {beliefs.map((b, i) => (
              <li key={i} className="flex items-start gap-6 text-[#4A2C0A]">
                <span className="text-[#D4A853] font-playfair text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* STARTUP APPROACH */}
      <section className="py-24 px-6 bg-[#1A0F00] text-[#fdfcf9]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl mb-16">
            How we work with startups
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((s, i) => (
              <div key={i}>
                <p className="text-[#D4A853] uppercase tracking-widest text-xs mb-4">
                  Step {i + 1}
                </p>
                <h3 className="text-xl mb-3">{s.title}</h3>
                <p className="text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl text-[#1A0F00] mb-6">
            A small, focused studio
          </h2>
          <p className="text-[#4A2C0A] text-lg leading-relaxed">
            We’re a tight team of designers, developers, and strategists. No
            layers. No handoffs. Just people who care deeply about building
            meaningful products.
          </p>
        </div>
      </section>
    </main>
  );
}
