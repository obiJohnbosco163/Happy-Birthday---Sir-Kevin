import React, { useState, useEffect } from 'react';
import { Quote, Sparkles, Award } from 'lucide-react';
import { TRIBUTE_DATA } from '../data/tributeData';

export const TypewriterTribute: React.FC = () => {
  const fullText = `Dearest Mentor, Leader, and Brother,

On this milestone day, we pause to celebrate not just the accomplishments written on websites, but the character of the man behind them all.

In a world where many seek the limelight for themselves, you have consistently chosen the harder, nobler path: building the stage upon which hundreds of others can shine.

Through Ginakev Digital Academy (GIDA), you gave thousands of young people their first real glimpse into technological sovereignty. Through BlockchainUNN, you proved excellence can bloom anywhere. Through The Block Hive, you gave weary builders a home, stable electricity, and community.

You have lived the gospel of 'Build in Public' — showing us that humility, diligence, and service are the true hallmarks of greatness.

Happy Birthday, Okoye Kevin Chibuoyim! Ezemmuo Blockchain, may your days be long and prosperous!`;

  const [displayedText, setDisplayedText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const handleShowAll = () => {
    setDisplayedText(fullText);
    setIsTyping(false);
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="glass-panel-gold rounded-3xl p-8 sm:p-12 border border-amber-400/40 shadow-2xl relative">
        <Quote className="w-12 h-12 text-amber-400/15 absolute top-6 right-6" />

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-amber-500/20">
          <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono-tech text-amber-400 uppercase tracking-widest block">
              Words From The Heart
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-cinzel text-white">
              To Our Mentor, Sir Kevin Okoye Chibuoyim
            </h3>
          </div>
        </div>

        {/* Typewriter text container */}
        <div className="min-h-[220px] text-slate-200 text-sm sm:text-base leading-relaxed whitespace-pre-line font-light">
          {displayedText}
          {isTyping && (
            <span className="inline-block w-2 h-4 bg-amber-400 ml-1 animate-pulse" />
          )}
        </div>

        {isTyping && (
          <div className="mt-4 text-right">
            <button
              onClick={handleShowAll}
              className="text-xs font-mono-tech text-amber-400/80 hover:text-amber-300 underline"
            >
              Skip typing & read all →
            </button>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Honoring your selfless service, mentorship, and vision</span>
          </div>
          <div className="font-mono-tech text-amber-300 font-semibold">
            — From Johnbosco Obi & Your Grateful Mentees
          </div>
        </div>
      </div>
    </section>
  );
};
