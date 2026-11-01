import { useEffect, useRef } from 'react';
import heroVid from '../vid/0919(1).mp4';

const VIDEO_URL = heroVid;
const SENSITIVITY = 0.8;

export function BackgroundVideo({ combinedColor = true }: { combinedColor?: boolean }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollVeilRef = useRef<HTMLDivElement | null>(null);
  const prevXRef = useRef<number | null>(null);
  const isSeekingRef = useRef<boolean>(false);
  const targetTimeRef = useRef<number>(0);
  const queuedTargetTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const video = videoRef.current;
      if (!video || !video.duration || Number.isNaN(video.duration)) return;

      const currentX = e.clientX;
      if (prevXRef.current === null) {
        prevXRef.current = currentX;
        return;
      }

      const delta = currentX - prevXRef.current;
      prevXRef.current = currentX;

      const timeOffset = (delta / window.innerWidth) * SENSITIVITY * video.duration;
      const newTarget = Math.min(
        Math.max(0, targetTimeRef.current + timeOffset),
        video.duration
      );
      targetTimeRef.current = newTarget;

      if (isSeekingRef.current) {
        queuedTargetTimeRef.current = newTarget;
      } else {
        isSeekingRef.current = true;
        video.currentTime = newTarget;
      }
    };

    // Also support touch scrubbing for mobile users
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const video = videoRef.current;
      if (!video || !video.duration || Number.isNaN(video.duration)) return;

      const currentX = e.touches[0].clientX;
      if (prevXRef.current === null) {
        prevXRef.current = currentX;
        return;
      }

      const delta = currentX - prevXRef.current;
      prevXRef.current = currentX;

      const timeOffset = (delta / window.innerWidth) * SENSITIVITY * video.duration;
      const newTarget = Math.min(
        Math.max(0, targetTimeRef.current + timeOffset),
        video.duration
      );
      targetTimeRef.current = newTarget;

      if (isSeekingRef.current) {
        queuedTargetTimeRef.current = newTarget;
      } else {
        isSeekingRef.current = true;
        video.currentTime = newTarget;
      }
    };

    const handleTouchEnd = () => {
      prevXRef.current = null;
    };

    const handleMouseLeave = () => {
      prevXRef.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Scroll listener for liquid-smooth background video fading and atmosphere deepening
    let scrollRafId: number;
    let isScrollTicking = false;

    const handleScroll = () => {
      if (!isScrollTicking) {
        isScrollTicking = true;
        scrollRafId = requestAnimationFrame(() => {
          isScrollTicking = false;
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          // Progress from 0 (at hero) to 1 (scrolled through first section)
          const progress = Math.min(Math.max(scrollY / (windowHeight * 0.85), 0), 1);

          if (videoContainerRef.current) {
            // Softly dim the video so it becomes a rich living background for the project sections
            videoContainerRef.current.style.opacity = (1 - progress * 0.7).toFixed(3);
            videoContainerRef.current.style.transform = `scale(${(1 + progress * 0.04).toFixed(4)})`;
          }
          if (scrollVeilRef.current) {
            scrollVeilRef.current.style.opacity = (progress * 0.82).toFixed(3);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(scrollRafId);
    };
  }, []);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      targetTimeRef.current = videoRef.current.currentTime;
    }
  };

  const handleSeeked = () => {
    const video = videoRef.current;
    if (!video) {
      isSeekingRef.current = false;
      return;
    }

    if (queuedTargetTimeRef.current !== null) {
      const nextTime = queuedTargetTimeRef.current;
      queuedTargetTimeRef.current = null;
      video.currentTime = nextTime;
    } else {
      isSeekingRef.current = false;
    }
  };

  return (
    <div className="fixed inset-0 z-0 w-full h-full overflow-hidden pointer-events-none select-none bg-[#0191EB]">
      {/* Video Container with smooth scroll-driven opacity and subtle zoom */}
      <div
        ref={videoContainerRef}
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{ transformOrigin: 'center center' }}
      >
        <video
          ref={videoRef}
          src={VIDEO_URL}
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
          onSeeked={handleSeeked}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{
            objectPosition: '70% center',
            filter: 'brightness(98%) contrast(110%) saturate(115%)',
          }}
        />
      </div>

      {/* 1. Color Grading Tint Overlay (blending Azure & Indigo #4f46e5 when active) */}
      <div
        className="absolute inset-0 pointer-events-none transition-colors duration-500"
        style={{
          background: combinedColor
            ? 'linear-gradient(135deg, rgba(1, 145, 235, 0.22) 0%, rgba(79, 70, 229, 0.20) 100%)'
            : 'rgba(1, 145, 235, 0.22)',
          mixBlendMode: 'overlay',
        }}
      />

      {/* 2. Soft Luminous Ambient Aura */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: combinedColor
            ? 'radial-gradient(circle at 65% 45%, transparent 35%, rgba(1, 145, 235, 0.3) 70%, rgba(79, 70, 229, 0.35) 100%)'
            : 'radial-gradient(circle at 65% 45%, transparent 35%, rgba(1, 145, 235, 0.4) 100%)',
          mixBlendMode: 'soft-light',
        }}
      />

      {/* 3. Floating Animated Glowing Light Orbs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-white/20 blur-[100px] pointer-events-none animate-orb-1" />
      <div
        className={`absolute top-1/2 -right-20 w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none animate-orb-2 transition-colors duration-500 ${
          combinedColor ? 'bg-[#4f46e5]/30' : 'bg-white/15'
        }`}
      />

      {/* Dynamic Scroll Atmosphere Veil (seamlessly dims/deepens video as user scrolls down into content) */}
      <div
        ref={scrollVeilRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: combinedColor
            ? 'linear-gradient(to bottom, rgba(1, 145, 235, 0.25) 0%, rgba(22, 110, 232, 0.55) 40%, rgba(79, 70, 229, 0.78) 100%)'
            : 'rgba(1, 145, 235, 0.65)',
          opacity: 0,
        }}
      />

      {/* 4. Smooth Bottom Transition into the site background */}
      <div
        className="absolute inset-x-0 bottom-0 h-60 sm:h-72 pointer-events-none"
        style={{
          background: combinedColor
            ? 'linear-gradient(to bottom, transparent 0%, rgba(1, 145, 235, 0.3) 30%, rgba(1, 145, 235, 0.75) 65%, #0191EB 100%)'
            : 'linear-gradient(to bottom, transparent 0%, rgba(1, 145, 235, 0.35) 30%, rgba(1, 145, 235, 0.8) 65%, #0191EB 100%)',
        }}
      />
    </div>
  );
}
