import { contact } from "@/content";
import styles from "./Footer.module.css";

/**
 * Page footer: a real top-level <footer> after <main>, pulled up over the
 * Contact section's bottom padding (fixed height, see --footer-h in
 * tokens.css) so the section's vignette and blooms continue under it.
 */
export default function Footer() {
  return (
    <footer className={`on-orange ${styles.footer}`}>
      <div className="container">
        <div className={`t-meta ${styles.inner}`}>
          <p>{contact.footer.left}</p>
          <p>{contact.footer.right}</p>
        </div>
      </div>
    </footer>
  );
}
