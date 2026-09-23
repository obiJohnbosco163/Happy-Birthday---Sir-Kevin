import React from 'react';
import { Cake, Sparkles, Award, Quote } from 'lucide-react';
import { TRIBUTE_DATA } from '../data/tributeData';

export const BirthdayMessage: React.FC = () => {
  const { birthdayLetter, subject } = TRIBUTE_DATA;

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Tribute Parchment Card */}
      <div className="relative glass-panel-gold rounded-3xl p-8 sm:p-14 border border-amber-400/30 shadow-2xl shadow-amber-950/20">
        
        {/* Top Badges & Subject Portrait */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pb-10 border-b border-amber-500/20">
          <div className="relative shrink-0">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-2xl relative glow-gold group">
              <img
                src={subject.portraitUrl}
                alt={subject.fullName}
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-lg">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          <div className="text-center sm:text-left space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-amber-400 uppercase tracking-widest">
              <Award className="w-4 h-4 text-amber-400" />
              <span>A Personal Tribute of Honor</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold font-cinzel text-white leading-tight">
              To Our Mentor, {subject.shortName}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300">
              Okoye Kevin Chibuoyim · {subject.rolesSummary}
            </p>

            <div className="pt-1 flex flex-wrap gap-2 justify-center sm:justify-start text-xs font-mono-tech text-amber-300/80">
              <span>#EzemmuoBlockchain</span>
              <span className="text-slate-500">·</span>
              <span>#BuildInPublic</span>
            </div>
          </div>
        </div>

        {/* Letter Body */}
        <div className="py-8 space-y-6 text-slate-200 text-sm sm:text-base leading-relaxed">
          <p className="text-base sm:text-lg font-cinzel text-amber-300 font-semibold italic">
            {birthdayLetter.salutation}
          </p>

          {birthdayLetter.paragraphs.map((para, pIdx) => (
            <p key={pIdx} className="text-slate-300">
              {para}
            </p>
          ))}
        </div>

        {/* Closing and Signature */}
        <div className="pt-8 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-bold font-cinzel text-amber-300 mb-1">
              {birthdayLetter.closing}
            </h4>
            <p className="text-xs text-slate-400 max-w-md">
              {birthdayLetter.signature}
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono-tech">
            <Cake className="w-4 h-4 text-amber-400" />
            <span>Honoring Your Life & Service</span>
          </div>
        </div>

      </div>
    </section>
  );
};
