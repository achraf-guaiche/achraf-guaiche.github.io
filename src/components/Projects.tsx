import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Project {
  name: string;
  desc: string;
  tags: string[];
}

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const { t } = useLanguage();
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('projects.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 card-glow hover-scale bg-card/50 backdrop-blur-sm animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="w-full h-32 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-primary-foreground text-2xl font-bold">
                      {project.name.charAt(0)}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 gradient-text">
                    {project.name}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.desc}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github size={16} className="mr-2" />
                      {t('projects.code')}
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-primary hover:opacity-90">
                      <ExternalLink size={16} className="mr-2" />
                      {t('projects.demo')}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;