import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import RoleFilter from "@/components/sections/RoleFilter";
import Contact from "@/components/sections/Contact";
import FloatingStickers from "@/components/stickers/FloatingStickers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <FloatingStickers />
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <RoleFilter />
        <Contact />
      </main>
      <Footer />
    </>
  );
}