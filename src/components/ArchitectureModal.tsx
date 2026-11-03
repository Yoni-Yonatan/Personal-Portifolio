import React, { useState } from 'react';
import { soundFX } from '../utils/soundEffects';

interface ArchNode {
  id: string;
  label: string;
  type: string;
  status: string;
  tech: string;
  details: string;
  metric: string;
}

const NODES: ArchNode[] = [
  {
    id: 'edge',
    label: 'Edge Anycast WAF',
    type: 'Perimeter Defense',
    status: 'ACTIVE',
    tech: 'Cloudflare Workers & BGP Anycast',
    details: 'Terminates DDoS vectors at line-rate, enforces rate limiting, and performs automated TLS 1.3 cryptographic handshakes.',
    metric: '< 1.8ms TTFB',
  },
  {
    id: 'gateway',
    label: 'eBPF Kernel Gateway',
    type: 'Core Ingestion Layer',
    status: 'HARDENED',
    tech: 'Go & Linux eBPF / XDP',
    details: 'Zero-copy packet filter running inside the Linux kernel. Bypasses standard OS network stack overhead for maximum throughput.',
    metric: '1.2M+ QPS',
  },
  {
    id: 'mesh',
    label: 'Zero-Trust Service Mesh',
    type: 'Internal Routing',
    status: 'ENCRYPTED',
    tech: 'gRPC & Envoy Proxy with SPIFFE mTLS',
    details: 'Enforces cryptographically verifiable mutual TLS between microservices with automated ephemeral certificate rotation.',
    metric: 'Zero-Trust mTLS',
  },
  {
    id: 'storage',
    label: 'Raft Distributed Cluster',
    type: 'Persistence Engine',
    status: 'REPLICATED',
    tech: 'Custom In-Memory + PostgreSQL Engine',
    details: 'Multi-region quorum consensus replication ensuring zero data loss and sub-millisecond atomic ACID state transitions.',
    metric: '< 80µs Read Latency',
  },
];

export const ArchitectureModal: React.FC<{
  isOpen: boolean;
  projectTitle: string;
  onClose: () => void;
}> = ({ isOpen, projectTitle, onClose }) => {
  const [selectedNode, setSelectedNode] = useState<ArchNode>(NODES[1]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl animate-stage-in select-none">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl bg-[#030712]/95 border border-[#00E5FF]/30 shadow-[0_25px_70px_rgba(0,229,255,0.25),inset_0_1px_0_rgba(255,255,255,0.2)] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-black/60 border-b border-white/15">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] animate-pulse" />
            <div>
              <h2 className="text-white text-base sm:text-lg font-semibold tracking-tight font-heading">
                System Topology Blueprint: <span className="text-[#00E5FF]">{projectTitle}</span>
              </h2>
              <p className="text-white/60 text-xs font-mono">
                Interactive High-Concurrency & Zero-Trust Defense Pipeline
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto custom-scrollbar flex-1 flex flex-col gap-6">
          {/* Node Flow Pipeline Visualization */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 relative overflow-hidden">
            <div className="text-[11px] font-mono text-white/50 mb-3 uppercase tracking-wider">
              Data Flow Path (Click any node to inspect telemetry)
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative">
              {NODES.map((node, idx) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => {
                      setSelectedNode(node);
                      soundFX.playClick();
                    }}
                    className={`relative p-3.5 rounded-xl border transition-all duration-300 cursor-pointer text-left ${
                      isSelected
                        ? 'bg-[#00E5FF]/15 border-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.35)] scale-102'
                        : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
                    }`}
                  >
                    {/* Step indicator */}
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                      <span className="text-white/50">STEP 0{idx + 1}</span>
                      <span
                        className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                          isSelected ? 'bg-[#00E5FF] text-black' : 'bg-white/10 text-white/70'
                        }`}
                      >
                        {node.status}
                      </span>
                    </div>

                    <div className="text-white text-xs sm:text-sm font-semibold mb-1">
                      {node.label}
                    </div>
                    <div className="text-[11px] text-[#00E5FF] font-mono font-medium">
                      {node.metric}
                    </div>

                    {/* Animated connecting pulse beacon */}
                    {idx < NODES.length - 1 && (
                      <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-[#00E5FF]/40 z-10" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Node Detailed Inspection Panel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 p-5 rounded-xl bg-black/40 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#00E5FF] font-semibold">
                    {selectedNode.type}
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="text-xs font-mono text-white/60">{selectedNode.tech}</span>
                </div>
                <h3 className="text-white text-lg font-semibold mb-3">{selectedNode.label}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  {selectedNode.details}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                <span className="px-2.5 py-1 rounded-md bg-white/10 text-white/80 text-xs font-mono">
                  Runtime: 64-bit eBPF
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-mono">
                  Hardened: OWASP Pass
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/30 text-xs font-mono">
                  SLA: 99.999%
                </span>
              </div>
            </div>

            {/* Live Telemetry Dial Card */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-black/60 to-[#00E5FF]/10 border border-white/15 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono text-white/60 uppercase tracking-wider mb-2">
                  Performance Telemetry
                </div>
                <div className="text-2xl font-bold font-mono text-[#00E5FF] mb-1">
                  {selectedNode.metric}
                </div>
                <div className="text-xs text-white/70">Measured P99 Under Full Concurrency</div>
              </div>

              <div className="space-y-2 mt-4">
                <div className="flex justify-between text-xs font-mono text-white/70">
                  <span>Packet Drop:</span>
                  <span className="text-emerald-400 font-semibold">0.000%</span>
                </div>
                <div className="flex justify-between text-xs font-mono text-white/70">
                  <span>Buffer Memory:</span>
                  <span className="text-[#00E5FF] font-semibold">Zero-Copy Heap</span>
                </div>
                <div className="flex justify-between text-xs font-mono text-white/70">
                  <span>Cipher Level:</span>
                  <span className="text-white font-semibold">AES-256-GCM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-black/60 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
          <span>STATUS: ALL NODES OPERATIONAL</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-white text-black font-semibold hover:bg-[#00E5FF] transition-colors cursor-pointer"
          >
            Close Blueprint
          </button>
        </div>
      </div>
    </div>
  );
};

