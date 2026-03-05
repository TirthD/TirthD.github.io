"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const schools = [
  {
    initial: "N",
    name: "Northeastern University",
    sub: "Khoury College of Computer Science",
    degree: "MS in Artificial Intelligence",
    date: "Sep 2025 – Present",
    courses: "Foundations of AI, Algorithms, Applied Programming for AI, ML & Pattern Recognition",
  },
  {
    initial: "S",
    name: "Somaiya University",
    sub: "K.J. Somaiya College of Engineering",
    degree: "BTech — Electronics & Telecom (Minor: CS)",
    date: "Aug 2020 – Jun 2024 · GPA: 3.757",
    courses: "DBMS, ML, Soft Computing, Data Mining, Cloud Computing, DSA",
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-20 sm:py-28 lg:py-36 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs sm:text-sm tracking-[0.15em] uppercase text-[#0071E3] mb-3">
            Education
          </p>
          <h2
            className="font-bold tracking-tight mb-12 sm:mb-16 text-[#1d1d1f]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: "1.1" }}
          >
            Where I
            <br />
            <span className="text-[#0071E3]">learned.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {schools.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="p-6 sm:p-8 rounded-2xl lg:rounded-3xl bg-[#f5f5f7]"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-4 text-white text-base sm:text-lg font-bold bg-[#0071E3]">
                {s.initial}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#1d1d1f] mb-1">{s.name}</h3>
              <p className="text-sm text-[#86868b] mb-3">{s.sub}</p>
              <p className="text-sm font-medium text-[#0071E3]">{s.degree}</p>
              <p className="text-xs text-[#86868b] mt-1">{s.date}</p>
              <p className="text-xs text-[#6e6e73] mt-3 leading-relaxed">{s.courses}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}