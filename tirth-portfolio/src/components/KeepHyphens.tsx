import styles from "./KeepHyphens.module.css";

/**
 * Renders text so hyphenated words ("E-DAIC", "K-Means", "part-time")
 * never break at the hyphen. Browsers have no CSS switch for this.
 */
export default function KeepHyphens({ text }: { text: string }) {
  const parts = text.split(/(\S+-\S+)/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className={styles.nowrap}>
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
