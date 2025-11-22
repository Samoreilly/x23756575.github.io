import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Get or initialize visitor count from localStorage
    const storedCount = localStorage.getItem("visitorCount");
    const currentCount = storedCount ? parseInt(storedCount, 10) : 0;
    const newCount = currentCount + 1;
    
    localStorage.setItem("visitorCount", newCount.toString());
    setCount(newCount);
  }, []);

  return (
    <div className="fixed bottom-8 left-8 flex flex-col items-start gap-1 opacity-30 hover:opacity-60 transition-opacity duration-500">
      <span
        className="text-blue-300/60 text-[10px]"
        style={{ fontFamily: "JetBrains Mono, monospace" }}
      >
        visitors
      </span>
      <div className="flex items-center gap-1">
        {String(count).padStart(6, '0').split('').map((digit, i) => (
          <span
            key={i}
            className="text-blue-400/70 text-xs font-mono bg-slate-900/50 px-1.5 py-0.5 rounded-sm border border-blue-900/20"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            {digit}
          </span>
        ))}
      </div>
    </div>
  );
}
