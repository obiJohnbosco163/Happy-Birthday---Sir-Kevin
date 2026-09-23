import React from 'react';
import { ExternalLink, Gamepad2, Blocks, Trophy, Globe, Flame } from 'lucide-react';

export const SebgwSection: React.FC = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Visual Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-amber-400 mb-3">
          <Flame className="w-4 h-4 text-amber-400" />
          <span>The Expanding Frontier · 2026</span>
        </div>
        <p className="text-xl sm:text-2xl font-bold font-cinzel text-cyan-300 tracking-wider mb-2">
          THE VISION GETS BIGGER
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-cinzel text-white tracking-tight mb-6 glow-text-gold">
          SOUTHEAST BLOCKCHAIN & GAMES WEEK 2026
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          The culmination of years of grassroots community building. Moving beyond single classrooms
          to convene developers, studios, and pioneers from across Eastern Nigeria and beyond.
        </p>
      </div>

      {/* Feature Card */}
      <div className="glass-panel-gold rounded-3xl p-8 sm:p-12 border border-amber-400/30 max-w-5xl mx-auto relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-7 space-y-6">
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <span className="font-mono-tech text-amber-300 font-bold">REGIONAL CONVERGENCE</span>
              <span aria-hidden="true">·</span>
              <span>Web3, Gaming & Emerging Tech</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-white">
              Uniting Developers, Studios & Digital Pioneers
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              With Kevin actively associated and The Block Hive prominently participating,
              Southeast Blockchain & Games Week (SEBGW) 2026 establishes Southeast Nigeria as a premier
              hub for decentralized game development, autonomous worlds, and interactive digital media.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <Gamepad2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Showcasing next-generation game design and autonomous blockchain logic.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <Blocks className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>The Block Hive community participating with hands-on prototypes and demos.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <Trophy className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Elevating homegrown African technical talent onto continental and global radars.</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://x.com/SEBchainGamesWK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-amber-400/20"
              >
                <span>Follow SEBGW 2026 (@SEBchainGamesWK)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Key Stats / Vision Node */}
          <div className="md:col-span-5">
            <div className="rounded-2xl bg-slate-950/80 border border-amber-500/20 p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <span className="text-slate-400 font-mono-tech">SEBGW 2026 Node</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Ecosystem Stage
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-xs text-amber-300 font-bold mb-1">Regional Anchor</div>
                  <div className="text-xs text-slate-400">Connecting builders across Enugu, Anambra, Imo, and beyond.</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-xs text-cyan-300 font-bold mb-1">Physical Hub Presence</div>
                  <div className="text-xs text-slate-400">The Block Hive participating as a cornerstone physical technology hub.</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-xs text-emerald-300 font-bold mb-1">Long-Term Impact</div>
                  <div className="text-xs text-slate-400">Proving that the Southeast can build and host world-class tech initiatives.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
