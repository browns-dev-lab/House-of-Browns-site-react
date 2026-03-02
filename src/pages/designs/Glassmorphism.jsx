export default function Glassmorphism() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#fdfcf9] to-[#eaeaea]">
      <section className="pt-32 pb-20 px-6">
        <h1 className="font-playfair text-5xl text-[#1A0F00] mb-6">
          Glassmorphism
        </h1>
        <p className="text-[#4A2C0A] max-w-xl">
          Transparent layers, blur, and depth — used with restraint.
        </p>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl space-y-6 text-[#4A2C0A]">
          <p>
            Glassmorphism creates visual hierarchy through layers rather than
            borders.
          </p>
          <p>We pair it with strong typography to maintain clarity.</p>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#f5f0e8]">
        <p className="max-w-xl text-[#4A2C0A]">
          Common in fintech, AI dashboards, and premium SaaS tools.
        </p>
      </section>
    </main>
  );
}
