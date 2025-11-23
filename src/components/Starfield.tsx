import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speed: number;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size and create stars
    let width = window.innerWidth;
    let height = window.innerHeight;
    let isMobile = width < 640;
    
    const createStars = (w: number, h: number, mobile: boolean): Star[] => {
      const stars: Star[] = [];
      const starCount = mobile ? 40 : 80;

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          radius: Math.random() * 1.5,
          opacity: Math.random() * 0.5 + 0.2,
          speed: Math.random() * 0.3 + 0.1,
        });
      }
      return stars;
    };

    let stars = createStars(width, height, isMobile);
    
    const resizeCanvas = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      const newIsMobile = newWidth < 640;
      const oldIsMobile = isMobile;
      
      width = newWidth;
      height = newHeight;
      canvas.width = width;
      canvas.height = height;
      
      // Regenerate stars if switching between mobile/desktop
      if (newIsMobile !== oldIsMobile) {
        isMobile = newIsMobile;
        stars = createStars(width, height, isMobile);
      } else {
        // Just ensure existing stars are within bounds
        stars.forEach(star => {
          if (star.x > width) star.x = Math.random() * width;
          if (star.y > height) star.y = Math.random() * height;
        });
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animation loop
    let animationId: number;
    
    const animate = (currentTime: number) => {
      
      // Clear canvas
      ctx.fillStyle = "#0f172a"; // slate-950
      ctx.fillRect(0, 0, width, height);

      stars.forEach((star) => {
        // Update star position (very subtle drift)
        star.x += star.speed * 0.002;
        if (star.x > width) {
          star.x = 0;
          star.y = Math.random() * height;
        }

        // Twinkling effect (slower, more subtle)
        const time = currentTime * 0.0005;
        star.opacity = 0.3 + Math.sin(time + star.x * 0.01) * 0.2;
        star.opacity = Math.max(0.2, Math.min(0.6, star.opacity));

        // Draw star with slight glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${star.opacity})`; // blue-300 with opacity
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: "#0f172a" }}
    />
  );
}

