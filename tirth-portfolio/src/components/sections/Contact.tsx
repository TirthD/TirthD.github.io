"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-36 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs sm:text-sm tracking-[0.15em] uppercase text-[#0071E3] mb-3">
            Contact
          </p>
          <h2
            className="font-bold tracking-tight mb-4 sm:mb-6 text-[#1d1d1f]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: "1.1" }}
          >
            Let&rsquo;s build
            <br />
            <span className="text-[#0071E3]">together.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6e6e73] max-w-lg mx-auto mb-10 sm:mb-12">
            Open to opportunities in AI/ML, Data Engineering, and Cloud.
            Let&rsquo;s connect and create something impactful.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <a
            href="mailto:Dave.tir@northeastern.edu"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full
                       bg-[#0071E3] text-white text-sm font-medium
                       transition-all duration-300 hover:bg-[#0077ED]
                       hover:scale-105 hover:shadow-lg
                       active:scale-95"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/tirth-dave-43954121a/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full
                       text-[#0071E3] text-sm font-medium border border-[#0071E3]/30
                       transition-all duration-300 hover:bg-[#0071E3]/5 hover:border-[#0071E3]/50
                       hover:scale-105 active:scale-95"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/TirthD"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full
                       text-[#0071E3] text-sm font-medium border border-[#0071E3]/30
                       transition-all duration-300 hover:bg-[#0071E3]/5 hover:border-[#0071E3]/50
                       hover:scale-105 active:scale-95"
          >
            GitHub
          </a>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 sm:mt-16 pt-8 border-t border-[#d2d2d7]/40"
        >
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 text-xs text-[#86868b]">
            <span>+1 (857) 222-1734</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>Dave.tir@northeastern.edu</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>Boston, MA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}