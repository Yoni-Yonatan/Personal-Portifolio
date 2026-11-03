import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { useTypewriter } from '../hooks/useTypewriter';
import { soundFX } from '../utils/soundEffects';
import { CyberScrambleText } from './CyberScrambleText';

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
    className: 'top-[2%] sm:top-[4%] right-[6%] sm:right-[14%]',
    animationClass: 'animate-float-1',
  },
  {
    id: 'software-engineer',
    label: 'Software Engineer',
    badge: 'Full-Stack Core',
    glowColor: 'rgba(1, 145, 235, 0.95)',
    dotColor: '#0191EB',
    className: 'top-[15%] sm:top-[17%] right-[22%] sm:right-[38%]',
    animationClass: 'animate-float-2',
  },
  {
    id: 'appsec',
    label: 'Application Security',
    badge: 'OWASP & Zero-Trust',
    glowColor: 'rgba(168, 85, 247, 0.85)',
    dotColor: '#A855F7',
    className: 'top-[14%] sm:top-[16%] right-[2%] sm:right-[4%]',
    animationClass: 'animate-float-3',
  },
  {
    id: 'systems',
    label: 'Systems & Cloud Architecture',
    badge: 'Scalable Systems',
    glowColor: 'rgba(79, 70, 229, 0.95)',
    dotColor: '#4f46e5',
    className: 'top-[35%] sm:top-[38%] right-[2%] sm:right-[2%]',
    animationClass: 'animate-float-1',
  },
  {
    id: 'pentesting',
    label: 'Vulnerability Assessment',
    badge: '⚡ PenTesting',
    glowColor: 'rgba(16, 185, 129, 0.85)',
    dotColor: '#10B981',
    className: 'top-[56%] sm:top-[60%] right-[6%] sm:right-[14%]',
    animationClass: 'animate-float-4',
  },
];

export function Hero({
  combinedColor = true,
  onNavigate,
  onOpenTerminal,
  onToggleMatrix,
}: {
  combinedColor?: boolean;
  onNavigate?: (view: 'projects' | 'stack' | 'experience' | 'contact') => void;
  onOpenTerminal?: () => void;
  onToggleMatrix?: () => void;
}) {
  const { displayed, done } = useTypewriter(TYPEWRITER_TEXT, 38, 600);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMuted, setIsMuted] = useState(soundFX.getMuted());

  useEffect(() => {
    const unsub = soundFX.subscribe((muted) => setIsMuted(muted));

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
      unsub();
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleCopyEmail = async () => {
    soundFX.playSuccess();
    try {
      confetti({
        particleCount: 55,
        spread: 60,
        origin: { y: 0.75 },
        colors: ['#00E5FF', '#4f46e5', '#10B981', '#ffffff'],
      });
    } catch {
      // ignore
    }

    try {
      await navigator.clipboard.writeText('hello@yoniyonatan.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
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

  const handlePillClick = (label: string) => {
    soundFX.playClick();
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
  };

  return (
    <section
      id="hero"
      className="relative z-[1] h-screen w-full flex flex-col justify-end pb-16 md:justify-center md:pb-0 px-5 sm:px-8 md:px-12 overflow-hidden select-none"
    >
      {/* 1. Top Brand Signature & Cyber Command Controls */}
      <header
        className="fixed top-0 left-0 right-0 z-30 px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between pointer-events-none transition-all duration-300"
        style={{
          opacity: Math.max(1 - scrollY / 300, 0),
          transform: `translateY(-${scrollY * 0.2}px)`,
        }}
      >
        {/* Brand Logo (Left) */}
        <div className="inline-flex items-center gap-2 group pointer-events-auto">
          <span
            className="text-[18px] sm:text-[22px] tracking-tight text-white font-medium drop-shadow-md cursor-pointer hover:text-[#00E5FF] transition-colors"
            style={{ fontFamily: 'var(--font-heading)' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Yoni Yonatan®
          </span>
          <span
            className="text-[18px] text-[#00E5FF] select-none leading-none animate-spin"
            style={{ animationDuration: '8s' }}
            aria-hidden="true"
          >
            ✳︎
          </span>
        </div>

        {/* Action Controls & Interactive Pills (Right) */}
        <div className="flex items-center gap-2 sm:gap-2.5 pointer-events-auto">
          {/* Cyber Terminal Command Launcher Button */}
          {onOpenTerminal && (
            <button
              type="button"
              onClick={() => {
                soundFX.playPowerUp();
                onOpenTerminal();
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-xl border border-[#00E5FF]/40 text-white text-xs font-mono font-medium transition-all duration-300 cursor-pointer shadow-[0_4px_16px_rgba(0,229,255,0.25)] hover:border-[#00E5FF] hover:scale-105"
              title="Open Cyber Terminal HUD (⌘K)"
            >
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] animate-pulse" />
              <span>TERMINAL</span>
              <span className="hidden md:inline px-1 py-0.2 rounded bg-white/10 text-[9px] text-[#00E5FF] border border-white/15">
                ⌘K
              </span>
            </button>
          )}

          {/* Matrix Rain Toggle */}
          {onToggleMatrix && (
            <button
              type="button"
              onClick={() => {
                soundFX.playClick();
                onToggleMatrix();
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-xl border border-white/20 text-white text-xs font-mono transition-all duration-200 cursor-pointer hover:border-[#10B981] hover:text-[#10B981]"
              title="Toggle Matrix Digital Code Rain"
            >
              <span>⚡ MATRIX</span>
            </button>
          )}

          {/* Procedural Sound FX Toggle */}
          <button
            type="button"
            onClick={() => soundFX.toggleMute()}
            onMouseEnter={() => soundFX.playHover()}
            className={`px-2.5 py-1.5 rounded-full backdrop-blur-xl border text-xs font-mono transition-all duration-200 cursor-pointer ${
              !isMuted
                ? 'bg-white/20 border-white/40 text-white shadow-[0_0_10px_rgba(255,255,255,0.3)]'
                : 'bg-black/50 border-white/15 text-white/50 hover:text-white'
            }`}
            title={isMuted ? 'Unmute procedural sound synthesizer' : 'Mute sound synthesizer'}
          >
            {!isMuted ? '🔊 SFX' : '🔇 SFX'}
          </button>
        </div>
      </header>

      {/* 2. Floating Spatial Thought Tags Around The Head */}
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
            onMouseEnter={() => soundFX.playHover()}
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

      {/* 3. Hero Main Content Area: Typography & Actions with 3D Depth on Scroll */}
      <div
        className="max-w-xl relative z-20"
        style={{
          transform: `perspective(1000px) translate3d(0, ${scrollY * 0.22}px, -${Math.min(scrollY * 0.45, 260)}px) rotateX(${Math.min(scrollY * 0.02, 10)}deg)`,
          opacity: Math.max(1 - scrollY / 480, 0),
          transformOrigin: 'left bottom',
          willChange: 'transform, opacity',
        }}
      >
        {/* Status Badge */}
        <div className="mb-4 sm:mb-5">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs sm:text-[13px] font-medium tracking-wide mb-3 shadow-lg hover:border-[#00E5FF]/50 transition-colors cursor-default"
            onMouseEnter={() => soundFX.playHover()}
          >
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] animate-pulse" />
            <span className="text-white/90">Available for High-Impact Roles & Contracts</span>
          </div>

          <h1
            className="text-white tracking-tight leading-tight font-medium"
            style={{
              fontSize: 'clamp(26px, 4.6vw, 42px)',
              fontFamily: 'var(--font-heading)',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            Meet <span className="font-semibold text-white">Yoni Yonatan</span>
            <span className="block text-[#00E5FF] font-medium text-[0.68em] mt-1.5 tracking-wide uppercase font-mono">
              <CyberScrambleText text="Best Software Engineer & Cybersecurity Specialist" />
            </span>
          </h1>
        </div>

        {/* Typewriter text */}
        <p
          className="text-white/95 mb-6 sm:mb-7 font-normal"
          style={{
            fontSize: 'clamp(15px, 2.8vw, 19px)',
            lineHeight: 1.5,
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
        >
          {/* White pill buttons */}
          {PILL_BUTTONS.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => handlePillClick(label)}
              onMouseEnter={() => soundFX.playHover()}
              className={`inline-flex items-center justify-center bg-white font-medium border border-transparent rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.35em] mx-[0.2em] mb-[0.4em] whitespace-nowrap transition-all duration-300 cursor-pointer shadow-[0_8px_25px_rgba(0,0,0,0.15)] active:scale-95 ${
                combinedColor
                  ? 'text-[#0191EB] hover:text-[#4f46e5] hover:shadow-[0_10px_25px_rgba(79,70,229,0.4)] hover:scale-105'
                  : 'text-[#0191EB] hover:bg-white/90 hover:scale-105'
              }`}
            >
              {label}
            </button>
          ))}

          {/* Email Copy Pill Button */}
          <button
            type="button"
            onClick={handleCopyEmail}
            onMouseEnter={() => soundFX.playHover()}
            title="Click to copy email address"
            className={`inline-flex items-center justify-center text-white bg-white/10 backdrop-blur-md border border-white/35 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.35em] mx-[0.2em] mb-[0.4em] whitespace-nowrap gap-2 sm:gap-3 transition-all duration-300 cursor-pointer relative group shadow-lg active:scale-95 font-medium ${
              combinedColor
                ? 'hover:bg-white hover:text-[#4f46e5] hover:border-white hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]'
                : 'hover:bg-white hover:text-[#0191EB]'
            }`}
          >
            <span>
              Reach me:{' '}
              <span className="underline underline-offset-1 font-mono text-[0.95em]">
                hello@yoniyonatan.com
              </span>
            </span>

            {/* Copy Icon */}
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
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#00E5FF] text-black text-[11px] font-bold px-2 py-0.5 rounded shadow pointer-events-none animate-fade-in font-mono">
                Copied! ✓
              </span>
            )}
          </button>
        </div>
      </div>

      {/* 4. Bottom Blend Gradient into Next Section */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 sm:h-44 pointer-events-none z-10"
        style={{
          background: combinedColor
            ? 'linear-gradient(to bottom, transparent 0%, rgba(1, 145, 235, 0.4) 40%, rgba(1, 145, 235, 0.85) 75%, #0191EB 100%)'
            : 'linear-gradient(to bottom, transparent 0%, rgba(1, 145, 235, 0.45) 40%, rgba(1, 145, 235, 0.9) 75%, #0191EB 100%)',
        }}
      />
    </section>
  );
}
