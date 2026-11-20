import { nav, work, type Project } from "@/content";
import ImagePanel from "./ImagePanel";
import KeepHyphens from "./KeepHyphens";
import Section, { SectionLabel } from "./Section";
import styles from "./Work.module.css";

const item = nav.find((n) => n.id === "work")!;

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const titleId = `project-${index}`;
  const links = [
    project.github && { label: "GitHub", href: project.github },
    project.demo && { label: "Live demo", href: project.demo },
  ].filter((l): l is { label: string; href: string } => Boolean(l));

  return (
    <li className={styles.row}>
      <article className={styles.text} aria-labelledby={titleId}>
        <p className="t-meta">{project.kind}</p>
        <h3 id={titleId} className={`t-title ${styles.title}`}>
          {project.title}
        </h3>
        <p className={`t-body ${styles.body}`}>
          <KeepHyphens text={project.body} />
        </p>

        {/* dt (label) comes first for screen readers; CSS shows the value on top */}
        <dl
          className={styles.stats}
          style={{ "--cols": project.stats.length } as React.CSSProperties}
        >
          {project.stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <dt className={`t-meta ${styles.statLabel}`}>{s.label}</dt>
              <dd className={styles.statValue}>
                <KeepHyphens text={s.value} />
              </dd>
            </div>
          ))}
        </dl>

        <p className={`t-meta ${styles.stack}`}>{project.stack.join(", ")}</p>

        {links.length > 0 && (
          <p className={styles.links}>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label} ↗
              </a>
            ))}
          </p>
        )}
      </article>

      <ImagePanel image={project.image} placeholder={project.placeholder} />
    </li>
  );
}

export default function Work() {
  return (
    <Section id="work" tone="cream" labelledBy="work-title">
      <SectionLabel num={item.num} name={item.label} />
      <h2 id="work-title" className={`t-heading ${styles.heading}`}>
        {work.heading}
      </h2>
      <ol className={styles.list}>
        {work.projects.map((p, i) => (
          <ProjectRow key={p.title} project={p} index={i} />
        ))}
      </ol>
    </Section>
  );
}
