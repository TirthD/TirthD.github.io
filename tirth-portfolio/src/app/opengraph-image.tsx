import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { hero, site } from "@/content";

// Rendered once at build time. Fonts are static Fraunces instances fetched by
// scripts/fetch-og-fonts.mjs (Satori can't read variable fonts).
export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const fontDir = join(process.cwd(), "src/app/og-fonts");
  const [display, meta] = await Promise.all([
    readFile(join(fontDir, "Fraunces-Display.ttf")),
    readFile(join(fontDir, "Fraunces-Meta.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#a8c5d8", // --sky
          color: "#1f1b16", // --ink
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Fraunces Display",
            fontSize: 168,
            lineHeight: 0.92,
            letterSpacing: "-0.035em",
          }}
        >
          {hero.name}
          <span style={{ color: "#d45f2a" /* --accent */ }}>.</span>
        </div>
        <div
          style={{
            marginTop: 40,
            fontFamily: "Fraunces Meta",
            fontSize: 27, // keeps the meta line on one row at 1200px
            color: "#2e3b44", // --slate
          }}
        >
          {hero.meta}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces Display", data: display, weight: 400, style: "normal" },
        { name: "Fraunces Meta", data: meta, weight: 500, style: "normal" },
      ],
    },
  );
}
