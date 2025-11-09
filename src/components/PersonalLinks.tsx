import { Github, Linkedin } from "lucide-react";
import Spotify from "../assets/spotify.svg";

export default function PersonalLinks() {
  return (
    <>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/Samoreilly"
          className="text-white/40 hover:text-white/60 transition-colors"
        >
          <Github size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/sam-o-reilly"
          className="text-white/40 hover:text-white/60 transition-colors"
        >
          <Linkedin size={16} />
        </a>
        <a href="https://open.spotify.com/user/4zfzeg3g1r33i32nze0z794ao?si=12d2793ae1fd4150">
          <img src={Spotify} alt="Spotify" className="w-5 h-5 text-[#1ED760]" />
        </a>
      </div>
    </>
  );
}
