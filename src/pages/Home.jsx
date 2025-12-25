export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fdfcf9]">
      <div className="text-center px-6">
        {/* Brand Name */}
        <h2 className="text-lg md:text-xl tracking-widest uppercase text-[#7a5a45] mb-3">
          House of Browns
        </h2>

        {/* Main Message */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#4b2e1f] mb-4">
          Launching Soon
        </h1>

        <p className="text-base md:text-lg text-[#7a5a45] max-w-xl mx-auto">
          A refined experience is in the making.
          <br />
          Warm. Elegant. Thoughtfully crafted.
        </p>

        {/* Divider */}
        <div className="mt-8 h-1 w-24 bg-[#4b2e1f] mx-auto rounded-full"></div>
      </div>
    </main>
  );
}
