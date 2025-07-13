import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Globe, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-mist">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-16 bg-gradient-hero mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project. I'm available for freelance work and remote collaborations worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-card border-0 shadow-card">
              <div className="flex items-center mb-4">
                <Mail className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-semibold text-foreground">Email</h3>
              </div>
              <p className="text-muted-foreground mb-2">Primary:</p>
              <a 
                href="mailto:chardy14789@gmail.com" 
                className="text-primary hover:underline transition-colors"
              >
                chardy14789@gmail.com
              </a>
              <p className="text-muted-foreground mb-2 mt-3">Alternative:</p>
              <a 
                href="mailto:haruki14789@outlook.com" 
                className="text-primary hover:underline transition-colors"
              >
                haruki14789@outlook.com
              </a>
            </Card>

            <Card className="p-6 bg-gradient-card border-0 shadow-card">
              <div className="flex items-center mb-4">
                <Globe className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-semibold text-foreground">Availability</h3>
              </div>
              <p className="text-muted-foreground mb-2">🌏 Remote & Freelance</p>
              <p className="text-muted-foreground mb-2">🌍 Available Worldwide</p>
              <p className="text-muted-foreground">✨ Open to new opportunities</p>
            </Card>

            <Card className="p-6 bg-gradient-card border-0 shadow-card">
              <div className="flex items-center mb-4">
                <Clock className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-semibold text-foreground">Response Time</h3>
              </div>
              <p className="text-muted-foreground">
                I typically respond within 24 hours. For urgent projects, feel free to mention it in your message.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card border-0 shadow-zen">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Start a Conversation
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input 
                    id="firstName" 
                    placeholder="Your first name"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input 
                    id="lastName" 
                    placeholder="Your last name"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <select 
                  id="project" 
                  className="w-full p-3 bg-background border border-border rounded-md focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select project type</option>
                  <option value="ai">AI/ML Integration</option>
                  <option value="blockchain">Blockchain Development</option>
                  <option value="fullstack">Full Stack Application</option>
                  <option value="consulting">Technical Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                  rows={5}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="zen" 
                size="zen" 
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;