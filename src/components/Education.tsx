import { Card } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface EducationProps {
  education: string[];
}

const Education = ({ education }: EducationProps) => {
  const { t } = useLanguage();
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('education.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('education.subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 card-glow bg-card/50 backdrop-blur-sm">
            <div className="space-y-6">
              {education.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={20} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-medium">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;