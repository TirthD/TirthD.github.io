"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/data/experience";

const tagColor: Record<string, string> = {
  "AI/ML": "#0071E3",
  "Data Engineering": "#0071E3",
  Cloud: "#0071E3",
};

function ExperienceCard({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <div className="p-6 sm:p-8 rounded-2xl lg:rounded-3xl bg-[#f5f5f7] hover:bg-[#ededf0] transition-colors duration-300">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-4">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-[#1d1d1f]">{exp.role}</h3>
            <p className="text-sm text-[#0071E3]">
              {exp.company} &middot; {exp.location}
            </p>
          </div>
          <span className="text-xs text-[#86868b] bg-white px-3 py-1 rounded-full whitespace-nowrap self-start mt-1 sm:mt-0">
            {exp.date}
          </span>
        </div>

        {/* Points */}
        <ul className="space-y-2 mb-5">
          {exp.points.map((p, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-[#6e6e73] leading-relaxed">
              <span className="mt-1.75 w-1 h-1 rounded-full bg-[#0071E3] shrink-0" />
              {p}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {exp.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full text-white font-medium"
              style={{ backgroundColor: tagColor[t] }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const achievements = [
  { icon: "🏆", text: "Winner — Code for Good Hackathon by J.P. Morgan & Chase" },
  { icon: "🤖", text: "MATLAB & Image Processing team at KJSCE Robocon" },
  { icon: "☁️", text: "Google Cloud Challenge — Completed Successfully" },
];

export default function Experience() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-20 sm:py-28 lg:py-36">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs sm:text-sm tracking-[0.15em] uppercase text-[#0071E3] mb-3">
            Experience
          </p>
          <h2
            className="font-bold tracking-tight mb-12 sm:mb-16 text-[#1d1d1f]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: "1.1" }}
          >
            Where I&rsquo;ve
            <br />
            <span className="text-[#0071E3]">worked.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-12"
        >
          <p className="text-xs tracking-[0.15em] uppercase text-[#86868b] mb-4">
            Achievements &amp; Activities
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
            {achievements.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#f5f5f7] text-sm text-[#1d1d1f]"
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}