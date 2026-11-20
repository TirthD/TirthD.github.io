import { contact, nav } from "@/content";
import Button from "./Button";
import Section, { SectionLabel, WithStop } from "./Section";
import Blooms from "./texture/Blooms";
import Vignette from "./texture/Vignette";
import styles from "./Contact.module.css";

const item = nav.find((n) => n.id === "contact")!;

/** Lets a long address wrap after the "@" instead of overflowing. */
function Email({ address }: { address: string }) {
  const [user, domain] = address.split("@");
  return (
    <a href={`mailto:${address}`} className={styles.email}>
      {user}@<wbr />
      {domain}
    </a>
  );
}

export default function Contact() {
  return (
    <Section
      id="contact"
      tone="orange"
      tall
      labelledBy="contact-title"
      className={styles.contact}
      backdrop={
        <>
          <Blooms variant="contact" />
          <Vignette />
        </>
      }
    >
      <SectionLabel num={item.num} name={item.label} />
      <h2 id="contact-title" className={`glow ${styles.heading}`}>
        <WithStop text={contact.heading} />
      </h2>
      <p className={`t-body ${styles.line}`}>{contact.line}</p>
      <p className={styles.emailRow}>
        <Email address={contact.email} />
      </p>

      <div className={styles.actions}>
        {contact.buttons.map((b) => (
          <Button
            key={b.href}
            href={b.href}
            variant={b.variant}
            external={b.external}
          >
            {b.label}
          </Button>
        ))}
      </div>

      {/* Inside the section so the vignette and blooms run under it seamlessly */}
      <footer className={`t-meta ${styles.footer}`}>
        <p>{contact.footer.left}</p>
        <p>{contact.footer.right}</p>
      </footer>
    </Section>
  );
}
