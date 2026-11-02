import { useEffect, useState } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const PILL_BUTTONS = [
  'Explore projects',
  'View tech stack',
  'Work experience',
  "Let's collaborate",
];

const TYPEWRITER_TEXT =
  'Glad you stopped in. Engineering resilient software architectures and defending mission-critical systems. Now, what are we building?';

interface FloatingTag {
  id: string;
  label: string;
  badge?: string;
  glowColor: string;
  dotColor: string;
  className: string;
  animationClass: string;
}

// Positioned in an exact circular orbit around his head (above hair, upper-left, upper-right, right ear, and below chin)
const FLOATING_TAGS: FloatingTag[] = [
  {
    id: 'cybersecurity',
    label: 'Cybersecurity Specialist',
    badge: 'SecOps & Defenses',
    glowColor: 'rgba(0, 229, 255, 0.9)',
    dotColor: '#00E5FF',
    // Directly above the top of his hair
    className: 'top-[2%] sm:top-[4%] right-[6%] sm:right-[14%]',
    animationClass: 'animate-float-1',
  },
  {
    id: 'software-engineer',
    label: 'Software Engineer',
    badge: 'Full-Stack Core',
    glowColor: 'rgba(1, 145, 235, 0.95)',
    dotColor: '#0191EB',
    // Snug beside the left hair curve
    className: 'top-[15%] sm:top-[17%] right-[22%] sm:right-[38%]',
    animationClass: 'animate-float-2',
  },
  {
    id: 'appsec',
    label: 'Application Security',
    badge: 'OWASP & Zero-Trust',
    glowColor: 'rgba(168, 85, 247, 0.85)',
    dotColor: '#A855F7',
    // Snug beside the right hair curve
    className: 'top-[14%] sm:top-[16%] right-[2%] sm:right-[4%]',
    animationClass: 'animate-float-3',
  },
  {
    id: 'systems',
    label: 'Systems & Cloud Architecture',
    badge: 'Scalable Systems',
    glowColor: 'rgba(79, 70, 229, 0.95)',
    dotColor: '#4f46e5',
    // Snug beside the right cheek / ear
    className: 'top-[35%] sm:top-[38%] right-[2%] sm:right-[2%]',
    animationClass: 'animate-float-1',
  },
  {
    id: 'pentesting',
    label: 'Vulnerability Assessment',
    badge: '⚡ PenTesting',
    glowColor: 'rgba(16, 185, 129, 0.85)',
    dotColor: '#10B981',
    // Directly under his chin / collar
    className: 'top-[56%] sm:top-[60%] right-[6%] sm:right-[14%]',
    animationClass: 'animate-float-4',
  },
];

export function Hero({
  combinedColor = true,
  onNavigate,
}: {
  combinedColor?: boolean;
  onNavigate?: (view: 'projects' | 'stack' | 'experience' | 'contact') => void;
}) {
  const { displayed, done } = useTypewriter(TYPEWRITER_TEXT, 38, 600);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Action pill buttons become visible 400ms after page load, independent of typewriter
    const timer = setTimeout(() => {
      setButtonsVisible(true);
    }, 400);

    let rafId: number;
    let isTicking = false;

    const handleScroll = () => {
      if (!isTicking) {
        isTicking = true;
        rafId = requestAnimationFrame(() => {
          isTicking = false;
          setScrollY(window.scrollY);
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@yoniyonatan.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = 'hello@yoniyonatan.com';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="hero" className="relative z-[1] h-screen w-full flex flex-col justify-end pb-16 md:justify-center md:pb-0 px-5 sm:px-8 md:px-12 overflow-hidden select-none">
      {/* 1. Ultra-clean minimal top brand signature (no bulky navbar, transparent, no boundary) */}
      <div
        className="absolute top-6 sm:top-8 left-5 sm:left-10 z-20"
        style={{
          opacity: Math.max(1 - scrollY / 300, 0),
          transform: `translateY(-${scrollY * 0.2}px)`,
        }}
      >
        <div className="inline-flex items-center gap-2 group">
          <span
            className="text-[18px] sm:text-[22px] tracking-tight text-white font-medium drop-shadow-md"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Yoni Yonatan®
          </span>
          <span
            className="text-[18px] text-white/80 select-none leading-none"
            aria-hidden="true"
          >
            ✳︎
          </span>
        </div>
      </div>

      {/* 2. Floating Spatial Thought Tags Around The Head (100% Transparent, No Boundary/Border) */}
      <div
        className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
        style={{
          transform: `perspective(1000px) translate3d(0, ${scrollY * 0.18}px, -${Math.min(scrollY * 0.35, 200)}px) rotateX(${Math.min(scrollY * 0.015, 8)}deg)`,
          opacity: Math.max(1 - scrollY / 420, 0),
          transformOrigin: 'center center',
          willChange: 'transform, opacity',
        }}
      >
        {FLOATING_TAGS.map((tag) => (
          <div
            key={tag.id}
            className={`absolute ${tag.className} ${tag.animationClass} pointer-events-auto transition-all duration-300 hover:scale-105 z-20`}
          >
            <div
              className="relative inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-xl border border-white/20 cursor-default group hover:border-white/50 hover:bg-black/60 transition-all duration-300"
              style={{
                boxShadow: `0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18), 0 0 12px ${tag.dotColor}35`,
              }}
            >
              <span
                className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full shrink-0"
                style={{
                  backgroundColor: tag.dotColor,
                  boxShadow: `0 0 8px ${tag.dotColor}, 0 0 16px ${tag.dotColor}`,
                }}
              />
              <span className="text-white text-[11px] sm:text-[13px] font-semibold tracking-wide whitespace-nowrap">
                {tag.label}
              </span>
              {tag.badge && (
                <span className="text-[10px] sm:text-[11px] font-medium text-white/75 bg-white/10 px-1.5 py-0.5 rounded-full border border-white/10 whitespace-nowrap">
                  {tag.badge.replace(/^[^a-zA-Z0-9]+/, '')}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 3. Main Hero Typography & Call-To-Actions with 3D Depth on Scroll */}
      <div
        className="max-w-xl relative z-20"
        style={{
          transform: `perspective(1000px) translate3d(0, ${scrollY * 0.22}px, -${Math.min(scrollY * 0.45, 260)}px) rotateX(${Math.min(scrollY * 0.02, 10)}deg)`,
          opacity: Math.max(1 - scrollY / 480, 0),
          transformOrigin: 'left bottom',
          willChange: 'transform, opacity',
        }}
      >
        {/* Crisp prestigious status badge & headline */}
        <div className="mb-4 sm:mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/20 text-white text-xs sm:text-[13px] font-medium tracking-wide mb-3 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] animate-pulse" />
            <span className="text-white/90">Available for High-Impact Roles & Contracts</span>
          </div>
          <h1
            className="text-white tracking-tight leading-tight font-medium"
            style={{
              fontSize: 'clamp(24px, 4.4vw, 36px)',
              fontFamily: 'var(--font-heading)',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            Meet <span className="font-semibold text-white">Yoni Yonatan</span>
            <span className="block text-white/80 font-normal text-[0.72em] mt-1 tracking-normal">
              Best Software Engineer & Cybersecurity Specialist
            </span>
          </h1>
        </div>

        {/* Typewriter text */}
        <p
          className="text-white/95 mb-6 sm:mb-7 font-normal"
          style={{
            fontSize: 'clamp(16px, 3.2vw, 20px)',
            lineHeight: 1.45,
            minHeight: '56px',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          }}
        >
          <span>{displayed}</span>
          {!done && (
            <span
              className="inline-block w-[2px] h-[1.1em] bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] align-middle ml-[3px] animate-blink"
              aria-hidden="true"
            />
          )}
        </p>

        {/* Action pill buttons */}
        <div
          className={`flex flex-wrap gap-y-1 transition-all duration-400 ease-out ${
            buttonsVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
          style={{
            transitionProperty: 'opacity, transform',
            transitionDuration: '0.4s',
            transitionTimingFunction: 'ease',
          }}
        >
          {/* White pill buttons */}
          {PILL_BUTTONS.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => {
                if (label === 'Explore projects') {
                  if (onNavigate) onNavigate('projects');
                  else document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                } else if (label === 'View tech stack') {
                  if (onNavigate) onNavigate('stack');
                  else document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' });
                } else if (label === 'Work experience') {
                  if (onNavigate) onNavigate('experience');
                  else document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                } else if (label === "Let's collaborate") {
                  if (onNavigate) onNavigate('contact');
                  else document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`inline-flex items-center justify-center bg-white font-medium border border-transparent rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap transition-all duration-300 cursor-pointer shadow-[0_8px_25px_rgba(0,0,0,0.15)] active:scale-95 ${
                combinedColor
                  ? 'text-[#0191EB] hover:text-[#4f46e5] hover:shadow-[0_10px_25px_rgba(79,70,229,0.3)] hover:scale-105'
                  : 'text-[#0191EB] hover:bg-white/90 hover:scale-105'
              }`}
            >
              {label}
            </button>
          ))}

          {/* Outline pill button */}
          <button
            type="button"
            onClick={handleCopyEmail}
            title="Click to copy email address"
            className={`inline-flex items-center justify-center text-white bg-white/10 backdrop-blur-md border border-white/35 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap gap-2 sm:gap-3 transition-all duration-300 cursor-pointer relative group shadow-lg active:scale-95 font-medium ${
              combinedColor
                ? 'hover:bg-white hover:text-[#4f46e5] hover:border-white hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]'
                : 'hover:bg-white hover:text-[#0191EB]'
            }`}
          >
            <span>
              Reach me:{' '}
              <span className="underline underline-offset-1">
                hello@yoniyonatan.com
              </span>
            </span>

            {/* 12x12 copy icon */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 transition-transform group-hover:scale-110"
              aria-hidden="true"
            >
              <rect x="4" y="4" width="7" height="7" rx="1" />
              <path d="M2.5 8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v0.5" />
            </svg>

            {/* Copied indicator tooltip */}
            {copied && (
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white text-black text-[11px] font-medium px-2 py-0.5 rounded shadow pointer-events-none animate-fade-in">
                Copied!
              </span>
            )}
          </button>
        </div>
      </div>

      {/* 4. Seamless Bottom Transition Veil into Projects */}
      <div
        className="absolute inset-x-0 bottom-0 h-44 sm:h-60 pointer-events-none z-10"
        style={{
          background: combinedColor
            ? 'linear-gradient(to bottom, transparent 0%, rgba(1, 145, 235, 0.4) 40%, rgba(1, 145, 235, 0.85) 75%, #0191EB 100%)'
            : 'linear-gradient(to bottom, transparent 0%, rgba(1, 145, 235, 0.45) 40%, rgba(1, 145, 235, 0.9) 75%, #0191EB 100%)',
        }}
      />

      {/* 5. Sleek 3D Scroll Cue */}
      <div
        onClick={() => {
          if (onNavigate) {
            onNavigate('projects');
          } else {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 cursor-pointer group flex flex-col items-center gap-1.5 transition-all duration-300"
        style={{
          opacity: Math.max(1 - scrollY / 200, 0),
          pointerEvents: scrollY > 200 ? 'none' : 'auto',
        }}
      >
        <span className="text-[11px] tracking-[0.22em] uppercase text-white/70 font-semibold group-hover:text-white transition-colors">
          Explore Projects
        </span>
        <div className="w-5 h-8 rounded-full border border-white/35 flex items-start justify-center p-1 backdrop-blur-md bg-white/10 group-hover:border-white/70 shadow-lg">
          <div className="w-1.5 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
