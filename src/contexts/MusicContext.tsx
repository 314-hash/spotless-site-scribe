import { createContext, useContext, useRef, ReactNode } from "react";

type MusicContextType = {
  registerAudio: (audio: HTMLAudioElement | null) => void;
  pauseMusic: () => void;
  resumeMusic: () => void;
};

const MusicContext = createContext<MusicContextType | null>(null);

export const MusicProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const wasPlayingRef = useRef(false);

  const registerAudio = (audio: HTMLAudioElement | null) => {
    audioRef.current = audio;
  };

  const pauseMusic = () => {
    const audio = audioRef.current;
    if (audio && !audio.paused) {
      wasPlayingRef.current = true;
      audio.pause();
    }
  };

  const resumeMusic = () => {
    const audio = audioRef.current;
    if (audio && wasPlayingRef.current) {
      audio.play().catch(() => {});
      wasPlayingRef.current = false;
    }
  };

  return (
    <MusicContext.Provider value={{ registerAudio, pauseMusic, resumeMusic }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error("useMusic must be used within MusicProvider");
  return ctx;
};
