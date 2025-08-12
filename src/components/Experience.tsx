import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Building } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  details: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience = ({ experiences }: ExperienceProps) => {
  const { t } = useLanguage();
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('experience.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary-glow to-accent hidden lg:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background hidden lg:block"></div>
                
                <Card className="lg:ml-20 p-6 lg:p-8 card-glow hover-scale bg-card/50 backdrop-blur-sm">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-semibold gradient-text mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building size={16} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="self-start lg:self-auto">
                      <CalendarDays size={14} className="mr-2" />
                      {exp.period}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    {exp.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;