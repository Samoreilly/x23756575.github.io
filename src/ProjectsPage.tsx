import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PersonalLinks from "./components/PersonalLinks";
import Starfield from "./components/Starfield";
import CursorTrail from "./components/CursorTrail";
import AmbientGlow from "./components/AmbientGlow";
import ShootingStar from "./components/ShootingStar";
import FloatingParticles from "./components/FloatingParticles";
import MoonPhase from "./components/MoonPhase";

export default function ProjectsPage() {
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
          {/* Social Icons - Top Left */}
          <div className="order-1 sm:order-none">
            <PersonalLinks />
          </div>

          {/* Center Links */}
          <div className="flex justify-center items-center gap-4 sm:gap-8 order-2 sm:order-none">
            <Link
              to="/"
              className="text-blue-400 text-xs sm:text-sm cursor-pointer hover:text-blue-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(147,197,253,0.6)] relative group"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              home
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <span
              className="text-blue-300 text-xs sm:text-sm cursor-pointer relative group"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              projects
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-blue-400 to-blue-600"></span>
            </span>
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
              className="text-blue-300 text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12 leading-tight"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              projects
            </h1>
          </div>

          {/* Projects Grid */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Kafka Damero */}
              <div className="group p-4 sm:p-6 border border-blue-900/30 rounded-sm transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/0 via-blue-900/0 to-blue-950/0 group-hover:from-blue-950/20 group-hover:via-blue-900/10 group-hover:to-blue-950/20 transition-all duration-500"></div>
                <div className="absolute inset-0 border border-blue-700/0 group-hover:border-blue-700/50 rounded-sm transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"></div>
                
                <div className="relative z-10">
                  <h3
                    className="text-blue-300 text-lg sm:text-xl mb-2 group-hover:text-blue-200 transition-colors duration-300"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    Kafka Damero
                  </h3>
                  <p
                    className="text-blue-400/60 text-xs mb-3"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    Java • ⭐ 1
                  </p>
                  <p
                    className="text-blue-200/70 text-sm leading-relaxed mb-4"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    spring boot library for kafka error handling with automatic retry logic, dlq routing, and circuit breaker support
                  </p>

                  {/* Portal buttons */}
                  <div className="flex gap-3 mt-4">
                    <a
                      href="https://github.com/Samoreilly/java-damero"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 border border-blue-700/40 rounded-sm bg-blue-950/30 hover:bg-blue-900/40 hover:border-blue-600/60 transition-all duration-300 text-center group/btn relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-blue-500/0 group-hover/btn:bg-blue-500/10 transition-all duration-300"></div>
                      <span
                        className="text-blue-300/80 group-hover/btn:text-blue-200 text-xs relative z-10 flex items-center justify-center gap-1.5"
                        style={{ fontFamily: "JetBrains Mono, monospace" }}
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        source
                      </span>
                    </a>
                    <Link
                      to="/projects/kafka-damero"
                      className="flex-1 px-3 py-2 border border-blue-700/40 rounded-sm bg-blue-950/30 hover:bg-blue-900/40 hover:border-blue-600/60 transition-all duration-300 text-center group/btn relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-blue-500/0 group-hover/btn:bg-blue-500/10 transition-all duration-300"></div>
                      <span
                        className="text-blue-300/80 group-hover/btn:text-blue-200 text-xs relative z-10 flex items-center justify-center gap-1.5"
                        style={{ fontFamily: "JetBrains Mono, monospace" }}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        deep dive
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* FraudDetector */}
              <div className="group p-4 sm:p-6 border border-blue-900/30 rounded-sm transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/0 via-blue-900/0 to-blue-950/0 group-hover:from-blue-950/20 group-hover:via-blue-900/10 group-hover:to-blue-950/20 transition-all duration-500"></div>
                <div className="absolute inset-0 border border-blue-700/0 group-hover:border-blue-700/50 rounded-sm transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"></div>
                
                <div className="relative z-10">
                  <h3
                    className="text-blue-300 text-lg sm:text-xl mb-2 group-hover:text-blue-200 transition-colors duration-300"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    FraudDetector
                  </h3>
                  <p
                    className="text-blue-400/60 text-xs mb-3"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    Java • ⭐ 1
                  </p>
                  <p
                    className="text-blue-200/70 text-sm leading-relaxed mb-4"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    fraud detection system with cryptographic security
                  </p>

                  {/* Portal buttons */}
                  <div className="flex gap-3 mt-4">
                    <a
                      href="https://github.com/Samoreilly/FraudDetector"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 border border-blue-700/40 rounded-sm bg-blue-950/30 hover:bg-blue-900/40 hover:border-blue-600/60 transition-all duration-300 text-center group/btn relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-blue-500/0 group-hover/btn:bg-blue-500/10 transition-all duration-300"></div>
                      <span
                        className="text-blue-300/80 group-hover/btn:text-blue-200 text-xs relative z-10 flex items-center justify-center gap-1.5"
                        style={{ fontFamily: "JetBrains Mono, monospace" }}
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        source
                      </span>
                    </a>
                    <Link
                      to="/projects/fraud-detector"
                      className="flex-1 px-3 py-2 border border-blue-700/40 rounded-sm bg-blue-950/30 hover:bg-blue-900/40 hover:border-blue-600/60 transition-all duration-300 text-center group/btn relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-blue-500/0 group-hover/btn:bg-blue-500/10 transition-all duration-300"></div>
                      <span
                        className="text-blue-300/80 group-hover/btn:text-blue-200 text-xs relative z-10 flex items-center justify-center gap-1.5"
                        style={{ fontFamily: "JetBrains Mono, monospace" }}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        deep dive
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
