import React from 'react';
import { Compass, Sparkles } from 'lucide-react';
import { TRIBUTE_DATA } from '../data/tributeData';

export const PrayerSection: React.FC = () => {
  const { prayer } = TRIBUTE_DATA;

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Calm, serene, quiet atmosphere - intentionally reduced animations */}
      <div className="relative rounded-3xl bg-[#070a12] border border-slate-800 p-8 sm:p-14 lg:p-16 text-center space-y-8 shadow-2xl">
        
        {/* Subtle, sacred header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech tracking-widest uppercase text-amber-300/80">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Solemn Blessing</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold font-cinzel text-white tracking-wide">
            {prayer.title}
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 font-light">
            {prayer.subtitle}
          </p>

          <div className="w-12 h-px bg-amber-400/40 mx-auto mt-4" />
        </div>

        {/* Prayer Text */}
        <div className="space-y-6 text-slate-200 text-sm sm:text-base leading-relaxed text-left sm:text-justify max-w-2xl mx-auto font-light">
          {prayer.body.map((para, index) => {
            const isLast = index === prayer.body.length - 1;
            return (
              <p
                key={index}
                className={
                  isLast
                    ? 'text-center font-cinzel text-amber-300 font-bold text-lg pt-4'
                    : 'text-slate-300'
                }
              >
                {para}
              </p>
            );
          })}
        </div>

        {/* Quiet blessing footer */}
        <div className="pt-6 border-t border-slate-900 text-xs text-slate-500 font-mono-tech flex items-center justify-center gap-2">
          <span>Lifted up with deep faith, thanksgiving, and honor</span>
        </div>
      </div>
    </section>
  );
};
