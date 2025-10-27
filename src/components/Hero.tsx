import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import heroImage from '@/assets/hero-perfume.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury perfume"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full">
            <p className="text-sm font-medium text-primary">{t('hero.subtitle')}</p>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-foreground">
            {t('hero.title')}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="gap-2 shadow-glow"
            >
              {t('hero.cta')}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <ShoppingCart className="w-4 h-4" />
            <span>{t('hero.min.order')}</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('products')} className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float w-6 h-10 z-20">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </button>
    </section>
  );
};
