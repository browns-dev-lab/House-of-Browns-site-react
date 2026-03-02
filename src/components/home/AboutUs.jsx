export default function AboutUs() {
  return (
    <section className="py-28 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="uppercase tracking-widest text-sm text-[#8B5E3C]">
            About Us
          </p>

          <h2 className="mt-4 font-playfair text-4xl font-black text-[#1A0F00]">
            Built by people who wanted to build products.
          </h2>

          <p className="mt-6 text-[#4A2C0A] leading-relaxed">
            House of Browns didn’t begin as an agency. It started with a desire
            to create meaningful products — things people actually use, not just
            admire.
          </p>

          <p className="mt-4 text-[#4A2C0A] leading-relaxed">
            Along the way, founders and teams asked us to help them design,
            build, and ship their ideas. That’s how Browns became a studio —
            grounded in product thinking, not service templates.
          </p>

          <p className="mt-4 text-[#4A2C0A] leading-relaxed">
            Today, we work closely with startups, founders, and growing teams —
            blending design, technology, and clarity to move ideas forward.
          </p>
        </div>

        {/* Visual / Placeholder */}
        <div className="h-105 bg-[#E9E2D6] border border-black/10 flex items-center justify-center text-[#8B5E3C]">
          Studio / Process Visual
        </div>
      </div>
    </section>
  );
}
