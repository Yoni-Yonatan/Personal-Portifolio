import { useState } from 'react';
import { TechIcons } from './TechIcons';

interface TechItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'security';
  glowColor: string;
}

const TIER_1: TechItem[] = [
  { id: 'shield', name: 'Cybersecurity', category: 'security', glowColor: '#00E5FF' },
  { id: 'penetration', name: 'Penetration Testing', category: 'security', glowColor: '#10B981' },
  { id: 'cryptography', name: 'Cryptography & Auth', category: 'security', glowColor: '#A855F7' },
  { id: 'network', name: 'Network Security', category: 'security', glowColor: '#0191EB' },
  { id: 'linux', name: 'Linux Hardening', category: 'security', glowColor: '#FBBF24' },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', glowColor: '#3178C6' },
  { id: 'react', name: 'React 19', category: 'frontend', glowColor: '#61DAFB' },
  { id: 'nextjs', name: 'Next.js', category: 'frontend', glowColor: '#FFFFFF' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', glowColor: '#06B6D4' },
  { id: 'nodejs', name: 'Node.js', category: 'backend', glowColor: '#339933' },
  { id: 'go', name: 'Golang / Systems', category: 'backend', glowColor: '#00ADD8' },
  { id: 'docker', name: 'Docker / Sandbox', category: 'devops', glowColor: '#2496ED' },
  { id: 'postgresql', name: 'PostgreSQL', category: 'database', glowColor: '#336791' },
];

const TIER_2: TechItem[] = [
  { id: 'shield', name: 'AppSec / OWASP', category: 'security', glowColor: '#00E5FF' },
  { id: 'penetration', name: 'Vulnerability Analysis', category: 'security', glowColor: '#10B981' },
  { id: 'cryptography', name: 'Zero-Trust Protocol', category: 'security', glowColor: '#A855F7' },
  { id: 'javascript', name: 'ESNext Core', category: 'frontend', glowColor: '#F7DF1E' },
  { id: 'tanstack', name: 'TanStack State', category: 'frontend', glowColor: '#FF4154' },
  { id: 'redux', name: 'Redux Toolkit', category: 'frontend', glowColor: '#764ABC' },
  { id: 'framermotion', name: 'Fluid Motion', category: 'frontend', glowColor: '#0055FF' },
  { id: 'stripe', name: 'Stripe Security API', category: 'backend', glowColor: '#635BFF' },
  { id: 'honojs', name: 'Hono.js Edge', category: 'backend', glowColor: '#FF7A00' },
  { id: 'express', name: 'Express Hardened', category: 'backend', glowColor: '#888888' },
];

const TIER_3: TechItem[] = [
  { id: 'network', name: 'Packet Inspection', category: 'security', glowColor: '#0191EB' },
  { id: 'linux', name: 'Kernel & Syscalls', category: 'security', glowColor: '#FBBF24' },
  { id: 'prisma', name: 'Prisma ORM', category: 'database', glowColor: '#5A67D8' },
  { id: 'firebase', name: 'Firebase Security Rules', category: 'database', glowColor: '#FFA611' },
  { id: 'graphql', name: 'GraphQL Shielded', category: 'backend', glowColor: '#E10098' },
  { id: 'turborepo', name: 'Monorepo Tooling', category: 'devops', glowColor: '#EF4444' },
  { id: 'reactnative', name: 'Secure Mobile', category: 'frontend', glowColor: '#61DAFB' },
];

const TIER_4: TechItem[] = [
  { id: 'docker', name: 'Container Isolation', category: 'devops', glowColor: '#2496ED' },
  { id: 'figma', name: 'UI / UX Design', category: 'frontend', glowColor: '#0ACF83' },
  { id: 'mui', name: 'Design Systems', category: 'frontend', glowColor: '#007FFF' },
];

const TIER_5: TechItem[] = [
  { id: 'shield', name: 'Defensive Architecture', category: 'security', glowColor: '#00E5FF' },
];

const CATEGORIES = [
  { id: 'all', label: 'All Technologies' },
  { id: 'security', label: 'Cybersecurity & Defenses' },
  { id: 'backend', label: 'Backend & Systems' },
  { id: 'frontend', label: 'Frontend Engineering' },
  { id: 'database', label: 'Databases & Cloud' },
  { id: 'devops', label: 'DevSecOps & Tooling' },
];

function TiltBadge({
  children,
  glowColor,
}: {
  children: React.ReactNode;
  glowColor: string;
}) {
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotX(-(y / (rect.height / 2)) * 18);
    setRotY((x / (rect.width / 2)) * 18);
  };

  const handleMouseLeave = () => {
    setRotX(0);
    setRotY(0);
    setIsHovered(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      className="inline-block"
    >
      <div
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(24px) scale(1.12)`
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
          boxShadow: isHovered
            ? `0 20px 40px -8px ${glowColor}, 0 0 25px rgba(0,0,0,0.35)`
            : '0 8px 24px rgba(0,0,0,0.18)',
        }}
        className="relative flex items-center justify-center p-2.5 sm:p-3.5 md:p-4 rounded-2xl bg-white/[0.08] border border-white/20 backdrop-blur-xl hover:border-white/60 hover:bg-white/[0.18] cursor-pointer"
      >
        {children}
      </div>
    </div>
  );
}

export function SkillsSection({
  combinedColor = true,
  inStage = false,
}: {
  combinedColor?: boolean;
  inStage?: boolean;
}) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);

  const isHighlighted = (item: TechItem) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  };

  const renderBadge = (item: TechItem, index: number, tierIndex: number) => {
    const Icon = TechIcons[item.id];
    if (!Icon) return null;

    const highlighted = isHighlighted(item);

    return (
      <div
        key={`${tierIndex}-${item.id}-${index}`}
        onMouseEnter={() => setHoveredTech(item)}
        onMouseLeave={() => setHoveredTech(null)}
        className={`group relative flex items-center justify-center transition-all duration-300 ${
          highlighted
            ? 'opacity-100 scale-100'
            : 'opacity-25 scale-90 grayscale'
        }`}
      >
        {/* Glow backdrop on hover */}
        <div
          className="absolute -inset-3 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-85 pointer-events-none"
          style={{ backgroundColor: item.glowColor }}
        />

        {/* 3D Physics Tilting Icon Card */}
        <TiltBadge glowColor={item.glowColor}>
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
            <Icon size={46} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" />
          </div>
        </TiltBadge>

        {/* Floating Tooltip */}
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 z-30 whitespace-nowrap text-white text-[11px] sm:text-[12px] font-semibold px-2.5 py-1 rounded-full shadow-2xl backdrop-blur-xl border border-white/20 bg-black/85"
        >
          {item.name}
        </div>
      </div>
    );
  };

  return (
    <section
      className={`relative z-10 w-full flex flex-col items-center justify-center text-white select-none ${
        inStage
          ? 'py-6 sm:py-8 px-3 sm:px-6'
          : `min-h-screen py-28 px-4 sm:px-8 overflow-hidden transition-colors duration-500 ${
              combinedColor
                ? 'bg-gradient-to-b from-[#2563eb] via-[#3552e8] to-[#4344e6]'
                : 'bg-[#0191EB]'
            }`
      }`}
    >
      {/* Ambient background light orbs */}
      {!inStage && (
        <>
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-white/10 rounded-full blur-[140px] pointer-events-none animate-orb-1" />
          <div
            className={`absolute bottom-1/4 right-1/4 w-[500px] h-[400px] rounded-full blur-[120px] pointer-events-none animate-orb-2 transition-colors duration-500 ${
              combinedColor ? 'bg-[#4f46e5]/40' : 'bg-white/15'
            }`}
          />
        </>
      )}

      {/* Section Header */}
      <div className={`relative z-10 text-center max-w-2xl mx-auto ${inStage ? 'mb-6 sm:mb-8' : 'mb-12'}`}>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-[13px] tracking-widest uppercase mb-4 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] animate-pulse" />
          Technical Constellation
        </div>
        <h2
          className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-3"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Cybersecurity & Software Engineering Stack
        </h2>
        <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Languages, offensive and defensive security tools, and resilient software engineering frameworks I leverage to design, build, and defend high-concurrency systems.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? combinedColor
                      ? 'bg-gradient-to-r from-[#0191EB] to-[#4f46e5] text-white shadow-[0_6px_20px_rgba(79,70,229,0.45)] border border-white/40 font-semibold scale-105'
                      : 'bg-white text-[#0191EB] shadow-xl scale-105 font-medium'
                    : 'bg-white/15 text-white border border-white/25 hover:bg-white/25 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Constellation Funnel Layout (Matching Reference Image) */}
      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 w-full max-w-5xl mx-auto">
        {/* Tier 1 (Widest top tier) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4.5 w-full">
          {TIER_1.map((item, idx) => renderBadge(item, idx, 1))}
        </div>

        {/* Tier 2 */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 w-full max-w-4xl">
          {TIER_2.map((item, idx) => renderBadge(item, idx, 2))}
        </div>

        {/* Tier 3 (Backend & DBs) */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full max-w-3xl">
          {TIER_3.map((item, idx) => renderBadge(item, idx, 3))}
        </div>

        {/* Tier 4 (Mobile & Tools) */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 w-full max-w-xl">
          {TIER_4.map((item, idx) => renderBadge(item, idx, 4))}
        </div>

        {/* Tier 5 (Apex - Go) */}
        <div className="flex items-center justify-center pt-2">
          {TIER_5.map((item, idx) => renderBadge(item, idx, 5))}
        </div>
      </div>

      {/* Active Inspector Footer */}
      <div className="relative z-10 mt-14 h-8 flex items-center justify-center text-center">
        {hoveredTech ? (
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/15 border border-white/30 backdrop-blur-md text-sm text-white animate-fade-in">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: hoveredTech.glowColor }}
            />
            <span className="font-medium">{hoveredTech.name}</span>
            <span className="text-white/60">|</span>
            <span className="text-xs uppercase tracking-wider text-white/80">
              {hoveredTech.category}
            </span>
          </div>
        ) : (
          <p className="text-xs tracking-wider uppercase text-white/80 font-medium">
            Hover over any technology node to inspect details
          </p>
        )}
      </div>
    </section>
  );
}
