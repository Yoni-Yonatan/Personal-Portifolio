import React, { useEffect, useRef, useState } from 'react';
import { soundFX } from '../utils/soundEffects';

const TICKER_ITEMS = [
  'CYBERSECURITY ARCHITECTURE',
  '1.2M QPS DISTRIBUTED SYSTEMS',
  'eBPF KERNEL DEFENSES',
  'ZERO-TRUST SECURITY PROTOCOLS',
  'REACT 19 & TYPESCRIPT',
  'HIGH-CONCURRENCY GOLANG',
  'HARDENED CLOUD INFRASTRUCTURE',
  'PENETRATION TESTING & SAST',
  'SUB-MILLISECOND SETTLEMENT ENGINES',
  'TAILWIND CSS V4 & SPATIAL 3D',
];

export const KineticTicker: React.FC<{
  speed?: number;
  reverse?: boolean;
  className?: string;
}> = ({ speed = 35, reverse = false, className = '' }) => {
  const [scrollVelocity, setScrollVelocity] = useState(1);
  const lastScrollY = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(() => {
          tickingRef.current = false;
          const currentY = window.scrollY;
          const delta = Math.abs(currentY - lastScrollY.current);
          lastScrollY.current = currentY;

          // Temporarily boost ticker velocity during rapid scrolling
          const velocity = Math.min(1 + delta * 0.08, 4.5);
          setScrollVelocity(velocity);

          // Smoothly decay back to normal speed
          setTimeout(() => setScrollVelocity(1), 300);
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className={`relative w-full overflow-hidden py-3 select-none border-y border-white/10 bg-black/40 backdrop-blur-md ${className}`}
    >
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />

      <div
        className="flex whitespace-nowrap will-change-transform"
        style={{
          animation: `${reverse ? 'tickerRight' : 'tickerLeft'} ${speed / scrollVelocity}s linear infinite`,
        }}
      >
        {items.map((text, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-4 mx-6 group cursor-default transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => soundFX.playHover()}
          >
            <span
              className="text-[13px] sm:text-[15px] font-mono tracking-wider font-semibold text-white/85 group-hover:text-[#00E5FF] transition-colors duration-200"
              style={{ letterSpacing: '0.12em' }}
            >
              {text}
            </span>
            <span className="text-[#00E5FF] group-hover:scale-125 transition-transform duration-300 text-xs opacity-75">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

