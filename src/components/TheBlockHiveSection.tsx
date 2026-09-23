import React from 'react';
import { ExternalLink, Building2, Zap, Wifi, Users, Layers, ArrowDown } from 'lucide-react';
import { TRIBUTE_DATA } from '../data/tributeData';

export const TheBlockHiveSection: React.FC = () => {
  const transformationSteps = [
    {
      label: "ONE IDEA",
      subtitle: "A conviction that physical space matters",
      desc: "Remote calls cannot replace the synergy of looking into a collaborator's eyes when solving a complex bug.",
    },
    {
      label: "A PLACE",
      subtitle: "Securing steady power & high-speed connectivity",
      desc: "Establishing a physical sanctuary in Nsukka, Enugu where infrastructure deficits no longer strangle ambition.",
    },
    {
      label: "A COMMUNITY",
      subtitle: "Welcoming diverse talent under one roof",
      desc: "Gathering Web3 engineers, 3D artists, copywriters, university undergraduates, and entrepreneurs.",
    },
    {
      label: "THE BLOCK HIVE",
      subtitle: "The living, breathing hub of innovation",
      desc: "A beacon of grassroots African tech sovereignty, co-working, hackathons, and ecosystem growth.",
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background blueprint subtle graphics */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-emerald-400 mb-3">
          <Building2 className="w-4 h-4 text-emerald-400" />
          <span>Physical Infrastructure</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-cinzel text-white tracking-tight mb-4">
          The Block Hive: From Idea to Physical Sanctuary
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          In Nsukka, Enugu, Kevin brought an architectural vision into physical existence —
          a tech and blockchain hub where lights never go out and builders never build alone.
        </p>
      </div>

      {/* Visual Transformation Flow: ONE IDEA -> A PLACE -> A COMMUNITY -> THE BLOCK HIVE */}
      <div className="mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-4 gap-4 relative">
            {transformationSteps.map((step, idx) => (
              <div
                key={step.label}
                className="glass-panel p-5 rounded-2xl border border-slate-800 flex flex-col justify-between relative group hover:border-emerald-500/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono-tech mb-3">
                    <span>STEP 0{idx + 1}</span>
                    <span className="text-emerald-400 font-bold">●</span>
                  </div>

                  <h3 className="text-base font-bold font-cinzel text-white mb-1">
                    {step.label}
                  </h3>

                  <div className="text-xs text-amber-300/80 mb-2 font-medium">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < transformationSteps.length - 1 && (
                  <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                    <span className="text-sm font-bold text-slate-500">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Block Hive Architectural Showcase Card */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-emerald-500/20 shadow-2xl relative overflow-hidden max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Photo / Hub image */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative group">
              <img
                src={TRIBUTE_DATA.subject.blockHiveUrl}
                alt="The Block Hive Sanctuary"
                className="w-full h-72 sm:h-80 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono-tech text-slate-300 flex items-center justify-between">
                <span>The Block Hive Hub · Nsukka, Enugu</span>
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active Hub
                </span>
              </div>
            </div>
          </div>

          {/* Right: Hub Pillars & Community Mission */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-emerald-400 uppercase tracking-wider">
              <span>Co-Working & Innovation Hub</span>
              <span>·</span>
              <span>Founder: Okoye Kevin Chibuoyim</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-white leading-snug">
              A Home for Builders, Creatives, and Entrepreneurs
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed">
              The Block Hive bridges the gap between raw aspiration and concrete delivery. Located in Nsukka, Enugu,
              it offers young students and seasoned developers a distraction-free environment to prototype solutions,
              learn smart contract security, and form lasting startups.
            </p>

            {/* 3 Facility Attributes */}
            <div className="grid sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <Zap className="w-4 h-4 text-amber-400 mb-1.5" />
                <div className="text-xs font-bold text-slate-200">24/7 Power</div>
                <div className="text-[11px] text-slate-400">Continuous electricity for unbroken focus</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <Wifi className="w-4 h-4 text-cyan-400 mb-1.5" />
                <div className="text-xs font-bold text-slate-200">High-Speed Net</div>
                <div className="text-[11px] text-slate-400">Seamless global collaboration</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <Users className="w-4 h-4 text-emerald-400 mb-1.5" />
                <div className="text-xs font-bold text-slate-200">Collaborative Desk</div>
                <div className="text-[11px] text-slate-400">Peer reviews & mentorship cohorts</div>
              </div>
            </div>

            {/* Hub Link */}
            <div className="pt-2">
              <a
                href="https://x.com/theblock_hive"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-semibold tracking-wide transition-all shadow-lg shadow-emerald-950/40"
              >
                <span>Visit The Block Hive on X (@theblock_hive)</span>
                <ExternalLink className="w-4 h-4 text-emerald-300" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
