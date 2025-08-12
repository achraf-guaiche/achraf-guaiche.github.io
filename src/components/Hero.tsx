import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.jpg';

interface HeroProps {
  data: {
    initials: string;
    name: string;
    title: string;
    contact: {
      email: string;
      phone: string;
      location: string;
      linkedin: string;
      linkedinUrl: string;
      github: string;
    };
  };
}

const Hero = ({ data }: HeroProps) => {
  const { t } = useLanguage();
  return (
    <section id="about" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full text-background text-2xl font-bold mb-6">
              {data.initials}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
              <span className="gradient-text">{data.name}</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-8">
              {data.title}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                <a href="#contact">{t('hero.getInTouch')}</a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#projects">{t('hero.viewProjects')}</a>
              </Button>
            </div>
          </div>

          {/* Contact Card */}
          <div className="animate-slide-up">
            <Card className="p-8 card-glow bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6 gradient-text">{t('hero.contactInfo')}</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={20} className="text-primary" />
                  <span>{data.contact.location}</span>
                </div>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail size={20} className="text-primary" />
                  <a href={`mailto:${data.contact.email}`} className="hover:text-primary transition-colors">
                    {data.contact.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone size={20} className="text-primary" />
                  <a href={`tel:${data.contact.phone}`} className="hover:text-primary transition-colors">
                    {data.contact.phone}
                  </a>
                </div>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Linkedin size={20} className="text-primary" />
                  <a 
                    href={data.contact.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {data.contact.linkedin}
                  </a>
                </div>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Github size={20} className="text-primary" />
                  <a 
                    href={`https://github.com/${data.contact.github}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {data.contact.github}
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;