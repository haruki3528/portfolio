import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-light mb-2">Haruki Saito</p>
          <p className="text-primary-foreground/80 text-sm">
            Building the future with AI, blockchain, and elegant code
          </p>
          <div className="mt-4 h-px bg-primary-foreground/20 max-w-24 mx-auto"></div>
          <p className="text-primary-foreground/60 text-xs mt-4">
            © 2024 Haruki Saito. Available for freelance worldwide.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
