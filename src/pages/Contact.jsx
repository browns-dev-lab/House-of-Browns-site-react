export default function Contact() {
  return (
    <main className="min-h-screen bg-[#fdfcf9]">
      {/* CONTACT HERO */}
      <section className="pt-32 pb-20 px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-[#8B5E3C] mb-6">
          Contact
        </p>
        <h1 className="font-playfair text-4xl md:text-6xl text-[#1A0F00] mb-6">
          Let’s build something
          <br /> meaningful
        </h1>
        <p className="text-[#4A2C0A] text-lg max-w-xl mx-auto">
          Tell us about your idea, product, or problem. We’ll get back with
          clarity — not sales talk.
        </p>
      </section>

      {/* CONTACT FORM */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto bg-[#f5f0e8] p-10 md:p-14">
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-4 bg-transparent border border-black/20 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-4 bg-transparent border border-black/20 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Company / Startup"
              className="w-full p-4 bg-transparent border border-black/20 focus:outline-none"
            />
            <textarea
              placeholder="Tell us about your project"
              rows={5}
              className="w-full p-4 bg-transparent border border-black/20 focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="mt-4 self-start px-8 py-3 uppercase tracking-widest text-xs bg-[#1A0F00] text-[#fdfcf9] hover:bg-transparent hover:text-[#1A0F00] border border-[#1A0F00] transition"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            "We review your message carefully",
            "We respond within 24–48 hours",
            "If it fits, we schedule a call",
          ].map((step, i) => (
            <div key={i}>
              <p className="text-[#D4A853] font-playfair text-xl mb-4">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="text-[#4A2C0A]">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STUDIO INFO */}
      <section className="py-16 px-6 bg-[#1A0F00] text-[#fdfcf9] text-center">
        <p className="text-white/70 mb-2">House of Browns</p>
        <p className="text-white/50 text-sm">
          Creative & Tech Studio · Working globally with startups
        </p>
      </section>
    </main>
  );
}
