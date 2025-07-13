import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-4">
            About Me
          </h2>
          <div className="h-1 w-16 bg-gradient-hero mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Summary Card */}
          <Card className="p-8 bg-gradient-card shadow-zen border-0">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Creative & Results-Driven
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Full Stack Developer with a focus on AI integration and blockchain systems. 
              I specialize in building modern, scalable applications that blend strong UX with automation 
              and cutting-edge technology.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My approach centers on solving real-world problems through clean architecture, 
              smart contracts, and LLM-based AI tools. I'm passionate about creating solutions 
              that make a meaningful impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently open to global freelance and remote collaborations, 
              bringing over 5 years of experience delivering successful projects 
              across Japan, Europe, and North America.
            </p>
          </Card>

          {/* Experience Highlights */}
          <div className="space-y-6">
            <div className="bg-gradient-card p-6 rounded-lg shadow-card border border-border">
              <h4 className="text-xl font-medium text-foreground mb-3">
                🌏 Global Experience
              </h4>
              <p className="text-muted-foreground">
                Delivered 35+ successful freelance projects across three continents, 
                working with startups, design agencies, and entrepreneurs worldwide.
              </p>
            </div>

            <div className="bg-gradient-card p-6 rounded-lg shadow-card border border-border">
              <h4 className="text-xl font-medium text-foreground mb-3">
                🤖 AI & Blockchain Focus
              </h4>
              <p className="text-muted-foreground">
                Specialized in LLM-powered applications, smart contract development, 
                and blockchain integrations with a track record of innovative solutions.
              </p>
            </div>

            <div className="bg-gradient-card p-6 rounded-lg shadow-card border border-border">
              <h4 className="text-xl font-medium text-foreground mb-3">
                🎓 Academic Foundation
              </h4>
              <p className="text-muted-foreground">
                B.S. in Computer Science from Osaka University (2014-2018), 
                providing a strong theoretical foundation for practical applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;