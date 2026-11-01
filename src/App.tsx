import { useState } from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Scroll3DSection } from './components/Scroll3DSection';
import { FloatingNavHUD } from './components/FloatingNavHUD';

export function App() {
  const [isCombinedColor] = useState(true);

  return (
    <main
      className={`relative min-h-screen w-full text-white font-body overflow-x-hidden selection:text-white transition-colors duration-500 ${
        isCombinedColor
          ? 'bg-gradient-to-b from-[#0191EB] via-[#1a64df] to-[#4f46e5] selection:bg-[#4f46e5]'
          : 'bg-[#0191EB] selection:bg-white selection:text-[#0191EB]'
      }`}
    >
      {/* Fixed Fullscreen Background Video with Interactive Scrubbing */}
      <BackgroundVideo combinedColor={isCombinedColor} />

      {/* Hero Section */}
      <Hero combinedColor={isCombinedColor} />

      {/* 3D Spatial Scroll Section 1: Flagship Projects */}
      <Scroll3DSection id="projects">
        <ProjectsSection combinedColor={isCombinedColor} />
      </Scroll3DSection>

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
      <FloatingNavHUD combinedColor={isCombinedColor} />
    </main>
  );
}

export default App;
