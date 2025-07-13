import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Knowledge Base",
      client: "Fintech Startup (USA, 2024)",
      description: "Designed and developed an internal tool to search and analyze company documents using embeddings and GPT-4 via LangChain.",
      tech: ["Next.js", "LangChain", "OpenAI", "Pinecone"],
      category: "AI/ML"
    },
    {
      title: "NFT Marketplace",
      client: "Creative Agency (Japan, 2023)",
      description: "Created a full-stack NFT platform with wallet authentication, custom minting contracts, and metadata handling.",
      tech: ["Solidity", "React", "Ethers.js", "IPFS"],
      category: "Blockchain"
    },
    {
      title: "LLM Resume Generator",
      client: "Personal Project (2023)",
      description: "Developed a GPT-4-powered web app that generates tailored resumes and cover letters from structured input.",
      tech: ["Python", "Streamlit", "OpenAI API"],
      category: "AI/ML"
    },
    {
      title: "Blockchain Voting App",
      client: "International DAO (2022)",
      description: "Built token-based voting dApp with ENS integration and on-chain result logging.",
      tech: ["Ethereum", "Solidity", "Web3.js"],
      category: "Blockchain"
    },
    {
      title: "SaaS Dashboard Platform",
      client: "Startup (USA, 2023)",
      description: "Developed a feature-rich dashboard with billing, analytics, and real-time notifications.",
      tech: ["React", "Firebase", "Tailwind", "Stripe"],
      category: "Full Stack"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML":
        return "bg-bamboo text-white";
      case "Blockchain":
        return "bg-primary text-primary-foreground";
      case "Full Stack":
        return "bg-cherry-blossom text-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-mist">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-16 bg-gradient-hero mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work in AI, blockchain, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Category Badge */}
                <div className="mb-4">
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Client */}
                <p className="text-sm text-muted-foreground mb-3 italic">
                  {project.client}
                </p>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="soft" 
                    size="sm" 
                    className="flex-1"
                  >
                    <ExternalLink size={16} />
                    View Details
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button variant="zen" size="zen">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;