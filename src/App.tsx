import { useState, useEffect } from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Scroll3DSection } from './components/Scroll3DSection';
import { FloatingNavHUD } from './components/FloatingNavHUD';
import { KineticTicker } from './components/KineticTicker';
import { CyberTerminalModal } from './components/CyberTerminalModal';
import { MatrixRainOverlay } from './components/MatrixRainOverlay';
import { CustomCursor } from './components/CustomCursor';
import { soundFX } from './utils/soundEffects';

export function App() {
  const [isCombinedColor] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isMatrixOpen, setIsMatrixOpen] = useState(false);

  // Global Keyboard Shortcuts (⌘K / Ctrl+K for Cyber Terminal, Esc for close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        soundFX.playPowerUp();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main
      className={`relative min-h-screen w-full text-white font-body overflow-x-hidden selection:text-white transition-colors duration-500 ${
        isCombinedColor
          ? 'bg-gradient-to-b from-[#0191EB] via-[#1a64df] to-[#4f46e5] selection:bg-[#4f46e5]'
          : 'bg-[#0191EB] selection:bg-white selection:text-[#0191EB]'
      }`}
    >
      {/* Hardware-Accelerated Cyber Cursor & Spotlight Follower */}
      <CustomCursor />

      {/* Fixed Fullscreen Background Video with Interactive Mouse Scrubbing */}
      <BackgroundVideo combinedColor={isCombinedColor} />

      {/* Interactive Hero with 3D Quantum Defense Core & Command Bar */}
      <Hero
        combinedColor={isCombinedColor}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onToggleMatrix={() => setIsMatrixOpen((prev) => !prev)}
      />

      {/* High-Impact Kinetic Marquee Ticker 1 */}
      <KineticTicker speed={38} className="my-0" />

      {/* 3D Spatial Scroll Section 1: Flagship Projects & Live Architecture */}
      <Scroll3DSection id="projects">
        <ProjectsSection combinedColor={isCombinedColor} />
      </Scroll3DSection>

      {/* High-Impact Kinetic Marquee Ticker 2 (Reverse direction) */}
      <KineticTicker speed={42} reverse={true} className="my-0" />

      {/* 3D Spatial Scroll Section 2: Technical Skills Constellation */}
      <Scroll3DSection id="stack">
        <SkillsSection combinedColor={isCombinedColor} />
      </Scroll3DSection>

      {/* 3D Spatial Scroll Section 3: Career Milestones & Experience */}
      <Scroll3DSection id="experience">
        <ExperienceSection combinedColor={isCombinedColor} />
      </Scroll3DSection>

      {/* 3D Spatial Scroll Section 4: Collaboration & Contact Hub */}
      <Scroll3DSection id="contact">
        <ContactSection combinedColor={isCombinedColor} />
      </Scroll3DSection>

      {/* Luxury 3D Floating Journey HUD Navigator */}
      <FloatingNavHUD
        combinedColor={isCombinedColor}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onToggleMatrix={() => setIsMatrixOpen((prev) => !prev)}
      />

      {/* Full-Screen Matrix Digital Code Rain Stream */}
      <MatrixRainOverlay
        isOpen={isMatrixOpen}
        onClose={() => setIsMatrixOpen(false)}
      />

      {/* Interactive Cyber Command Terminal Modal (⌘K) */}
      <CyberTerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onToggleMatrix={() => setIsMatrixOpen((prev) => !prev)}
      />
    </main>
  );
}

export default App;
