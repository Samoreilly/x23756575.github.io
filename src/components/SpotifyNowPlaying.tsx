import { useEffect, useState } from "react";

interface SpotifyTrack {
  name: string;
  artist: string;
  albumArt: string;
  isPlaying: boolean;
  previewUrl?: string;
}

export default function SpotifyNowPlaying() {
  const [track, setTrack] = useState<SpotifyTrack | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const apiUrl = import.meta.env.VITE_SPOTIFY_API_URL || 'http://localhost:3001';
        const response = await fetch(`${apiUrl}/api/now-playing`);

        if (!response.ok) {
          throw new Error('Failed to fetch');
        }

        const data = await response.json();

        if (!data.isPlaying) {
          setTrack(null);
          return;
        }

        setTrack({
          name: data.title,
          artist: data.artist,
          albumArt: data.albumImageUrl,
          isPlaying: data.isPlaying,
          previewUrl: data.songUrl,
        });
      } catch (err) {
        setError('Unable to fetch');
        setTrack(null);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 10000);
    return () => clearInterval(interval);
  }, []);

  if (error || !track) {
    return null;
  }

  return (
    <div className="fixed bottom-8 left-8 max-w-[280px] sm:max-w-xs transition-all duration-500 group">
      <div className="bg-white/80 backdrop-blur-md border border-black/5 rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center gap-3">
          {/* Album Art */}
          {track.albumArt && (
            <div className="w-10 h-10 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
              <img
                src={track.albumArt}
                alt="Album art"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Track Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span
                className="text-black/40 text-[9px] uppercase tracking-wider"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                {track.isPlaying ? "♫ listening to" : "⏸ paused"}
              </span>
            </div>

            <p
              className="text-black/80 text-xs truncate font-medium"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
              title={track.name}
            >
              {track.name}
            </p>

            <p
              className="text-black/40 text-[10px] truncate"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
              title={track.artist}
            >
              {track.artist}
            </p>
          </div>

          {/* Spotify Link */}
          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
          >
            <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

