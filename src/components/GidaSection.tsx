import React, { useState } from 'react';
import { ExternalLink, Lightbulb, GraduationCap, Users, Briefcase, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { TRIBUTE_DATA } from '../data/tributeData';

export const GidaSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const steps = [
    {
      step: "01",
      name: "IDEA",
      title: "The Genesis of Empowerment",
      description: "Recognizing that thousands of ambitious young minds across Nigeria possess extraordinary raw intellect, but lack structured pathways into modern frontier technology.",
      quote: "“Before you write code, you must first believe you are worthy to build for the world.”",
      icon: Lightbulb,
      color: "from-amber-400 to-amber-500",
    },
    {
      step: "02",
      name: "EDUCATION",
      title: "Rigorous Hands-On Training",
      description: "GIDA designs intensive Web3 and software engineering curricula, intensive cohorts, and bootcamps that translate abstract documentation into deployable skills.",
      quote: "“We do not teach surface-level theory; we train developers to think like architects.”",
      icon: GraduationCap,
      color: "from-cyan-400 to-blue-500",
    },
    {
      step: "03",
      name: "COMMUNITY",
      title: "A Brotherhood of Builders",
      description: "Eliminating the isolation of independent learning. Students are organized into study circles, hackathon sprint squads, and accountability circles.",
      quote: "“Isolation kills ambition. Community makes hard challenges feel conquerable.”",
      icon: Users,
      color: "from-emerald-400 to-teal-500",
    },
    {
      step: "04",
      name: "OPPORTUNITY",
      title: "Scholarships & Global Access",
      description: "Kevin and GIDA provide merit scholarships to deserving students, connect graduates with international bounties, grants, and remote engineering opportunities.",
      quote: "“Talent is universally distributed; opportunity must be intentionally engineered.”",
      icon: Briefcase,
      color: "from-indigo-400 to-purple-500",
    },
    {
      step: "05",
      name: "IMPACT",
      title: "Generational Multipliers",
      description: "Graduates become mentors and team leads in their own right, generating income for their households and inspiring younger peers to take up technology.",
      quote: "“The highest victory of an educator is when your students outbuild you.”",
      icon: Sparkles,
      color: "from-amber-300 to-rose-400",
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-cyan-400 mb-3">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>Institutional Pillar</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-cinzel text-white tracking-tight mb-4">
          Ginakev Digital Academy (GIDA)
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Founded and led by Okoye Kevin Chibuoyim, GIDA serves as an engine of human transformation:
          democratizing Web3 education, running bootcamps, and providing scholarships.
        </p>
      </div>

      {/* Transition Pipeline: IDEA -> EDUCATION -> COMMUNITY -> OPPORTUNITY -> IMPACT */}
      <div className="mb-12">
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-widest font-mono-tech text-slate-400">
            The Verified Transformation Cycle (Click any stage)
          </span>
        </div>

        {/* Step Buttons Row */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeStepIndex === idx;

            return (
              <button
                key={item.name}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-amber-400/80 shadow-lg shadow-amber-500/10 -translate-y-1'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono-tech font-bold text-slate-400">
                    {item.step}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isSelected
                        ? 'bg-amber-400/20 text-amber-300'
                        : 'bg-slate-800/80 text-slate-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3
                    className={`text-sm font-bold font-mono-tech tracking-wider ${
                      isSelected ? 'text-white' : 'text-slate-300'
                    }`}
                  >
                    {item.name}
                  </h3>
                  <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    {item.title}
                  </div>
                </div>

                {isSelected && (
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-amber-400 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Pipeline Detail View */}
      <div className="glass-panel p-8 sm:p-10 rounded-3xl max-w-4xl mx-auto border border-slate-800 relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-tech font-bold px-2.5 py-1 rounded bg-amber-400/10 text-amber-300 border border-amber-400/30">
              STAGE {steps[activeStepIndex].step} OF 05
            </span>
            <span className="text-slate-400 text-xs font-mono-tech">
              Pipeline Architecture
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-white">
            {steps[activeStepIndex].name}: {steps[activeStepIndex].title}
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {steps[activeStepIndex].description}
          </p>

          <blockquote className="p-4 rounded-xl bg-slate-900/80 border-l-2 border-amber-400 text-amber-200/90 italic text-sm">
            {steps[activeStepIndex].quote}
          </blockquote>
        </div>

        {/* Navigation Arrows for Pipeline */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono-tech">
          <button
            onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
            className="text-slate-400 hover:text-slate-200 transition-colors"
          >
            ← Previous Stage
          </button>
          <div className="flex items-center gap-1.5">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeStepIndex === i ? 'bg-amber-400 w-5' : 'bg-slate-700'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setActiveStepIndex((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
            className="text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
          >
            <span>Next Stage</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Official Verified Links */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://x.com/Official_GIDA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400/20 to-amber-500/10 hover:from-amber-400/30 hover:to-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-semibold tracking-wide transition-all shadow-lg shadow-amber-500/10"
        >
          <span>Explore Ginakev Digital Academy (@Official_GIDA)</span>
          <ExternalLink className="w-4 h-4 text-amber-300" />
        </a>

        <a
          href="https://x.com/inblockchainHQ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-300 text-xs font-semibold tracking-wide transition-all"
        >
          <span>Ecosystem Partner (@inblockchainHQ)</span>
          <ExternalLink className="w-4 h-4 text-slate-400" />
        </a>
      </div>
    </section>
  );
};
