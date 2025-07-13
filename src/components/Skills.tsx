import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Chakra UI", "SCSS", "HTML5"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express", "NestJS", "Firebase", "Supabase", "REST APIs", "GraphQL"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "TypeORM"]
    },
    {
      title: "Machine Learning & AI",
      icon: "🤖",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI GPT-4", "LangChain", "Hugging Face", "Llama", "RAG pipelines", "Semantic search"]
    },
    {
      title: "Blockchain Development",
      icon: "⛓️",
      skills: ["Ethereum", "Solidity", "Ethers.js", "Web3.js", "Smart contracts", "NFT marketplaces", "DAO tools", "Chainlink", "Moralis", "IPFS", "The Graph"]
    },
    {
      title: "DevOps & Tools",
      icon: "🛠️",
      skills: ["Git", "GitHub", "GitLab", "Docker", "Vercel", "Netlify", "AWS", "Figma", "Notion"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-16 bg-gradient-hero mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern web development, AI integration, and blockchain solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105"
            >
              <div className="p-6">
                {/* Category Header */}
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Specializations */}
        <div className="mt-16">
          <h3 className="text-2xl font-light text-center text-foreground mb-8">
            Key Specializations
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
              <div className="text-3xl mb-4">🧠</div>
              <h4 className="text-lg font-medium text-foreground mb-2">AI Integration</h4>
              <p className="text-muted-foreground text-sm">
                LLM app design, RAG pipelines, prompt chaining, embedding search, chatbots, and document processing
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
              <div className="text-3xl mb-4">🔗</div>
              <h4 className="text-lg font-medium text-foreground mb-2">Blockchain Systems</h4>
              <p className="text-muted-foreground text-sm">
                Smart contract creation & auditing, NFT marketplaces, DAO tools, and wallet integrations
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
              <div className="text-3xl mb-4">⚡</div>
              <h4 className="text-lg font-medium text-foreground mb-2">Full Stack Excellence</h4>
              <p className="text-muted-foreground text-sm">
                Fast prototyping, clean code architecture, and seamless UX with modern technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;