import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PersonalLinks from "./components/PersonalLinks";
import Starfield from "./components/Starfield";
import CursorTrail from "./components/CursorTrail";

export default function Javablog() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <Starfield />
      <CursorTrail />

      {/* Navbar */}
      <nav
        className={`bg-slate-950/80 backdrop-blur-sm py-4 sm:py-6 px-4 sm:px-8 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          {/* Social Icons - Top Left */}
          <div className="order-1 sm:order-none">
            <PersonalLinks />
          </div>
          {/* Center Links */}
          <div className="flex justify-center items-center gap-4 sm:gap-8 order-2 sm:order-none">
            <Link
              className="text-blue-400 text-xs sm:text-sm hover:text-blue-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(147,197,253,0.6)] relative group"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
              to="/"
            >
              home
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <span
              className="text-blue-400 text-xs sm:text-sm cursor-pointer hover:text-blue-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(147,197,253,0.6)] relative group"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              projects
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </span>
            <span
              className="text-blue-400 text-xs sm:text-sm cursor-pointer hover:text-blue-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(147,197,253,0.6)] relative group"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              personal
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </span>
          </div>

          {/* Empty space for balance - hidden on mobile */}
          <div className="hidden sm:block w-16 order-3"></div>
        </div>
      </nav>

      {/* Main Content - Centered */}
      <main className="flex items-center justify-center px-4 sm:px-8 py-12 sm:py-20">
        <div className="max-w-2xl w-full">
          <article className="space-y-4 sm:space-y-6">
            <h1
              className={`text-blue-300 text-2xl sm:text-3xl transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              evening thoughts
            </h1>

            <p
              className={`text-blue-200 text-sm sm:text-base leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              the night carries a certain stillness that daylight cannot
              replicate. in these quiet hours, thoughts drift like clouds across
              a darkened sky, unhurried and contemplative.
            </p>

            <p
              className={`text-blue-200 text-sm sm:text-base leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              there's something about the muted palette of midnight that invites
              reflection. the world feels softer, more intimate, as if wrapped
              in velvet silence.
            </p>

            <p
              className={`text-blue-200 text-sm sm:text-base leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              words written in the dark hours have their own quality—a certain
              honesty that emerges when the noise of the day has faded.
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}
