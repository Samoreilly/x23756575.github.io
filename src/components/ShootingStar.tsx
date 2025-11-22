import { useEffect, useState } from "react";

interface Star {
  id: number;
  startX: number;
  startY: number;
  duration: number;
}

export default function ShootingStar() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const createShootingStar = () => {
      const newStar: Star = {
        id: Date.now(),
        startX: Math.random() * 100,
        startY: Math.random() * 50,
        duration: 1.5 + Math.random() * 0.5,
      };

      setStars((prev) => [...prev, newStar]);

      // Remove star after animation
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== newStar.id));
      }, newStar.duration * 1000);
    };

    // Create shooting star at random intervals (between 8-20 seconds)
    const scheduleNext = () => {
      const delay = 8000 + Math.random() * 12000;
      setTimeout(() => {
        createShootingStar();
        scheduleNext();
      }, delay);
    };

    scheduleNext();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-blue-300 rounded-full"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            boxShadow: "0 0 4px 1px rgba(147, 197, 253, 0.8)",
            animation: `shootingStar ${star.duration}s linear forwards`,
          }}
        >
          <div
            className="absolute top-0 left-0 w-20 h-0.5 bg-gradient-to-r from-blue-300 to-transparent"
            style={{ transformOrigin: "left center", rotate: "45deg" }}
          />
        </div>
      ))}
    </div>
  );
}
