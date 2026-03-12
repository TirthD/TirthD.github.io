"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 600);
  const translateY = scrollY * 0.25;

  return (
    <section
      id="home"
      className="relative min-h-dvh flex items-center justify-center overflow-hidden"
    >
      {/* Subtle radial background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 30%, rgba(0,113,227,0.06) 0%, transparent 60%), " +
            "radial-gradient(ellipse at 70% 70%, rgba(0,113,227,0.03) 0%, transparent 60%)",
        }}
      />

      <div
        className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center"
        style={{ opacity, transform: `translateY(${translateY}px)` }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#0071E3] mb-5 sm:mb-6"
        >
          AI Research new &middot; Data Engineer &middot; Cloud Enthusiast
        </motion.p>

        {/* Name — single line */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-bold tracking-tight leading-none mb-6 sm:mb-8 text-[#1d1d1f] whitespace-nowrap"
          style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}
        >
          Tirth Dave<span className="text-[#0071E3]">.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base sm:text-lg lg:text-xl text-[#6e6e73] max-w-xl mx-auto mb-10 sm:mb-12 px-4 leading-relaxed"
        >
          Building intelligent systems at the intersection of
          AI, data engineering, and cloud computing.
          <span className="block mt-1 text-[#86868b]">
            MS in Artificial Intelligence at Northeastern University.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex gap-3 sm:gap-4 justify-center flex-wrap"
        >
          <a
            href="#projects"
            className="inline-flex items-center px-7 py-3 sm:px-8 sm:py-3.5 rounded-full
                       bg-[#0071E3] text-white text-sm font-medium
                       transition-all duration-300 hover:bg-[#0077ED]
                       hover:scale-105 hover:shadow-lg
                       active:scale-95"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-7 py-3 sm:px-8 sm:py-3.5 rounded-full
                       text-[#0071E3] text-sm font-medium
                       border border-[#0071E3]/30
                       transition-all duration-300
                       hover:bg-[#0071E3]/5 hover:border-[#0071E3]/50
                       hover:scale-105 active:scale-95"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-14 sm:mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="mx-auto text-[#86868b]"
            >
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}