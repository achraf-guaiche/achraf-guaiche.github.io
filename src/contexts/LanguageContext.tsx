import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.description': 'Passionate full-stack developer with expertise in modern web technologies. Building innovative solutions that bridge the gap between design and functionality.',
    'hero.getInTouch': 'Get In Touch',
    'hero.viewProjects': 'View Projects',
    'hero.contactInfo': 'Contact Information',
    
    // Skills
    'skills.title': 'Skills & Technologies',
    'skills.subtitle': 'Technologies and tools I work with',
    
    // Experience
    'experience.title': 'Professional Experience',
    'experience.subtitle': 'My journey in software development',
    
    // Education
    'education.title': 'Education',
    'education.subtitle': 'Academic foundation and continuous learning journey',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Some of my recent work and side projects',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s discuss your next project',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.builtWith': 'Built with React & Tailwind CSS'
  },
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.description': 'Développeur full-stack passionné avec une expertise dans les technologies web modernes. Création de solutions innovantes qui comblent le fossé entre design et fonctionnalité.',
    'hero.getInTouch': 'Me contacter',
    'hero.viewProjects': 'Voir les projets',
    'hero.contactInfo': 'Informations de contact',
    
    // Skills
    'skills.title': 'Compétences & Technologies',
    'skills.subtitle': 'Technologies et outils avec lesquels je travaille',
    
    // Experience
    'experience.title': 'Expérience Professionnelle',
    'experience.subtitle': 'Mon parcours dans le développement logiciel',
    
    // Education
    'education.title': 'Formation',
    'education.subtitle': 'Base académique et apprentissage continu',
    
    // Projects
    'projects.title': 'Projets Phares',
    'projects.subtitle': 'Quelques-uns de mes travaux récents et projets personnels',
    'projects.code': 'Code',
    'projects.demo': 'Démo',
    
    // Contact
    'contact.title': 'Me contacter',
    'contact.subtitle': 'Discutons de votre prochain projet',
    'contact.name': 'Votre nom',
    'contact.email': 'Votre email',
    'contact.message': 'Votre message',
    'contact.send': 'Envoyer le message',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.builtWith': 'Construit avec React & Tailwind CSS'
  }
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};