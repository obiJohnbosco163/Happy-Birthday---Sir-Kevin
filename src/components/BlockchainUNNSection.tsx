import React from 'react';
import { ExternalLink, Terminal, Users, BookOpen, Cpu, Sparkles } from 'lucide-react';

export const BlockchainUNNSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative glass-panel rounded-3xl p-8 sm:p-12 border border-cyan-500/20 shadow-2xl shadow-cyan-950/30">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Context & Editorial */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-mono-tech uppercase tracking-widest text-cyan-300">
                University Tech Movement
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-xs text-slate-400">Campus to Ecosystem</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-white leading-tight">
              BlockchainUNN: Cultivating the Grassroots
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              True technological sovereignty cannot be imported; it must be cultivated where young minds are hungry.
              At the University of Nigeria, Nsukka (UNN), Kevin became a pivotal catalyst and mentor within
              <span className="text-cyan-300 font-medium"> BlockchainUNN</span>.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Instead of high-level hype, the focus was uncompromisingly grounded: educating students in distributed systems,
              smart contract principles, web development fundamentals, and peer study circles. It created an environment
              where a student with an ordinary phone or modest laptop could learn to deploy their first blockchain contract.
            </p>

            {/* Grounded Pillars */}
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <BookOpen className="w-5 h-5 text-cyan-400 mb-2" />
                <h4 className="text-sm font-semibold text-slate-200 mb-1">Education First</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Demystifying cryptographic primitives and decentralized tech for curious undergraduates.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <Users className="w-5 h-5 text-amber-400 mb-2" />
                <h4 className="text-sm font-semibold text-slate-200 mb-1">Peer Culture</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Fostering study groups and collaborative study sessions that outlast any single seminar.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <Cpu className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="text-sm font-semibold text-slate-200 mb-1">Real Builders</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Transforming campus spectators into active contributors to the global decentralized web.
                </p>
              </div>
            </div>

            {/* Official community links */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="https://x.com/BlockchainUNN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-medium transition-all"
              >
                <span>Connect with BlockchainUNN (@BlockchainUNN)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://x.com/Eth_Enugu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700/60 text-xs font-medium transition-all"
              >
                <span>Ethereum Enugu Community</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Tech Interface Box */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#03060d] border border-cyan-900/50 p-6 font-mono-tech text-xs shadow-2xl relative">
              {/* Terminal header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-300 font-bold">blockchain_unn.node</span>
                </div>
                <span className="text-[11px] text-cyan-400">v-peer-connect</span>
              </div>

              {/* Terminal output simulation */}
              <div className="space-y-3 text-slate-300">
                <p className="text-slate-400">
                  <span className="text-cyan-400">$</span> init_community --target="University of Nigeria, Nsukka"
                </p>
                <p className="text-emerald-400">
                  [SUCCESS] University network node activated.
                </p>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5 text-[11px]">
                  <div className="text-slate-400">Pillar 1: Decentralized Systems Literacy</div>
                  <div className="text-slate-400">Pillar 2: Open Source Contribution</div>
                  <div className="text-slate-400">Pillar 3: Meritocratic Mentorship</div>
                  <div className="text-amber-300 mt-2 font-medium">
                    "Great tech minds can rise from any campus."
                  </div>
                </div>

                <div className="pt-2 text-slate-400 flex items-center justify-between text-[11px]">
                  <span>Campus Status: Active & Building</span>
                  <span className="text-cyan-400">Continuously Mentoring</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
