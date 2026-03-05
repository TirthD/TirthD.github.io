"use client";

import { useEffect, useState } from "react";

// ─── Individual SVG stickers (flat geometric + light doodle strokes) ───
// All use #0071E3 as primary, #86868b as secondary — NO purple

const stickerSVGs: Record<string, React.ReactNode> = {
  atom: (
    <svg viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="40" rx="35" ry="14" stroke="#0071E3" strokeWidth="1.5" strokeDasharray="4 2" />
      <ellipse cx="40" cy="40" rx="35" ry="14" stroke="#0071E3" strokeWidth="1.5" strokeDasharray="4 2" transform="rotate(60 40 40)" />
      <ellipse cx="40" cy="40" rx="35" ry="14" stroke="#0071E3" strokeWidth="1.5" strokeDasharray="4 2" transform="rotate(120 40 40)" />
      <circle cx="40" cy="40" r="4" fill="#0071E3" />
    </svg>
  ),
  circuit: (
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M10 40h18M52 40h18M40 10v18M40 52v18" stroke="#0071E3" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
      <rect x="28" y="28" width="24" height="24" rx="4" stroke="#0071E3" strokeWidth="1.5" />
      <circle cx="40" cy="40" r="5" fill="#0071E3" opacity="0.6" />
      <circle cx="10" cy="40" r="2.5" fill="#0071E3" opacity="0.4" />
      <circle cx="70" cy="40" r="2.5" fill="#0071E3" opacity="0.4" />
      <circle cx="40" cy="10" r="2.5" fill="#0071E3" opacity="0.4" />
      <circle cx="40" cy="70" r="2.5" fill="#0071E3" opacity="0.4" />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M40 65V42M40 42c0-8-12-14-16-8s4 14 16 8zM40 42c0-8 12-14 16-8s-4 14-16 8z" stroke="#0071E3" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M28 28c-6-4-14 2-10 10M52 28c6-4 14 2 10 10" stroke="#86868b" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" />
      <circle cx="32" cy="22" r="8" stroke="#0071E3" strokeWidth="1.5" opacity="0.6" />
      <circle cx="48" cy="22" r="8" stroke="#0071E3" strokeWidth="1.5" opacity="0.6" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M28 25L12 40l16 15" stroke="#0071E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M52 25l16 15-16 15" stroke="#0071E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M45 18L35 62" stroke="#86868b" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 3" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="22" rx="22" ry="8" stroke="#0071E3" strokeWidth="1.5" />
      <path d="M18 22v14c0 4.4 9.8 8 22 8s22-3.6 22-8V22" stroke="#0071E3" strokeWidth="1.5" />
      <path d="M18 36v14c0 4.4 9.8 8 22 8s22-3.6 22-8V36" stroke="#86868b" strokeWidth="1.5" strokeDasharray="3 2" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M22 50h36a12 12 0 002-23.8A16 16 0 0028.3 30 10 10 0 0022 50z" stroke="#0071E3" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M36 50v8M44 50v6M40 50v10" stroke="#86868b" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 80 80" fill="none">
      <path d="M40 16v6M40 58v6M16 40h6M58 40h6M23 23l4.2 4.2M52.8 52.8l4.2 4.2M57 23l-4.2 4.2M27.2 52.8l-4.2 4.2" stroke="#86868b" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="40" cy="40" r="14" stroke="#0071E3" strokeWidth="1.5" />
      <circle cx="40" cy="40" r="5" stroke="#0071E3" strokeWidth="1.5" strokeDasharray="3 2" />
    </svg>
  ),
  neuralnet: (
    <svg viewBox="0 0 80 80" fill="none">
      {[20, 40, 60].map((y) => <circle key={`a${y}`} cx="15" cy={y} r="3.5" fill="#0071E3" opacity="0.5" />)}
      {[25, 40, 55].map((y) => <circle key={`b${y}`} cx="40" cy={y} r="3.5" fill="#0071E3" opacity="0.6" />)}
      {[30, 50].map((y) => <circle key={`c${y}`} cx="65" cy={y} r="3.5" fill="#0071E3" opacity="0.5" />)}
      {[20, 40, 60].map((y1) =>
        [25, 40, 55].map((y2) => (
          <line key={`l1-${y1}-${y2}`} x1="18.5" y1={y1} x2="36.5" y2={y2} stroke="#0071E3" strokeWidth="0.6" opacity="0.25" />
        ))
      )}
      {[25, 40, 55].map((y1) =>
        [30, 50].map((y2) => (
          <line key={`l2-${y1}-${y2}`} x1="43.5" y1={y1} x2="61.5" y2={y2} stroke="#0071E3" strokeWidth="0.6" opacity="0.25" />
        ))
      )}
    </svg>
  ),
};

// Sticker placement — alternates left/right, spread across full page height
const placements = [
  { type: "atom",      x: "3%",  y: 150,  size: 64, speed: 0.12, rot: 10 },
  { type: "circuit",   x: "90%", y: 280,  size: 56, speed: 0.08, rot: -6 },
  { type: "brain",     x: "88%", y: 600,  size: 60, speed: 0.15, rot: 12 },
  { type: "code",      x: "5%",  y: 850,  size: 52, speed: 0.10, rot: -10 },
  { type: "database",  x: "92%", y: 1100, size: 56, speed: 0.14, rot: 5 },
  { type: "cloud",     x: "2%",  y: 1500, size: 60, speed: 0.11, rot: -8 },
  { type: "gear",      x: "91%", y: 1900, size: 50, speed: 0.13, rot: 15 },
  { type: "neuralnet", x: "4%",  y: 2300, size: 64, speed: 0.09, rot: -4 },
  { type: "atom",      x: "89%", y: 2700, size: 48, speed: 0.16, rot: 7 },
  { type: "code",      x: "3%",  y: 3100, size: 54, speed: 0.12, rot: -12 },
  { type: "database",  x: "93%", y: 3500, size: 52, speed: 0.10, rot: 8 },
  { type: "cloud",     x: "5%",  y: 3900, size: 58, speed: 0.14, rot: -6 },
];

export default function FloatingStickers() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1] hidden sm:block">
      {placements.map((s, i) => (
        <div
          key={i}
          className="absolute opacity-45 transition-opacity"
          style={{
            left: s.x,
            top: s.y - scrollY * s.speed,
            width: s.size,
            height: s.size,
            transform: `rotate(${s.rot + scrollY * 0.008}deg)`,
            willChange: "transform",
          }}
        >
          {stickerSVGs[s.type]}
        </div>
      ))}
    </div>
  );
}