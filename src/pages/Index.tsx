import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Summary } from "@/components/Summary";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Workshops } from "@/components/Workshops";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Nav />
      <Hero />
      <Summary />
      <Skills />
      <Experience />
      <Projects />
      <Workshops />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
