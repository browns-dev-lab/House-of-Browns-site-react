export default function Expertise() {
  return (
    <section className="py-24 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">What We Do</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-12">
          <Block
            title="Product & Tech"
            items={["Web Development", "SaaS Builds", "App Development"]}
          />
          <Block
            title="Design & Brand"
            items={["UI / UX Design", "Brand Identity", "Graphic Design"]}
          />
          <Block
            title="Growth & Digital"
            items={["Social Media", "Digitalisation", "Ongoing Support"]}
          />
        </div>
      </div>
    </section>
  );
}

function Block({ title, items }) {
  return (
    <div>
      <h3 className="font-semibold text-lg text-[#1A0F00]">{title}</h3>
      <ul className="mt-4 space-y-2 text-[#4A2C0A]">
        {items.map((i) => (
          <li key={i}>— {i}</li>
        ))}
      </ul>
    </div>
  );
}
