import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Workshops } from "@/components/Workshops";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-[Inter]">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Workshops />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;