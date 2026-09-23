import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, ChevronRight, Compass } from 'lucide-react';
import { TRIBUTE_DATA, Chapter } from '../data/tributeData';

interface InteractiveTimelineProps {
  onSelectChapter?: (id: string) => void;
}

export const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({ onSelectChapter }) => {
  const [activeChapterId, setActiveChapterId] = useState<string>(TRIBUTE_DATA.chapters[0].id);

  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-amber-400 mb-3">
          <Compass className="w-4 h-4" />
          <span>The Chronicle</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-cinzel text-white tracking-tight mb-4">
          The Journey of a Builder
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          From humble beginnings to shaping physical hubs and regional Web3 ecosystems.
          Documenting the milestones of a visionary who chose to build in public.
        </p>

        {/* Quick Chapter Selector Bar */}
        <div className="mt-8 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {TRIBUTE_DATA.chapters.map((ch) => {
            const isActive = activeChapterId === ch.id;
            return (
              <button
                key={ch.id}
                onClick={() => {
                  setActiveChapterId(ch.id);
                  const el = document.getElementById(`chapter-${ch.id}`);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
                className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40 shadow-sm shadow-amber-400/10'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <span className="font-mono-tech mr-1.5 opacity-60">{ch.number}</span>
                <span>{ch.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Vertical Timeline Track */}
      <div className="relative">
        {/* Central Luminous Track Line */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-amber-400/40 via-cyan-400/30 to-slate-800 -translate-x-1/2 hidden sm:block" />

        {/* Chapters Stack */}
        <div className="space-y-16 sm:space-y-24">
          {TRIBUTE_DATA.chapters.map((chapter: Chapter, index: number) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={chapter.id}
                id={`chapter-${chapter.id}`}
                className="relative sm:grid sm:grid-cols-2 sm:gap-12 lg:gap-16 items-center"
              >
                {/* Timeline Center Node */}
                <div className="hidden sm:flex absolute left-1/2 top-8 -translate-x-1/2 items-center justify-center z-10">
                  <div className="w-10 h-10 rounded-full bg-[#05070d] border border-amber-400/50 flex items-center justify-center shadow-lg shadow-amber-400/20 group">
                    <span className="text-xs font-mono-tech font-bold text-amber-300">
                      {chapter.number}
                    </span>
                  </div>
                </div>

                {/* Left Column (or Right on alternate) */}
                <div
                  className={`sm:px-2 ${
                    isEven
                      ? 'sm:text-right sm:pr-8'
                      : 'sm:col-start-2 sm:pl-8 sm:row-start-1'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2 sm:justify-start">
                    <span className="sm:hidden inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-mono-tech font-bold">
                      {chapter.number}
                    </span>
                    <span className="text-xs font-mono-tech uppercase tracking-wider text-cyan-400">
                      Chapter {chapter.number}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-white mb-2">
                    {chapter.title}
                  </h3>

                  <p className="text-amber-200/90 text-sm font-medium mb-4 italic">
                    {chapter.leadQuote}
                  </p>

                  <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                    {chapter.narrative.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {/* External verified links if any */}
                  {chapter.links && chapter.links.length > 0 && (
                    <div
                      className={`mt-4 flex flex-wrap gap-2 pt-2 ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}
                    >
                      {chapter.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-cyan-300 hover:text-cyan-200 transition-colors"
                        >
                          <span>{link.label}</span>
                          <span className="text-slate-500 font-mono-tech">({link.handle})</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Opposite Column: Key Highlights or Visual Card */}
                <div
                  className={`mt-6 sm:mt-0 ${
                    isEven
                      ? 'sm:col-start-2 sm:pl-8'
                      : 'sm:col-start-1 sm:row-start-1 sm:pr-8'
                  }`}
                >
                  <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20">
                    {/* Chapter Feature Image if available */}
                    {chapter.image && (
                      <div className="mb-5 overflow-hidden rounded-xl border border-slate-800 relative group">
                        <img
                          src={chapter.image}
                          alt={chapter.title}
                          className="w-full h-48 sm:h-52 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                        />
                        {chapter.imageCaption && (
                          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 to-transparent p-3 text-xs text-slate-300">
                            {chapter.imageCaption}
                          </div>
                        )}
                      </div>
                    )}

                    <h4 className="text-xs font-mono-tech uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                      <span>Documented Milestone Realities</span>
                    </h4>

                    <ul className="space-y-3">
                      {chapter.keyHighlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
