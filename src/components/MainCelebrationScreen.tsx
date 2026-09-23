import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, VolumeX, Sparkles, Download, PartyPopper, Crown, Flame } from 'lucide-react';
import { birthdayMusic } from '../utils/birthdayMusic';
import sirKevinImg from '../assets/images/sir kevin.jpg';
import ezemmuoBannerImg from '../assets/images/ezemmuo blockchain.jpg';

interface MainCelebrationScreenProps {
  onOpenModal: () => void;
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
}

export const MainCelebrationScreen: React.FC<MainCelebrationScreenProps> = ({
  onOpenModal,
  isMusicPlaying,
  onToggleMusic,
}) => {
  const topText = "🎉 Happy Birthday Sir Kevin 🎂 Click the button below! 💖";
  const [typedTop, setTypedTop] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  // Looping Typewriter for top text, replicating Itz-Murali
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && index <= topText.length) {
        setTypedTop(topText.slice(0, index));
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index >= 0) {
        setTypedTop(topText.slice(0, index));
        setIndex((prev) => prev - 1);
      }

      if (index > topText.length) {
        setIsDeleting(true);
      } else if (index < 0) {
        setIsDeleting(false);
        setIndex(0);
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timer);
  }, [index, isDeleting]);

  // Initial welcome confetti
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.25 },
      colors: ['#00e5ff', '#ff00cc', '#f59e0b', '#38bdf8', '#ffffff'],
    });
  }, []);

  const handleConfettiBlast = () => {
    confetti({
      particleCount: 180,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#00e5ff', '#ff00cc', '#f59e0b', '#38bdf8', '#ffd700', '#ffffff'],
    });
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between px-4 py-8 z-10">
      
      {/* Top Floating Controls & Top Typewriter */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-4">
        
        {/* Navigation / Header Controls */}
        <div className="w-full flex items-center justify-between border-b border-cyan-500/20 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#00e5ff]" />
            <span className="text-xs sm:text-sm font-cinzel font-bold text-white tracking-wider">
              Happy Birthday Sir Kevin
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onToggleMusic}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                isMusicPlaying
                  ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200 shadow-md shadow-cyan-500/30 animate-pulse'
                  : 'border-slate-800 bg-slate-900/90 hover:bg-slate-800 text-slate-300'
              }`}
            >
              {isMusicPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-cyan-300" />
                  <span className="hidden sm:inline">Song Playing</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                  <span className="hidden sm:inline">Play Song</span>
                </>
              )}
            </button>

            <button
              onClick={handleConfettiBlast}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md shadow-amber-500/20 transition-transform active:scale-95"
            >
              <PartyPopper className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Confetti!</span>
            </button>

            <a
              href="/kevin-birthday-tribute-standalone.html"
              download="Happy-Birthday-Sir-Kevin.html"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono-tech border border-cyan-500/40 bg-cyan-950/40 hover:bg-cyan-900/50 text-cyan-200 transition-colors"
              title="Download standalone HTML to send to Sir Kevin"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .HTML</span>
            </a>
          </div>
        </div>

        {/* Top Typewriter Banner from Itz-Murali */}
        <div className="text-center py-2 min-h-[32px]">
          <span className="text-xs sm:text-base font-orbitron font-bold text-white tracking-widest text-shadow drop-shadow-[0_0_12px_rgba(0,229,255,0.7)]">
            {typedTop}
            <span className="animate-pulse ml-1 text-cyan-400">|</span>
          </span>
        </div>

      </div>

      {/* Main Centerpiece (With ONLY his 2 pictures: portrait and cover banner) */}
      <div className="w-full max-w-3xl mx-auto my-auto text-center space-y-8">
        
        {/* His Cover Banner: Build In Public / Ezemmuo Blockchain */}
        <div className="relative rounded-3xl overflow-hidden border border-cyan-500/40 shadow-2xl shadow-cyan-500/20 bg-slate-950">
          <img
            src={ezemmuoBannerImg}
            alt="Ezemmuo Blockchain - Build in Public"
            className="w-full max-h-56 sm:max-h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040714] via-transparent to-transparent opacity-80" />
        </div>

        {/* His Portrait with Crown and Cyberpunk Holographic Border */}
        <div className="relative -mt-20 sm:-mt-24 inline-block">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 via-pink-500 to-amber-400 shadow-2xl shadow-cyan-500/40 mx-auto">
            <img
              src={sirKevinImg}
              alt="Sir Kevin Okoye Chibuoyim - Birthday King"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center rounded-full"
            />
          </div>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 px-3.5 py-1 rounded-full text-xs font-bold font-mono-tech uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
            <Crown className="w-3.5 h-3.5" />
            <span>Birthday King</span>
          </div>
        </div>

        {/* Headlines */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-6xl font-black font-cinzel text-white glow-text-cyan leading-tight tracking-tight">
            HAPPY BIRTHDAY SIR KEVIN
          </h1>
          <div className="text-lg sm:text-2xl font-bold font-cinzel text-amber-300">
            Okoye Kevin Chibuoyim
          </div>
          <p className="text-xs sm:text-sm font-mono-tech text-cyan-300 uppercase tracking-widest">
            aka Ezemmuo Blockchain · “Build in Public”
          </p>
          <p className="text-xs text-slate-400 max-w-lg mx-auto">
            Founder & CEO, Ginakev Digital Academy (GIDA) · The Block Hive · BlockchainUNN · SEBGW 2026
          </p>
        </div>

        {/* Famous Itz-Murali "Lets Celebrate" Pulsating Cyberpunk Button */}
        <div className="pt-4">
          <button
            onClick={onOpenModal}
            className="neon-celebrate-btn"
            id="openBtn"
          >
            Lets Celebrate
          </button>
        </div>

      </div>

      {/* Footer attribution */}
      <div className="w-full text-center pt-8 border-t border-slate-900/80 text-xs text-slate-500 font-mono-tech">
        <p>A birthday celebration tribute for Sir Kevin Okoye Chibuoyim · By Johnbosco Obi & Mentees</p>
      </div>

    </div>
  );
};
