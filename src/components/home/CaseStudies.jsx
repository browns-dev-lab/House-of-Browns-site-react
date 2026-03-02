export default function CaseStudies() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">Case Studies</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 border border-black/10 text-[#4A2C0A]">
              Startup Name
              <div className="text-sm mt-2">Product · Design · Brand</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
