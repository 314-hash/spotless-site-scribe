import { useEffect, useRef } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import AnimatedBackground from "./components/AnimatedBackground";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HouseCleaningSydney from "./pages/HouseCleaningSydney";
import WesternSydneyHouseCleaning from "./pages/WesternSydneyHouseCleaning";
import NotFound from "./pages/NotFound";

import { MusicProvider, useMusic } from "@/contexts/MusicContext";

// 🎵 Import your music
import mlfSong from "@/assets/mlfsong.mp3";

const queryClient = new QueryClient();

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasPlayed = useRef(false);
  const { registerAudio } = useMusic();

  useEffect(() => {
    registerAudio(audioRef.current);

    const playAudio = () => {
      if (hasPlayed.current) return;
      const audio = audioRef.current;
      if (audio) {
        audio.volume = 0.4;
        audio.play().catch((err) => {
          console.log("Autoplay blocked:", err);
        });
      }
      hasPlayed.current = true;
      window.removeEventListener("click", playAudio);
    };

    window.addEventListener("click", playAudio);
    return () => window.removeEventListener("click", playAudio);
  }, [registerAudio]);

  return (
    <audio ref={audioRef} loop preload="auto">
      <source src={mlfSong} type="audio/mpeg" />
    </audio>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <MusicProvider>
            <BackgroundMusic />

            <AnimatedBackground />

            <Toaster />
            <Sonner />

            <BrowserRouter>
              <Navbar />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/house-cleaning-sydney" element={<HouseCleaningSydney />} />
                <Route path="/western-sydney-house-cleaning" element={<WesternSydneyHouseCleaning />} />
                <Route path="*" element={<NotFound />} />
              </Routes>

              <Footer />
              <WhatsAppButton />
            </BrowserRouter>
          </MusicProvider>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
