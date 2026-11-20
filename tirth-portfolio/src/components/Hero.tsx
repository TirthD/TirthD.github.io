import { hero } from "@/content";
import Button from "./Button";
import Section from "./Section";
import Blooms from "./texture/Blooms";
import Vignette from "./texture/Vignette";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <Section
      id="top"
      tone="sky"
      tall
      labelledBy="hero-title"
      className={styles.hero}
      backdrop={
        <>
          <Blooms variant="hero" />
          <Vignette />
        </>
      }
    >
      <h1 id="hero-title" className="t-name glow">
        {hero.name}
        <span className="stop">.</span>
      </h1>
      <p className={styles.line}>{hero.line}</p>
      <p className={`t-meta ${styles.meta}`}>{hero.meta}</p>
      <div className={styles.actions}>
        <Button href={hero.primary.href}>{hero.primary.label}</Button>
        <Button href={hero.secondary.href} variant="outline">
          {hero.secondary.label}
        </Button>
      </div>
    </Section>
  );
}
