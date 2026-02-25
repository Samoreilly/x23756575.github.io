import { useState, useEffect } from "react";
import PersonalLinks from "./components/PersonalLinks";
import SpotifyNowPlaying from "./components/SpotifyNowPlaying";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black/80 font-mono selection:bg-black selection:text-white selection:bg-opacity-10 flex items-center justify-center">
      <SpotifyNowPlaying />

      <main className="max-w-xl w-full px-8 py-20">
        <header
          className={`transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <div className="mb-10">
            <h1 className="text-2xl font-medium tracking-tight mb-2">Sam O'Reilly</h1>
            <p className="text-black/40 text-sm mb-6">Computer Science Student</p>
            <PersonalLinks />
          </div>

          <section className="space-y-6 text-sm leading-relaxed max-w-md">
            <p>
              hello, i'm sam. i builds things.
              Check out my GitHub for more of me.
            </p>


            <div className="pt-6 flex gap-6">
              <a
                href="mailto:samore123ash@gmail.com"
                className="text-black/60 hover:text-black border-b border-black/10 hover:border-black transition-all duration-200 py-0.5"
              >
                email
              </a>
            </div>
          </section>
        </header>
      </main>
    </div>
  );
}




