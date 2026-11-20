// Generates public/grain.png: a 256×256 grayscale noise tile for the grain
// overlay. Node built-ins only (zlib for deflate + CRC32). Deterministic:
// the same SEED always produces the same file.
//
// Run: node scripts/make-grain.mjs
//
// Tuning:
// - The overlay uses mix-blend-mode: multiply, so white = no change and
//   darker pixels darken the page. MEAN controls how much the grain darkens
//   on average (keep it high so text contrast survives); SPREAD controls how
//   visible the grain is.
// - LEVELS quantizes the noise so the PNG compresses well. 16 levels is
//   indistinguishable from full 8-bit noise at 14% opacity.
import { writeFile } from "node:fs/promises";
import { crc32, deflateSync } from "node:zlib";

const SIZE = 256;
const MEAN = 200; // 0–255
const SPREAD = 44; // standard deviation
const LEVELS = 16;
const SEED = 0x6ea1;

// mulberry32: tiny seeded PRNG
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = rng(SEED);
// Box–Muller: normally distributed noise
const gaussian = () =>
  Math.sqrt(-2 * Math.log(1 - rand())) * Math.cos(2 * Math.PI * rand());

const step = 255 / (LEVELS - 1);
// Each scanline is prefixed with filter byte 0 (None)
const raw = Buffer.alloc((SIZE + 1) * SIZE);
let sum = 0;
for (let y = 0; y < SIZE; y++) {
  raw[y * (SIZE + 1)] = 0;
  for (let x = 0; x < SIZE; x++) {
    const v = Math.min(255, Math.max(0, MEAN + gaussian() * SPREAD));
    const q = Math.round(Math.round(v / step) * step);
    raw[y * (SIZE + 1) + 1 + x] = q;
    sum += q;
  }
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(SIZE, 0); // width
ihdr.writeUInt32BE(SIZE, 4); // height
ihdr[8] = 8; // bit depth
ihdr[9] = 0; // color type 0: grayscale
ihdr[10] = 0; // compression
ihdr[11] = 0; // filter
ihdr[12] = 0; // no interlace

const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk("IHDR", ihdr),
  chunk("IDAT", deflateSync(raw, { level: 9 })),
  chunk("IEND", Buffer.alloc(0)),
]);

const out = new URL("../public/grain.png", import.meta.url);
await writeFile(out, png);
console.log(
  `public/grain.png  ${SIZE}×${SIZE}  ${(png.length / 1024).toFixed(1)} KB  mean ${(sum / SIZE / SIZE).toFixed(0)}`,
);
