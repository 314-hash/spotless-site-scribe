import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  type: "sparkle" | "bubble" | "drop";
  angle: number;
  spin: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];
    const PARTICLE_COUNT = 60;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const isDark = () => document.documentElement.classList.contains("dark");

    // Create particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const types: Particle["type"][] = ["sparkle", "bubble", "drop"];
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -Math.random() * 0.3 - 0.1,
        opacity: Math.random() * 0.4 + 0.05,
        type: types[Math.floor(Math.random() * types.length)],
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.02,
      });
    }

    const drawSparkle = (p: Particle, color: string) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.globalAlpha = p.opacity;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      const len = p.size * 2;
      // 4-point star
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(len, 0);
        ctx.stroke();
        ctx.rotate(Math.PI / 4);
      }
      ctx.restore();
    };

    const drawBubble = (p: Particle, color: string) => {
      ctx.save();
      ctx.globalAlpha = p.opacity * 0.6;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
      ctx.strokeStyle = color;
      ctx.lineWidth = 0.8;
      ctx.stroke();
      // Highlight
      ctx.beginPath();
      ctx.arc(p.x - p.size * 0.8, p.y - p.size * 0.8, p.size * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = p.opacity * 0.3;
      ctx.fill();
      ctx.restore();
    };

    const drawDrop = (p: Particle, color: string) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size * 0.8, p.size * 2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dark = isDark();
      // Gold-themed colors matching the website
      const primaryColor = dark
        ? "hsl(43, 80%, 50%)"
        : "hsl(43, 60%, 35%)";
      const secondaryColor = dark
        ? "hsl(43, 90%, 55%)"
        : "hsl(43, 80%, 42%)";

      particles.forEach((p) => {
        // Move
        p.x += p.speedX;
        p.y += p.speedY;
        p.angle += p.spin;

        // Gentle sine wave drift
        p.x += Math.sin(p.angle * 2) * 0.15;

        // Wrap around
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;

        // Pulse opacity
        const pulse = Math.sin(p.angle * 3) * 0.15;
        const alpha = Math.max(0.02, p.opacity + pulse);
        const pp = { ...p, opacity: alpha };

        const color = p.type === "sparkle" ? secondaryColor : primaryColor;

        switch (p.type) {
          case "sparkle":
            drawSparkle(pp, color);
            break;
          case "bubble":
            drawBubble(pp, color);
            break;
          case "drop":
            drawDrop(pp, color);
            break;
        }
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    // Watch for theme changes
    const observer = new MutationObserver(() => {});
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;
