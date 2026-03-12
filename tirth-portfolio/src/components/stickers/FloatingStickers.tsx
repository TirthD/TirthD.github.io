"use client";

// This creates an SVG background pattern with STEM icons
// Applied to light sections only via CSS background-image

const BLUE = "#0071E3";

// Build a single large SVG tile with scattered STEM icons
const patternSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800" fill="none">
  <!-- Atom -->
  <g transform="translate(50, 50) scale(0.7)" opacity="0.08">
    <ellipse cx="40" cy="40" rx="35" ry="14" stroke="${BLUE}" stroke-width="1.5" stroke-dasharray="4 2"/>
    <ellipse cx="40" cy="40" rx="35" ry="14" stroke="${BLUE}" stroke-width="1.5" stroke-dasharray="4 2" transform="rotate(60 40 40)"/>
    <ellipse cx="40" cy="40" rx="35" ry="14" stroke="${BLUE}" stroke-width="1.5" stroke-dasharray="4 2" transform="rotate(120 40 40)"/>
    <circle cx="40" cy="40" r="4" fill="${BLUE}"/>
  </g>

  <!-- CPU -->
  <g transform="translate(650, 80) scale(0.65)" opacity="0.06">
    <rect x="22" y="22" width="36" height="36" rx="4" stroke="${BLUE}" stroke-width="1.5"/>
    <rect x="30" y="30" width="20" height="20" rx="2" stroke="${BLUE}" stroke-width="1" opacity="0.5"/>
    <line x1="32" y1="22" x2="32" y2="14" stroke="${BLUE}" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="40" y1="22" x2="40" y2="14" stroke="${BLUE}" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="48" y1="22" x2="48" y2="14" stroke="${BLUE}" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="32" y1="58" x2="32" y2="66" stroke="${BLUE}" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="40" y1="58" x2="40" y2="66" stroke="${BLUE}" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="48" y1="58" x2="48" y2="66" stroke="${BLUE}" stroke-width="1.2" stroke-linecap="round"/>
  </g>

  <!-- Code brackets -->
  <g transform="translate(350, 180) scale(0.6)" opacity="0.07">
    <path d="M28 25L12 40l16 15" stroke="${BLUE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M52 25l16 15-16 15" stroke="${BLUE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M45 18L35 62" stroke="${BLUE}" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="4 3" opacity="0.5"/>
  </g>

  <!-- Sigma -->
  <g transform="translate(120, 320) scale(0.6)" opacity="0.06">
    <path d="M55 16H25l20 24-20 24h30" stroke="${BLUE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- Database -->
  <g transform="translate(580, 300) scale(0.65)" opacity="0.07">
    <ellipse cx="40" cy="22" rx="22" ry="8" stroke="${BLUE}" stroke-width="1.5"/>
    <path d="M18 22v14c0 4.4 9.8 8 22 8s22-3.6 22-8V22" stroke="${BLUE}" stroke-width="1.5"/>
    <path d="M18 36v14c0 4.4 9.8 8 22 8s22-3.6 22-8V36" stroke="${BLUE}" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.5"/>
  </g>

  <!-- Neural net -->
  <g transform="translate(250, 450) scale(0.7)" opacity="0.06">
    <circle cx="15" cy="20" r="3.5" fill="${BLUE}" opacity="0.5"/>
    <circle cx="15" cy="40" r="3.5" fill="${BLUE}" opacity="0.5"/>
    <circle cx="15" cy="60" r="3.5" fill="${BLUE}" opacity="0.5"/>
    <circle cx="40" cy="25" r="3.5" fill="${BLUE}" opacity="0.6"/>
    <circle cx="40" cy="40" r="3.5" fill="${BLUE}" opacity="0.6"/>
    <circle cx="40" cy="55" r="3.5" fill="${BLUE}" opacity="0.6"/>
    <circle cx="65" cy="30" r="3.5" fill="${BLUE}" opacity="0.5"/>
    <circle cx="65" cy="50" r="3.5" fill="${BLUE}" opacity="0.5"/>
    <line x1="18.5" y1="20" x2="36.5" y2="25" stroke="${BLUE}" stroke-width="0.6" opacity="0.3"/>
    <line x1="18.5" y1="20" x2="36.5" y2="40" stroke="${BLUE}" stroke-width="0.6" opacity="0.3"/>
    <line x1="18.5" y1="40" x2="36.5" y2="25" stroke="${BLUE}" stroke-width="0.6" opacity="0.3"/>
    <line x1="18.5" y1="40" x2="36.5" y2="40" stroke="${BLUE}" stroke-width="0.6" opacity="0.3"/>
    <line x1="18.5" y1="40" x2="36.5" y2="55" stroke="${BLUE}" stroke-width="0.6" opacity="0.3"/>
    <line x1="18.5" y1="60" x2="36.5" y2="40" stroke="${BLUE}" stroke-width="0.6" opacity="0.3"/>
    <line x1="18.5" y1="60" x2="36.5" y2="55" stroke="${BLUE}" stroke-width="0.6" opacity="0.3"/>
    <line x1="43.5" y1="25" x2="61.5" y2="30" stroke="${BLUE}" stroke-width="0.6" opacity="0.3"/>
    <line x1="43.5" y1="40" x2="61.5" y2="30" stroke="${BLUE}" stroke-width="0.6" opacity="0.3"/>
    <line x1="43.5" y1="40" x2="61.5" y2="50" stroke="${BLUE}" stroke-width="0.6" opacity="0.3"/>
    <line x1="43.5" y1="55" x2="61.5" y2="50" stroke="${BLUE}" stroke-width="0.6" opacity="0.3"/>
  </g>

  <!-- Rocket -->
  <g transform="translate(700, 470) scale(0.65)" opacity="0.06">
    <path d="M40 10c-4 12-4 28 0 40 4-12 4-28 0-40z" stroke="${BLUE}" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M36 42c-6 2-10 8-10 14l14-6" stroke="${BLUE}" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>
    <path d="M44 42c6 2 10 8 10 14l-14-6" stroke="${BLUE}" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>
    <circle cx="40" cy="28" r="3" stroke="${BLUE}" stroke-width="1.2"/>
  </g>

  <!-- Cloud -->
  <g transform="translate(450, 600) scale(0.7)" opacity="0.07">
    <path d="M22 50h36a12 12 0 002-23.8A16 16 0 0028.3 30 10 10 0 0022 50z" stroke="${BLUE}" stroke-width="1.5" stroke-linejoin="round"/>
  </g>

  <!-- Integral -->
  <g transform="translate(80, 620) scale(0.6)" opacity="0.06">
    <path d="M44 8c-8 0-8 8-8 16v32c0 8 0 16-8 16" stroke="${BLUE}" stroke-width="2.5" stroke-linecap="round"/>
  </g>

  <!-- Circuit -->
  <g transform="translate(350, 720) scale(0.55)" opacity="0.05">
    <path d="M10 40h18M52 40h18M40 10v18M40 52v18" stroke="${BLUE}" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 3"/>
    <rect x="28" y="28" width="24" height="24" rx="4" stroke="${BLUE}" stroke-width="1.5"/>
    <circle cx="40" cy="40" r="5" fill="${BLUE}" opacity="0.6"/>
  </g>

  <!-- Matrix -->
  <g transform="translate(680, 680) scale(0.55)" opacity="0.06">
    <line x1="18" y1="12" x2="18" y2="68" stroke="${BLUE}" stroke-width="2" stroke-linecap="round"/>
    <line x1="62" y1="12" x2="62" y2="68" stroke="${BLUE}" stroke-width="2" stroke-linecap="round"/>
    <line x1="18" y1="12" x2="22" y2="12" stroke="${BLUE}" stroke-width="2" stroke-linecap="round"/>
    <line x1="18" y1="68" x2="22" y2="68" stroke="${BLUE}" stroke-width="2" stroke-linecap="round"/>
    <line x1="62" y1="12" x2="58" y2="12" stroke="${BLUE}" stroke-width="2" stroke-linecap="round"/>
    <line x1="62" y1="68" x2="58" y2="68" stroke="${BLUE}" stroke-width="2" stroke-linecap="round"/>
  </g>

  <!-- Infinity -->
  <g transform="translate(500, 100) scale(0.6)" opacity="0.05">
    <path d="M40 40c-6-10-18-14-22-6s4 16 22 6c18-10 26-2 22 6s-16-4-22-6z" stroke="${BLUE}" stroke-width="1.8" stroke-linecap="round"/>
  </g>

  <!-- DNA -->
  <g transform="translate(150, 550) scale(0.55)" opacity="0.06">
    <path d="M30 8c0 16 20 16 20 32s-20 16-20 32" stroke="${BLUE}" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M50 8c0 16-20 16-20 32s20 16 20 32" stroke="${BLUE}" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
    <line x1="32" y1="16" x2="48" y2="16" stroke="${BLUE}" stroke-width="1" opacity="0.5"/>
    <line x1="30" y1="24" x2="50" y2="24" stroke="${BLUE}" stroke-width="1" opacity="0.5"/>
    <line x1="34" y1="40" x2="46" y2="40" stroke="${BLUE}" stroke-width="1" opacity="0.5"/>
  </g>

  <!-- Lambda -->
  <g transform="translate(500, 380) scale(0.55)" opacity="0.05">
    <path d="M24 64L40 16l16 48" stroke="${BLUE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- Terminal -->
  <g transform="translate(30, 200) scale(0.5)" opacity="0.05">
    <rect x="10" y="16" width="60" height="48" rx="6" stroke="${BLUE}" stroke-width="1.5"/>
    <path d="M10 28h60" stroke="${BLUE}" stroke-width="1" opacity="0.3"/>
    <path d="M22 38l8 6-8 6" stroke="${BLUE}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="36" y1="50" x2="52" y2="50" stroke="${BLUE}" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 2"/>
  </g>
</svg>
`;

const encodedSVG = `data:image/svg+xml,${encodeURIComponent(patternSVG)}`;

export default function FloatingStickers() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 hidden sm:block"
      style={{
        backgroundImage: `url("${encodedSVG}")`,
        backgroundSize: "800px 800px",
        backgroundRepeat: "repeat",
      }}
    />
  );
}