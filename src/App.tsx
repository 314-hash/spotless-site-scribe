import { useEffect, useRef } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

// 🎵 Import your music
import mlfSong from "@/assets/mlfsong.mp3";

const queryClient = new QueryClient();

const App = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasPlayed = useRef(false);

  useEffect(() => {
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

    return () => {
      window.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        
        {/* 🎵 Audio Element */}
        <audio ref={audioRef} loop preload="auto">
          <source src={mlfSong} type="audio/mpeg" />
        </audio>

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
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
          <WhatsAppButton />
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
