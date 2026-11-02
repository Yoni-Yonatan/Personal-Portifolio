import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const TechIcons: Record<string, React.FC<IconProps>> = {
  html5: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
      <path fill="#E34F26" d="M71 460L30 0h452l-41 460-185 52z" />
      <path fill="#EF652A" d="M256 472l149-41 35-391H256v432z" />
      <path fill="#ECECEC" d="M256 176h-84l-6-66h90V48H108l18 196h130v-68zm0 152l-1 1-56-15-4-42h-66l7 89 120 33v-66z" />
      <path fill="#FFF" d="M256 176v68h82l-8 89-74 20v66l120-33 16-178H256zm0-128v62h140l6-62H256z" />
    </svg>
  ),

  css3: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
      <path fill="#1572B6" d="M71 460L30 0h452l-41 460-185 52z" />
      <path fill="#33A9DC" d="M256 472l149-41 35-391H256v432z" />
      <path fill="#ECECEC" d="M256 176h-84l-6-66h90V48H108l18 196h130v-68zm0 152l-1 1-56-15-4-42h-66l7 89 120 33v-66z" />
      <path fill="#FFF" d="M256 176v68h82l-8 89-74 20v66l120-33 16-178H256zm0-128v62h140l6-62H256z" />
    </svg>
  ),

  javascript: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 630 630" className={className}>
      <rect width="630" height="630" rx="40" fill="#F7DF1E" />
      <path d="M423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 14.38 84.2 49.07l-46.1 29.6c-10.15-18.2-21.1-25.4-38.1-25.4-17.34 0-28.3 11-28.3 25.4 0 17.76 11 24.95 36.4 35.94l14.8 6.35c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.23-107.8-60.9zm-209.98 4.23c8.46 15.23 16.1 27.92 34.3 27.92 18.19 0 29.6-7.19 29.6-35.1V289.47h59.2v200.5c0 58.8-34.7 85-86.7 85-46.95 0-73.6-24.53-87.56-54.55z" />
    </svg>
  ),

  typescript: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="16" fill="#3178C6" />
      <path fill="#FFF" d="M110.5 86.8c-1.8-1.5-4.2-2.3-7.2-2.3-3.2 0-5.7.8-7.5 2.5s-2.7 4.1-2.7 7.2c0 2.9.9 5.3 2.7 7.1s4.4 2.8 7.7 2.8c3.2 0 6.1-.8 8.6-2.5v7.6c-2.7 1.4-6.1 2.1-10.1 2.1-6.1 0-10.8-1.8-14.2-5.4s-5.1-8.5-5.1-14.7c0-6.1 1.7-11 5.2-14.6s8.2-5.4 14.1-5.4c4 0 7.4.7 10.2 2.2l-1.7 6.4zm-47.8-19.1h-16v43h-8.7v-43h-16v-7.2h40.7v7.2z" />
    </svg>
  ),

  react: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="-11.5 -10.232 23 20.463" className={className}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),

  nextjs: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 180 180" className={className}>
      <mask height="180" id="mask0" maskUnits="userSpaceOnUse" width="180" x="0" y="0">
        <circle cx="90" cy="90" fill="#fff" r="90" />
      </mask>
      <g mask="url(#mask0)">
        <circle cx="90" cy="90" data-circle="true" fill="#000" r="90" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear)" />
        <rect fill="url(#paint1_linear)" height="72" width="12" x="115" y="54" />
      </g>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear" x1="109" x2="144.5" y1="116.5" y2="160.5">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear" x1="121" x2="120.799" y1="54" y2="106.875">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),

  redux: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 500 500" className={className}>
      <path fill="#764ABC" d="M382.4 122c-7.9-13.6-18.7-25.2-31.7-34.2C318.5 65.4 280.9 50 240 50s-78.5 15.4-110.7 37.8c-13 9-23.8 20.6-31.7 34.2C89.7 135.6 85 150.7 85 166.3c0 23.3 10.3 45.4 28.5 62.4-7.4 12.5-11.4 26.8-11.4 41.7 0 14.8 4 29.2 11.4 41.7C95.3 329.1 85 351.2 85 374.5c0 15.6 4.7 30.7 12.6 44.3 7.9 13.6 18.7 25.2 31.7 34.2C161.5 475.4 199.1 490.8 240 490.8s78.5-15.4 110.7-37.8c13-9 23.8-20.6 31.7-34.2 7.9-13.6 12.6-28.7 12.6-44.3 0-23.3-10.3-45.4-28.5-62.4 7.4-12.5 11.4-26.8 11.4-41.7 0-14.8-4-29.2-11.4-41.7 18.2-17 28.5-39.1 28.5-62.4 0-15.6-4.7-30.7-12.6-44.3zm-142.4 246c-27.6 0-50-22.4-50-50s22.4-50 50-50 50 22.4 50 50-22.4 50-50 50z" />
    </svg>
  ),

  tailwind: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path fill="#06B6D4" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),

  reactquery: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
      <circle cx="128" cy="128" r="120" fill="#FF4154" />
      <path fill="#FFD15C" d="M128 40a88 88 0 1 0 88 88A88.1 88.1 0 0 0 128 40zm0 152a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z" />
      <polygon points="128,88 156,144 100,144" fill="#FF4154" />
    </svg>
  ),

  mui: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path fill="#007FFF" d="M0 2.475v10.39l3-1.733V5.94l6 3.465 6-3.465v11.88l-3 1.733V8.812L9 10.545l-3-1.733v6.93l6 3.465 6-3.465V5.347L9 0 0 5.197zM24 2.475l-6 3.465v12.713l6-3.465V2.475z" />
    </svg>
  ),

  framermotion: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path fill="#0055FF" d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
    </svg>
  ),

  stripe: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
      <rect width="512" height="512" rx="100" fill="#635BFF" />
      <path fill="#FFF" d="M228.6 200.7c0-11.8 9.6-16.4 25.4-16.4 22.8 0 51.7 7 74.4 19.3v-65.7c-25.4-10.5-51.7-14.9-74.4-14.9-61.3 0-101.5 32.4-101.5 86.6 0 84.8 116.3 71.3 116.3 108 0 14-12.3 18.4-29.7 18.4-26.2 0-59.5-10.9-86.1-25.8v67.3c29.7 12.7 60.3 17.9 86.1 17.9 63.8 0 106.6-31.5 106.6-86.6-.1-91.8-117.1-76.3-117.1-108.1z" />
    </svg>
  ),

  nodejs: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
      <path fill="#339933" d="M128 12.8L227.2 70.4v115.2L128 243.2 28.8 185.6V70.4L128 12.8z" />
      <path fill="#FFF" d="M128 35.2L49.6 80.8v91.2L128 217.6l78.4-45.6V80.8L128 35.2zm-12.8 144c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z" />
    </svg>
  ),

  express: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
      <polygon points="128,12 236,74 236,198 128,260 20,198 20,74" fill="#222" stroke="#444" strokeWidth="6" />
      <text x="128" y="142" fill="#FFF" fontSize="36" fontFamily="Helvetica, Arial, sans-serif" fontWeight="bold" textAnchor="middle">
        express
      </text>
    </svg>
  ),

  mongodb: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path fill="#47A248" d="M12 0C11.66 0 11.2 1.48 11.08 2.14c-1.32 7.37-6.08 10.31-6.08 14.7 0 4.14 3.03 7.16 7 7.16s7-3.02 7-7.16c0-4.39-4.76-7.33-6.08-14.7C12.8 1.48 12.34 0 12 0zm.08 22.8c-2.3 0-4.48-1.58-4.48-4.36 0-3.32 3.12-5.54 4.48-11.84 1.36 6.3 4.48 8.52 4.48 11.84 0 2.78-2.18 4.36-4.48 4.36z" />
    </svg>
  ),

  firebase: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path fill="#FFA611" d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.284l3.543 6.643-6.923 8.745z" />
      <path fill="#F57C00" d="M14.075 8.84l2.17-4.148a.545.545 0 0 1 .987.052l3.056 10.928-6.213-6.832z" />
      <path fill="#FFCA28" d="M3.89 15.672L12 23.498l8.288-7.826L14.075 8.84 3.89 15.672z" />
    </svg>
  ),

  postgresql: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
      <path fill="#336791" d="M128 16C66.1 16 16 66.1 16 128s50.1 112 112 112 112-50.1 112-112S189.9 16 128 16zm46 168.3c-11.6 7.4-25.7 11.7-41 11.7-18.7 0-35.6-6.4-48.8-17.2l12.4-17.7c9.5 7.8 21.6 12.5 34.8 12.5 10.3 0 19.9-2.9 28-8.1l14.6 18.8zm21.4-44.8l-15.6 15.6c-4.4-4.4-9.3-8.3-14.7-11.5l10.9-19.3c8.1 4.7 15.4 10.3 21.9 16.7l-2.5-1.5z" />
      <circle cx="96" cy="100" r="12" fill="#FFF" />
      <path fill="#FFF" d="M128 60c-35 0-64 25-64 60 0 18 8 34 21 46l18-24c-6-6-10-14-10-22 0-19 16-34 35-34s35 15 35 34c0 8-4 16-10 22l18 24c13-12 21-28 21-46 0-35-29-60-64-60z" />
    </svg>
  ),

  mysql: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
      <path fill="#00758F" d="M128 20C68.4 20 20 68.4 20 128s48.4 108 108 108 108-48.4 108-108S187.6 20 128 20z" />
      <path fill="#F29111" d="M72 144c12-32 44-54 78-50 22 2 40 16 48 36-18-12-40-16-62-10-22 6-40 22-50 42-5-6-9-12-14-18z" />
    </svg>
  ),

  prisma: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path fill="#2D3748" d="M12 1L2 19h20L12 1zm0 4.5l6.5 11.5H5.5L12 5.5z" />
      <polygon points="12,1 18.5,17 5.5,17" fill="#5A67D8" />
    </svg>
  ),

  graphql: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 400 400" className={className}>
      <g fill="#E10098">
        <circle cx="63.5" cy="107.5" r="28" />
        <circle cx="336.5" cy="107.5" r="28" />
        <circle cx="200" cy="30" r="28" />
        <circle cx="200" cy="370" r="28" />
        <circle cx="63.5" cy="292.5" r="28" />
        <circle cx="336.5" cy="292.5" r="28" />
      </g>
      <path stroke="#E10098" strokeWidth="16" fill="none" d="M63.5 107.5h273M63.5 292.5h273M200 30L63.5 107.5v185L200 370l136.5-77.5v-185L200 30zM200 30v340M63.5 107.5L336.5 292.5M336.5 107.5L63.5 292.5" />
    </svg>
  ),

  reactnative: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
      <rect width="256" height="256" rx="40" fill="#1A1A24" stroke="#61DAFB" strokeWidth="4" />
      <circle cx="128" cy="128" r="16" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="7" fill="none">
        <ellipse cx="128" cy="128" rx="72" ry="28" />
        <ellipse cx="128" cy="128" rx="72" ry="28" transform="rotate(60 128 128)" />
        <ellipse cx="128" cy="128" rx="72" ry="28" transform="rotate(120 128 128)" />
      </g>
    </svg>
  ),

  turborepo: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
      <circle cx="128" cy="128" r="110" fill="#000" stroke="#FF1E56" strokeWidth="6" />
      <path fill="#FF1E56" d="M128 40a88 88 0 0 1 88 88h-32a56 56 0 0 0-56-56V40z" />
      <path fill="#0096FF" d="M128 216a88 88 0 0 1-88-88h32a56 56 0 0 0 56 56v32z" />
    </svg>
  ),

  docker: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path fill="#2496ED" d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185M23.797 12.3c-.313-.194-.972-.258-1.528-.194-.213-.676-.71-1.258-1.424-1.573-.71-.314-1.517-.23-2.138.223-.556-.418-1.3-.593-2.02-.454l-.454.084v1.86a.186.186 0 00.185.186h.314c.382 0 .742.148 1.01.417.27.269.418.628.418 1.01v.055c0 1.25-.972 2.296-2.222 2.37-1.12.065-2.213-.306-3.037-.99l-.333-.287c-.824.685-1.917 1.055-3.037.99-1.25-.074-2.222-1.12-2.222-2.37v-.055c0-.382.148-.74.417-1.01.27-.27.628-.417 1.01-.417h.314a.186.186 0 00.185-.186V9.757l-.454-.084c-.722-.139-1.463.036-2.02.454-.62-.453-1.427-.537-2.138-.223-.714.315-1.21.897-1.424 1.573-.556-.064-1.215 0-1.528.194-.48.296-.75.824-.75 1.407 0 2.907 2.148 5.62 5.518 7.074C7.037 20.73 9.49 21.3 12 21.3c2.51 0 4.963-.57 7.213-1.69 3.37-1.453 5.518-4.166 5.518-7.073 0-.583-.27-1.11-.75-1.407" />
    </svg>
  ),

  figma: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path fill="#0ACF83" d="M12 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0z" />
      <path fill="#A259FF" d="M6 12a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3z" />
      <path fill="#F24E1E" d="M6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3z" />
      <path fill="#FF7262" d="M12 3h3a3 3 0 0 1 3 3 3 3 0 0 1-3 3h-3V3z" />
      <path fill="#1ABCFE" d="M6 18a3 3 0 0 1 3-3h3v3a3 3 0 0 1-3 3 3 3 0 0 1-3-3z" />
    </svg>
  ),

  go: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
      <g>
        {/* Gopher Body */}
        <ellipse cx="128" cy="135" rx="60" ry="75" fill="#7FD5EA" />
        {/* Ears */}
        <circle cx="82" cy="75" r="16" fill="#7FD5EA" />
        <circle cx="82" cy="75" r="8" fill="#F4B0B7" />
        <circle cx="174" cy="75" r="16" fill="#7FD5EA" />
        <circle cx="174" cy="75" r="8" fill="#F4B0B7" />
        {/* Eyes */}
        <circle cx="106" cy="115" r="22" fill="#FFF" stroke="#222" strokeWidth="4" />
        <circle cx="112" cy="115" r="10" fill="#222" />
        <circle cx="150" cy="115" r="22" fill="#FFF" stroke="#222" strokeWidth="4" />
        <circle cx="156" cy="115" r="10" fill="#222" />
        {/* Snout & Teeth */}
        <ellipse cx="128" cy="142" rx="16" ry="10" fill="#222" />
        <rect x="122" y="152" width="6" height="8" rx="1" fill="#FFF" stroke="#222" strokeWidth="2" />
        <rect x="128" y="152" width="6" height="8" rx="1" fill="#FFF" stroke="#222" strokeWidth="2" />
        {/* Text GO */}
        <text x="128" y="240" fill="#00ADD8" fontSize="28" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
          ═ GO ═
        </text>
      </g>
    </svg>
  ),

  honojs: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
      <defs>
        <linearGradient id="honoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7A00" />
          <stop offset="100%" stopColor="#E33E00" />
        </linearGradient>
      </defs>
      <rect width="256" height="256" rx="48" fill="#18181B" />
      <path
        fill="url(#honoGrad)"
        d="M128 32c0 30-16 54-32 76-14 20-28 42-28 68 0 38 28 68 60 68s60-30 60-68c0-36-24-64-36-88-8-16-16-36-24-56z"
      />
      <path
        fill="#FFD200"
        d="M128 140c0 14-8 25-15 35-6 9-13 19-13 31 0 17 12 30 28 30s28-13 28-30c0-16-11-29-17-40-4-7-7-16-11-26z"
      />
    </svg>
  ),

  tanstack: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
      <rect width="256" height="256" rx="48" fill="#151515" />
      <circle cx="128" cy="128" r="88" fill="none" stroke="#FF4154" strokeWidth="18" strokeDasharray="160 30" />
      <circle cx="128" cy="128" r="54" fill="none" stroke="#FFD15C" strokeWidth="14" strokeDasharray="90 20" />
      <circle cx="128" cy="128" r="24" fill="#00D8FF" />
    </svg>
  ),

  dribbble: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
      <rect width="256" height="256" rx="48" fill="#EA4C89" />
      <path
        fill="#FFF"
        d="M128 52c-41.9 0-76 34.1-76 76s34.1 76 76 76 76-34.1 76-76-34.1-76-76-76zm57.2 46.8c-7.3 3.6-21.7 8.3-41.4 8.3-2.6 0-5.3-.1-8-.3 15-24.6 28.5-36.5 32-39.4 8.4 8.7 14.5 19.3 17.4 31.4zm-37.1-39.7c-3.7 3.3-17.7 15.6-32.9 40.7-31.5-10.4-43.1-23.7-44.5-25.5 12.3-9.5 27.6-15.2 44.3-15.2 11.9 0 23.1 3 33.1 8.5zm-83.3 37.1c1.8 2.2 13.9 15.7 46 26.6-2.5 7.1-4.7 14.3-6.6 21.6-33.3-9.6-61.9-4.8-64.8-4.3 1.9-17 10.9-31.9 24.5-41.9zm13.1 82.2c2.6-.4 26.6-4.7 58.7 5.1-6.5 17.9-13.8 30.6-16.7 35.3-20.9-6.4-36.8-23.3-42-40.4zm59.6 46.3c3.5-5.3 10.7-17.8 17.3-35.7 20 4.6 34.3 14.2 36.3 15.7-14.2 13.1-33 21-53.6 21zm47.2-28.7c-2.3-1.7-17.9-12-38.3-17.1 1.7-7 3.6-13.9 5.8-20.6 20.3-.4 39.4 5.3 42.4 6.2-.2 11.2-3.8 21.6-9.9 31.5z"
      />
    </svg>
  ),

  bootstrap: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
      <defs>
        <linearGradient id="bsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8957E5" />
          <stop offset="100%" stopColor="#5E35B1" />
        </linearGradient>
      </defs>
      <rect width="256" height="256" rx="48" fill="url(#bsGrad)" />
      <path
        fill="#FFF"
        d="M86 64h48c26 0 42 13 42 33 0 13-7 24-20 28v2c16 3 26 15 26 31 0 23-18 38-48 38H86V64zm28 50h20c13 0 20-6 20-15s-7-15-20-15h-20v30zm0 60h23c15 0 24-7 24-17s-9-17-24-17h-23v34z"
      />
    </svg>
  ),

  shield: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(0, 229, 255, 0.15)" />
      <path d="M9 12l2 2 4-4" stroke="#FFF" strokeWidth="2" />
    </svg>
  ),

  cryptography: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="11" width="18" height="11" rx="3" ry="3" fill="rgba(168, 85, 247, 0.18)" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <circle cx="12" cy="16" r="1.5" fill="#FFF" />
      <path d="M12 17.5v2" stroke="#FFF" strokeWidth="2" />
    </svg>
  ),

  penetration: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="4" width="20" height="16" rx="3" fill="rgba(16, 185, 129, 0.15)" />
      <path d="M6 9l4 3-4 3" stroke="#FFF" strokeWidth="2" />
      <path d="M13 15h5" stroke="#FFF" strokeWidth="2" />
    </svg>
  ),

  linux: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" fill="rgba(251, 191, 36, 0.15)" />
      <circle cx="9" cy="10" r="1.5" fill="#FFF" />
      <circle cx="15" cy="10" r="1.5" fill="#FFF" />
      <path d="M9 15c1 1.5 5 1.5 6 0" stroke="#FFF" strokeWidth="1.8" />
    </svg>
  ),

  network: ({ className = '', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#0191EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="9" y="2" width="6" height="5" rx="1" fill="rgba(1, 145, 235, 0.2)" />
      <rect x="2" y="17" width="6" height="5" rx="1" fill="rgba(1, 145, 235, 0.2)" />
      <rect x="16" y="17" width="6" height="5" rx="1" fill="rgba(1, 145, 235, 0.2)" />
      <path d="M12 7v5M5 12h14v5M5 12v5" stroke="#00E5FF" strokeWidth="1.8" />
    </svg>
  ),
};
