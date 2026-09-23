import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Send, Heart, Star, Flame } from 'lucide-react';

export const BirthdayWishBox: React.FC = () => {
  const [wishText, setWishText] = useState<string>('');
  const [wishesList, setWishesList] = useState<string[]>([
    "May your new age be filled with divine health, unlimited wisdom, and global expansion!",
    "God bless you richly, Boss! Thank you for being a selfless mentor to so many of us.",
    "More wins for GIDA, The Block Hive, and all your vision, Ezemmuo!",
    "Happy Birthday, Sir Kevin! Your light will never dim!",
  ]);
  const [wishSent, setWishSent] = useState<boolean>(false);

  const handleSubmitWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wishText.trim()) return;

    setWishesList([wishText.trim(), ...wishesList]);
    setWishText('');
    setWishSent(true);

    confetti({
      particleCount: 140,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#38bdf8', '#f59e0b', '#ffd700', '#ec4899', '#10b981'],
    });

    setTimeout(() => setWishSent(false), 3000);
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="glass-panel-gold rounded-3xl p-8 sm:p-12 border border-amber-400/30 text-center relative overflow-hidden shadow-2xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-amber-400 mb-2">
          <Star className="w-4 h-4 text-amber-400" />
          <span>Birthday Wishboard</span>
        </div>

        <h3 className="text-2xl sm:text-4xl font-bold font-cinzel text-white mb-3">
          Drop a Birthday Wish for Sir Kevin
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6">
          Write a quick heartfelt prayer or wish to honor his dedication, mentorship, and life.
        </p>

        {wishSent && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-medium flex items-center justify-center gap-2 animate-bounce">
            <Sparkles className="w-4 h-4" />
            <span>Your wish has been launched into the celebration sky! 🌟</span>
          </div>
        )}

        <form onSubmit={handleSubmitWish} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-2 mb-8">
          <input
            type="text"
            required
            value={wishText}
            onChange={(e) => setWishText(e.target.value)}
            placeholder="Type your birthday prayer or wish here..."
            className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
          >
            <Send className="w-4 h-4 text-slate-950" />
            <span>Send Wish</span>
          </button>
        </form>

        {/* Floating Wishes Stream */}
        <div className="space-y-2.5 max-w-2xl mx-auto text-left">
          <div className="text-[11px] font-mono-tech text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Community Wishes Stream:</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {wishesList.slice(0, 6).map((wish, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200 flex items-start gap-2.5"
              >
                <Heart className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span className="italic leading-relaxed">“{wish}”</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
