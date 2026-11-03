import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { soundFX } from '../utils/soundEffects';
import { CyberScrambleText } from './CyberScrambleText';
import { ArchitectureModal } from './ArchitectureModal';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'all' | 'security' | 'software' | 'systems';
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  accentColor: string;
  featured?: boolean;
}

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'security', label: 'Cybersecurity & Defenses' },
  { id: 'software', label: 'Software Engineering' },
  { id: 'systems', label: 'Distributed Systems' },
];

const PROJECTS: Project[] = [
  {
    id: 'aegisshield',
    title: 'AegisShield SIEM',
    subtitle: 'Automated Threat Detection & eBPF Runtime Security',
    category: 'security',
    description:
      'Zero-trust runtime intrusion detection engine and cloud vulnerability scanner. Monitors kernel syscalls via eBPF, performs real-time deep packet inspection, and automates active incident quarantine in under 12ms.',
    metrics: [
      { label: 'Detection SLA', value: '< 12ms' },
      { label: 'Rules Tested', value: '450+ CVEs' },
      { label: 'Zero-Day Shield', value: 'Active' },
    ],
    tags: ['Go', 'eBPF', 'Linux Kernel', 'Docker', 'React', 'TypeScript'],
    liveUrl: 'https://github.com/yoniyonatan',
    githubUrl: 'https://github.com/yoniyonatan',
    accentColor: '#10B981',
    featured: true,
  },
  {
    id: 'vortexpay',
    title: 'VortexPay Gateway',
    subtitle: 'High-Frequency Cryptographic Settlement Engine',
    category: 'security',
    description:
      'Real-time payments and cross-border settlement infrastructure with sub-millisecond execution. Built on an event-driven architecture with cryptographic transaction validation and automated fraud detection pipelines.',
    metrics: [
      { label: 'Routing Latency', value: '< 0.5ms' },
      { label: 'Processed Volume', value: '$42M+' },
      { label: 'Security Grade', value: 'PCI-DSS L1' },
    ],
    tags: ['Next.js', 'Hono.js', 'TanStack', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://github.com/yoniyonatan',
    githubUrl: 'https://github.com/yoniyonatan',
    accentColor: '#00E5FF',
    featured: true,
  },
  {
    id: 'aethercloud',
    title: 'AetherSec Cloud',
    subtitle: 'Autonomous Multi-Agent Orchestration & Cloud Defense',
    category: 'systems',
    description:
      'High-throughput distributed agent platform executing asynchronous workflows across hybrid cloud environments. Features real-time state synchronization, fault tolerance with Raft consensus, and predictive GPU auto-scaling.',
    metrics: [
      { label: 'Throughput', value: '1.2M QPS' },
      { label: 'SLA Reliability', value: '99.99%' },
      { label: 'P99 Latency', value: '14ms' },
    ],
    tags: ['Go', 'React', 'TypeScript', 'Docker', 'PostgreSQL', 'Redis'],
    liveUrl: 'https://github.com/yoniyonatan',
    githubUrl: 'https://github.com/yoniyonatan',
    accentColor: '#029BDF',
  },
  {
    id: 'hyperscale',
    title: 'HyperScale DB',
    subtitle: 'Distributed Low-Latency In-Memory Storage Engine',
    category: 'software',
    description:
      'Ultra-low latency memory cache and key-value datastore implemented with custom memory allocators, zero-copy serialization, and multi-region consensus replication for extreme workloads.',
    metrics: [
      { label: 'Read Ops', value: '2.4M/sec' },
      { label: 'Memory Footprint', value: 'Zero-Copy' },
      { label: 'Latency P99', value: '< 80µs' },
    ],
    tags: ['Go', 'Linux C', 'gRPC', 'Docker', 'Protobuf'],
    liveUrl: 'https://github.com/yoniyonatan',
    githubUrl: 'https://github.com/yoniyonatan',
    accentColor: '#4f46e5',
  },
];

// Interactive 3D Spatial Tilt Card with Holographic Specular Glare
function ProjectCard3D({
  project,
  onInspectArch,
}: {
  project: Project;
  onInspectArch: (project: Project) => void;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = -((y - centerY) / centerY) * 10;
    const rY = ((x - centerX) / centerX) * 10;

    setRotX(rX);
    setRotY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundFX.playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotX(0);
    setRotY(0);
  };

  const handleLiveClick = (e: React.MouseEvent) => {
    soundFX.playSuccess();
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        },
        colors: ['#00E5FF', '#4f46e5', '#10B981'],
      });
    } catch {
      // ignore
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
      className="w-full"
    >
      <div
        style={{
          transform: isHovered
            ? `perspective(1200px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(16px) scale(1.02)`
            : 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className={`relative group rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 overflow-hidden border backdrop-blur-2xl holographic-sheen ${
          isHovered
            ? 'border-white/50 bg-white/[0.14] shadow-[0_30px_70px_rgba(0,0,0,0.45)]'
            : 'border-white/20 bg-white/[0.07] shadow-[0_15px_35px_rgba(0,0,0,0.2)]'
        }`}
      >
        {/* Dynamic Specular Glare Follower */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-25 z-0"
            style={{
              background: `radial-gradient(circle 350px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.4), transparent)`,
            }}
          />
        )}

        {/* Corner Glow Accent */}
        <div
          className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-opacity duration-500"
          style={{
            backgroundColor: project.accentColor,
            opacity: isHovered ? 0.35 : 0.08,
          }}
        />

        {/* Top Meta Bar */}
        <div className="relative z-10">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  backgroundColor: project.accentColor,
                  boxShadow: `0 0 10px ${project.accentColor}`,
                }}
              />
              <span className="text-xs uppercase tracking-wider font-mono font-medium text-white/70">
                {project.subtitle}
              </span>
            </div>

            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-white/10 border border-white/20 text-[#00E5FF] font-mono shadow-[0_0_10px_rgba(0,229,255,0.3)]">
                Featured
              </span>
            )}
          </div>

          {/* Project Title with Cyber-Scramble Effect on Hover */}
          <h3
            className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-3 group-hover:text-[#00E5FF] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <CyberScrambleText text={project.title} />
          </h3>

          {/* Project Description */}
          <p className="text-white/80 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {/* Performance Metrics Row */}
          <div className="grid grid-cols-3 gap-2.5 p-3 sm:p-3.5 rounded-2xl bg-black/30 border border-white/10 mb-6 backdrop-blur-md">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-sm sm:text-base font-bold font-mono tracking-tight"
                  style={{ color: i === 0 ? project.accentColor : '#ffffff' }}
                >
                  {m.value}
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/60 font-medium">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions & Tech Tags */}
        <div className="relative z-10">
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-white/85 bg-white/[0.06] border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Interactive Action Links */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
            <div className="flex items-center gap-2">
              <a
                href={project.liveUrl || '#'}
                target="_blank"
                rel="noreferrer"
                onClick={handleLiveClick}
                onMouseEnter={() => soundFX.playHover()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-white text-[#0191EB] hover:bg-white/90 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg active:scale-95"
              >
                <span>Live Preview</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9L9 3M9 3H4M9 3V8" />
                </svg>
              </a>

              <a
                href={project.githubUrl || 'https://github.com/yoniyonatan'}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundFX.playHover()}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium text-white bg-white/10 border border-white/30 hover:bg-white hover:text-[#0191EB] transition-all duration-300 cursor-pointer shadow-md active:scale-95"
              >
                <span>Source</span>
              </a>
            </div>

            {/* Interactive Architecture Blueprint Inspector Trigger */}
            <button
              type="button"
              onClick={() => {
                soundFX.playPowerUp();
                onInspectArch(project);
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00E5FF]/15 border border-[#00E5FF]/40 text-[#00E5FF] hover:bg-[#00E5FF] hover:text-black text-xs font-mono font-semibold transition-all duration-300 cursor-pointer shadow-[0_0_12px_rgba(0,229,255,0.2)] hover:scale-105"
            >
              <span>⚡ ARCHITECTURE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection({
  combinedColor = true,
  inStage = false,
}: {
  combinedColor?: boolean;
  inStage?: boolean;
}) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [archModalProject, setArchModalProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter(
          (p) => p.category === activeCategory || (activeCategory === 'systems' && p.id === 'aethercloud')
        );

  return (
    <>
      <section
        className={`relative z-10 w-full text-white select-none ${
          inStage
            ? 'py-6 sm:py-8 px-3 sm:px-6'
            : `min-h-screen py-28 px-5 sm:px-8 md:px-12 overflow-hidden transition-colors duration-500 ${
                combinedColor
                  ? 'bg-gradient-to-b from-[#0191EB] via-[#166ee8] to-[#2563eb]'
                  : 'bg-[#0191EB]'
              }`
        }`}
      >
        {/* Seamless Top Blend from Hero */}
        {!inStage && (
          <div
            className="absolute inset-x-0 top-0 h-28 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to bottom, #0191EB 0%, rgba(1, 145, 235, 0.4) 50%, transparent 100%)',
            }}
          />
        )}

        {/* Ambient background glowing light orbs */}
        {!inStage && (
          <>
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/15 rounded-full blur-[140px] pointer-events-none animate-orb-1" />
            <div
              className={`absolute bottom-10 right-10 w-[500px] h-[400px] rounded-full blur-[120px] pointer-events-none animate-orb-2 transition-colors duration-500 ${
                combinedColor ? 'bg-[#4f46e5]/35' : 'bg-white/10'
              }`}
            />
          </>
        )}

        {/* Section Header */}
        <div className={`relative z-10 max-w-5xl mx-auto text-center ${inStage ? 'mb-8 sm:mb-10' : 'mb-16'}`}>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/25 bg-white/15 backdrop-blur-md text-white text-[13px] tracking-widest uppercase mb-4 shadow-lg cursor-default"
            onMouseEnter={() => soundFX.playHover()}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] animate-pulse" />
            Featured Work & Architecture
          </div>

          <h2
            className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <CyberScrambleText text="Selected Projects & Systems" />
          </h2>

          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Production systems, real-time distributed platforms, and high-performance digital
            architectures engineered from first principles.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    soundFX.playClick();
                    setActiveCategory(cat.id);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? combinedColor
                        ? 'bg-gradient-to-r from-[#0191EB] to-[#4f46e5] text-white shadow-[0_8px_25px_rgba(79,70,229,0.45)] border border-white/40 scale-105'
                        : 'bg-white text-[#0191EB] shadow-xl scale-105'
                      : 'bg-white/15 text-white border border-white/25 hover:bg-white/25 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard3D
              key={project.id}
              project={project}
              onInspectArch={(p) => setArchModalProject(p)}
            />
          ))}
        </div>
      </section>

      {/* Interactive System Topology Architecture Modal */}
      {archModalProject && (
        <ArchitectureModal
          isOpen={!!archModalProject}
          projectTitle={archModalProject.title}
          onClose={() => setArchModalProject(null)}
        />
      )}
    </>
  );
}
