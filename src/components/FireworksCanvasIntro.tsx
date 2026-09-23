import React, { useEffect, useRef, useState } from 'react';

interface FireworksCanvasIntroProps {
  onEnter: () => void;
}

export const FireworksCanvasIntro: React.FC<FireworksCanvasIntroProps> = ({ onEnter }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [showButton, setShowButton] = useState<boolean>(false);
  const [isFading, setIsFading] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle class
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
      size: number;
      decay: number;
    }

    interface Rocket {
      x: number;
      y: number;
      targetY: number;
      vy: number;
      color: string;
      exploded: boolean;
    }

    const rockets: Rocket[] = [];
    const particles: Particle[] = [];
    const colors = ['#00e5ff', '#ff00cc', '#f59e0b', '#38bdf8', '#fbbf24', '#ffffff', '#10b981'];

    const spawnRocket = () => {
      rockets.push({
        x: Math.random() * (w - 200) + 100,
        y: h,
        targetY: Math.random() * (h * 0.45) + h * 0.15,
        vy: -(Math.random() * 4 + 7),
        color: colors[Math.floor(Math.random() * colors.length)],
        exploded: false,
      });
    };

    const explodeRocket = (x: number, y: number, color: string) => {
      const count = 60;
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
        const speed = Math.random() * 5 + 1.5;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color,
          size: Math.random() * 2.5 + 1,
          decay: Math.random() * 0.015 + 0.015,
        });
      }
    };

    let tick = 0;

    const render = () => {
      ctx.fillStyle = 'rgba(4, 7, 20, 0.22)';
      ctx.fillRect(0, 0, w, h);

      tick++;
      if (tick % 28 === 0 && tick < 350) {
        spawnRocket();
      }

      // Update rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.y += r.vy;

        // Draw trail
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = r.color;
        ctx.shadowColor = r.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (r.y <= r.targetY) {
          explodeRocket(r.x, r.y, r.color);
          rockets.splice(i, 1);
        }
      }

      // Update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // gravity
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }

      // Draw Sparkling Intro Title
      ctx.font = 'bold 24px "Orbitron", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(0, 229, 255, 0.85)';
      ctx.shadowColor = '#00e5ff';
      ctx.shadowBlur = 15;
      if (w > 640) {
        ctx.fillText('HAPPY BIRTHDAY SIR KEVIN', w / 2, h * 0.35);
      } else {
        ctx.fillText('HAPPY BIRTHDAY', w / 2, h * 0.32);
        ctx.fillText('SIR KEVIN', w / 2, h * 0.38);
      }
      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(render);
    };

    render();

    // Show button after initial rocket bursts (2.5 seconds)
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2500);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      clearTimeout(timer);
    };
  }, []);

  const handleClick = () => {
    setIsFading(true);
    setTimeout(() => {
      onEnter();
    }, 600);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-700 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Cyberpunk Neon "Enter Your Dream World" button from Itz-Murali */}
      {showButton && (
        <div className="relative z-10 animate-fade-in text-center px-4 mt-48 sm:mt-56">
          <button
            onClick={handleClick}
            className="cyber-start-btn group"
            aria-label="Enter your dream world"
          >
            <span className="flex items-center gap-2">
              <span>Enter Your Dream World</span>
              <span className="text-amber-400 group-hover:translate-x-1 transition-transform">✨</span>
            </span>
          </button>
          <p className="text-[11px] font-mono-tech text-cyan-300/70 uppercase tracking-widest mt-4">
            Click To Begin The Celebration · Sound Enabled
          </p>
        </div>
      )}
    </div>
  );
};
