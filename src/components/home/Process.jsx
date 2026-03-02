export default function Process() {
  const steps = [
    "Understand the startup & stage",
    "Define outcomes",
    "Design & build collaboratively",
    "Iterate fast",
    "Launch and improve",
  ];

  return (
    <section className="py-24 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">How We Work</h2>

        <ol className="mt-10 space-y-6">
          {steps.map((s, i) => (
            <li key={s} className="flex gap-4 text-[#4A2C0A]">
              <span className="font-bold">{i + 1}.</span>
              <span>{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
