import { useEffect } from "react";

export default function ConstellationLines() {
  useEffect(() => {
    const canvas = document.getElementById('constellation-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Create fixed star positions for constellation
    const stars = [
      { x: width * 0.3, y: height * 0.2 },
      { x: width * 0.35, y: height * 0.3 },
      { x: width * 0.4, y: height * 0.25 },
      { x: width * 0.6, y: height * 0.4 },
      { x: width * 0.65, y: height * 0.5 },
      { x: width * 0.7, y: height * 0.35 },
    ];

    const connections = [
      [0, 1], [1, 2], [2, 0],
      [3, 4], [4, 5], [5, 3],
    ];

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", resizeCanvas);

    let opacity = 0;
    let increasing = true;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Slowly pulse opacity
      if (increasing) {
        opacity += 0.001;
        if (opacity >= 0.15) increasing = false;
      } else {
        opacity -= 0.001;
        if (opacity <= 0.05) increasing = true;
      }

      // Draw constellation lines
      ctx.strokeStyle = `rgba(147, 197, 253, ${opacity})`;
      ctx.lineWidth = 0.5;
      
      connections.forEach(([a, b]) => {
        ctx.beginPath();
        ctx.moveTo(stars[a].x, stars[a].y);
        ctx.lineTo(stars[b].x, stars[b].y);
        ctx.stroke();
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
      id="constellation-canvas"
      className="fixed inset-0 pointer-events-none z-1"
    />
  );
}
