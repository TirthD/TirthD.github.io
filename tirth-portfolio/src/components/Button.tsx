import type { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  variant?: "solid" | "outline";
  /** Opens in a new tab with rel="noopener noreferrer" */
  external?: boolean;
  children: ReactNode;
};

/** Pill-shaped link button. Solid = ink fill, cream text; outline = 1px ink. */
export default function Button({
  href,
  variant = "solid",
  external,
  children,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${styles.button} ${styles[variant]}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
