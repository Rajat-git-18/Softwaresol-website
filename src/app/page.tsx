import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Practices from "@/components/sections/Practices";
import Products from "@/components/sections/Products";
import AiStandard from "@/components/sections/AiStandard";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Practices />
        <Products />
        <AiStandard />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
