import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Now from "@/components/Now";
import Path from "@/components/Path";
import Work from "@/components/Work";

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
        <Work />
        <Path />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
