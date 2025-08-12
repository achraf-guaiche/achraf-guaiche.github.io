import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-8 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground">
            <p className="flex items-center gap-2">
              {t('footer.builtWith')} <Heart size={16} className="text-red-500" />
            </p>
          </div>
          
          <div className="text-muted-foreground">
            <p>&copy; 2024 Achraf Guaiche. {t('footer.rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;