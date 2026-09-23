import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Gift, X, Cake } from 'lucide-react';

interface FancyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenFinalPage: () => void;
}

export const FancyModal: React.FC<FancyModalProps> = ({ isOpen, onClose, onOpenFinalPage }) => {
  const modalText = "Happy Birthday, Sir Kevin! Wishing you endless smiles, divine health, supernatural wisdom, and global impact. May all your dreams and visions come true.";
  const [typedChars, setTypedChars] = useState<string>('');

  useEffect(() => {
    if (!isOpen) {
      setTypedChars('');
      return;
    }

    // Trigger celebratory confetti upon modal opening
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#00e5ff', '#ff00cc', '#f59e0b', '#38bdf8', '#ffffff'],
    });

    let i = 0;
    const interval = setInterval(() => {
      if (i < modalText.length) {
        setTypedChars(modalText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`fancy-overlay show`} role="dialog" aria-modal="true">
      <div className="fancy-modal">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center text-lg transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Inner Content */}
        <div className="space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-amber-400 to-cyan-400 p-0.5 shadow-xl shadow-cyan-500/20">
            <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center text-2xl">
              🎁
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-white glow-text-cyan">
            A Little Surprise 🎁
          </h3>

          <p className="text-xs font-mono-tech text-cyan-300/80 uppercase tracking-widest">
            Made With Honor Just For You · Sir Kevin
          </p>

          {/* Typewriter message */}
          <div className="py-4 min-h-[90px] text-slate-200 text-sm sm:text-base leading-relaxed font-light">
            <span>{typedChars}</span>
            {typedChars.length < modalText.length && (
              <span className="inline-block w-1.5 h-4 bg-cyan-400 ml-1 animate-pulse" />
            )}
          </div>

          {/* Decorative neon dots */}
          <div className="flex items-center justify-center gap-2 py-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00e5ff]" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]" />
            <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse shadow-[0_0_8px_#ff00cc]" />
          </div>

          {/* Final Message / Cake Button (replaces out-of-moment gallery photos) */}
          <div className="pt-4">
            <button
              onClick={() => {
                onClose();
                onOpenFinalPage();
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-cyan-400 to-amber-300 text-slate-950 font-orbitron font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all"
            >
              <Cake className="w-4 h-4 text-slate-950" />
              <span>Final Message 🎂</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
