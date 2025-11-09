import { useState } from "react";
import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import PersonalLinks from "./components/PersonalLinks";

export default function HomePage() {
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
    <div className="min-h-screen bg-slate-950">
      {/* Navbar */}
      <nav className="bg-slate-950 py-6 px-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          {/* Social Icons - Top Left */}
          <PersonalLinks />

          {/* Center Links */}
          <div className="flex justify-center items-center gap-8">
            <span
              className="text-blue-400 text-sm cursor-pointer"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              home
            </span>
            <span
              className="text-blue-400 text-sm cursor-pointer"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              projects
            </span>
            <span
              className="text-blue-400 text-sm cursor-pointer"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              personal
            </span>
          </div>

          {/* Empty space for balance */}
          <div className="w-16"></div>
        </div>
      </nav>

      {/* Main Content - Centered Blog List */}
      <main className="flex items-center justify-center px-8 py-20">
        <div className="max-w-2xl w-full">
          <h1
            className="text-blue-300 text-4xl mb-12"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            You have stumbled upon my humble abode; read and be knowledged,
            young Padawan
          </h1>

          <div className="space-y-8">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.link}`}
                className="block p-6 border border-blue-900/30 hover:border-blue-700/50 transition-colors rounded-sm"
              >
                <div className="space-y-3">
                  <h2
                    className="text-blue-300 text-xl"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {blog.title}
                  </h2>
                  <p
                    className="text-blue-400/60 text-xs"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    last updated: {blog.date}
                  </p>
                  <p
                    className="text-blue-200/70 text-sm leading-relaxed"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {blog.preview}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
