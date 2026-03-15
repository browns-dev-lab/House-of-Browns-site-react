import { useEffect, useRef } from "react";

const COLORS = [
  "#553019",
  "#5e3820",
  "#623d22",
  "#4a2a14",
  "#ce905f",
  "#c4845a",
  "#ba7a52",
  "#d4966a",
  "#7a4828",
  "#8a5530",
  "#9a6238",
  "#6a4020",
  "#b07845",
  "#a06838",
  "#bc8250",
];

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function GrassOverlay() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animId;
    let blades = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = Math.round(window.innerHeight * 0.15); // reduced from 0.2
      buildBlades();
    }

    function buildBlades() {
      blades = [];
      const W = canvas.width;
      const VH = window.innerHeight;

      const count = Math.floor(W / 2);
      for (let i = 0; i < count; i++) {
        blades.push({
          x: rand(0, W),
          maxH: rand(VH * 0.05, VH * 0.12), // reduced from 0.07–0.17
          w: rand(0.8, 2.2),
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          tilt: rand(-0.22, 0.22),
          amp: rand(0.03, 0.12),
          speed: rand(0.4, 1.1),
          phase: rand(0, Math.PI * 2),
          thick: false,
        });
      }

      const stalkCount = Math.floor(W / 6);
      for (let i = 0; i < stalkCount; i++) {
        blades.push({
          x: rand(0, W),
          maxH: rand(VH * 0.07, VH * 0.14), // reduced from 0.09–0.19
          w: rand(2, 4.5),
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          tilt: rand(-0.18, 0.18),
          amp: rand(0.02, 0.08),
          speed: rand(0.3, 0.8),
          phase: rand(0, Math.PI * 2),
          thick: true,
        });
      }
    }

    function drawBlade(blade, t) {
      const H = canvas.height;
      const sway = Math.sin(t * blade.speed + blade.phase) * blade.amp;
      const angle = blade.tilt + sway;

      const tipX = blade.x + Math.sin(angle) * blade.maxH;
      const tipY = H - Math.cos(angle) * blade.maxH;

      const grad = ctx.createLinearGradient(blade.x, H, tipX, tipY);
      grad.addColorStop(0, "#2e1608");
      grad.addColorStop(0.4, "#553019");
      grad.addColorStop(0.75, blade.color);
      grad.addColorStop(1, "rgba(206,144,95,0)");

      ctx.beginPath();
      ctx.moveTo(blade.x - blade.w / 2, H);
      ctx.lineTo(blade.x + blade.w / 2, H);
      ctx.quadraticCurveTo(
        blade.x + Math.sin(angle) * blade.maxH * 0.6 + blade.w,
        H - Math.cos(angle) * blade.maxH * 0.6,
        tipX,
        tipY,
      );
      ctx.quadraticCurveTo(
        blade.x + Math.sin(angle) * blade.maxH * 0.6 - blade.w,
        H - Math.cos(angle) * blade.maxH * 0.6,
        blade.x - blade.w / 2,
        H,
      );
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();
    }

    function animate(ts) {
      const t = ts * 0.001;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      blades.filter((b) => b.thick).forEach((b) => drawBlade(b, t));
      blades.filter((b) => !b.thick).forEach((b) => drawBlade(b, t));
      animId = requestAnimationFrame(animate);
    }

    resize();
    animId = requestAnimationFrame(animate);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute bottom-0 left-0 w-full pointer-events-none"
      style={{ zIndex: 10, display: "block" }}
    />
  );
}
