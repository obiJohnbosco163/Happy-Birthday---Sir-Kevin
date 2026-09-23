import React, { useRef, useEffect, useState } from 'react';
import { Network, Sparkles, Info } from 'lucide-react';
import { TRIBUTE_DATA } from '../data/tributeData';

interface Node {
  id: number;
  x: number;
  y: number;
  radius: number;
  label: string;
  category: string;
  desc: string;
  orbitRadius: number;
  angle: number;
  speed: number;
  color: string;
}

export const WallOfImpact: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeNode, setActiveNode] = useState<{ label: string; desc: string; category: string } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const setCanvasSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = 540;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Generate orbiting nodes around the central figure
    const rawNodes = TRIBUTE_DATA.wallNodes;
    const colors = ['#38bdf8', '#34d399', '#f59e0b', '#a78bfa', '#f43f5e', '#38bdf8', '#fbbf24'];

    const nodes: Node[] = rawNodes.map((n, i) => {
      const angle = (i / rawNodes.length) * Math.PI * 2;
      const orbitRadius = 110 + (i % 3) * 60;
      return {
        id: n.id,
        x: 0,
        y: 0,
        radius: 6 + (i % 3) * 2,
        label: n.label,
        category: n.category,
        desc: n.desc,
        orbitRadius,
        angle,
        speed: 0.003 + (i % 4) * 0.0015,
        color: colors[i % colors.length],
      };
    });

    let particleTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      particleTime += 0.02;

      // Draw faint concentric orbit rings
      [110, 170, 230].forEach((r) => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Update and draw connections
      nodes.forEach((node) => {
        node.angle += node.speed;
        node.x = centerX + Math.cos(node.angle) * node.orbitRadius;
        node.y = centerY + Math.sin(node.angle) * (node.orbitRadius * 0.75); // slight ellipse perspective

        // Draw connecting ray from center to node
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(node.x, node.y);
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.12)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw animated starlight pulses traveling along the thread
        const pulsePos = (Math.sin(particleTime + node.id) + 1) / 2;
        const pulseX = centerX + (node.x - centerX) * pulsePos;
        const pulseY = centerY + (node.y - centerY) * pulsePos;

        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#0a0f1d';
        ctx.fill();
        ctx.strokeStyle = node.color;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Node glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 3, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}22`;
        ctx.fill();

        // Label above node (responsive font)
        if (canvas.width > 640) {
          ctx.font = '10px "Space Grotesk", sans-serif';
          ctx.fillStyle = 'rgba(226, 232, 240, 0.7)';
          ctx.textAlign = 'center';
          ctx.fillText(node.label, node.x, node.y - 12);
        }
      });

      // Draw Central Sun / Anchor Node: Okoye Kevin Chibuoyim
      const centerGlowRadius = 24 + Math.sin(particleTime * 2) * 3;

      // Outer radial aura
      const auraGradient = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, centerGlowRadius * 2);
      auraGradient.addColorStop(0, 'rgba(245, 158, 11, 0.4)');
      auraGradient.addColorStop(1, 'rgba(245, 158, 11, 0)');
      ctx.beginPath();
      ctx.arc(centerX, centerY, centerGlowRadius * 2, 0, Math.PI * 2);
      ctx.fillStyle = auraGradient;
      ctx.fill();

      // Central core
      ctx.beginPath();
      ctx.arc(centerX, centerY, 18, 0, Math.PI * 2);
      ctx.fillStyle = '#f59e0b';
      ctx.shadowColor = '#f59e0b';
      ctx.shadowBlur = 18;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.beginPath();
      ctx.arc(centerX, centerY, 14, 0, Math.PI * 2);
      ctx.fillStyle = '#05070d';
      ctx.fill();

      // Center text mark
      ctx.font = 'bold 9px "Cinzel", serif';
      ctx.fillStyle = '#f59e0b';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('OKC', centerX, centerY);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Canvas click / hover interaction
    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      let found = false;
      for (const node of nodes) {
        const dist = Math.hypot(node.x - clickX, node.y - clickY);
        if (dist <= node.radius + 15) {
          setActiveNode({ label: node.label, desc: node.desc, category: node.category });
          found = true;
          break;
        }
      }
      if (!found) {
        // if clicked near center
        const centerDist = Math.hypot(canvas.width / 2 - clickX, canvas.height / 2 - clickY);
        if (centerDist <= 30) {
          setActiveNode({
            label: "Okoye Kevin Chibuoyim",
            desc: "The central catalyst uniting educators, students, physical hubs, and regional ecosystems.",
            category: "The Anchor",
          });
        }
      }
    };

    canvas.addEventListener('click', handleCanvasClick);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      canvas.removeEventListener('click', handleCanvasClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header with Central Quote */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-cyan-400 mb-3">
          <Network className="w-4 h-4 text-cyan-400" />
          <span>The Constellation of Influence</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold font-cinzel text-white tracking-tight mb-6">
          Wall of Impact
        </h2>

        {/* The Exact Core Message requested in Prompt */}
        <blockquote className="max-w-2xl mx-auto p-6 rounded-2xl glass-panel-gold border border-amber-400/30 text-amber-200 text-lg sm:text-xl font-cinzel leading-relaxed italic">
          “You may never know every life you've touched.<br className="hidden sm:inline" />
          But that doesn't mean they weren't touched.”
        </blockquote>

        <p className="text-xs text-slate-400 mt-4">
          Click any orbiting node or the central anchor to inspect ripples of mentorship and infrastructure.
        </p>
      </div>

      {/* Interactive Constellation Canvas */}
      <div className="relative glass-panel rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
        <canvas ref={canvasRef} className="w-full block cursor-pointer" />

        {/* Selected Node Tooltip Overlay */}
        {activeNode && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-md w-11/12 p-4 rounded-xl bg-slate-950/90 border border-amber-400/50 backdrop-blur-md shadow-2xl animate-fade-in flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between text-[11px] font-mono-tech text-amber-300">
                <span>{activeNode.category}</span>
                <button
                  onClick={() => setActiveNode(null)}
                  className="text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <h4 className="text-sm font-bold text-white mb-1 font-cinzel">
                {activeNode.label}
              </h4>
              <p className="text-xs text-slate-300 leading-normal">
                {activeNode.desc}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
