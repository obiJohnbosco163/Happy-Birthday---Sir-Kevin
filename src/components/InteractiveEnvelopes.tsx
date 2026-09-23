import React, { useState, useEffect } from 'react';
import { Mail, MailOpen, X, Send, Plus, Sparkles, User, Calendar } from 'lucide-react';
import { TRIBUTE_DATA, TributeMessage } from '../data/tributeData';

export const InteractiveEnvelopes: React.FC = () => {
  const [messages, setMessages] = useState<TributeMessage[]>([]);
  const [activeMessage, setActiveMessage] = useState<TributeMessage | null>(null);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState<boolean>(false);

  // New message form state
  const [senderName, setSenderName] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [noteContent, setNoteContent] = useState<string>('');
  const [formSuccess, setFormSuccess] = useState<boolean>(false);

  useEffect(() => {
    // Load persisted local messages or initial data
    const saved = localStorage.getItem('kevin_tribute_custom_messages');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setMessages([...TRIBUTE_DATA.initialMessages, ...parsed]);
        return;
      } catch {
        // fallback
      }
    }
    setMessages(TRIBUTE_DATA.initialMessages);
  }, []);

  const handleAddMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !noteContent.trim()) return;

    const newMsg: TributeMessage = {
      id: `custom-${Date.now()}`,
      sender: senderName.trim(),
      role: role.trim() || 'Mentee & Well-Wisher',
      date: 'September 24',
      preview: noteContent.trim().slice(0, 45) + '...',
      fullMessage: noteContent.trim(),
      colorTheme: 'gold',
    };

    const currentCustom = JSON.parse(localStorage.getItem('kevin_tribute_custom_messages') || '[]');
    const updatedCustom = [newMsg, ...currentCustom];
    localStorage.setItem('kevin_tribute_custom_messages', JSON.stringify(updatedCustom));

    setMessages([newMsg, ...messages]);
    setSenderName('');
    setRole('');
    setNoteContent('');
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setIsWriteModalOpen(false);
      setActiveMessage(newMsg); // immediately open new letter
    }, 1200);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-amber-400 mb-3">
          <Mail className="w-4 h-4 text-amber-400" />
          <span>Personal Testimonies</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-cinzel text-white tracking-tight mb-4">
          Letters of Gratitude
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Click any sealed envelope to break the wax seal and read personal messages from mentees,
          GIDA alumni, The Block Hive residents, and community builders.
        </p>

        {/* Add Note Button */}
        <div className="mt-6">
          <button
            onClick={() => setIsWriteModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-400/40 text-amber-300 text-xs font-semibold tracking-wide transition-all shadow-lg hover:shadow-amber-500/10"
          >
            <Plus className="w-4 h-4" />
            <span>Add a Birthday Message for Kevin</span>
          </button>
        </div>
      </div>

      {/* Grid of Interactive Envelopes */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {messages.map((msg) => {
          return (
            <div
              key={msg.id}
              onClick={() => setActiveMessage(msg)}
              className="group cursor-pointer rounded-2xl glass-panel p-6 border border-slate-800 hover:border-amber-400/60 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-950/20 relative flex flex-col justify-between"
            >
              {/* Envelope flap aesthetic */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                    <Mail className="w-4 h-4 group-hover:hidden" />
                    <MailOpen className="w-4 h-4 hidden group-hover:block" />
                  </div>
                  <span className="text-[11px] font-mono-tech text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {msg.date}
                  </span>
                </div>

                {/* Wax seal symbol */}
                <div className="my-3 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700 border-2 border-amber-300/40 shadow-inner flex items-center justify-center text-slate-950 font-cinzel font-bold text-sm">
                    OKC
                  </div>
                </div>

                <div className="text-center mt-3">
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {msg.sender}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-1">{msg.role}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-center">
                <span className="text-xs font-mono-tech text-amber-400/90 group-hover:underline">
                  Break Seal & Read →
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Read Message Modal */}
      {activeMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
          <div className="relative glass-panel-gold rounded-3xl p-8 sm:p-12 max-w-2xl w-full border border-amber-400/40 shadow-2xl shadow-amber-950/50">
            {/* Close button */}
            <button
              onClick={() => setActiveMessage(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 transition-colors"
              aria-label="Close message"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-amber-500/20">
                <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold font-cinzel">
                  {activeMessage.sender.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-cinzel text-white">
                    {activeMessage.sender}
                  </h3>
                  <div className="text-xs text-amber-300/80">
                    {activeMessage.role} · {activeMessage.date}
                  </div>
                </div>
              </div>

              <div className="py-2 text-slate-200 text-sm sm:text-base leading-relaxed whitespace-pre-line font-light">
                {activeMessage.fullMessage}
              </div>

              <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono-tech">Okoye Kevin Chibuoyim Tribute Archive</span>
                <button
                  onClick={() => setActiveMessage(null)}
                  className="px-4 py-2 rounded-lg bg-amber-400/20 text-amber-300 hover:bg-amber-400/30 transition-colors font-medium"
                >
                  Close Letter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Write New Note Modal */}
      {isWriteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="relative glass-panel rounded-3xl p-8 sm:p-10 max-w-xl w-full border border-slate-700 shadow-2xl">
            <button
              onClick={() => setIsWriteModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold font-cinzel text-white mb-2">
              Write a Birthday Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Your note will be added to the live interactive tribute envelopes on this page.
            </p>

            {formSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center text-emerald-300 text-sm space-y-2">
                <Sparkles className="w-6 h-6 mx-auto text-emerald-400" />
                <p className="font-bold">Your message has been sealed!</p>
                <p className="text-xs text-slate-400">Opening letter preview now...</p>
              </div>
            ) : (
              <form onSubmit={handleAddMessage} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono-tech text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Johnbosco Obi"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-tech text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Role / Relationship (Optional)
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. GIDA Cohort 2 Alum / Mentee / Builder"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-tech text-slate-300 uppercase tracking-wider mb-1.5">
                    Birthday Message & Tribute *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                    placeholder="Write your heartfelt message to Sir Kevin..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsWriteModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-xs text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-400/20"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Seal & Submit Note</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
