"use client";

import { useEffect, useState } from "react";
import { nav, site, type SectionId } from "@/content";
import styles from "./Nav.module.css";

/**
 * Marks the section currently under the reading line (just below the nav)
 * as active. One passive scroll listener, throttled to animation frames.
 */
function useActiveSection(ids: SectionId[]): SectionId | null {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const header = document.getElementById("site-header");
      const line = (header?.offsetHeight ?? 0) + window.innerHeight * 0.25;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      let current: SectionId | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      if (atBottom) current = ids[ids.length - 1];
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return active;
}

const ids = nav.map((item) => item.id);

export default function Nav() {
  const active = useActiveSection(ids);

  return (
    <header id="site-header" className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          {site.name}
        </a>
        <nav aria-label="Primary">
          <ol className={styles.links}>
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={styles.link}
                    data-active={isActive || undefined}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </header>
  );
}
