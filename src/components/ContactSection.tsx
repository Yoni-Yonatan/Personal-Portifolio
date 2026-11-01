import { useState, useEffect } from 'react';

const PROJECT_TYPES = [
  'Full-Stack App',
  'Cloud Architecture',
  'Distributed Systems',
  'Consulting / Advisory',
];

export function ContactSection({
  combinedColor = true,
  inStage = false,
}: {
  combinedColor?: boolean;
  inStage?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const [selectedType, setSelectedType] = useState<string>(PROJECT_TYPES[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to user local or UTC+3
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Africa/Addis_Ababa',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    const emailToCopy = 'hello@yoniyonatan.com';
    try {
      await navigator.clipboard.writeText(emailToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const el = document.createElement('textarea');
      el.value = emailToCopy;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setFormState('sending');
    setTimeout(() => {
      setFormState('success');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setFormState('idle'), 4000);
    }, 1200);
  };

  return (
    <section
      className={`relative z-10 w-full text-white flex flex-col justify-between select-none ${
        inStage
          ? 'py-6 sm:py-8 px-3 sm:px-6'
          : `min-h-screen py-28 px-5 sm:px-8 md:px-12 overflow-hidden transition-colors duration-500 ${
              combinedColor
                ? 'bg-gradient-to-b from-[#4f46e5] via-[#4338ca] to-[#312e81]'
                : 'bg-[#0191EB]'
            }`
      }`}
    >
      {/* Ambient background glowing light orbs */}
      {!inStage && (
        <>
          <div
            className={`absolute top-10 left-1/3 w-[600px] h-[500px] rounded-full blur-[160px] pointer-events-none animate-orb-1 transition-colors duration-500 ${
              combinedColor ? 'bg-[#0191EB]/25' : 'bg-white/10'
            }`}
          />
          <div
            className={`absolute bottom-20 right-10 w-[500px] h-[400px] rounded-full blur-[140px] pointer-events-none animate-orb-2 transition-colors duration-500 ${
              combinedColor ? 'bg-[#4f46e5]/40' : 'bg-white/15'
            }`}
          />
        </>
      )}

      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto ${inStage ? 'mb-8 sm:mb-10' : 'mb-16'}`}>
          {/* Availability Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/25 bg-white/15 backdrop-blur-md mb-5 shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white shadow-[0_0_10px_white]" />
            </span>
            <span className="text-xs sm:text-sm font-medium text-white">
              Available for high-impact contracts & full-time engineering
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-5"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Let&apos;s build something <br className="hidden sm:inline" />
            <span className="text-white drop-shadow-md">
              extraordinary together.
            </span>
          </h2>

          <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Have a project in mind, an architectural challenge to solve, or an engineering role?
            Reach out directly or dispatch a quick message below.
          </p>
        </div>

        {/* Two-Column Collaboration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Connect & Fast Actions */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Email Direct Card */}
            <div className="rounded-3xl p-7 bg-white/10 border border-white/25 backdrop-blur-xl shadow-lg">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                Direct Electronic Mail
              </div>
              <div className="text-xl sm:text-2xl font-medium text-white tracking-tight mb-4">
                hello@yoniyonatan.com
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer shadow-lg active:scale-95 ${
                    combinedColor
                      ? 'bg-white text-[#4f46e5] hover:bg-white/95 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:scale-105 font-semibold'
                      : 'bg-white text-[#0191EB] hover:bg-white/90 hover:scale-105'
                  }`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="4" y="4" width="7" height="7" rx="1" />
                    <path d="M2.5 8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v0.5" />
                  </svg>
                  <span>{copied ? 'Copied to Clipboard! ✓' : 'Copy Email'}</span>
                </button>

                <a
                  href="mailto:hello@yoniyonatan.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white bg-white/5 border border-white/20 hover:bg-white/15 transition-all duration-200 cursor-pointer"
                >
                  <span>Open Mail Client</span>
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
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="rounded-3xl p-7 bg-white/[0.03] border border-white/15 backdrop-blur-md">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-4">
                Verified Socials & Code
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    name: 'GitHub',
                    handle: '@yoniyonatan',
                    url: 'https://github.com/yoniyonatan',
                  },
                  {
                    name: 'LinkedIn',
                    handle: '/in/yoniyonatan',
                    url: 'https://linkedin.com/in/yoniyonatan',
                  },
                  {
                    name: 'X (Twitter)',
                    handle: '@yoniyonatan',
                    url: 'https://twitter.com/yoniyonatan',
                  },
                  {
                    name: 'Telegram',
                    handle: '@yoniyonatan',
                    url: 'https://t.me/yoniyonatan',
                  },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00E5FF]/60 hover:bg-white/[0.07] transition-all duration-200 cursor-pointer group"
                  >
                    <div className="text-xs font-semibold text-white group-hover:text-[#00E5FF] transition-colors">
                      {s.name}
                    </div>
                    <div className="text-[11px] text-white/60 tracking-tight font-mono">
                      {s.handle}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Live Timezone Indicator */}
            <div className="rounded-3xl p-5 bg-white/[0.02] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#029BDF] shadow-[0_0_8px_#029BDF]" />
                <span className="text-xs text-white/70 font-medium">Addis Ababa (EAT UTC+3)</span>
              </div>
              <span className="font-mono text-xs font-semibold text-white tracking-widest bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                {currentTime || '12:00:00 AM'}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Quick Dispatch Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl p-7 sm:p-9 bg-white/[0.03] border border-white/15 backdrop-blur-md flex flex-col gap-6"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Dispatch A Project Inquiry
              </div>

              {/* Service / Project Type Selector */}
              <div>
                <label className="block text-xs font-medium text-white/75 mb-2.5">
                  Scope of Interest
                </label>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                        selectedType === type
                          ? combinedColor
                            ? 'bg-gradient-to-r from-[#0191EB] to-[#4f46e5] text-white shadow-md font-semibold border border-white/30 scale-105'
                            : 'bg-white text-[#010e1a] shadow-md font-semibold'
                          : 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/75 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ada Lovelace"
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/15 text-white text-sm focus:outline-none focus:border-[#4f46e5] focus:bg-white/[0.08] transition-all placeholder:text-white/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/75 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ada@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/15 text-white text-sm focus:outline-none focus:border-[#4f46e5] focus:bg-white/[0.08] transition-all placeholder:text-white/30"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-medium text-white/75 mb-1.5">
                  Project Details or Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about what you are building, timeline, and tech objectives..."
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/15 text-white text-sm focus:outline-none focus:border-[#4f46e5] focus:bg-white/[0.08] transition-all placeholder:text-white/30 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formState === 'sending' || formState === 'success'}
                className={`w-full py-3.5 px-6 rounded-2xl font-medium text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xl ${
                  formState === 'success'
                    ? 'bg-[#10B981] text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                    : combinedColor
                    ? 'bg-gradient-to-r from-[#0191EB] via-[#4338ca] to-[#4f46e5] text-white hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] border border-white/20 active:scale-[0.99]'
                    : 'bg-white text-[#010e1a] hover:bg-[#00E5FF] hover:text-black active:scale-[0.99]'
                }`}
              >
                {formState === 'sending' && (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-[#010e1a] border-t-transparent animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                )}

                {formState === 'success' && (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Message Dispatched Successfully!</span>
                  </>
                )}

                {formState === 'idle' && (
                  <>
                    <span>Dispatch Transmission</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Global Footer (only shown in standalone view) */}
        {!inStage && (
          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <span className="font-medium text-white">Yoni Yonatan®</span>
              <span>—</span>
              <span>© 2026. Architected & engineered with precision.</span>
            </div>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-1.5 text-white/75 hover:text-white transition-colors cursor-pointer"
            >
              <span>Return to top</span>
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
                <path d="M6 9.5V2.5M2.5 6L6 2.5L9.5 6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
