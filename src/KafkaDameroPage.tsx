import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PersonalLinks from "./components/PersonalLinks";
import Starfield from "./components/Starfield";
import CursorTrail from "./components/CursorTrail";
import AmbientGlow from "./components/AmbientGlow";
import ShootingStar from "./components/ShootingStar";
import FloatingParticles from "./components/FloatingParticles";
import MoonPhase from "./components/MoonPhase";
import CustomKafkaListener from "./assets/image.png";
import Retry from "./assets/retry.webp"

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
            {/* Project Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-blue-950/30 border border-blue-900/40 rounded-sm">
              <span
                className="text-blue-400/80 text-xs"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                KAFKA DAMERO
              </span>
              <span className="text-blue-600/50">•</span>
              <span
                className="text-blue-300/60 text-xs"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                Spring Boot Library
              </span>
              <span className="text-blue-600/50">•</span>
              <a
                href="https://github.com/Samoreilly/java-damero"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-400/70 hover:text-blue-300 transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span
                  className="text-xs"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  repo
                </span>
              </a>
            </div>

            {/* Main Title */}
            <h1
              className="text-blue-200 text-1xl sm:text-1xl md:text-2xl mb-6 leading-tight p-6 bg-slate-900/40 backdrop-blur-sm border border-blue-900/20 rounded-sm"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              Tired of juggling{" "}
              <span className="text-blue-400 relative inline-block leading-5">
                retries
        
              </span>
              ,{" "}
              <span className="text-blue-400 relative inline-block leading-5">
                Dead Letter Queues

              </span>
              , and{" "}
              <span className="text-blue-400 relative inline-block leading-5">
                complex error handling

              </span>{" "}
              every time your Kafka consumer fails?
            </h1>


            <p
              className="text-blue-300/70 mb-8 leading-relaxed"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              <strong className="text-white sm:text-md md:text-md">What is Kafka you may ask?</strong><br/>
              <span className="text-gray-300">Kafka is a streaming platform used in data pipelines and streaming applications for high througput and low-latency data processing.</span>
             
              <div>
                 <br/>
                <br/>
                  
                  <span>
                    A few months back, I was working on a project using Kafka to send real time updates to my frontend. Throughout this,
                    I found myself repeatedly writing boilerplate code, handling the same errors, configuring stuff etc.. 
                    <br/>
                    <br/>
                    I was quickly tired of this, so I decided I might aswell make myself a library and abstract away all the nitty gritty details.

                    I started experimenting with different ideas and concepts, designing the libraries API; The goal for this project was to be as user friendly and low config as possible.
                    <br/>
                    There was alot of concepts I had to learn along the way, like Aspect Oriented Programming, Java Generic Types, Kafka internals and <span className="italic">Spring boot annotations</span>
                    .
                    <br/>
                    <br/>

                    After a few weeks of deep coding sessions, I finally had the basic functionality working.
                    The skeleton for my annotation @CustomKafkaListener was made alongside some basic config e.g. max attempts per retry and delay between retries.
                    
                    <div className="flex justify-center my-6">
                      <img className="max-w-full h-auto rounded-sm border border-blue-900/30" src={CustomKafkaListener} alt="CustomKafkaListener annotation" />
                    </div>
                    <br/>
                    I didnt want this to be another library that just works or is thrown away after a weekend, I wanted something fun to work on long-term that I could use myself or eventually seen used in production environments.
                    <br/>
                    <br/>
                    Designing my own retry mechanism was difficult in particular, I had to put my self in the shoes of a user to find the right balance between functionality and simplicity.
                    <br/>
                    <br/>
                    During the retry mechanisms development process, I encountered many challenges, especially dealing with custom objects, metadata and serialization / deserialization.
                    <br/>
                    At first, retried events were sent to a different topic configured by the user, but this caused alot of overhead and complexity for the user, so I scrapped that idea
                    and instead implemented an retry system that would handle retries in the background using TaskScheduler to schedule events back to original topic.
                    <br/>
                    <br/>
                    <p className="sm:text-2xl md:text-3xl text-center mt-5">Retry Archictecture:</p>
                    <div className="flex justify-center my-6">
                     <img
                      src={Retry}
                      alt="Retry Mechanism Diagram"
                      className="my-6 w-full max-w-[300px] sm:max-w-[300px] md:max-w-[600px] rounded-sm border border-blue-900/30"
                      />

                    </div>
                    <br/>
                    <br/>
                  </span>
              </div>
            </p>
            
          </div>
        </div>
      </main>
    </div>
  );
}
