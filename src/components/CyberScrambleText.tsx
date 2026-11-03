import React, { useEffect, useRef, useState, useCallback } from 'react';
import { soundFX } from '../utils/soundEffects';

const GLYPHS = '01アイウエオカキクケコサシスセソタチツテトナニヌネハヒフヘホマミムメモヤユヨラリルレロワヲンλΩΨ§✦⚡⌘#%$*';

interface CyberScrambleTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div' | 'p';
  scrambleOnHover?: boolean;
  triggerOnMount?: boolean;
  speed?: number;
  glowOnScramble?: boolean;
  style?: React.CSSProperties;
}

export const CyberScrambleText: React.FC<CyberScrambleTextProps> = ({
  text,
  className = '',
  as = 'span',
  scrambleOnHover = true,
  triggerOnMount = true,
  speed = 28,
  glowOnScramble = true,
  style = {},
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const frameRef = useRef<number>(0);

  const startScramble = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    setIsScrambling(true);
    frameRef.current = 0;
    const targetLength = text.length;

    intervalRef.current = window.setInterval(() => {
      frameRef.current++;
      const currentProgress = frameRef.current / (targetLength * 1.5);

      if (frameRef.current % 4 === 0) {
        soundFX.playGlitch();
      }

      setDisplayText(() => {
        let result = '';
        for (let i = 0; i < targetLength; i++) {
          if (text[i] === ' ' || text[i] === '\n') {
            result += text[i];
            continue;
          }

          const letterRevealThreshold = i / targetLength;
          if (currentProgress > letterRevealThreshold) {
            result += text[i];
          } else {
            result += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }
        }
        return result;
      });

      if (currentProgress >= 1.2) {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, speed);
  }, [text, speed]);

  useEffect(() => {
    if (triggerOnMount) {
      const timer = setTimeout(startScramble, 100);
      return () => clearTimeout(timer);
    }
  }, [triggerOnMount, startScramble]);

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (scrambleOnHover && !isScrambling) {
      startScramble();
    }
  };

  const Component = as;

  return (
    <Component
      className={`inline-block transition-colors duration-200 ${
        isScrambling && glowOnScramble ? 'text-[#00E5FF] drop-shadow-[0_0_12px_#00E5FF]' : ''
      } ${className}`}
      onMouseEnter={handleMouseEnter}
      style={{
        ...style,
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      {displayText}
    </Component>
  );
};

