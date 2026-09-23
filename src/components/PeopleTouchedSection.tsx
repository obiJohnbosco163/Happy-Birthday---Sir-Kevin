import React, { useState } from 'react';
import { Heart, Compass, Users2, Sparkles, MessageSquareHeart, Quote } from 'lucide-react';
import { TRIBUTE_DATA, ImpactCard } from '../data/tributeData';

export const PeopleTouchedSection: React.FC = () => {
  const [selectedCardId, setSelectedCardId] = useState<string>(TRIBUTE_DATA.peopleCards[0].id);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-rose-400 mb-3">
          <Heart className="w-4 h-4 text-rose-400" />
          <span>The Human Measure</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-cinzel text-white tracking-tight mb-4">
          The Lives Behind the Code
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Organizations, hubs, and conferences are merely vehicles. The true measure of a mentor's
          greatness is found in the quiet, profound difference made in individual human lives.
        </p>
      </div>

      {/* 4 Archetypal Impact Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {TRIBUTE_DATA.peopleCards.map((card: ImpactCard) => {
          const isSelected = selectedCardId === card.id;

          return (
            <div
              key={card.id}
              onClick={() => setSelectedCardId(card.id)}
              className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between relative ${
                isSelected
                  ? 'glass-panel-gold border-amber-400/80 shadow-xl shadow-amber-500/10 -translate-y-1'
                  : 'glass-panel border-slate-800 hover:border-slate-700 hover:-translate-y-0.5'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span className="font-mono-tech uppercase tracking-wider text-amber-300">
                    {card.archetype}
                  </span>
                  <span>{card.tag}</span>
                </div>

                <h3 className="text-lg font-bold font-cinzel text-white mb-3 leading-snug">
                  “{card.headline}”
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-amber-400 font-medium">Read reflection</span>
                <MessageSquareHeart className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Featured Expanded Reflection */}
      {(() => {
        const activeCard = TRIBUTE_DATA.peopleCards.find((c) => c.id === selectedCardId) || TRIBUTE_DATA.peopleCards[0];
        return (
          <div className="glass-panel p-8 sm:p-10 rounded-3xl max-w-4xl mx-auto border border-amber-500/20 relative">
            <Quote className="w-10 h-10 text-amber-400/20 absolute top-6 right-6" />

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-amber-400 uppercase tracking-wider">
                <span>Direct Voice Reflection</span>
                <span>·</span>
                <span>{activeCard.archetype}</span>
              </div>

              <p className="text-base sm:text-xl text-slate-100 font-cinzel leading-relaxed italic">
                {activeCard.reflection}
              </p>

              <div className="pt-4 flex items-center gap-3 text-xs text-slate-400">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Testimonial representing verified community mentees and learners</span>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
};
