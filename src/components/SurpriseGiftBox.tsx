import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Gift, Sparkles, Heart, Crown, PartyPopper } from 'lucide-react';
import { birthdayMusic } from '../utils/birthdayMusic';

export const SurpriseGiftBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenGift = () => {
    setIsOpen(true);
    birthdayMusic.playChime();

    // Special burst of colorful confetti and hearts
    confetti({
      particleCount: 160,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#f59e0b', '#ec4899', '#ffd700', '#ffffff'],
    });
  };

  return (
    <div className="py-8 text-center">
      {!isOpen ? (
        <div className="inline-block">
          <p className="text-xs font-mono-tech text-amber-300 uppercase tracking-widest mb-3 animate-pulse">
            🎁 A Special Gift For Sir Kevin · Click To Unwrap!
          </p>
          <button
            onClick={handleOpenGift}
            className="group relative p-6 sm:p-8 rounded-3xl glass-panel-gold border-2 border-amber-400/60 hover:border-amber-400 shadow-2xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-200 text-slate-950 shadow-xl group-hover:rotate-6 transition-transform">
              <Gift className="w-10 h-10 sm:w-12 sm:h-12 animate-bounce" />
            </div>
            <div className="mt-4 text-xs font-bold font-cinzel text-white uppercase tracking-wider">
              Tap To Open Birthday Gift
            </div>
          </button>
        </div>
      ) : (
        <div className="glass-panel-gold max-w-xl mx-auto p-6 sm:p-8 rounded-3xl border border-amber-400/50 shadow-2xl animate-fade-in text-center space-y-4">
          <div className="w-14 h-14 mx-auto rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 flex items-center justify-center animate-bounce">
            <Crown className="w-7 h-7" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-white glow-text-gold">
            To A True Leader & King of Web3 Builders!
          </h3>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
            “You gave us wings when we were learning to walk. You gave us space when we needed light.
            May this new age open doors of global recognition, sovereign wealth, divine peace, and long life!”
          </p>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono-tech text-amber-300">
            <PartyPopper className="w-4 h-4 text-amber-400" />
            <span>Forever Grateful · Johnbosco Obi & Mentees</span>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="text-[11px] text-slate-400 hover:text-slate-200 underline pt-2"
          >
            Wrap gift again
          </button>
        </div>
      )}
    </div>
  );
};
