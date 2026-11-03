import React, { useEffect, useRef } from 'react';
import { soundFX } from '../utils/soundEffects';

export const MatrixRainOverlay: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    soundFX.playPowerUp();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ1234567890@#$%&*+-=';
    const fontSize = 16;
    let columns = Math.floor(width / fontSize);
    let drops: number[] = new Array(columns).fill(1);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = new Array(columns).fill(1);
    };

    window.addEventListener('resize', handleResize);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    let animId: number;
    let lastDraw = 0;

    const render = (time: number) => {
      animId = requestAnimationFrame(render);

      // Throttle to ~30-40fps for authentic retro terminal feel
      if (time - lastDraw < 33) return;
      lastDraw = time;

      // Semi-transparent black background creates fade trail
      ctx.fillStyle = 'rgba(2, 6, 23, 0.12)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Bright leading character
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#00E5FF';
        ctx.shadowBlur = 8;
        ctx.fillText(char, x, y);

        // Green/cyan trailing body
        ctx.fillStyle = i % 2 === 0 ? '#00E5FF' : '#10B981';
        ctx.shadowBlur = 2;
        ctx.fillText(char, x, y - fontSize);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-auto select-none bg-black/60 backdrop-blur-sm animate-fade-in">
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Floating Control HUD */}
      <div className="absolute top-6 right-6 z-10 flex items-center gap-3">
        <div className="px-3 py-1.5 rounded-full bg-black/80 border border-[#00E5FF]/40 text-[#00E5FF] font-mono text-xs shadow-lg animate-pulse">
          ⚡ MATRIX PROTOCOL ACTIVE
        </div>
        <button
          type="button"
          onClick={() => {
            soundFX.playClick();
            onClose();
          }}
          className="px-4 py-1.5 rounded-full bg-white text-black font-mono text-xs font-semibold hover:bg-red-500 hover:text-white transition-all cursor-pointer shadow-xl"
        >
          EXIT [ESC]
        </button>
      </div>
    </div>
  );
};

