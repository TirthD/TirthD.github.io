import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Section, { SectionLabel } from "@/components/Section";
import { nav } from "@/content";

// Layout shell. Each placeholder is replaced by its real section component
// in the following steps.
export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />

        {nav.map((item, i) => (
          <Section
            key={item.id}
            id={item.id}
            tone={(["orange", "cream", "sky", "orange"] as const)[i]}
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
