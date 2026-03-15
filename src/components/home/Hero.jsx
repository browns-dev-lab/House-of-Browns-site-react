import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import mountainsBg from "../../assets/backgrounds/mountains.png";
import homeFg from "../../assets/backgrounds/home.png";
import birdsAnimation from "../../assets/animations/Birds.json";
import GrassOverlay from "../../components/ui/GrassOverlay";

const WORDS = ["DESIGN", "DEVELOP", "DISTRIBUTE"];

function SplitWord({ word }) {
  return (
    <>
      {word.split("").map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            textShadow: `
              0 6px 28px rgba(0,0,0,0.13),
              0 2px 6px rgba(0,0,0,0.09)
            `,
            // stagger the animation slightly per letter
            animationDelay: `${i * 0.03}s`,
          }}
          className="word-slide"
        >
          {char}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideUp {
          0%   { transform: translateY(110%); opacity: 0; }
          100% { transform: translateY(0);    opacity: 1; }
        }
        .word-slide {
          animation: slideUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1008]">
        {/* LAYER 1: Mountains */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mountainsBg})` }}
        />

        {/* LAYER 2: Cycling word */}
        <div className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none select-none -mt-[20vh]">
          <div style={{ overflow: "hidden", lineHeight: 1.05 }}>
            <h1
              key={index}
              className="text-white uppercase text-[12vw] leading-none m-0"
              style={{
                fontFamily: "var(--font-anton)",
                letterSpacing: "-0.01em",
              }}
            >
              <SplitWord word={WORDS[index]} />
            </h1>
          </div>
        </div>

        {/* LAYER 3: Foreground home */}
        <div
          className="absolute inset-0 z-[3] pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: `url(${homeFg})` }}
        />

        {/* LAYER 4: Lottie Birds */}
        <div className="absolute inset-0 z-[5] pointer-events-none">
          <Lottie
            animationData={birdsAnimation}
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <GrassOverlay />

        {/* LAYER 5: Content */}
        <div className="relative z-[6] flex flex-col items-center justify-end text-center min-h-screen w-full pb-[10vh]">
          <p
            className="uppercase text-white mb-3 tracking-[0.28em] text-xs font-semibold"
            style={{
              fontFamily: "var(--font-sans)",
              textShadow: "0 2px 16px rgba(0,0,0,0.1)",
            }}
          >
            A Creative Tech Company
          </p>

          <p
            className="text-white mb-10 max-w-lg px-6 leading-snug text-[clamp(1.4rem,3vw,2.2rem)]"
            style={{
              fontFamily: "var(--font-accent)",
              textShadow: "0 4px 20px rgba(0,0,0,0.12)",
            }}
          >
            We belong to those elite category of immersive experiences
          </p>

          <div className="flex flex-wrap gap-5 justify-center">
            <button
              className="px-10 py-3 bg-white text-black text-[0.7rem] font-medium tracking-[0.18em] uppercase transition-all duration-300 hover:bg-black hover:text-white"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Get into Touch
            </button>
            <button
              className="px-10 py-3 bg-transparent border border-white text-white text-[0.7rem] font-medium tracking-[0.18em] uppercase transition-all duration-300 hover:bg-white hover:text-black"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              View Experience
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
