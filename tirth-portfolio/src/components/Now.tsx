import { nav, now } from "@/content";
import KeepHyphens from "./KeepHyphens";
import Section, { SectionLabel } from "./Section";
import styles from "./Now.module.css";

const item = nav.find((n) => n.id === "now")!;

export default function Now() {
  return (
    <Section id="now" tone="orange" labelledBy="now-title">
      <SectionLabel num={item.num} name={item.label} />
      <div className={styles.grid}>
        <h2 id="now-title" className={`t-heading ${styles.heading}`}>
          {now.heading}
        </h2>

        <div className={styles.details}>
          <p className="t-body">
            <KeepHyphens text={now.body} />
          </p>

          <ul className={styles.timeline}>
            {now.timeline.map((t) => (
              <li key={t.when}>
                <p className="t-meta">{t.when}</p>
                <p className={`t-title ${styles.role}`}>{t.role}</p>
              </li>
            ))}
          </ul>

          <p className={styles.stack}>
            <span className="t-meta">{now.stackLabel}</span>
            <span>{now.stack.join(", ")}</span>
          </p>
        </div>
      </div>
    </Section>
  );
}
