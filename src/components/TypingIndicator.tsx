import { useEffect, useState } from "react";

export default function TypingIndicator() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide after 3 seconds
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-8 right-8 flex items-center gap-2 px-4 py-2 bg-slate-900/60 backdrop-blur-sm border border-blue-900/30 rounded-md">
      <div className="flex gap-1.5">
        <div
          className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"
          style={{ animationDelay: "0.2s" }}
        />
        <div
          className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"
          style={{ animationDelay: "0.4s" }}
        />
      </div>
      <span
        className="text-blue-300/70 text-xs"
        style={{ fontFamily: "JetBrains Mono, monospace" }}
      >
        settling in...
      </span>
    </div>
  );
}
