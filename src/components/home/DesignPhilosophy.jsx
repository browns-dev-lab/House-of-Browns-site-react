export default function DesignPhilosophy() {
  const styles = [
    "Neumorphism",
    "Skeuomorphism",
    "Glassmorphism",
    "Liquid Glass",
    "Contemporary",
    "Bold",
    "Claymorphism",
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">Design Philosophy</h2>
        <p className="mt-4 max-w-xl text-[#4A2C0A]">
          Design isn’t decoration — it’s how users feel your product before they
          understand it.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          {styles.map((s) => (
            <span
              key={s}
              className="px-4 py-2 border border-black/10 text-sm text-[#1A0F00]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
