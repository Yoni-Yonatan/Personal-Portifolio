import { useState } from 'react';
import { soundFX } from '../utils/soundEffects';
import { CyberScrambleText } from './CyberScrambleText';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
  accentColor: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'lead-architect',
    role: 'Lead Systems Architect & Core Engineer',
    company: 'NovaScale Systems',
    period: '2024 — Present',
    location: 'Remote / Global',
    type: 'Full-Time',
    description:
      'Directing core architecture for high-concurrency cloud infrastructure and distributed microservices. Engineering fault-tolerant event backbones and multi-region data replication.',
    achievements: [
      'Architected distributed telemetry ingestion processing 1.2M events/sec with sub-20ms ingestion latency.',
      'Spearheaded transition to containerized microservices on Kubernetes, reducing cloud spend by 38%.',
      'Engineered automated chaos-engineering validation ensuring continuous 99.99% system availability.',
    ],
    skills: ['Go', 'Docker', 'PostgreSQL', 'Redis', 'Kubernetes', 'TypeScript'],
    accentColor: '#029BDF',
  },
  {
    id: 'senior-fullstack',
    role: 'Senior Full-Stack & Cloud Engineer',
    company: 'Hyperion Labs',
    period: '2023 — 2024',
    location: 'Remote',
    type: 'Contract',
    description:
      'Engineered edge-computed API gateway with sub-millisecond route resolution. Architected real-time client state management and interactive web dashboards.',
    achievements: [
      'Built edge API layer with Hono.js on distributed edge workers, decreasing p99 latency to under 12ms.',
      'Integrated TanStack Query caching architecture, slashing redundant backend requests by 64%.',
      'Authored comprehensive automated test suites with 92% coverage across critical payment pipelines.',
    ],
    skills: ['Next.js', 'Hono.js', 'TanStack', 'PostgreSQL', 'Tailwind CSS'],
    accentColor: '#00E5FF',
  },
  {
    id: 'sec-engineer',
    role: 'Software & Security Engineer',
    company: 'Aether Dynamics',
    period: '2022 — 2023',
    location: 'Remote',
    type: 'Full-Time',
    description:
      'Engineered hardened full-stack web applications, implemented OAuth2/OIDC zero-trust authentication, and conducted internal code auditing to eliminate OWASP Top 10 vulnerabilities.',
    achievements: [
      'Implemented automated static and dynamic security analysis (SAST/DAST) in CI/CD pipelines.',
      'Cut initial bundle sizes by 45% through aggressive asset pipeline optimization and tree-shaking.',
      'Hardened microservices against CSRF, SSRF, and SQLi with comprehensive cryptographic validations.',
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'OAuth2', 'AppSec'],
    accentColor: '#4f46e5',
  },
  {
    id: 'oss-contributor',
    role: 'Security Researcher & Systems Contributor',
    company: 'Global OSS Community',
    period: '2021 — 2022',
    location: 'Decentralized',
    type: 'Research & Open Source',
    description:
      'Researched Linux kernel memory safety, authored open-source network probing utilities, and published analyses on distributed zero-copy serialization and threat vectors.',
    achievements: [
      'Authored lightweight Go security benchmarking utilities with over 1,500+ GitHub community stars.',
      'Published engineering writeups on memory safety, buffer management, and Raft consensus protocols.',
      'Contributed security patches to open-source web ecosystems and networking CLI tooling.',
    ],
    skills: ['Go', 'Linux', 'Network Security', 'Git', 'Distributed Systems'],
    accentColor: '#10B981',
  },
];

export function ExperienceSection({
  combinedColor = true,
  inStage = false,
}: {
  combinedColor?: boolean;
  inStage?: boolean;
}) {
  const [activeItem, setActiveItem] = useState<string>(EXPERIENCES[0].id);

  return (
    <section
      className={`relative z-10 w-full text-white select-none ${
        inStage
          ? 'py-6 sm:py-8 px-3 sm:px-6'
          : `min-h-screen py-28 px-5 sm:px-8 md:px-12 overflow-hidden transition-colors duration-500 ${
              combinedColor
                ? 'bg-gradient-to-b from-[#4344e6] via-[#4842e6] to-[#4f46e5]'
                : 'bg-[#0191EB]'
            }`
      }`}
    >
      {/* Ambient background glowing light orbs */}
      {!inStage && (
        <>
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-white/10 rounded-full blur-[160px] pointer-events-none animate-orb-1" />
          <div
            className={`absolute bottom-10 left-10 w-[500px] h-[400px] rounded-full blur-[140px] pointer-events-none animate-orb-2 transition-colors duration-500 ${
              combinedColor ? 'bg-[#4f46e5]/40' : 'bg-white/15'
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
          Career Milestones & Trajectory
        </div>

        <h2
          className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <CyberScrambleText text="Work Experience & Impact" />
        </h2>

        <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          From open-source systems research to leading enterprise cloud infrastructure.
          Every role defined by high-velocity delivery, architectural rigor, and clean execution.
        </p>
      </div>

      {/* Interactive Timeline Container */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Central Vertical Neon Line with Animated Electric Energy Stream */}
        <div className="absolute left-4 sm:left-6 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-white/20 overflow-hidden rounded-full">
          <div
            className={`w-full h-36 animate-stream-down ${
              combinedColor
                ? 'bg-gradient-to-b from-[#0191EB] via-white to-[#4f46e5]'
                : 'bg-gradient-to-b from-transparent via-white to-transparent'
            }`}
          />
        </div>

        <div className="flex flex-col gap-10 sm:gap-14">
          {EXPERIENCES.map((exp, index) => {
            const isEven = index % 2 === 0;
            const isSelected = activeItem === exp.id;

            return (
              <div
                key={exp.id}
                onClick={() => {
                  setActiveItem(exp.id);
                  soundFX.playClick();
                }}
                onMouseEnter={() => soundFX.playHover()}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 cursor-pointer group`}
              >
                {/* Left / Right Card Placement */}
                <div
                  className={`w-full md:w-1/2 pl-10 sm:pl-14 md:pl-0 ${
                    isEven ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12 md:text-left'
                  }`}
                >
                  <div
                    className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-300 border backdrop-blur-2xl ${
                      isSelected
                        ? combinedColor
                          ? 'bg-gradient-to-br from-white/25 to-[#4f46e5]/30 border-white/60 shadow-[0_20px_50px_rgba(79,70,229,0.35)] -translate-y-1'
                          : 'bg-white/25 border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.22)] -translate-y-1'
                        : 'bg-white/[0.08] border-white/20 hover:border-white/45 hover:bg-white/[0.14]'
                    }`}
                  >
                    {/* Period & Role Tag */}
                    <div
                      className={`flex flex-wrap items-center gap-2 mb-3 ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      }`}
                    >
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/20 font-mono"
                        style={{
                          backgroundColor: `${exp.accentColor}20`,
                          color: exp.accentColor,
                          boxShadow: `0 0 12px ${exp.accentColor}30`,
                        }}
                      >
                        {exp.period}
                      </span>
                      <span className="text-xs text-white/60 font-medium">
                        {exp.type} • {exp.location}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h3
                      className="text-xl sm:text-2xl font-medium text-white tracking-tight mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {exp.role}
                    </h3>

                    {/* Company */}
                    <div
                      className="text-sm font-semibold tracking-wide mb-4 font-mono"
                      style={{ color: exp.accentColor }}
                    >
                      {exp.company}
                    </div>

                    {/* Description */}
                    <p className="text-white/80 text-sm sm:text-[14.5px] leading-relaxed mb-5 font-normal">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="flex flex-col gap-2.5 mb-5 text-left">
                      {exp.achievements.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                          <span
                            className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{
                              backgroundColor: exp.accentColor,
                              boxShadow: `0 0 6px ${exp.accentColor}`,
                            }}
                          />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div
                      className={`flex flex-wrap gap-1.5 ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      }`}
                    >
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium text-white/75 bg-white/5 border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Beacon Node */}
                <div className="flex absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 top-8 md:top-auto items-center justify-center z-10">
                  <div
                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 ${
                      isSelected ? 'scale-125 shadow-lg' : 'group-hover:scale-110'
                    }`}
                    style={{
                      backgroundColor: exp.accentColor,
                      boxShadow: `0 0 16px ${exp.accentColor}`,
                    }}
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white" />
                  </div>
                </div>

                {/* Empty opposite container for symmetrical spacing */}
                <div
                  className={`hidden md:block w-1/2 ${
                    isEven ? 'order-2 pl-12' : 'order-1 pr-12'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
