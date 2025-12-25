import React from "react";

export default function Launch({ onEnter }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e3a8a] to-[#f97316] text-white px-6">
      <div className="max-w-3xl text-center space-y-6">
        {/* Hero Title */}
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-xl">
          Welcome to the R3 RCM Inc Launch Experience
        </h1>

        {/* Intro Description */}
        <p className="text-lg md:text-xl leading-relaxed drop-shadow-md">
          We are proud to introduce a new chapter in transforming healthcare
          financial performance and patient revenue excellence.
        </p>

        {/* More Details */}
        <div className="bg-white/20 rounded-xl p-6 space-y-4 shadow-lg">
          <p className="text-base md:text-lg">
            At R3 RCM Inc, we specialize in optimizing healthcare revenue
            operations from the moment a patient enters a system to the final
            payment collection — ensuring precision, compliance, and maximum
            financial returns for providers.:contentReference[oaicite:1]
            {(index = 1)}
          </p>

          <p className="text-base md:text-lg">
            By combining modern technology, expert workflows, and data‑driven
            insights, we help healthcare organizations streamline billing,
            improve cash flow, and elevate patient satisfaction.
          </p>
        </div>

        {/* Call to Action */}
        <button
          onClick={onEnter}
          className="mt-4 bg-white text-[#1e3a8a] font-semibold px-12 py-4 rounded-lg text-lg hover:bg-[#f3f4f6] transition-shadow shadow-md"
        >
          Join the Experience
        </button>

        {/* Footer */}
        <p className="text-sm text-white/80 mt-8">
          Thank you for celebrating this milestone. Powered with passion by
          House of Browns.
        </p>
      </div>
    </main>
  );
}
