import { Github, Linkedin } from "lucide-react";
import Spotify from "../assets/spotify.svg";

export default function PersonalLinks() {
  return (
    <>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/Samoreilly"
          className="text-white/40 hover:text-white/80 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/sam-o-reilly"
          className="text-white/40 hover:text-white/80 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={16} />
        </a>
        <a
          href="https://open.spotify.com/user/4zfzeg3g1r33i32nze0z794ao?si=12d2793ae1fd4150"
          className="transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(30,215,96,0.6)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Spotify} alt="Spotify" className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity duration-300" />
        </a>
      </div>
    </>
  );
}
