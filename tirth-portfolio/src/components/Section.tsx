import type { ReactNode } from "react";
import styles from "./Section.module.css";

type Tone = "sky" | "orange" | "cream";

type SectionProps = {
  id?: string;
  tone: Tone;
  /** Hero and contact get extra top padding */
  tall?: boolean;
  labelledBy?: string;
  className?: string;
  /** Decorative layers (blooms, vignette) rendered behind the content */
  backdrop?: ReactNode;
  children: ReactNode;
};

export default function Section({
  id,
  tone,
  tall,
  labelledBy,
  className,
  backdrop,
  children,
}: SectionProps) {
  const classes = [
    styles.section,
    styles[tone],
    tone === "orange" ? "on-orange" : "",
    tall ? styles.tall : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} aria-labelledby={labelledBy} className={classes}>
      {backdrop}
      <div className={`container ${styles.content}`}>{children}</div>
    </section>
  );
}

export function SectionLabel({ num, name }: { num: string; name: string }) {
  return (
    <p className={`t-meta ${styles.label}`}>
      <span className={styles.dot} aria-hidden="true" />
      {num} — {name}
    </p>
  );
}
