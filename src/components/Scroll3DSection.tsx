import { useEffect, useRef, type ReactNode } from 'react';

interface Scroll3DSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function Scroll3DSection({
  children,
  id,
  className = '',
}: Scroll3DSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let rafId: number;
    let isTicking = false;

    const update3D = () => {
      isTicking = false;
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Distance of section center relative to viewport center
      // -1 = above viewport, 0 = centered, +1 = below viewport
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const progress = (elementCenter - viewportCenter) / (windowHeight / 2);

      // Only calculate when near or within view range (-2.2 to 2.2)
      if (progress > -2.2 && progress < 2.2) {
        const p = Math.max(-1.2, Math.min(1.2, progress));

        // Refined luxury 3D Spatial Calculation:
        // Subtle tilt, subtle Z depth, zero blur, and no scale distortion that breaks section seams
        const rotX = p > 0 ? Math.min(p * 1.6, 2.0) : Math.max(p * 1.4, -1.8);
        const transZ = -Math.min(Math.abs(p) * 26, 32);
        const transY = p * 10;
        const opacity = Math.max(0.85, 1 - Math.pow(Math.abs(p) * 0.35, 2));

        el.style.transform = `perspective(1400px) translate3d(0, ${transY.toFixed(1)}px, ${transZ.toFixed(1)}px) rotateX(${rotX.toFixed(2)}deg)`;
        el.style.opacity = opacity.toFixed(3);
      } else {
        el.style.transform = 'perspective(1400px) translate3d(0, 0, -32px) rotateX(0deg)';
        el.style.opacity = '0.85';
      }
    };

    const handleScroll = () => {
      if (!isTicking) {
        isTicking = true;
        rafId = requestAnimationFrame(update3D);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    update3D();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative w-full will-change-transform ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
}
