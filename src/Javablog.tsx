import { useState } from "react";
import { Link } from "react-router-dom";
import PersonalLinks from "./components/PersonalLinks";

export default function Javablog() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navbar */}
      <nav className="bg-slate-950 py-6 px-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          {/* Social Icons - Top ILeft */}
          <PersonalLinks />
          {/* Center Links */}
          <div className="flex justify-center items-center gap-8">
            <Link
              className="text-blue-400 text-sm"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
              to="/"
            >
              Home
            </Link>
            <span
              className="text-blue-400 text-sm"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              link two
            </span>
            <span
              className="text-blue-400 text-sm"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              link three
            </span>
          </div>

          {/* Empty space for balance */}
          <div className="w-16"></div>
        </div>
      </nav>

      {/* Main Content - Centered */}
      <main className="flex items-center justify-center px-8 py-20">
        <div className="max-w-2xl w-full">
          <article className="space-y-6">
            <h1
              className="text-blue-300 text-3xl"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              evening thoughts
            </h1>

            <p
              className="text-blue-200 text-base leading-relaxed"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              the night carries a certain stillness that daylight cannot
              replicate. in these quiet hours, thoughts drift like clouds across
              a darkened sky, unhurried and contemplative.
            </p>

            <p
              className="text-blue-200 text-base leading-relaxed"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              there's something about the muted palette of midnight that invites
              reflection. the world feels softer, more intimate, as if wrapped
              in velvet silence.
            </p>

            <p
              className="text-blue-200 text-base leading-relaxed"
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
