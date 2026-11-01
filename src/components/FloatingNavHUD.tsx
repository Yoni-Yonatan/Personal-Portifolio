import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Orbit', icon: '✦' },
  { id: 'projects', label: 'Projects', icon: '⚡' },
  { id: 'stack', label: 'Skills', icon: '🔮' },
  { id: 'experience', label: 'Career', icon: '⏳' },
  { id: 'contact', label: 'Contact', icon: '✉️' },
];

export function FloatingNavHUD({ combinedColor = true }: { combinedColor?: boolean }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId: number;
    let isTicking = false;

    const handleScroll = () => {
      if (!isTicking) {
        isTicking = true;
        rafId = requestAnimationFrame(() => {
          isTicking = false;
          const scrollY = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (docHeight > 0) {
            setScrollProgress(Math.min(100, Math.max(0, Math.round((scrollY / docHeight) * 100))));
          }

          // Check which section is in view
          const sections = ['contact', 'experience', 'stack', 'projects', 'hero'];
          for (const id of sections) {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= window.innerHeight * 0.45) {
                setActiveSection(id);
                break;
              }
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 select-none animate-fade-in">
      <div className="flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full bg-black/60 backdrop-blur-3xl border border-white/25 shadow-[0_18px_50px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.25)]">
        {/* Scroll Progress Ring / Percentage */}
        <div className="hidden sm:flex items-center gap-1.5 pl-3 pr-2.5 py-1 border-r border-white/15 text-[11px] font-mono text-white/80">
          <span
            className={`w-2 h-2 rounded-full animate-pulse ${
              combinedColor ? 'bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]' : 'bg-white'
            }`}
          />
          <span className="font-semibold">{scrollProgress}%</span>
        </div>

        {/* Section Navigation Buttons */}
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                isActive
                  ? combinedColor
                    ? 'bg-gradient-to-r from-[#0191EB] via-[#3552e8] to-[#4f46e5] text-white shadow-[0_0_20px_rgba(0,229,255,0.45)] scale-105 font-semibold border border-white/30'
                    : 'bg-white text-[#0191EB] shadow-lg scale-105 font-semibold'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="text-xs sm:text-sm">{item.icon}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
