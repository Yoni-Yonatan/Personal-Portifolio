import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'all' | 'fullstack' | 'systems' | 'ai-fintech';
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  accentColor: string;
  gradientBg: string;
  featured?: boolean;
}

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack Apps' },
  { id: 'systems', label: 'Systems & Cloud' },
  { id: 'ai-fintech', label: 'Fintech & AI' },
];

const PROJECTS: Project[] = [
  {
    id: 'aethercloud',
    title: 'AetherCloud AI',
    subtitle: 'Autonomous Multi-Agent Orchestration & Cloud Engine',
    category: 'ai-fintech',
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
    gradientBg: 'from-[#029BDF]/25 via-[#016896]/10 to-transparent',
    featured: true,
  },
  {
    id: 'vortexpay',
    title: 'VortexPay Gateway',
    subtitle: 'High-Frequency Web3 & Multi-Currency Settlement Engine',
    category: 'ai-fintech',
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
    gradientBg: 'from-[#00E5FF]/25 via-[#029BDF]/10 to-transparent',
    featured: true,
  },
  {
    id: 'hyperscale',
    title: 'HyperScale DB',
    subtitle: 'Distributed Low-Latency In-Memory Storage Engine',
    category: 'systems',
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
    gradientBg: 'from-[#4f46e5]/25 via-[#6366F1]/10 to-transparent',
  },
  {
    id: 'pulsestudio',
    title: 'Pulse Studio',
    subtitle: 'GPU-Accelerated WebGL Shader & Node Canvas Platform',
    category: 'fullstack',
    description:
      'Browser-based creative engineering suite featuring node-based visual shader programming, real-time GLSL compilation, and particle physics simulations running at a locked 60 FPS.',
    metrics: [
      { label: 'Render Target', value: '60 FPS 4K' },
      { label: 'Engine Core', value: 'WebGL 2.0' },
      { label: 'Worker Pipeline', value: 'Multi-Thread' },
    ],
    tags: ['React', 'Three.js', 'WebGL', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://github.com/yoniyonatan',
    githubUrl: 'https://github.com/yoniyonatan',
    accentColor: '#10B981',
    gradientBg: 'from-[#10B981]/25 via-[#029BDF]/10 to-transparent',
  },
];

export function ProjectsSection({
  combinedColor = true,
  inStage = false,
}: {
  combinedColor?: boolean;
  inStage?: boolean;
}) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter(
          (p) => p.category === activeCategory || (activeCategory === 'systems' && p.id === 'aethercloud')
        );

  return (
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/25 bg-white/15 backdrop-blur-md text-white text-[13px] tracking-widest uppercase mb-4 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse" />
          Featured Work & Architecture
        </div>

        <h2
          className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Selected Projects & Systems
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
                onClick={() => setActiveCategory(cat.id)}
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
        {filteredProjects.map((project) => {
          const isHovered = hoveredProject === project.id;

          return (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`relative group rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-500 overflow-hidden border backdrop-blur-xl ${
                isHovered
                  ? 'border-white/50 bg-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.2)] -translate-y-2'
                  : 'border-white/25 bg-white/10 shadow-lg'
              }`}
            >
              {/* Corner Glow Accent */}
              <div
                className="absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl pointer-events-none transition-opacity duration-500"
                style={{
                  backgroundColor: project.accentColor,
                  opacity: isHovered ? 0.25 : 0.08,
                }}
              />

              {/* Top Meta Bar */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        backgroundColor: project.accentColor,
                        boxShadow: `0 0 10px ${project.accentColor}`,
                      }}
                    />
                    <span className="text-xs uppercase tracking-wider font-medium text-white/70">
                      {project.subtitle}
                    </span>
                  </div>

                  {project.featured && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-white/10 border border-white/20 text-[#00E5FF]">
                      Featured
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3
                  className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-3 group-hover:text-[#00E5FF] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-white/75 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Performance Metrics Row */}
                <div className="grid grid-cols-3 gap-2.5 p-3 sm:p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 mb-6">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <div
                        className="text-sm sm:text-base font-bold text-white tracking-tight"
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
              <div>
                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium text-white/80 bg-white/[0.05] border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Interactive Action Links */}
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <a
                    href={project.liveUrl || '#'}
                    target="_blank"
                    rel="noreferrer"
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-white bg-white/10 border border-white/30 hover:bg-white hover:text-[#0191EB] transition-all duration-300 cursor-pointer shadow-md active:scale-95"
                  >
                    <span>View Source</span>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
