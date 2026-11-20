import styles from "./Vignette.module.css";

/** Subtle radial darkening toward the edges (ink, up to 16%). Static. */
export default function Vignette() {
  return <div className={styles.vignette} aria-hidden="true" />;
}
