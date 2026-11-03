import React, { useState, useEffect, useRef } from 'react';
import { soundFX } from '../utils/soundEffects';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'success' | 'system';
  content: string;
}

export const CyberTerminalModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onToggleMatrix: () => void;
}> = ({ isOpen, onClose, onToggleMatrix }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      id: 'init-1',
      type: 'system',
      content: '╔════════════════════════════════════════════════════════════╗',
    },
    {
      id: 'init-2',
      type: 'system',
      content: '║   YONI YONATAN® CYBER DEFENSE TERMINAL [v4.8.2-PROD]      ║',
    },
    {
      id: 'init-3',
      type: 'system',
      content: '║   KERNEL: Linux 6.8.0-eBPF | ARCH: x86_64 Distributed      ║',
    },
    {
      id: 'init-4',
      type: 'system',
      content: '╚════════════════════════════════════════════════════════════╝',
    },
    {
      id: 'init-5',
      type: 'output',
      content: 'Type "help" to view available diagnostic commands. Press ESC to exit.',
    },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      soundFX.playPowerUp();
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIdx + 1 < history.length ? historyIdx + 1 : historyIdx;
        setHistoryIdx(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx] || '');
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx] || '');
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
      return;
    }

    if (e.key === 'Enter') {
      processCommand(inputVal.trim());
      setInputVal('');
    } else {
      soundFX.playGlitch();
    }
  };

  const processCommand = (cmd: string) => {
    const rawCmd = cmd.toLowerCase();
    const id = Date.now().toString();

    // Echo input
    const newLines: TerminalLine[] = [
      ...lines,
      { id: `${id}-in`, type: 'input', content: `yonatan@secops:~$ ${cmd}` },
    ];

    if (cmd.trim()) {
      setHistory((prev) => [...prev, cmd]);
      setHistoryIdx(-1);
    }

    if (!rawCmd) {
      setLines(newLines);
      return;
    }

    if (rawCmd === 'clear' || rawCmd === 'cls') {
      setLines([]);
      soundFX.playClick();
      return;
    }

    if (rawCmd === 'exit' || rawCmd === 'quit') {
      onClose();
      return;
    }

    if (rawCmd === 'help') {
      soundFX.playClick();
      newLines.push({
        id: `${id}-out`,
        type: 'output',
        content: `Available Diagnostics Commands:
  • audit       - Run real-time penetration test & kernel vulnerability scan
  • matrix      - Toggle digital code rain overlay
  • benchmark   - Run hardware-accelerated FPS and DOM latency test
  • skills      - Output ASCII architecture dependency graph
  • sound       - Toggle procedural Web Audio API SFX
  • secret      - Unveil classified architecture changelog
  • clear       - Wipe terminal screen
  • exit        - Close terminal interface`,
      });
    } else if (rawCmd === 'audit') {
      soundFX.playLaser();
      newLines.push(
        { id: `${id}-1`, type: 'system', content: '[*] INITIALIZING ZERO-TRUST PENETRATION AUDIT...' },
        { id: `${id}-2`, type: 'output', content: '[+] Probing eBPF Syscall Tracepoints... 1,482/1,482 SAFE (0 hook anomalies)' },
        { id: `${id}-3`, type: 'output', content: '[+] Cryptographic TLS Cipher Suite: TLS_AES_256_GCM_SHA384 [STRICT]' },
        { id: `${id}-4`, type: 'output', content: '[+] OWASP Top 10 Injection Guard: 100% BLOCKED | Zero vulnerabilities' },
        { id: `${id}-5`, type: 'output', content: '[+] Memory Safety Check: Rust/Go Zero-Copy Buffer Isolation ACTIVE' },
        { id: `${id}-6`, type: 'success', content: '[✔] AUDIT VERIFIED: A+ Grade Security Defense Standard Achieved.' }
      );
      setTimeout(() => soundFX.playSuccess(), 400);
    } else if (rawCmd === 'matrix') {
      onToggleMatrix();
      newLines.push({
        id: `${id}-matrix`,
        type: 'success',
        content: '[✔] Matrix digital code rain stream toggled.',
      });
      soundFX.playPowerUp();
    } else if (rawCmd === 'benchmark') {
      soundFX.playClick();
      const perf = window.performance;
      const mem = (perf as unknown as { memory?: { usedJSHeapSize: number } }).memory;
      const memMb = mem ? (mem.usedJSHeapSize / (1024 * 1024)).toFixed(1) : '24.8';

      newLines.push(
        { id: `${id}-b1`, type: 'system', content: '[*] RUNNING RUNTIME HARDWARE BENCHMARK...' },
        { id: `${id}-b2`, type: 'output', content: `[+] GPU Acceleration: WebGL 2.0 (Active Three.js Context)` },
        { id: `${id}-b3`, type: 'output', content: `[+] Heap Memory Allocated: ~${memMb} MB` },
        { id: `${id}-b4`, type: 'output', content: `[+] Display Refresh Lock: 60Hz / 120Hz ProMotion Ready` },
        { id: `${id}-b5`, type: 'success', content: `[✔] Overall Performance Index: 99.4/100 (Lightning Fast)` }
      );
    } else if (rawCmd === 'skills') {
      soundFX.playClick();
      newLines.push({
        id: `${id}-skills`,
        type: 'output',
        content: `
   ┌───────────────────────────────────────────────────┐
   │         YONI YONATAN ARCHITECTURE STACK           │
   ├───────────────────────────────────────────────────┤
   │  [SECURITY]  ──> eBPF • Zero-Trust • PenTesting   │
   │  [SYSTEMS]   ──> Go • Microservices • Raft Engine │
   │  [FRONTEND]  ──> React 19 • TypeScript • Tailwind │
   │  [DATABASE]  ──> PostgreSQL • Redis • Prisma      │
   │  [INFRA]     ──> Docker • Kubernetes • Linux      │
   └───────────────────────────────────────────────────┘`,
      });
    } else if (rawCmd === 'sound') {
      const isMuted = soundFX.toggleMute();
      newLines.push({
        id: `${id}-sound`,
        type: 'system',
        content: `Procedural Audio SFX: ${isMuted ? 'MUTED [OFF]' : 'ACTIVE [ON]'}`,
      });
    } else if (rawCmd === 'secret') {
      soundFX.playSuccess();
      newLines.push({
        id: `${id}-secret`,
        type: 'success',
        content: `[CONFIDENTIAL MEMO]
"Perfection in systems architecture is not when there is nothing more to add, 
but when there is nothing left to take away that could compromise speed or defense."
- Yoni Yonatan, Systems Architect`,
      });
    } else {
      soundFX.playGlitch();
      newLines.push({
        id: `${id}-err`,
        type: 'error',
        content: `command not found: "${cmd}". Type "help" for a list of valid commands.`,
      });
    }

    setLines(newLines);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-2xl animate-stage-in">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Terminal Window Frame */}
      <div className="relative w-full max-w-3xl h-[520px] rounded-xl bg-[#030712]/95 border border-[#00E5FF]/40 shadow-[0_20px_60px_rgba(0,229,255,0.25),inset_0_1px_0_rgba(255,255,255,0.2)] flex flex-col overflow-hidden font-mono text-xs sm:text-sm">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-black/70 border-b border-white/15 select-none">
          <div className="flex items-center gap-2">
            <span
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 cursor-pointer shadow-[0_0_6px_rgba(239,68,68,0.8)] transition-colors"
              title="Close terminal"
            />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 cursor-pointer shadow-[0_0_6px_rgba(234,179,8,0.8)]" />
            <span
              onClick={onToggleMatrix}
              className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400 cursor-pointer shadow-[0_0_6px_rgba(16,185,129,0.8)]"
              title="Toggle Matrix Rain"
            />
            <span className="ml-3 text-[11px] text-white/70 font-semibold tracking-wider">
              bash — yoni@cyber-secops:~ (tty1)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleMatrix}
              className="text-[10px] text-[#00E5FF] hover:underline cursor-pointer"
            >
              [MATRIX]
            </button>
            <span className="text-[10px] text-white/40 hidden sm:inline">ESC to exit</span>
            <button
              type="button"
              onClick={onClose}
              className="text-white/60 hover:text-white text-base leading-none cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Scanlines Effect Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-40 z-10" />

        {/* Terminal Output Stream */}
        <div className="flex-1 p-4 overflow-y-auto space-y-1.5 custom-scrollbar text-white/90 z-20">
          {lines.map((line) => (
            <div
              key={line.id}
              className={`leading-relaxed whitespace-pre-wrap ${
                line.type === 'input'
                  ? 'text-white font-semibold'
                  : line.type === 'system'
                  ? 'text-[#00E5FF] font-semibold'
                  : line.type === 'success'
                  ? 'text-emerald-400 font-semibold'
                  : line.type === 'error'
                  ? 'text-red-400'
                  : 'text-white/80'
              }`}
            >
              {line.content}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Command Input Field */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-black/80 border-t border-white/10 z-20">
          <span className="text-[#00E5FF] font-bold select-none">yonatan@secops:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-white outline-none font-mono text-xs sm:text-sm placeholder-white/25"
            placeholder="type 'help', 'audit', 'matrix', 'skills'..."
            autoFocus
            spellCheck={false}
          />
          <span className="w-2 h-4 bg-[#00E5FF] animate-blink" />
        </div>
      </div>
    </div>
  );
};

