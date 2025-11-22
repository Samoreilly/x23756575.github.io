import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PersonalLinks from "./components/PersonalLinks";
import Starfield from "./components/Starfield";
import CursorTrail from "./components/CursorTrail";
import AmbientGlow from "./components/AmbientGlow";
import ShootingStar from "./components/ShootingStar";
import FloatingParticles from "./components/FloatingParticles";
import MoonPhase from "./components/MoonPhase";

export default function KafkaDameroPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <Starfield />
      <AmbientGlow />
      <FloatingParticles />
      <ShootingStar />
      <CursorTrail />
      <MoonPhase />

      {/* Navbar */}
      <nav
        className={`bg-slate-950/80 backdrop-blur-sm py-4 sm:py-6 px-4 sm:px-8 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="order-1 sm:order-none">
            <PersonalLinks />
          </div>

          <div className="flex justify-center items-center gap-4 sm:gap-8 order-2 sm:order-none">
            <Link
              to="/"
              className="text-blue-400 text-xs sm:text-sm cursor-pointer hover:text-blue-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(147,197,253,0.6)] relative group"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              home
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/projects"
              className="text-blue-400 text-xs sm:text-sm cursor-pointer hover:text-blue-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(147,197,253,0.6)] relative group"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              projects
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/personal"
              className="text-blue-400 text-xs sm:text-sm cursor-pointer hover:text-blue-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(147,197,253,0.6)] relative group"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              personal
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          <div className="hidden sm:block w-16 order-3"></div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex items-center justify-center px-4 sm:px-8 py-12 sm:py-20">
        <div className="max-w-4xl w-full">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h1
              className="text-blue-300 text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              Kafka Damero
            </h1>
            <p
              className="text-blue-400/60 text-sm mb-8"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              // deep dive content coming soon...
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
