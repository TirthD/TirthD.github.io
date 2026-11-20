import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Now from "@/components/Now";
import Section, { SectionLabel } from "@/components/Section";
import { nav } from "@/content";

// Placeholders for sections not built yet; replaced in the following steps.
const pending = nav.filter((item) => item.id !== "now");
const tones = { work: "cream", path: "sky", contact: "orange" } as const;

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Now />

        {pending.map((item) => (
          <Section
            key={item.id}
            id={item.id}
            tone={tones[item.id as keyof typeof tones]}
            tall={item.id === "contact"}
            labelledBy={`${item.id}-title`}
          >
            <SectionLabel num={item.num} name={item.label} />
            <h2 id={`${item.id}-title`} className="t-heading">
              {item.label}
              <span className="stop">.</span>
            </h2>
            <div style={{ height: "60vh" }} />
          </Section>
        ))}
      </main>
    </>
  );
}
