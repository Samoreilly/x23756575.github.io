import { Github, Linkedin } from "lucide-react";
import Spotify from "../assets/spotify.svg";

export default function PersonalLinks() {
  return (
    <>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/samoreilly"
          className="text-black/40 hover:text-black/80 transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/sam-o-reilly"
          className="text-black/40 hover:text-black/80 transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://open.spotify.com/user/4zfzeg3g1r33i32nze0z794ao?si=12d2793ae1fd4150"
          className="transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Spotify} alt="Spotify" className="w-5 h-5 opacity-40 hover:opacity-80 transition-opacity duration-300 grayscale" />
        </a>
      </div>
    </>
  );
}

