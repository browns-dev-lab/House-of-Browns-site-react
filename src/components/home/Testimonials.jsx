export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Browns didn’t just execute — they thought like founders. Every decision had intent.",
      name: "Founder",
      role: "SaaS Startup",
    },
    {
      quote:
        "From brand to product, everything felt considered. No fluff, just clarity.",
      name: "Co-Founder",
      role: "Early-stage Company",
    },
    {
      quote:
        "Fast, honest, and deeply involved. Felt like an internal team, not an agency.",
      name: "Product Lead",
      role: "Tech Startup",
    },
  ];

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <p className="uppercase tracking-widest text-sm text-[#8B5E3C]">
          Testimonials
        </p>

        <h2 className="mt-4 font-playfair text-4xl font-black text-[#1A0F00]">
          What founders say.
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 border border-black/10 bg-[#F5F0E8]">
              <p className="text-[#4A2C0A] leading-relaxed">“{t.quote}”</p>

              <div className="mt-6 text-sm text-[#1A0F00] font-medium">
                {t.name}
              </div>
              <div className="text-xs uppercase tracking-wider text-[#8B5E3C]">
                {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
