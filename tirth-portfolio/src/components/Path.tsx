import { nav, path } from "@/content";
import KeepHyphens from "./KeepHyphens";
import Section, { SectionLabel } from "./Section";
import TextLink from "./TextLink";
import styles from "./Path.module.css";

const item = nav.find((n) => n.id === "path")!;

export default function Path() {
  return (
    <Section id="path" tone="sky" labelledBy="path-title">
      <SectionLabel num={item.num} name={item.label} />
      <h2 id="path-title" className={`t-heading ${styles.heading}`}>
        {path.heading}
      </h2>
      <p className={`t-body ${styles.subline}`}>{path.subline}</p>

      <ol className={styles.list}>
        {path.rows.map((row) => (
          <li key={`${row.year}-${row.role}`} className={styles.row}>
            <p className={`t-meta ${styles.year}`}>{row.year}</p>
            <div className={styles.where}>
              <h3 className={styles.place}>{row.place}</h3>
              <p className={`t-meta ${styles.role}`}>{row.role}</p>
            </div>
            <p className={`t-body ${styles.note}`}>
              <KeepHyphens text={row.note} />
              {row.link && (
                <>
                  {" "}
                  <TextLink link={row.link} className={styles.noteLink} />
                </>
              )}
            </p>
          </li>
        ))}
      </ol>

      <p className={styles.links}>
        {path.links.map((link) => (
          <TextLink key={link.href} link={link} className={styles.footLink} />
        ))}
      </p>
    </Section>
  );
}
