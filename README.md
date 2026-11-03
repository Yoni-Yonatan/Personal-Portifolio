<div align="center">

# ✦ Yoni Yonatan® — Best Software Engineer & Cybersecurity Specialist

**A high-performance, interactive 3D spatial developer portfolio crafted with React 19, TypeScript, and Tailwind CSS v4.**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

[Live Demo](https://github.com/Yoni-Yonatan/Personal-Portifolio) • [Explore Projects](#-flagship-projects) • [Tech Stack](#-technical-stack) • [Getting Started](#-getting-started)

---

</div>

## 🌟 Overview

This repository houses the source code for the personal portfolio of **Yoni Yonatan** — Best Software Engineer & Cybersecurity Specialist. 

Engineered from first principles, this portfolio showcases resilient software architectures, application security defenses, and spatial 3D physics into a unified digital experience. Every interaction is hardware-accelerated and locked to display refresh rates (60Hz / 120Hz ProMotion).

---

## ✨ Key Features

### ⚡ Cyber Decryption Typography & Kinetic Marquee
- **Matrix Scramble Text Animation**: Titles, badges, and headings feature real-time letter-by-letter glyph decryption (`01`, `λ`, `✦`, `§`, `Ψ`, `Ω`, `⚡`) on mount and hover.
- **Velocity-Responsive Kinetic Marquee**: Dual-stream infinite typography marquee that dynamically accelerates in response to user scroll velocity.

### 🖥️ Interactive Cyber Defense Terminal (`⌘K` / `Ctrl+K`)
- **Authentic Hacker CLI**: Keyboard-first diagnostic terminal featuring CRT scanline aesthetics, command history, and reactive sound synthesis.
- **Diagnostic Commands**:
  - `audit`: Executes an interactive zero-trust vulnerability and kernel eBPF tracepoint assessment.
  - `matrix`: Toggles full-screen streaming digital code rain.
  - `benchmark`: Analyzes real-time client heap allocation, GPU acceleration, and refresh rate lock.
  - `skills`: Generates an ASCII architecture topology map.
  - `sound`: Toggles procedural audio synthesis.

### 🔊 Procedural Web Audio API Sound Synthesizer
- **Zero Asset Overhead**: 100% synthesized procedural sound effects using native Web Audio API oscillators and gain envelopes.
- **Interactive Audio Feedback**: Tactile mechanical clicks, soft 1200Hz cyber blips, power-up hums, and pentatonic completion chimes with global mute memory (`localStorage`).

### 🏛️ Interactive System Topology Blueprint Inspector
- **Flagship Project Deep Dive**: Click "⚡ ARCHITECTURE" on any project card to open an interactive system flow blueprint.
- **Live Pipeline Flow**: Visualizes packet transit from Edge Anycast WAF → eBPF Kernel Gateway → Zero-Trust mTLS Mesh → Raft Distributed Cluster.
- **Interactive Telemetry**: Real-time throughput (1.2M+ QPS), sub-millisecond latency readouts, and cipher specs.

### 🎬 Interactive Mouse & Touch Video Scrubbing
- **Real-Time Video Timeline Scrubbing**: The background video responds fluidly to mouse horizontal velocity and mobile touch gestures with sensitivity-controlled playback seeking.
- **Dynamic Scroll Atmosphere**: As the user scrolls from the Hero into the portfolio content, the video smoothly dims and deepens, transforming into a subtle ambient living canvas.
- **Dual-Tone Color Grading**: Real-time color overlay grading blending Electric Azure (`#0191EB`) and Deep Indigo (`#4f46e5`) with radial soft-light ambient auras.

### 🌌 3D Spatial Scroll Engine & Holographic Cards
- **Hardware-Accelerated Perspective**: Custom `Scroll3DSection` component implementing mathematical 3D spatial tilt and depth transforms using `requestAnimationFrame`.
- **Holographic Specular Glare**: Project cards dynamically track cursor coordinates, calculating 3D tilt angles and rendering a radiant radial specular reflection.
- **Precision Custom Cursor**: Trailing cyber halo with auto-expansion over clickable targets and touch-screen safety.

### 🧭 Floating Journey HUD Navigator
- **Glassmorphic Navigation Bar**: Ultra-modern floating HUD featuring live scroll percentage tracking, one-tap section jumping, and one-click `⌘K` terminal access.

---

## 🛠️ Technical Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) | Latest React core with optimized concurrent rendering |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict type safety across all components and data models |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Next-generation utility-first styling with high-performance compiler |
| **Audio Synthesis** | Web Audio API | Zero-overhead mathematical procedural synthesizer (clicks, blips, chimes) |
| **Build Tool** | [Vite 8](https://vitejs.dev/) | Ultra-fast HMR and optimized Rollup production bundling |
| **Linter** | [Oxlint](https://oxc.rs/) | Rust-powered high-performance JavaScript/TypeScript linter |
| **Deployment** | [Vercel](https://vercel.com/) | Edge-optimized continuous deployment with zero-config |

---

## 📂 Project Structure

```text
Personal-Portifolio/
├── public/                     # Static assets, favicon, security headers
│   ├── favicon.svg
│   ├── icons.svg
│   └── _headers
├── src/
│   ├── assets/                 # Icons, images, and branding assets
│   ├── components/             # Modular React components
│   │   ├── ArchitectureModal.tsx # Interactive system topology blueprint inspector
│   │   ├── BackgroundVideo.tsx # Fixed interactive scrubbing video & ambient tint
│   │   ├── CustomCursor.tsx    # Hardware-accelerated cyber cursor & spotlight
│   │   ├── CyberScrambleText.tsx # Matrix decryption typography animator
│   │   ├── CyberTerminalModal.tsx # Interactive hacker diagnostic CLI (⌘K)
│   │   ├── ExperienceSection.tsx # Interactive career timeline with electric stream
│   │   ├── FloatingNavHUD.tsx  # Floating glassmorphic navigation controller
│   │   ├── Hero.tsx            # Hero section, typewriter, 3D Core, orbital tags & CTA pills
│   │   ├── KineticTicker.tsx   # Velocity-responsive typography marquee
│   │   ├── MatrixRainOverlay.tsx # Fullscreen falling digital code rain
│   │   ├── Navbar.tsx          # Minimal top brand navigation
│   │   ├── ProjectsSection.tsx # Flagship project showcase with 3D holographic tilt
│   │   ├── Scroll3DSection.tsx # 3D spatial perspective scroll container
│   │   ├── SkillsSection.tsx   # Interactive 3D tilt constellation & tech stack
│   │   └── TechIcons.tsx       # SVG vector icon collection for tech stack
│   ├── hooks/
│   │   └── useTypewriter.ts    # Custom typewriter effect hook
│   ├── utils/
│   │   └── soundEffects.ts     # Procedural Web Audio API sound synthesizer
│   ├── vid/                    # Background MP4 video media
│   ├── App.tsx                 # Root layout & section composition
│   ├── index.css               # Global theme tokens, keyframes & Tailwind imports
│   └── main.tsx                # React DOM root entrypoint
├── .gitignore
├── index.html                  # HTML5 template with modern font imports
├── package.json
├── tsconfig.json
├── vercel.json                 # Vercel deployment & routing configuration
└── vite.config.ts              # Vite plugins & build settings
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or higher) and [npm](https://www.npmjs.com/) installed.

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Yoni-Yonatan/Personal-Portifolio.git
   cd Personal-Portifolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ⚙️ Available Scripts

- `npm run dev`: Starts the Vite local development server with instant Hot Module Replacement (HMR).
- `npm run build`: Type-checks with `tsc -b` and produces an optimized production bundle in `dist/`.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs Oxlint for ultra-fast static code analysis.

---

## ⚡ Performance & Design Engineering

- **60/120 FPS Frame Budget**: Scroll transformations and video scrubbing are executed inside `requestAnimationFrame` loops, preventing main-thread layout thrashing.
- **Zero Heavy 3D Libraries**: Spatial depth is achieved using pure CSS 3D transforms (`perspective`, `rotateX`, `translate3d`) without the bundle weight of Three.js or heavy canvas runtimes.
- **Sub-Second Build Times**: Powered by Vite 8 and Oxlint for lightning-fast feedback cycles.
- **Fully Responsive**: Fluid typography (`clamp()`) and adaptive grid layouts engineered for screens from 320px mobile displays to 4K ultrawide monitors.

---

## 📬 Contact & Connect

**Yoni Yonatan**  
*Best Software Engineer & Cybersecurity Specialist*

- **Website:** [yoniyonatan.com](https://yoniyonatan.com)
- **Email:** [hello@yoniyonatan.com](mailto:hello@yoniyonatan.com)
- **GitHub:** [@Yoni-Yonatan](https://github.com/Yoni-Yonatan)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
