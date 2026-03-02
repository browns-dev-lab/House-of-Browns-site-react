export default function Skeuomorphism() {
  return (
    <main className="min-h-screen bg-[#fdfcf9]">
      <section className="pt-32 pb-20 px-6">
        <h1 className="font-playfair text-5xl text-[#1A0F00] mb-6">
          Skeuomorphic Cues
        </h1>
        <p className="text-[#4A2C0A] max-w-xl">
          Familiar design patterns inspired by real-world objects.
        </p>
      </section>

      <section className="py-24 px-6 bg-[#1A0F00] text-[#fdfcf9]">
        <div className="max-w-4xl space-y-6 text-white/80">
          <p>
            Modern skeuomorphism is subtle. It’s about recognisability, not
            realism.
          </p>
          <p>We use it to reduce learning curves and increase comfort.</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <h3 className="font-playfair text-2xl mb-6">Ideal for</h3>
        <ul className="space-y-3 text-[#4A2C0A]">
          <li>• Learning platforms</li>
          <li>• Audio & creative tools</li>
          <li>• Hardware-connected products</li>
        </ul>
      </section>
    </main>
  );
}
