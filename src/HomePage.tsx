import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PersonalLinks from "./components/PersonalLinks";
import Starfield from "./components/Starfield";
import CursorTrail from "./components/CursorTrail";
import TimeBasedGreeting from "./components/TimeBasedGreeting";
import JavaAsciiArt from "./components/JavaAsciiArt";
import AmbientGlow from "./components/AmbientGlow";
import ShootingStar from "./components/ShootingStar";
import FloatingParticles from "./components/FloatingParticles";
import MoonPhase from "./components/MoonPhase";
import TypingIndicator from "./components/TypingIndicator";
import SpotifyNowPlaying from "./components/SpotifyNowPlaying";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogs = [
    {
      id: 1,
      title: "Diving into java",
      date: "nov 09 2024",
      link: "diving-into-java",
      preview:
        "the night carries a certain stillness that daylight cannot replicate...",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <Starfield />
      <AmbientGlow />
      <FloatingParticles />
      <ShootingStar />
      <CursorTrail />
      <MoonPhase />
      <TypingIndicator />
      <SpotifyNowPlaying />

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
            <span
              className="text-blue-300 text-xs sm:text-sm cursor-pointer relative group"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              home
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-blue-400 to-blue-600"></span>
            </span>
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

          {/* Empty space for balance - hidden on mobile */}
          <div className="hidden sm:block w-16 order-3"></div>
        </div>
      </nav>

      {/* Main Content - Centered Blog List */}
      <main className="flex items-center justify-center px-4 sm:px-8 py-12 sm:py-20">
        <div className="max-w-2xl w-full">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h1
              className="text-blue-300 text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-12 leading-tight text-center sm:text-left"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              You have stumbled upon my humble abode; read and be knowledged,
              young Padawan
            </h1>
            <TimeBasedGreeting />
          </div>

          <div className="space-y-6 sm:space-y-8 mt-8 sm:mt-12">
            {blogs.map((blog, index) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.link}`}
                className={`block p-4 sm:p-6 border border-blue-900/30 rounded-sm transition-all duration-500 group relative overflow-hidden ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: `${300 + index * 100}ms`,
                }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/0 via-blue-900/0 to-blue-950/0 group-hover:from-blue-950/20 group-hover:via-blue-900/10 group-hover:to-blue-950/20 transition-all duration-500"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 border border-blue-700/0 group-hover:border-blue-700/50 rounded-sm transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:shadow-blue-900/50"></div>
                
                <div className="space-y-2 sm:space-y-3 relative z-10">
                  <h2
                    className="text-blue-300 text-lg sm:text-xl group-hover:text-blue-200 transition-colors duration-300 group-hover:drop-shadow-[0_0_6px_rgba(147,197,253,0.5)]"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {blog.title}
                  </h2>
                  <p
                    className="text-blue-400/60 text-xs group-hover:text-blue-400/80 transition-colors duration-300"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    last updated: {blog.date}
                  </p>
                  <p
                    className="text-blue-200/70 text-xs sm:text-sm leading-relaxed group-hover:text-blue-200/90 transition-colors duration-300"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {blog.preview}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Java ASCII Art */}
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <JavaAsciiArt />
          </div>
        </div>
      </main>
    </div>
  );
}
