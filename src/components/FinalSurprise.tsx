import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Gift, Sparkles, PartyPopper, Heart, Edit3, Check } from 'lucide-react';
import { TRIBUTE_DATA } from '../data/tributeData';

interface FinalSurpriseProps {
  onTriggerAudio?: () => void;
}

export const FinalSurprise: React.FC<FinalSurpriseProps> = ({ onTriggerAudio }) => {
  const [revealed, setRevealed] = useState<boolean>(false);
  const [signatureName, setSignatureName] = useState<string>('Johnbosco Obi');
  const [isEditingSignature, setIsEditingSignature] = useState<boolean>(false);
  const [tempSignature, setTempSignature] = useState<string>('Johnbosco Obi');

  const triggerConfettiCelebration = () => {
    // Multi-stage confetti cannon: gold, cyan, white, amber
    const count = 250;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#f59e0b', '#38bdf8', '#fbbf24', '#ffffff', '#10b981'],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });

    // Secondary burst 1 second later
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 160,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#38bdf8', '#ffd700'],
      });
    }, 1000);
  };

  const handleSurpriseClick = () => {
    setRevealed(true);
    triggerConfettiCelebration();
    if (onTriggerAudio) {
      onTriggerAudio();
    }
  };

  const handleSaveSignature = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempSignature.trim()) {
      setSignatureName(tempSignature.trim());
      setIsEditingSignature(false);
    }
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      {!revealed ? (
        <div className="space-y-6">
          <p className="text-xl sm:text-2xl font-cinzel text-slate-300 font-light tracking-wide">
            Wait… there's one more thing.
          </p>

          <div>
            <button
              onClick={handleSurpriseClick}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-sm sm:text-base font-bold tracking-wider uppercase text-slate-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <Gift className="w-5 h-5 text-slate-950 animate-bounce" />
              <span>ONE LAST SURPRISE</span>
              <Sparkles className="w-5 h-5 text-slate-950" />
            </button>
          </div>
        </div>
      ) : (
        <div className="glass-panel-gold rounded-3xl p-8 sm:p-14 border border-amber-400/50 shadow-2xl shadow-amber-500/20 space-y-8 animate-fade-in relative overflow-hidden">
          {/* Subtle starburst effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none" />

          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-300 mb-2 shadow-lg animate-pulse">
            <PartyPopper className="w-8 h-8" />
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-6xl font-black font-cinzel text-white tracking-tight glow-text-gold">
              HAPPY BIRTHDAY, KEVIN! 🎂
            </h2>

            <p className="text-xl sm:text-3xl font-cinzel text-amber-300 font-semibold tracking-wide pt-2">
              “Your story is still being written.”
            </p>
          </div>

          {/* Repeat confetti button */}
          <div className="pt-2">
            <button
              onClick={triggerConfettiCelebration}
              className="inline-flex items-center gap-2 text-xs font-mono-tech text-amber-400/80 hover:text-amber-300 underline"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Trigger Celebration Again</span>
            </button>
          </div>

          {/* Mentee Signature Area */}
          <div className="pt-8 border-t border-amber-500/20 max-w-md mx-auto space-y-2">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-mono-tech">
              Signed with utmost honor & gratitude by
            </p>

            {isEditingSignature ? (
              <form onSubmit={handleSaveSignature} className="flex items-center justify-center gap-2 pt-1">
                <input
                  type="text"
                  value={tempSignature}
                  onChange={(e) => setTempSignature(e.target.value)}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-amber-400 text-amber-200 text-sm focus:outline-none"
                  autoFocus
                />
                <button
                  type="submit"
                  className="p-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold"
                  title="Save signature"
                >
                  <Check className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <h4 className="text-xl sm:text-2xl font-cinzel font-bold text-white tracking-wide">
                  {signatureName}
                </h4>
                <button
                  onClick={() => {
                    setTempSignature(signatureName);
                    setIsEditingSignature(true);
                  }}
                  className="p-1 text-slate-500 hover:text-amber-300 transition-colors"
                  title="Edit your signature name"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <p className="text-xs text-slate-400 italic">
              Your grateful mentee, and the entire builder community of GIDA, The Block Hive & BlockchainUNN.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
