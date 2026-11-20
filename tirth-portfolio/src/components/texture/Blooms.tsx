import styles from "./Blooms.module.css";

/**
 * Two soft light blooms (cream + orange) sitting partly off the edge of a
 * section and drifting slowly. The parent section clips them (overflow:
 * hidden), so they can never cause horizontal scrolling.
 */
export default function Blooms({ variant }: { variant: "hero" | "contact" }) {
  return (
    <div className={`${styles.blooms} ${styles[variant]}`} aria-hidden="true">
      <span className={`${styles.bloom} ${styles.cream}`} />
      <span className={`${styles.bloom} ${styles.orange}`} />
    </div>
  );
}
