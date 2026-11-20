import styles from "./Grain.module.css";

/** Full-page video grain: a tiled noise PNG, multiplied, jittering in steps. */
export default function Grain() {
  return <div className={styles.grain} aria-hidden="true" />;
}
