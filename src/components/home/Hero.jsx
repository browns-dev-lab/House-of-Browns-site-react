export default function Hero() {
  return (
    <section className="bg-[#F5F0E8] py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="font-playfair text-5xl md:text-6xl font-black text-[#1A0F00]">
          We help startups go from idea to impact.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-[#4A2C0A]">
          Tech, design, and digital execution — built with founders, not handed
          off like an agency task.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="/contact"
            className="px-8 py-3 bg-[#1A0F00] text-[#F5F0E8] uppercase tracking-widest text-sm"
          >
            Start a Project
          </a>
          <a
            href="/case-studies"
            className="px-8 py-3 border border-[#1A0F00] uppercase tracking-widest text-sm text-[#1A0F00]"
          >
            View Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}
