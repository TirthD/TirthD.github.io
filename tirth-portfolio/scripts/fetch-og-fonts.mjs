// Downloads the two static Fraunces instances used by src/app/opengraph-image.tsx.
// next/og (Satori) can't read variable fonts or woff2, so we fetch static TTFs.
// Run: node scripts/fetch-og-fonts.mjs
import { mkdir, writeFile } from "node:fs/promises";

const OUT = new URL("../src/app/og-fonts/", import.meta.url);

// Axis order for the CSS2 API: lowercase axes alphabetically, then uppercase.
const instances = [
  { file: "Fraunces-Display.ttf", axes: "opsz,wght,SOFT@144,400,100" }, // name
  { file: "Fraunces-Meta.ttf", axes: "opsz,wght,SOFT@36,500,50" }, // meta line
];

await mkdir(OUT, { recursive: true });

for (const { file, axes } of instances) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=Fraunces:${axes}&subset=latin`;
  // A non-browser user agent makes Google Fonts serve TTF instead of woff2.
  const css = await (await fetch(cssUrl, { headers: { "User-Agent": "node" } })).text();
  const src = css.match(/src:\s*url\(([^)]+)\)\s*format\('truetype'\)/)?.[1];
  if (!src) throw new Error(`No TTF in response for ${axes}:\n${css}`);
  const buf = Buffer.from(await (await fetch(src)).arrayBuffer());
  await writeFile(new URL(file, OUT), buf);
  console.log(`${file}  ${(buf.length / 1024).toFixed(1)} KB`);
}
