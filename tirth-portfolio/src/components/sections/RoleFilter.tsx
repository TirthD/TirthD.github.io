"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { roleContent } from "@/data/roles";

const roles = [
  { id: "all", label: "All Roles", icon: "✦" },
  { id: "aiml", label: "AI / ML", icon: "🧠" },
  { id: "data", label: "Data Engineer", icon: "📊" },
  { id: "cloud", label: "Cloud", icon: "☁️" },
];

export default function RoleFilter() {
  const [active, setActive] = useState("all");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="roles" className="py-20 sm:py-28 lg:py-36 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs sm:text-sm tracking-[0.15em] uppercase text-[#0071E3] mb-3">
            Explore by Role
          </p>
          <h2
            className="font-bold tracking-tight mb-4 sm:mb-6 text-[#1d1d1f]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: "1.1" }}
          >
            Find what
            <br />
            <span className="text-[#0071E3]">you need.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6e6e73] mb-10 sm:mb-12 max-w-xl">
            Looking for a specific skill set? Filter by role to see relevant experience, skills, and projects.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex gap-2 sm:gap-3 flex-wrap mb-10 sm:mb-12">
          {roles.map((r) => (
            <button
              key={r.id}
              onClick={() => setActive(r.id)}
              className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                active === r.id
                  ? "bg-[#0071E3] text-white shadow-lg scale-105"
                  : "bg-[#f5f5f7] text-[#6e6e73] hover:bg-[#ededf0]"
              }`}
            >
              <span className="mr-1.5">{r.icon}</span>
              {r.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {active === "all" ? (
            <motion.div
              key="all"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {(["aiml", "data", "cloud"] as const).map((r, i) => (
                <motion.div
                  key={r}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setActive(r)}
                  className="p-6 sm:p-8 rounded-2xl lg:rounded-3xl bg-[#f5f5f7] hover:bg-[#ededf0] transition-colors duration-300 cursor-pointer group"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-[#1d1d1f] mb-2 group-hover:text-[#0071E3] transition-colors">
                    {roleContent[r].title}
                  </h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed mb-4">
                    {roleContent[r].summary}
                  </p>
                  <span className="text-sm font-medium text-[#0071E3]">Explore →</span>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 gap-4 sm:gap-6"
            >
              {/* Skills */}
              <div className="p-6 sm:p-8 rounded-2xl lg:rounded-3xl bg-[#f5f5f7]">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] mb-3">
                  {roleContent[active].title}
                </h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed mb-6">
                  {roleContent[active].summary}
                </p>
                <h4 className="text-xs tracking-[0.15em] uppercase text-[#86868b] mb-3">
                  Key Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {roleContent[active].skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1.5 rounded-full bg-[#0071E3] text-white font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="p-6 sm:p-8 rounded-2xl lg:rounded-3xl bg-[#f5f5f7]">
                <h4 className="text-xs tracking-[0.15em] uppercase text-[#86868b] mb-4">
                  Highlights
                </h4>
                <ul className="space-y-3">
                  {roleContent[active].highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[#1d1d1f]">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#0071E3] flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}