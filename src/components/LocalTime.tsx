import { useEffect, useState } from "react";

export default function LocalTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const formatDate = (date: Date) => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}.${day}.${year}`;
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end gap-1 opacity-30 hover:opacity-60 transition-opacity duration-500">
      <span
        className="text-blue-300/60 text-[10px]"
        style={{ fontFamily: "JetBrains Mono, monospace" }}
      >
        local time
      </span>
      <div className="text-blue-400/70 text-sm font-mono" style={{ fontFamily: "JetBrains Mono, monospace" }}>
        {formatTime(time)}
      </div>
      <div className="text-blue-400/50 text-[10px] font-mono" style={{ fontFamily: "JetBrains Mono, monospace" }}>
        {formatDate(time)}
      </div>
    </div>
  );
}
