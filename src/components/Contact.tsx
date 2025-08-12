import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactProps {
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    linkedinUrl: string;
    github: string;
  };
}

const Contact = ({ contact }: ContactProps) => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('contact.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="p-8 card-glow bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-8 gradient-text">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href={`mailto:${contact.email}`} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href={`tel:${contact.phone}`} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">{contact.location}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="font-medium mb-4">Follow me</p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href={`https://github.com/${contact.github}`} target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* CTA Card */}
          <Card className="p-8 card-glow bg-gradient-primary text-primary-foreground">
            <h3 className="text-2xl font-semibold mb-6">Ready to Start a Project?</h3>
            <p className="mb-8 opacity-90">
              Whether you need a web application, mobile solution, or consultation, 
              I'm here to help turn your vision into reality.
            </p>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="w-full"
                asChild
              >
                <a href={`mailto:${contact.email}?subject=Project Inquiry`}>
                  <Send size={20} className="mr-2" />
                  Send Email
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href={`tel:${contact.phone}`}>
                  <Phone size={20} className="mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;