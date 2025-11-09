import { useEffect, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
}

export default function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    // Check if device supports touch - don't enable cursor trail on touch devices
    const isTouchDevice = 'ontouchstart' in window || 
                         (navigator.maxTouchPoints !== undefined && navigator.maxTouchPoints > 0);
    
    if (isTouchDevice) return;

    let throttleTimer: number | null = null;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (throttleTimer) return;
      
      throttleTimer = window.setTimeout(() => {
        setTrail((prev) => {
          const newTrail = [
            { x: e.clientX, y: e.clientY, opacity: 0.5 },
            ...prev.slice(0, 6), // Keep last 6 points
          ].slice(0, 7); // Max 7 points
          return newTrail;
        });
        throttleTimer = null;
      }, 30);
    };

    // Fade out trail points
    const fadeInterval = setInterval(() => {
      setTrail((prev) =>
        prev
          .map((point) => ({
            ...point,
            opacity: Math.max(0, point.opacity - 0.1),
          }))
          .filter((point) => point.opacity > 0.05)
      );
    }, 60);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(fadeInterval);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            width: `${(trail.length - index) * 3}px`,
            height: `${(trail.length - index) * 3}px`,
            background: `radial-gradient(circle, rgba(147, 197, 253, ${point.opacity}) 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
            transition: "opacity 0.1s ease-out",
          }}
        />
      ))}
    </div>
  );
}

