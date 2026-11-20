import Image from "next/image";
import styles from "./ImagePanel.module.css";

type ImagePanelProps = {
  image?: { src: string; alt: string };
  placeholder: string;
};

/**
 * 4:3 panel with a soft cream inner glow and a faint orange corner glow.
 * Shows a labeled placeholder until an image is set in content.ts.
 */
export default function ImagePanel({ image, placeholder }: ImagePanelProps) {
  return (
    <div className={styles.panel}>
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 900px) calc(100vw - 48px), 540px"
          className={styles.image}
        />
      ) : (
        <p className={`t-meta ${styles.placeholder}`}>[ {placeholder} ]</p>
      )}
    </div>
  );
}
