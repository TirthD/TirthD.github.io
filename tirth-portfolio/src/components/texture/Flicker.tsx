import styles from "./Flicker.module.css";

/** Barely-there light flicker: a cream layer blinking to 3–6% a few times. */
export default function Flicker() {
  return <div className={styles.flicker} aria-hidden="true" />;
}
