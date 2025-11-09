import { useState, useEffect } from "react";

export default function TimeBasedGreeting() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      let newGreeting = "";

      if (hour >= 5 && hour < 12) {
        newGreeting = "good morning, wanderer";
      } else if (hour >= 12 && hour < 17) {
        newGreeting = "good afternoon, wanderer";
      } else if (hour >= 17 && hour < 21) {
        newGreeting = "good evening, wanderer";
      } else {
        newGreeting = "good night, wanderer";
      }

      setGreeting(newGreeting);
    };

    updateGreeting();
    // Update every minute to catch hour changes
    const interval = setInterval(updateGreeting, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!greeting) return null;

  return (
    <p
      className="text-blue-400/70 text-xs sm:text-sm mt-3 sm:mt-4 text-center sm:text-left"
      style={{ fontFamily: "JetBrains Mono, monospace" }}
    >
      {greeting}
    </p>
  );
}

