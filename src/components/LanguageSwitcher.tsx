import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const getLanguageLabel = (lang: Language) => {
    return lang === 'en' ? 'EN' : 'FR';
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
    >
      <Languages size={16} />
      <span className="text-sm font-medium">
        {getLanguageLabel(language)}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;