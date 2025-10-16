import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-serif text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
            ESSENZA
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-secondary/20 rounded-full text-xs font-medium">
              {t('footer.wholesale')}
            </span>
          </div>

          <div className="text-sm text-muted-foreground">
            © {currentYear} Luxury Perfume Distribution. {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
};
