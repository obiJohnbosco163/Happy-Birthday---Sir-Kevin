import React from 'react';
import { Heart } from 'lucide-react';

export const EmotionalTurn: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-[#020306] text-center px-4 sm:px-6 py-28 overflow-hidden border-y border-slate-900">
      {/* Absolute dark void with subtle warm heartbeat glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.04),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-amber-500/20 text-amber-400 mb-2">
          <Heart className="w-5 h-5 fill-amber-400/20 text-amber-400" />
        </div>

        <p className="text-xl sm:text-2xl md:text-3xl font-cinzel text-slate-400 font-light tracking-wide leading-relaxed">
          “But none of this is the reason we're here.”
        </p>

        <p className="text-2xl sm:text-3xl md:text-4xl font-cinzel text-slate-200 font-light tracking-wide leading-relaxed">
          “We're here because behind every milestone is a <span className="text-amber-300 font-medium">person</span>.”
        </p>

        <div className="pt-6">
          <p className="text-3xl sm:text-5xl md:text-6xl font-cinzel font-bold text-white tracking-tight glow-text-gold">
            Today, we celebrate you.
          </p>
        </div>

        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto pt-2" />
      </div>
    </section>
  );
};
