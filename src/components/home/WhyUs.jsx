export default function WhyUs() {
  const points = [
    "Startup-first mindset",
    "Design + tech under one roof",
    "Fast execution",
    "Clear communication",
    "Flexible engagement",
  ];

  return (
    <section className="py-24 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">Why House of Browns</h2>

        <ul className="mt-8 space-y-3 text-[#4A2C0A]">
          {points.map((p) => (
            <li key={p}>— {p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
