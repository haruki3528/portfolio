import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-zen px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main content */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-foreground mb-6 tracking-wide">
            Haruki Saito
          </h1>
          <div className="h-1 w-24 bg-gradient-hero mx-auto mb-8 rounded-full"></div>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-light">
            Full Stack Developer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Specializing in AI integration and blockchain systems. 
            Building modern, scalable applications that blend strong UX with automation and cutting-edge technology.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="zen" 
            size="zen"
            onClick={() => scrollToSection("projects")}
            className="min-w-48"
          >
            View My Work
          </Button>
          <Button 
            variant="minimal" 
            size="zen"
            onClick={() => scrollToSection("contact")}
            className="min-w-48"
          >
            Get In Touch
          </Button>
        </div>

        {/* Contact Links */}
        <div className="flex justify-center space-x-6">
          <a 
            href="mailto:chardy14789@gmail.com" 
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;