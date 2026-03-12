"use client";

import React, { useEffect, useState } from "react";

const BLUE = "#0071E3";
const GRAY = "#86868b";

const stickerSVGs: Record<string, React.ReactNode> = {
  atom: (
    <svg viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="40" rx="35" ry="14" stroke={BLUE} strokeWidth="1.5" strokeDasharray="4 2" />
      <ellipse cx="40" cy="40" rx="35" ry="14" stroke={BLUE} strokeWidth="1.5" strokeDasharray="4 2" transform="rotate(60 40 40)" />
      <ellipse cx="40" cy="40" rx="35" ry="14" stroke={BLUE} strokeWidth="1.5" strokeDasharray="4 2" transform="rotate(120 40 40)" />
      <circle cx="40" cy="40" r="4" fill={BLUE} />
    </svg>
  ),
  circuit: (
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M10 40h18M52 40h18M40 10v18M40 52v18" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
      <rect x="28" y="28" width="24" height="24" rx="4" stroke={BLUE} strokeWidth="1.5" />
      <circle cx="40" cy="40" r="5" fill={BLUE} opacity="0.6" />
      <circle cx="10" cy="40" r="2.5" fill={BLUE} opacity="0.4" />
      <circle cx="70" cy="40" r="2.5" fill={BLUE} opacity="0.4" />
      <circle cx="40" cy="10" r="2.5" fill={BLUE} opacity="0.4" />
      <circle cx="40" cy="70" r="2.5" fill={BLUE} opacity="0.4" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M28 25L12 40l16 15" stroke={BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M52 25l16 15-16 15" stroke={BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M45 18L35 62" stroke={GRAY} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 3" />
    </svg>
  ),
  neuralnet: (
    <svg viewBox="0 0 80 80" fill="none">
      {[20, 40, 60].map((y) => <circle key={`a${y}`} cx="15" cy={y} r="3.5" fill={BLUE} opacity="0.5" />)}
      {[25, 40, 55].map((y) => <circle key={`b${y}`} cx="40" cy={y} r="3.5" fill={BLUE} opacity="0.6" />)}
      {[30, 50].map((y) => <circle key={`c${y}`} cx="65" cy={y} r="3.5" fill={BLUE} opacity="0.5" />)}
      {[20, 40, 60].map((y1) => [25, 40, 55].map((y2) => <line key={`l1-${y1}-${y2}`} x1="18.5" y1={y1} x2="36.5" y2={y2} stroke={BLUE} strokeWidth="0.6" opacity="0.25" />))}
      {[25, 40, 55].map((y1) => [30, 50].map((y2) => <line key={`l2-${y1}-${y2}`} x1="43.5" y1={y1} x2="61.5" y2={y2} stroke={BLUE} strokeWidth="0.6" opacity="0.25" />))}
    </svg>
  ),
  database: (
    <svg viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="22" rx="22" ry="8" stroke={BLUE} strokeWidth="1.5" />
      <path d="M18 22v14c0 4.4 9.8 8 22 8s22-3.6 22-8V22" stroke={BLUE} strokeWidth="1.5" />
      <path d="M18 36v14c0 4.4 9.8 8 22 8s22-3.6 22-8V36" stroke={GRAY} strokeWidth="1.5" strokeDasharray="3 2" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M22 50h36a12 12 0 002-23.8A16 16 0 0028.3 30 10 10 0 0022 50z" stroke={BLUE} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M36 50v8M44 50v6M40 50v10" stroke={GRAY} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  ),
  integral: (
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M44 8c-8 0-8 8-8 16v32c0 8 0 16-8 16" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <text x="48" y="22" fontSize="10" fill={GRAY} opacity="0.5" fontFamily="serif" fontStyle="italic">b</text>
      <text x="22" y="72" fontSize="10" fill={GRAY} opacity="0.5" fontFamily="serif" fontStyle="italic">a</text>
    </svg>
  ),
  binary: (
    <svg viewBox="0 0 80 80" fill="none">
      <text x="8" y="24" fontSize="12" fill={BLUE} fontFamily="monospace" opacity="0.7">01001</text>
      <text x="8" y="40" fontSize="12" fill={BLUE} fontFamily="monospace" opacity="0.5">10110</text>
      <text x="8" y="56" fontSize="12" fill={BLUE} fontFamily="monospace" opacity="0.3">01101</text>
      <text x="8" y="72" fontSize="12" fill={GRAY} fontFamily="monospace" opacity="0.2">11010</text>
    </svg>
  ),
  sigma: (
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M55 16H25l20 24-20 24h30" stroke={BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="56" y="22" fontSize="10" fill={GRAY} opacity="0.6" fontFamily="serif" fontStyle="italic">n</text>
      <text x="56" y="70" fontSize="10" fill={GRAY} opacity="0.6" fontFamily="serif" fontStyle="italic">i</text>
    </svg>
  ),
  matrix: (
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M18 12v56M62 12v56" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
      <path d="M18 12h4M18 68h4M62 12h-4M62 68h-4" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
      <text x="28" y="32" fontSize="11" fill={BLUE} fontFamily="monospace" opacity="0.8">1 0</text>
      <text x="28" y="46" fontSize="11" fill={BLUE} fontFamily="monospace" opacity="0.8">0 1</text>
      <text x="28" y="60" fontSize="11" fill={GRAY} fontFamily="monospace" opacity="0.5">1 1</text>
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M40 10c-4 12-4 28 0 40 4-12 4-28 0-40z" stroke={BLUE} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M36 42c-6 2-10 8-10 14l14-6" stroke={BLUE} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M44 42c6 2 10 8 10 14l-14-6" stroke={BLUE} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <circle cx="40" cy="28" r="3" stroke={BLUE} strokeWidth="1.2" />
      <path d="M36 54l-2 10M40 56v10M44 54l2 10" stroke={GRAY} strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" opacity="0.5" />
    </svg>
  ),
  infinity: (
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M40 40c-6-10-18-14-22-6s4 16 22 6c18-10 26-2 22 6s-16-4-22-6z" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="22" cy="37" r="2" fill={BLUE} opacity="0.3" />
      <circle cx="58" cy="37" r="2" fill={BLUE} opacity="0.3" />
    </svg>
  ),
  cpu: (
    <svg viewBox="0 0 80 80" fill="none">
      <rect x="22" y="22" width="36" height="36" rx="4" stroke={BLUE} strokeWidth="1.5" />
      <rect x="30" y="30" width="20" height="20" rx="2" stroke={BLUE} strokeWidth="1" opacity="0.5" />
      <path d="M32 22v-8M40 22v-8M48 22v-8M32 58v8M40 58v8M48 58v8M22 32h-8M22 40h-8M22 48h-8M58 32h8M58 40h8M58 48h8" stroke={GRAY} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  graph: (
    <svg viewBox="0 0 80 80" fill="none">
      <line x1="20" y1="20" x2="40" y2="35" stroke={BLUE} strokeWidth="1" opacity="0.4" />
      <line x1="60" y1="18" x2="40" y2="35" stroke={BLUE} strokeWidth="1" opacity="0.4" />
      <line x1="40" y1="35" x2="25" y2="58" stroke={BLUE} strokeWidth="1" opacity="0.4" />
      <line x1="40" y1="35" x2="58" y2="55" stroke={BLUE} strokeWidth="1" opacity="0.4" />
      <line x1="25" y1="58" x2="58" y2="55" stroke={BLUE} strokeWidth="1" opacity="0.3" />
      <circle cx="20" cy="20" r="5" fill="white" stroke={BLUE} strokeWidth="1.5" />
      <circle cx="60" cy="18" r="5" fill="white" stroke={BLUE} strokeWidth="1.5" />
      <circle cx="40" cy="35" r="6" fill={BLUE} opacity="0.15" stroke={BLUE} strokeWidth="1.5" />
      <circle cx="25" cy="58" r="5" fill="white" stroke={BLUE} strokeWidth="1.5" />
      <circle cx="58" cy="55" r="5" fill="white" stroke={BLUE} strokeWidth="1.5" />
    </svg>
  ),
  // ─── NEW STICKERS ───
  dna: (
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M30 8c0 16 20 16 20 32s-20 16-20 32" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M50 8c0 16-20 16-20 32s20 16 20 32" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="32" y1="16" x2="48" y2="16" stroke={GRAY} strokeWidth="1" opacity="0.5" />
      <line x1="30" y1="24" x2="50" y2="24" stroke={GRAY} strokeWidth="1" opacity="0.5" />
      <line x1="34" y1="40" x2="46" y2="40" stroke={GRAY} strokeWidth="1" opacity="0.5" />
      <line x1="30" y1="56" x2="50" y2="56" stroke={GRAY} strokeWidth="1" opacity="0.5" />
      <line x1="32" y1="64" x2="48" y2="64" stroke={GRAY} strokeWidth="1" opacity="0.5" />
    </svg>
  ),
  terminal: (
    <svg viewBox="0 0 80 80" fill="none">
      <rect x="10" y="16" width="60" height="48" rx="6" stroke={BLUE} strokeWidth="1.5" />
      <path d="M10 28h60" stroke={BLUE} strokeWidth="1" opacity="0.3" />
      <circle cx="18" cy="22" r="2" fill="#FF5F56" opacity="0.7" />
      <circle cx="26" cy="22" r="2" fill="#FFBD2E" opacity="0.7" />
      <circle cx="34" cy="22" r="2" fill="#27C93F" opacity="0.7" />
      <path d="M22 38l8 6-8 6" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 50h16" stroke={GRAY} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" />
    </svg>
  ),
  pi: (
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M20 28h40" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
      <path d="M30 28v30" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
      <path d="M50 28v24c0 4-2 6-6 6" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="18" r="3" fill={BLUE} opacity="0.3" />
      <circle cx="40" cy="18" r="1.5" fill={BLUE} opacity="0.6" />
    </svg>
  ),
  lambda: (
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M24 64L40 16l16 48" stroke={BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 48h20" stroke={GRAY} strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
      <circle cx="40" cy="16" r="3" stroke={BLUE} strokeWidth="1" opacity="0.4" />
    </svg>
  ),
  flask: (
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M32 12v20l-14 28a4 4 0 003.5 6h37a4 4 0 003.5-6L48 32V12" stroke={BLUE} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M28 12h24" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 52h32" stroke={BLUE} strokeWidth="1" opacity="0.3" />
      <circle cx="35" cy="56" r="2.5" fill={BLUE} opacity="0.3" />
      <circle cx="44" cy="54" r="2" fill={BLUE} opacity="0.2" />
      <circle cx="40" cy="60" r="1.5" fill={BLUE} opacity="0.4" />
    </svg>
  ),
  fractal: (
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M40 10L10 65h60z" stroke={BLUE} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M25 65l15-27.5L55 65z" stroke={BLUE} strokeWidth="1" opacity="0.5" strokeLinejoin="round" />
      <path d="M17.5 65l7.5-13.75L32.5 65z" stroke={BLUE} strokeWidth="0.8" opacity="0.3" strokeLinejoin="round" />
      <path d="M47.5 65l7.5-13.75L62.5 65z" stroke={BLUE} strokeWidth="0.8" opacity="0.3" strokeLinejoin="round" />
      <path d="M32.5 37.5l7.5-13.75L47.5 37.5z" stroke={BLUE} strokeWidth="0.8" opacity="0.3" strokeLinejoin="round" />
    </svg>
  ),
  curlybraces: (
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M30 12c-8 0-10 4-10 10v10c0 4-4 6-8 8 4 2 8 4 8 8v10c0 6 2 10 10 10" stroke={BLUE} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M50 12c8 0 10 4 10 10v10c0 4 4 6 8 8-4 2-8 4-8 8v10c0 6-2 10-10 10" stroke={BLUE} strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="40" cy="40" r="2" fill={BLUE} opacity="0.4" />
    </svg>
  ),
  sinewave: (
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M5 40c5-20 15-20 20 0s15 20 20 0 15-20 20 0 15 20 20 0" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M5 40h70" stroke={GRAY} strokeWidth="0.5" opacity="0.3" />
      <path d="M40 20v40" stroke={GRAY} strokeWidth="0.5" opacity="0.3" />
    </svg>
  ),
  magnifier: (
    <svg viewBox="0 0 80 80" fill="none">
      <circle cx="34" cy="34" r="18" stroke={BLUE} strokeWidth="1.8" />
      <path d="M47 47l16 16" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="34" cy="34" r="8" stroke={BLUE} strokeWidth="1" opacity="0.2" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 80 80" fill="none">
      <rect x="20" y="36" width="40" height="30" rx="4" stroke={BLUE} strokeWidth="1.8" />
      <path d="M28 36V26a12 12 0 0124 0v10" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <circle cx="40" cy="50" r="4" fill={BLUE} opacity="0.5" />
      <path d="M40 54v6" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

// 24 unique stickers — 4 per light section, none on dark sections
const stickerOrder = [
  "atom", "cpu", "infinity", "binary",             // Hero
  "neuralnet", "rocket", "code", "sigma",           // Experience
  "integral", "graph", "matrix", "cloud",           // Education
  // Projects section is dark — skip
  "circuit", "database", "dna", "terminal",         // Roles
  // Contact section is dark — skip
  // Extra stickers fill gaps
  "pi", "lambda", "flask", "fractal",
  "curlybraces", "sinewave", "magnifier", "lock",
];

export default function FloatingStickers() {
  const [pageHeight, setPageHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const measure = () => setPageHeight(document.body.scrollHeight);
    const onScroll = () => setScrollY(window.scrollY);

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    const timer = setTimeout(measure, 1000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      clearTimeout(timer);
    };
  }, []);

  // Light sections are roughly the top 60% of the page
  const lightZoneHeight = pageHeight * 0.60;

  const placements = stickerOrder.map((type, i) => {
    const isLeft = i % 2 === 0;
    const totalStickers = stickerOrder.length;
    const yPos = (lightZoneHeight / totalStickers) * i + 80;

    return {
      type,
      x: isLeft ? `${3 + (i % 3)}%` : `${88 + (i % 4)}%`,
      y: yPos,
      size: 52 + (i % 4) * 4,
      speed: 0.02 + (i % 3) * 0.005,
      rot: ((i * 7) % 20) - 10,
    };
  });

  return (
    <div
      className="absolute top-0 left-0 w-full pointer-events-none z-40 hidden sm:block"
      style={{ height: lightZoneHeight }}
    >
      {placements.map((s, i) => (
        <div
          key={i}
          className="absolute opacity-60"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            transform: `translateY(${scrollY * -s.speed * 3}px) rotate(${s.rot + scrollY * 0.008}deg)`,
            willChange: "transform",
          }}
        >
          {stickerSVGs[s.type]}
        </div>
      ))}
    </div>
  );
}