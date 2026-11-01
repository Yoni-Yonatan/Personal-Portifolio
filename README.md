<div align="center">

# ✦ Yoni Yonatan® — Personal Portfolio

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

This repository houses the source code for the personal portfolio of **Yoni Yonatan** — Software Engineer & Creative Technologist. 

Engineered from first principles, this portfolio blends cutting-edge web design, cinematic interactive media, and spatial 3D physics into a unified digital experience. Every interaction is hardware-accelerated and locked to display refresh rates (60Hz / 120Hz ProMotion).

---

## ✨ Key Features

### 🎬 Interactive Mouse & Touch Video Scrubbing
- **Real-Time Video Timeline Scrubbing**: The background video responds fluidly to mouse horizontal velocity and mobile touch gestures with sensitivity-controlled playback seeking.
- **Dynamic Scroll Atmosphere**: As the user scrolls from the Hero into the portfolio content, the video smoothly dims and deepens, transforming into a subtle ambient living canvas.
- **Dual-Tone Color Grading**: Real-time color overlay grading blending Electric Azure (`#0191EB`) and Deep Indigo (`#4f46e5`) with radial soft-light ambient auras.

### 🌌 3D Spatial Scroll Engine
- **Hardware-Accelerated Perspective**: Custom `Scroll3DSection` component implementing mathematical 3D spatial tilt and depth transforms using `requestAnimationFrame`.
- **Zero Jitter & Crisp Typography**: Fully decoupled from CSS transition fighting and free of blur filters, ensuring text, cards, and diagrams remain pin-sharp at all times.
- **Seamless Continuous Gradients**: Carefully calculated section boundaries that flow uninterrupted down the viewport with zero margin gaps.

### ⚡ Interactive Hero Experience
- **Fluid Typewriter Hook**: Customizable speed and delay typewriter delivering the core engineering thesis.
- **Spatial Thought Orbit**: Transparent, floating skill tags orbitally positioned around the subject with independent floating physics and hover scaling.
- **Quick Action Pills**: Direct smooth-scrolling pills and a one-click clipboard copy widget with animated feedback tooltip.

### 🔮 Interactive Skills Constellation
- **3D Physics Tilting Badges**: Custom interactive `TiltBadge` components with dynamic vector math calculating 3D tilt angles based on cursor offset.
- **Category Filter Pipeline**: Filter across Frontend, Backend, Databases, and DevOps with fluid opacity transitions.
- **Active Node Inspector**: Real-time inspector footer surfacing detailed metadata for highlighted technologies.

### 🚀 Flagship Project Showcase
- **Curated Engineering Case Studies**: Systems including **AetherCloud AI** (1.2M QPS distributed orchestration), **VortexPay Gateway** (sub-millisecond settlement engine), and **HyperScale DB** (zero-copy memory datastore).
- **Architecture Metrics**: Performance metrics (QPS, SLA, P99 Latency) surfaced directly on each card.
- **Direct GitHub & Live Previews**: Fast navigation to repositories and deployments.

### ⏳ Career Milestones Timeline
- **Electric Energy Stream**: Vertical neon conduit featuring an animated streaming energy beam connecting career milestones.
- **Interactive Node Selection**: Alternating desktop timeline cards with real-time selection states and illuminated beacon nodes.

### 🧭 Floating Journey HUD Navigator
- **Glassmorphic Navigation Bar**: Ultra-modern floating HUD featuring live scroll percentage tracking and one-tap section jumping.
- **Scroll Spy**: Auto-detects the active viewport section and highlights navigation pills dynamically.

---

## 🛠️ Technical Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) | Latest React core with optimized concurrent rendering |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict type safety across all components and data models |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Next-generation utility-first styling with high-performance compiler |
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
│   │   ├── BackgroundVideo.tsx # Fixed interactive scrubbing video & ambient tint
│   │   ├── Hero.tsx            # Hero section, typewriter, orbital tags & CTA pills
│   │   ├── ProjectsSection.tsx # Flagship project showcase with metrics & filters
│   │   ├── SkillsSection.tsx   # Interactive 3D tilt constellation & tech stack
│   │   ├── ExperienceSection.tsx # Interactive career timeline with electric stream
│   │   ├── ContactSection.tsx  # Interactive contact form & direct reach channels
│   │   ├── Scroll3DSection.tsx # 3D spatial perspective scroll container
│   │   ├── FloatingNavHUD.tsx  # Floating glassmorphic navigation controller
│   │   ├── Navbar.tsx          # Minimal top brand navigation
│   │   └── TechIcons.tsx       # SVG vector icon collection for tech stack
│   ├── hooks/
│   │   └── useTypewriter.ts    # Custom typewriter effect hook
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
*Software Engineer & Creative Technologist*

- **Website:** [yoniyonatan.com](https://yoniyonatan.com)
- **Email:** [hello@yoniyonatan.com](mailto:hello@yoniyonatan.com)
- **GitHub:** [@Yoni-Yonatan](https://github.com/Yoni-Yonatan)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
