import { useEffect, useRef } from "react";

export default function AmbientGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create subtle ambient glows that drift around
    const glows = [
      { x: width * 0.2, y: height * 0.3, vx: 0.2, vy: 0.15, radius: 200 },
      { x: width * 0.7, y: height * 0.6, vx: -0.15, vy: 0.2, radius: 250 },
      { x: width * 0.5, y: height * 0.8, vx: 0.1, vy: -0.1, radius: 180 },
    ];

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      glows.forEach((glow) => {
        // Update position
        glow.x += glow.vx;
        glow.y += glow.vy;

        // Bounce off edges
        if (glow.x < 0 || glow.x > width) glow.vx *= -1;
        if (glow.y < 0 || glow.y > height) glow.vy *= -1;

        // Draw radial gradient glow
        const gradient = ctx.createRadialGradient(
          glow.x,
          glow.y,
          0,
          glow.x,
          glow.y,
          glow.radius
        );
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.03)"); // blue-500
        gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.01)");
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(
          glow.x - glow.radius,
          glow.y - glow.radius,
          glow.radius * 2,
          glow.radius * 2
        );
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
