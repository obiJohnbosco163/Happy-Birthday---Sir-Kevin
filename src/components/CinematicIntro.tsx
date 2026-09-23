import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, ChevronDown } from 'lucide-react';
import { TRIBUTE_DATA } from '../data/tributeData';
import { ambientSound } from '../utils/ambientAudio';

interface CinematicIntroProps {
  onBegin: () => void;
  isAudioOn: boolean;
  onToggleAudio: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({
  onBegin,
  isAudioOn,
  onToggleAudio,
}) => {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    // Step progression timers
    const timer1 = setTimeout(() => setStep(1), 1200);  // "Every great story..."
    const timer2 = setTimeout(() => setStep(2), 3400);  // "This one began with a dream..."
    const timer3 = setTimeout(() => setStep(3), 5600);  // "To a Builder..."
    const timer4 = setTimeout(() => setStep(4), 8200);  // Reveal Name & CTA

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleSkip = () => {
    setStep(4);
  };

  const handleBegin = () => {
    // If audio is not yet turned on, we can prompt or keep user state
    onBegin();
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#04060a] text-slate-100 overflow-hidden px-4 sm:px-6">
      {/* Background Starfield and Mesh Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(245,158,11,0.06),transparent_70%)]" />

      {/* Cyber Grid Lines Subtle */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      {/* Top Floating Controls */}
      <header className="absolute top-6 left-0 right-0 max-w-6xl mx-auto px-6 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-slate-400 font-mono-tech">
            Interactive Documentary
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleAudio}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-slate-700/60 bg-slate-900/60 hover:bg-slate-800 text-slate-300 transition-all backdrop-blur-md"
            title={isAudioOn ? "Mute ambient atmosphere" : "Enable atmospheric audio"}
          >
            {isAudioOn ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span className="hidden sm:inline">Atmosphere: On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline">Play Atmosphere</span>
              </>
            )}
          </button>

          {step < 4 && (
            <button
              onClick={handleSkip}
              className="text-xs text-slate-400 hover:text-slate-200 transition-colors uppercase tracking-wider px-2 py-1"
            >
              Skip Intro
            </button>
          )}
        </div>
      </header>

      {/* Center Narrative Sequence */}
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center flex flex-col items-center justify-center min-h-[460px]">
        {/* Stage 1: "Every great story begins somewhere…" */}
        <div
          className={`transition-all duration-1000 transform ${
            step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          } ${step > 1 && step < 4 ? 'hidden' : ''}`}
        >
          {step === 1 && (
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-light tracking-wide font-cinzel leading-relaxed">
              Every great story begins somewhere…
            </p>
          )}
        </div>

        {/* Stage 2: "This one began with a dream." */}
        <div
          className={`transition-all duration-1000 transform ${
            step === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none hidden'
          }`}
        >
          <p className="text-2xl sm:text-3xl md:text-4xl text-amber-200/90 font-light tracking-wide font-cinzel leading-relaxed">
            This one began with a dream.
          </p>
        </div>

        {/* Stage 3: "To a Builder. To a Mentor. To a Man who chose to create." */}
        <div
          className={`transition-all duration-1000 transform ${
            step === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none hidden'
          }`}
        >
          <div className="space-y-3 font-cinzel text-lg sm:text-2xl md:text-3xl text-slate-200 font-light tracking-wide">
            <p className="text-slate-300">To a Builder.</p>
            <p className="text-amber-300/90 font-medium">To a Mentor.</p>
            <p className="text-cyan-300/90">To a Man who chose to create.</p>
          </div>
        </div>

        {/* Stage 4: Full Reveal */}
        <div
          className={`w-full transition-all duration-1000 transform ${
            step >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none hidden'
          }`}
        >
          {/* Cover / Ezemmuo Accent Banner */}
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/30 text-cyan-300 text-xs font-mono-tech tracking-wider uppercase backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Journey of a Builder</span>
            <span className="text-slate-400">·</span>
            <span className="text-amber-300">Build In Public</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-cinzel glow-text-gold mb-4 leading-tight">
            {TRIBUTE_DATA.intro.revealName}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto tracking-wide mb-8">
            {TRIBUTE_DATA.intro.revealSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleBegin}
              className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase text-slate-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>{TRIBUTE_DATA.intro.ctaText}</span>
              <ChevronDown className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-1" />
            </button>
          </div>

          {/* Quick Credential Badges (Natural editorial text) */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 max-w-xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-400">
            <span>Ginakev Digital Academy</span>
            <span aria-hidden="true">·</span>
            <span>The Block Hive Nsukka</span>
            <span aria-hidden="true">·</span>
            <span>BlockchainUNN</span>
            <span aria-hidden="true">·</span>
            <span>SEBGW 2026</span>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      {step >= 4 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs font-mono-tech animate-bounce">
          <span>Scroll down to explore</span>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </div>
      )}
    </section>
  );
};
