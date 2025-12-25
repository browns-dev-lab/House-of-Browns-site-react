export default function Home() {
  const goToLaunch = () => {
    window.location.href = "/launch";
  };

  return (
    <main className="min-h-screen bg-[#fdfcf9] relative">
      {/* Center Content */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-lg md:text-xl tracking-widest uppercase text-[#7a5a45] mb-3">
          House of Browns
        </h2>

        <h1 className="text-4xl md:text-6xl font-bold text-[#4b2e1f] mb-4">
          Launching Soon
        </h1>

        <p className="text-base md:text-lg text-[#7a5a45] max-w-xl mx-auto">
          A refined experience is in the making.
          <br />
          Warm. Elegant. Thoughtfully crafted.
        </p>

        <div className="mt-8 h-1 w-24 bg-[#4b2e1f] mx-auto rounded-full"></div>
      </div>

      {/* Bottom Right Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={goToLaunch}
          className="border-2 border-[#4b2e1f] text-[#4b2e1f] px-6 py-3 rounded-lg font-medium
                     hover:bg-[#4b2e1f] hover:text-white transition duration-300 shadow-md"
        >
          Go to Launch Page
        </button>
      </div>
    </main>
  );
}
