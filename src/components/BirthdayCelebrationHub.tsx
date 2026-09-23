import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Music, Lightbulb, PartyPopper, Cake, Flame, Wind, Volume2, VolumeX, Heart, Award } from 'lucide-react';
import { birthdayMusic } from '../utils/birthdayMusic';

interface BirthdayCelebrationHubProps {
  onBalloonsToggle?: (active: boolean) => void;
}

export const BirthdayCelebrationHub: React.FC<BirthdayCelebrationHubProps> = () => {
  // Celebration interactive states (inspired by Sapthesh & ProgrammerGaurav)
  const [lightsOn, setLightsOn] = useState<boolean>(true);
  const [musicPlaying, setMusicPlaying] = useState<boolean>(false);
  const [balloonsFlying, setBalloonsFlying] = useState<boolean>(true);
  const [candlesLit, setCandlesLit] = useState<boolean>(true);
  const [cakeBlown, setCakeBlown] = useState<boolean>(false);
  const [currentActionStep, setCurrentActionStep] = useState<number>(0);

  // Trigger rich celebratory confetti cannon
  const fireConfetti = (burstCount = 180) => {
    confetti({
      particleCount: burstCount,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#f59e0b', '#ec4899', '#10b981', '#ffffff', '#818cf8', '#ffd700'],
    });
  };

  const fireContinuousConfetti = () => {
    const end = Date.now() + 2.5 * 1000;
    const colors = ['#38bdf8', '#f59e0b', '#fbbf24', '#ffffff', '#ec4899'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleToggleMusic = () => {
    const playing = birthdayMusic.toggle();
    setMusicPlaying(playing);
    if (playing) {
      fireConfetti(100);
    }
  };

  const handleBlowCandles = () => {
    setCandlesLit(false);
    setCakeBlown(true);
    birthdayMusic.playChime();
    fireContinuousConfetti();
  };

  const handleRelightCandles = () => {
    setCandlesLit(true);
    setCakeBlown(false);
    fireConfetti(80);
  };

  return (
    <section className="relative min-h-screen pt-20 pb-16 px-4 sm:px-6 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Decorative Hanging Party Lights / Garlands (Inspired by Sapthesh Birthday) */}
      <div className={`w-full max-w-5xl mx-auto mb-6 transition-all duration-700 ${lightsOn ? 'opacity-100' : 'opacity-20'}`}>
        <div className="flex justify-between items-center px-4 sm:px-12 py-2 overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => {
            const bulbColors = ['#f59e0b', '#38bdf8', '#ec4899', '#10b981', '#a855f7', '#fbbf24'];
            const bulbColor = bulbColors[i % bulbColors.length];
            return (
              <div key={i} className="flex flex-col items-center">
                <div className="w-0.5 h-6 sm:h-8 bg-slate-700" />
                <div
                  className="w-4 h-6 sm:w-5 sm:h-7 rounded-full shadow-lg animate-pulse"
                  style={{
                    backgroundColor: bulbColor,
                    boxShadow: lightsOn ? `0 0 16px ${bulbColor}, 0 0 32px ${bulbColor}66` : 'none',
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: '1.8s'
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Hero Header Card with Cover Banner & Portrait */}
      <div className="relative max-w-4xl w-full mx-auto glass-panel-gold rounded-3xl p-6 sm:p-10 border border-amber-400/40 shadow-2xl relative z-10 text-center">
        
        {/* Cover Photo Banner ("Build in Public" / Ezemmuo Blockchain) */}
        <div className="w-full rounded-2xl overflow-hidden border border-cyan-500/30 shadow-xl mb-8 relative group max-h-56 sm:max-h-64">
          <img
            src="/images/build-in-public-banner.jpg"
            alt="Ezemmuo Blockchain - Build in Public"
            className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono-tech text-cyan-200">
            <span className="bg-slate-950/80 px-2.5 py-1 rounded-md border border-cyan-500/30">
              #BuildInPublic
            </span>
            <span className="bg-slate-950/80 px-2.5 py-1 rounded-md border border-amber-500/30 text-amber-300">
              Ezemmuo Blockchain
            </span>
          </div>
        </div>

        {/* His Centered Portrait with Royal Gold & Cyan Birthday Frame */}
        <div className="relative -mt-20 sm:-mt-24 mb-6 inline-block">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full p-1.5 bg-gradient-to-tr from-amber-400 via-cyan-400 to-amber-300 shadow-2xl glow-gold">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#05070d] bg-slate-900">
              <img
                src="/images/sir-kevin-portrait.jpg"
                alt="Okoye Kevin Chibuoyim"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          {/* Celebratory Birthday Crown / Sparkle Badge */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
            <span>👑 Birthday King</span>
          </div>
        </div>

        {/* Name & Titles */}
        <div className="space-y-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/30 text-cyan-300 text-xs font-mono-tech tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
            <span>Today We Celebrate Greatness</span>
            <span>·</span>
            <span className="text-amber-300">A Mentor Like No Other</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-cinzel text-white glow-text-gold tracking-tight leading-tight">
            HAPPY BIRTHDAY, SIR KEVIN! 🎂
          </h1>

          <div className="text-xl sm:text-2xl font-cinzel text-amber-300 font-bold tracking-wide">
            Okoye Kevin Chibuoyim
          </div>

          <p className="text-xs sm:text-sm font-mono-tech text-cyan-300 uppercase tracking-widest">
            aka Ezemmuo Blockchain · "Build in Public"
          </p>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed pt-1">
            Founder & CEO of <strong className="text-amber-300">Ginakev Digital Academy (GIDA)</strong> · 
            Founder of <strong className="text-cyan-300">The Block Hive</strong> · 
            Pioneer at <strong className="text-slate-200">BlockchainUNN</strong> · 
            Lead at <strong className="text-emerald-300">SEBGW 2026</strong>
          </p>
        </div>

        {/* Celebratory Action Buttons Panel (Sapthesh Birthday & Gaurav style) */}
        <div className="pt-6 border-t border-amber-500/20">
          <p className="text-xs font-mono-tech uppercase tracking-wider text-amber-400/90 mb-4 flex items-center justify-center gap-1.5">
            <PartyPopper className="w-4 h-4" />
            <span>Interactive Birthday Controls · Click to Celebrate!</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {/* 1. Blast Confetti Button */}
            <button
              onClick={() => fireConfetti(220)}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <PartyPopper className="w-4 h-4 text-slate-950" />
              <span>Blast Confetti 🎉</span>
            </button>

            {/* 2. Birthday Music Button */}
            <button
              onClick={handleToggleMusic}
              className={`px-4 py-2.5 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                musicPlaying
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-lg shadow-cyan-500/20 animate-pulse'
                  : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white hover:border-slate-600'
              }`}
            >
              {musicPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 text-cyan-400 animate-spin" />
                  <span>Music Playing 🎵</span>
                </>
              ) : (
                <>
                  <Music className="w-4 h-4 text-amber-400" />
                  <span>Play Birthday Song 🎶</span>
                </>
              )}
            </button>

            {/* 3. Lights Toggle */}
            <button
              onClick={() => {
                setLightsOn(!lightsOn);
                fireConfetti(60);
              }}
              className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400/50 text-slate-300 hover:text-amber-300 text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <Lightbulb className={`w-4 h-4 ${lightsOn ? 'text-amber-400' : 'text-slate-500'}`} />
              <span>{lightsOn ? 'Lights: On 💡' : 'Lights: Off'}</span>
            </button>

            {/* 4. Continuous Confetti Rain */}
            <button
              onClick={fireContinuousConfetti}
              className="px-4 py-2.5 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/40 text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Confetti Shower 🎊</span>
            </button>
          </div>
        </div>

        {/* Interactive Birthday Cake with Blowable Candles */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-950/70 border border-amber-500/30 max-w-lg mx-auto">
          <div className="text-center space-y-2">
            <h3 className="text-sm font-bold font-cinzel text-amber-300 flex items-center justify-center gap-2">
              <Cake className="w-4 h-4" />
              <span>Sir Kevin's Birthday Cake</span>
            </h3>

            {/* Cake SVG graphic with interactive candles */}
            <div className="py-4 flex flex-col items-center justify-center">
              {/* Candles */}
              <div className="flex gap-4 sm:gap-6 mb-1">
                {[1, 2, 3].map((c) => (
                  <div key={c} className="flex flex-col items-center">
                    {/* Flame */}
                    {candlesLit ? (
                      <div
                        onClick={handleBlowCandles}
                        className="cursor-pointer group flex flex-col items-center"
                        title="Click to blow candle!"
                      >
                        <div className="w-3.5 h-6 rounded-full bg-gradient-to-t from-amber-500 via-amber-300 to-yellow-100 shadow-[0_0_14px_rgba(245,158,11,0.9)] animate-bounce" />
                        <div className="w-0.5 h-2 bg-slate-800" />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <div className="w-1.5 h-4 bg-slate-600 rounded-sm opacity-60" />
                        <span className="text-[10px] text-slate-500 font-mono-tech animate-fade-in">💨</span>
                      </div>
                    )}
                    {/* Candle stick */}
                    <div className="w-2.5 h-10 rounded-t-sm bg-gradient-to-b from-cyan-300 to-cyan-500 border border-cyan-200" />
                  </div>
                ))}
              </div>

              {/* Top Tier */}
              <div className="w-32 sm:w-40 h-8 rounded-t-lg bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 shadow-md border-b-2 border-amber-600 flex items-center justify-center text-[10px] font-cinzel font-bold text-slate-950">
                ⭐ BUILD IN PUBLIC ⭐
              </div>

              {/* Middle Tier */}
              <div className="w-44 sm:w-56 h-10 bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600 shadow-lg border-b-2 border-cyan-800 flex items-center justify-center text-xs font-bold text-white tracking-wider font-cinzel">
                EZEMMUO BLOCKCHAIN
              </div>

              {/* Base Tier */}
              <div className="w-56 sm:w-72 h-12 rounded-b-xl bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 shadow-2xl flex items-center justify-center text-xs font-bold text-slate-950 font-cinzel tracking-wide">
                🎂 HAPPY BIRTHDAY SIR KEVIN 🎂
              </div>

              {/* Cake Plate */}
              <div className="w-64 sm:w-80 h-3 rounded-full bg-slate-700/80 border border-slate-500 mt-1 shadow-xl" />
            </div>

            {/* Blow Candle / Relight Candle button */}
            <div className="pt-2">
              {candlesLit ? (
                <button
                  onClick={handleBlowCandles}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-400 hover:to-amber-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/20 transform hover:scale-105 transition-all"
                >
                  <Wind className="w-4 h-4" />
                  <span>Blow Out The Candles 💨</span>
                </button>
              ) : (
                <div className="space-y-2">
                  <div className="text-amber-300 font-cinzel font-bold text-sm sm:text-base animate-bounce">
                    🎉 WISH GRANTED! MAY YOUR NEW AGE BE FILLED WITH BOUNDLESS FAVOR! 🎉
                  </div>
                  <button
                    onClick={handleRelightCandles}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs transition-colors"
                  >
                    <Flame className="w-3.5 h-3.5" />
                    <span>Relight Candles</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Floating Animated Balloons (ProgrammerGaurav / Sapthesh style) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[
          { color: '#f59e0b', left: '8%', delay: '0s', duration: '14s' },
          { color: '#38bdf8', left: '22%', delay: '3s', duration: '16s' },
          { color: '#ec4899', left: '40%', delay: '1s', duration: '15s' },
          { color: '#10b981', left: '60%', delay: '5s', duration: '17s' },
          { color: '#818cf8', left: '78%', delay: '2s', duration: '13s' },
          { color: '#fbbf24', left: '92%', delay: '4s', duration: '15s' },
        ].map((b, idx) => (
          <div
            key={idx}
            className="absolute -bottom-32 flex flex-col items-center animate-balloon"
            style={{
              left: b.left,
              animationDelay: b.delay,
              animationDuration: b.duration,
            }}
          >
            {/* Balloon oval */}
            <div
              className="w-12 h-16 sm:w-16 sm:h-20 rounded-full shadow-lg relative opacity-75 hover:opacity-100"
              style={{
                backgroundColor: b.color,
                boxShadow: `0 8px 20px ${b.color}44`,
              }}
            >
              <div className="absolute top-2 left-2 w-3 h-4 rounded-full bg-white/40" />
            </div>
            {/* Knot */}
            <div className="w-1.5 h-1.5 bg-slate-600 rounded-full -mt-0.5" />
            {/* String */}
            <div className="w-px h-16 bg-slate-600/50" />
          </div>
        ))}
      </div>

    </section>
  );
};
