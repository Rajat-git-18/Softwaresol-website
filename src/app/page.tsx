import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Practices from "@/components/sections/Practices";
import Projects from "@/components/sections/Projects";
import AiStandard from "@/components/sections/AiStandard";
import WhyUs from "@/components/sections/WhyUs";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Practices />
        <Projects />
        <AiStandard />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
