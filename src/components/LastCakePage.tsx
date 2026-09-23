import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Cake, Sparkles, Wind, Flame, Download, ArrowLeft, Heart, Crown, Volume2, VolumeX } from 'lucide-react';
import { birthdayMusic } from '../utils/birthdayMusic';
import sirKevinImg from '../assets/images/sir kevin.jpg';

interface LastCakePageProps {
  onBack: () => void;
}

export const LastCakePage: React.FC<LastCakePageProps> = ({ onBack }) => {
  const [candlesLit, setCandlesLit] = useState<boolean>(true);
  const [wishGranted, setWishGranted] = useState<boolean>(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(birthdayMusic.getPlaying());

  const handleToggleMusic = () => {
    const playing = birthdayMusic.toggle();
    setIsMusicPlaying(playing);
  };

  useEffect(() => {
    // Initial celebration burst
    confetti({
      particleCount: 160,
      spread: 100,
      origin: { y: 0.4 },
      colors: ['#00e5ff', '#f59e0b', '#ff00cc', '#ffffff', '#10b981'],
    });
  }, []);

  const handleBlowCandles = () => {
    setCandlesLit(false);
    setWishGranted(true);
    birthdayMusic.playChime();

    // Multi-stage confetti explosion
    const end = Date.now() + 2 * 1000;
    (function frame() {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 60,
        origin: { x: 0 },
        colors: ['#00e5ff', '#f59e0b', '#ffd700'],
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 60,
        origin: { x: 1 },
        colors: ['#00e5ff', '#f59e0b', '#ff00cc'],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  const handleRelight = () => {
    setCandlesLit(true);
    setWishGranted(false);
  };

  return (
    <div className="lastpage animate-fade-in text-slate-100">
      
      {/* Return button & Quick actions */}
      <div className="w-full max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3 py-4 px-2">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 text-xs font-mono-tech transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back To Celebration</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Music Toggle */}
          <button
            onClick={handleToggleMusic}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
              isMusicPlaying
                ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200 shadow-md shadow-cyan-500/30 animate-pulse'
                : 'border-slate-800 bg-slate-900/90 hover:bg-slate-800 text-slate-300'
            }`}
            title="Toggle Happy Birthday Song"
          >
            {isMusicPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-cyan-300 animate-spin" />
                <span>Music Playing 🎶</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span>Play Music 🎵</span>
              </>
            )}
          </button>

          <a
            href="/kevin-birthday-tribute-standalone.html"
            download="Happy-Birthday-Sir-Kevin.html"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs font-mono-tech transition-all shadow-lg shadow-amber-500/20"
            title="Download standalone HTML to send to Sir Kevin"
          >
            <Download className="w-4 h-4" />
            <span>Download .HTML</span>
          </a>
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto space-y-10 my-6">
        
        {/* Top Cake & Portrait Presentation */}
        <div className="text-center space-y-6">
          
          {/* Portrait with Royal Glow */}
          <div className="relative inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-amber-400 to-pink-500 shadow-2xl shadow-cyan-500/30 mx-auto">
              <img
                src={sirKevinImg}
                alt="Sir Kevin Okoye Chibuoyim"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center rounded-full"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 px-3 py-0.5 rounded-full text-xs font-bold font-mono-tech uppercase tracking-wider shadow-md whitespace-nowrap">
              👑 Sir Kevin
            </div>
          </div>

          {/* Interactive Birthday Cake with Blowable Candles */}
          <div className="py-2 flex flex-col items-center justify-center">
            {/* Candles */}
            <div className="flex gap-5 mb-1">
              {[1, 2, 3].map((c) => (
                <div key={c} className="flex flex-col items-center">
                  {candlesLit ? (
                    <div
                      onClick={handleBlowCandles}
                      className="cursor-pointer group flex flex-col items-center"
                      title="Click to blow candle!"
                    >
                      <div className="w-3.5 h-6 rounded-full bg-gradient-to-t from-amber-500 via-amber-300 to-yellow-100 shadow-[0_0_16px_rgba(245,158,11,1)] animate-bounce" />
                      <div className="w-0.5 h-2 bg-slate-800" />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="w-1.5 h-4 bg-slate-600 rounded-sm opacity-60" />
                      <span className="text-[10px] text-slate-400">💨</span>
                    </div>
                  )}
                  <div className="w-2.5 h-9 rounded-t-sm bg-cyan-400 border border-cyan-200" />
                </div>
              ))}
            </div>

            {/* Cake Tiers */}
            <div className="w-36 sm:w-44 h-8 rounded-t-lg bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 flex items-center justify-center text-[10px] font-bold text-slate-950 font-cinzel shadow-md">
              ⭐ BUILD IN PUBLIC ⭐
            </div>
            <div className="w-52 sm:w-60 h-10 bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600 flex items-center justify-center text-xs font-bold text-white font-cinzel shadow-lg">
              EZEMMUO BLOCKCHAIN
            </div>
            <div className="w-64 sm:w-76 h-12 rounded-b-2xl bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 flex items-center justify-center text-xs font-bold text-slate-950 font-cinzel shadow-2xl">
              🎂 HAPPY BIRTHDAY SIR KEVIN 🎂
            </div>
            <div className="w-72 sm:w-84 h-3.5 rounded-full bg-slate-700/80 border border-slate-500 mt-1" />

            {/* Blow Candle Button */}
            <div className="pt-4">
              {candlesLit ? (
                <button
                  onClick={handleBlowCandles}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-400 hover:to-amber-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/20 transform hover:scale-105 transition-all"
                >
                  <Wind className="w-4 h-4" />
                  <span>Blow Out The Candles 💨</span>
                </button>
              ) : (
                <div className="space-y-2">
                  <p className="text-amber-300 font-cinzel font-bold text-sm sm:text-base animate-bounce">
                    🎉 WISH GRANTED! MAY YOUR NEW AGE BE FILLED WITH BOUNDLESS FAVOR! 🎉
                  </p>
                  <button
                    onClick={handleRelight}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs transition-colors"
                  >
                    <Flame className="w-3.5 h-3.5" />
                    <span>Relight Candles</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-black font-cinzel text-white glow-text-gold tracking-tight">
              HAPPY BIRTHDAY SIR KEVIN
            </h1>
            <p className="text-xs sm:text-sm font-mono-tech text-cyan-300 uppercase tracking-widest">
              Founder & CEO, GIDA · The Block Hive · BlockchainUNN · SEBGW 2026
            </p>
          </div>
        </div>

        {/* The Exact Prayer & Wishes Requested by User */}
        <div className="glass-panel-gold rounded-3xl p-8 sm:p-14 border border-amber-400/40 shadow-2xl space-y-6 text-slate-200 text-sm sm:text-base leading-relaxed text-left">
          
          <h2 className="text-2xl sm:text-3xl font-bold font-cinzel text-amber-300 border-b border-amber-500/20 pb-4">
            ## HAPPY BIRTHDAY, KEVIN 🎉
          </h2>

          <p className="text-slate-300">
            Today, we don't just celebrate another year of your life.
          </p>

          <p className="text-slate-300">
            We celebrate the journey.
          </p>

          <p className="text-slate-300">
            The ideas that became communities.
          </p>

          <p className="text-slate-300">
            The communities that became opportunities.
          </p>

          <p className="text-slate-300">
            And the opportunities that have touched the lives of people far beyond what you may ever see.
          </p>

          <p className="text-slate-300">
            You've shown that impact isn't always about having the loudest voice in the room. Sometimes, it's about creating the room in the first place.
          </p>

          <div className="pl-4 border-l-2 border-cyan-400/80 space-y-1.5 py-1 text-cyan-100">
            <p>A place where someone can learn.</p>
            <p>A place where someone can build.</p>
            <p>A place where someone can meet the person who changes their journey.</p>
          </div>

          <p className="text-slate-300">
            And perhaps that is one of the most beautiful things about your story.
          </p>

          <div className="pl-4 border-l-2 border-amber-400/80 space-y-1.5 py-1 text-amber-100">
            <p>You keep building.</p>
            <p>You keep creating.</p>
            <p>You keep opening doors.</p>
          </div>

          <p className="text-slate-300">
            And along the way, you've given people reasons to believe that they can build something too.
          </p>

          <p className="text-slate-300">
            So today, we celebrate the person behind the milestones.
          </p>

          <div className="space-y-1 font-mono-tech text-amber-300 text-xs sm:text-sm uppercase tracking-wider pl-4">
            <p>The founder.</p>
            <p>The builder.</p>
            <p>The mentor.</p>
            <p>The friend.</p>
            <p>The person who continues to pour into others.</p>
          </div>

          <p className="text-base sm:text-lg font-cinzel text-white font-semibold pt-2">
            Happy Birthday, Kevin.
          </p>

          <p className="text-slate-300">
            May this new chapter bring you greater wisdom, deeper fulfilment, stronger relationships, bigger opportunities and the grace to continue impacting lives.
          </p>

          <p className="text-slate-300">
            May God bless the work of your hands, guide your decisions, protect you and give you the strength to pursue every vision placed in your heart.
          </p>

          <p className="text-slate-300">
            And may the lives you touch continue to become part of a legacy that is much bigger than any single achievement.
          </p>

          <p className="text-lg sm:text-xl font-bold font-cinzel text-amber-300 pt-2">
            Happy Birthday, Sir Kevin.
          </p>

          <div className="space-y-1 text-slate-300 italic">
            <p>Here's to everything you've built.</p>
            <p>Here's to everything you're building.</p>
            <p>And here's to everything still waiting to be built.</p>
          </div>

          <p className="text-xl sm:text-2xl font-bold font-cinzel text-white pt-4 text-center glow-text-gold">
            Your story is still being written.
          </p>

          <div className="pt-6 border-t border-amber-500/20 text-center space-y-1 text-xs text-slate-400 font-mono-tech">
            <p className="text-amber-300 font-semibold">With highest honor, admiration and gratitude,</p>
            <p>From Johnbosco Obi & the entire community of mentees and builders.</p>
          </div>

        </div>

        {/* Action buttons */}
        <div className="text-center pt-4 pb-12 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              confetti({
                particleCount: 220,
                spread: 100,
                origin: { y: 0.6 },
                colors: ['#00e5ff', '#f59e0b', '#ff00cc', '#ffffff', '#10b981'],
              });
            }}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-cyan-400 to-amber-300 text-slate-950 font-bold font-orbitron text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            Celebrate Again 🎉
          </button>

          <button
            onClick={onBack}
            className="px-6 py-3.5 rounded-full bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 text-xs font-mono-tech transition-colors"
          >
            Return to Celebration Screen
          </button>
        </div>

      </div>
    </div>
  );
};
