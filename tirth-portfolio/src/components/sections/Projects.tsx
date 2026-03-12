"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects, publication } from "@/data/projects";

function ProjectCard({ proj, index }: { proj: (typeof projects)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className="h-full"
    >
      <div className="group p-6 sm:p-8 rounded-2xl lg:rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
        {/* Tags */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {proj.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full font-medium bg-[#0071E3]/20 text-[#60a5fa]"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{proj.title}</h3>
        <p className="text-sm text-[#86868b] leading-relaxed mb-6 flex-1">{proj.description}</p>

        {/* Tech */}
        <div className="flex gap-2 flex-wrap">
          {proj.tech.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-[#6e6e73]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const pubRef = useRef(null);
  const pubInView = useInView(pubRef, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="py-20 sm:py-28 lg:py-36 bg-[#000000]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs sm:text-sm tracking-[0.15em] uppercase text-[#86868b] mb-3">
            Projects
          </p>
          <h2
            className="font-bold tracking-tight mb-12 sm:mb-16 text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: "1.1" }}
          >
            What I&rsquo;ve
            <br />
            <span className="text-[#0071E3]">built.</span>
          </h2>
        </motion.div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} proj={p} index={i} />
          ))}
        </div>

        {/* Publication */}
        <motion.div
          ref={pubRef}
          initial={{ opacity: 0, y: 20 }}
          animate={pubInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-2xl lg:rounded-3xl border border-white/10 bg-white/5"
        >
          <p className="text-xs tracking-[0.15em] uppercase text-[#86868b] mb-3">Publication</p>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
            {publication.title}
          </h3>
          <p className="text-sm text-[#86868b] mb-3">
            {publication.subtitle} — {publication.conference}
          </p>
          <p className="text-xs text-[#6e6e73]">
            {publication.authors} &middot; doi: {publication.doi}
          </p>
        </motion.div>
      </div>
    </section>
  );
}