import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

interface SkillsProps {
  skills: string[];
}

const Skills = ({ skills }: SkillsProps) => {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('skills.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <Card className="p-8 lg:p-12 card-glow bg-card/50 backdrop-blur-sm">
          <div className="grid gap-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium hover-scale bg-secondary/80 hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;