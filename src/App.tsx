/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { FireworksCanvasIntro } from './components/FireworksCanvasIntro';
import { MainCelebrationScreen } from './components/MainCelebrationScreen';
import { FancyModal } from './components/FancyModal';
import { LastCakePage } from './components/LastCakePage';
import { birthdayMusic } from './utils/birthdayMusic';

export default function App() {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showFinalPage, setShowFinalPage] = useState<boolean>(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(false);

  const handleEnterWorld = () => {
    setHasEntered(true);
    // Start background music seamlessly
    birthdayMusic.play();
    setIsMusicPlaying(true);

    // Blast celebratory confetti on entry
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.3 },
      colors: ['#00e5ff', '#ff00cc', '#f59e0b', '#38bdf8', '#ffffff'],
    });
  };

  const handleToggleMusic = () => {
    const playing = birthdayMusic.toggle();
    setIsMusicPlaying(playing);
    if (playing) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00e5ff', '#f59e0b', '#ff00cc'],
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#040714] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* Background radial glow */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.12),transparent_70%)] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,0,204,0.08),transparent_60%)] pointer-events-none z-0" />

      {/* 1. Fireworks Canvas Intro with "Enter Your Dream World" */}
      {!hasEntered && (
        <FireworksCanvasIntro onEnter={handleEnterWorld} />
      )}

      {/* 2. Main Cyberpunk Celebration Screen (Itz-Murali replica with Sir Kevin's info & photos only) */}
      <MainCelebrationScreen
        onOpenModal={() => setIsModalOpen(true)}
        isMusicPlaying={isMusicPlaying}
        onToggleMusic={handleToggleMusic}
      />

      {/* 3. Fancy Glassmorphic Modal ("A Little Surprise 🎁") */}
      <FancyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOpenFinalPage={() => setShowFinalPage(true)}
      />

      {/* 4. Final Page (.lastpage) with Cake, Blowable Candles, and exact Prayer text */}
      {showFinalPage && (
        <LastCakePage
          onBack={() => setShowFinalPage(false)}
        />
      )}

    </div>
  );
}
