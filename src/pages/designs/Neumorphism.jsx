export default function Neumorphism() {
  return (
    <main className="min-h-screen bg-[#fdfcf9]">
      <section className="pt-32 pb-20 px-6">
        <h1 className="font-playfair text-5xl text-[#1A0F00] mb-6">
          Neumorphism
        </h1>
        <p className="text-[#4A2C0A] max-w-xl">
          A soft, tactile design style where interfaces feel carved out of the
          surface.
        </p>
      </section>

      <section className="py-24 px-6 bg-[#f5f0e8]">
        <div className="max-w-4xl space-y-6 text-[#4A2C0A]">
          <p>
            Neumorphism relies on subtle shadows, highlights, and low contrast.
            When done right, it creates calm, focused interfaces.
          </p>
          <p>
            We use neumorphism selectively — never at the cost of usability.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <h3 className="font-playfair text-2xl mb-6">Best used for</h3>
        <ul className="space-y-3 text-[#4A2C0A]">
          <li>• Dashboards</li>
          <li>• Internal tools</li>
          <li>• Concept products</li>
        </ul>
      </section>
    </main>
  );
}
