import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'uz' as const, label: 'O\'z' },
    { code: 'ru' as const, label: 'Ру' },
    { code: 'en' as const, label: 'En' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-serif text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent" >
                <button onClick={() => window.location.href = '/'}>ESSENZA</button>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('brands')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t('nav.brands')}
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t('nav.benefits')}
            </button>
            <button
              onClick={() => window.location.href = '/catalog'}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t('nav.catalog')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t('nav.contact')}
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-muted-foreground" />
            {languages.map((lang) => (
              <Button
                key={lang.code}
                variant={language === lang.code ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage(lang.code)}
                className="text-xs"
              >
                {lang.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
