import { useLanguage } from '@/contexts/LanguageContext';
import { DollarSign, Award, Truck, HeadphonesIcon } from 'lucide-react';

export const Benefits = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: DollarSign,
      title: t('benefits.wholesale'),
      description: t('benefits.wholesale.desc'),
    },
    {
      icon: Award,
      title: t('benefits.quality'),
      description: t('benefits.quality.desc'),
    },
    {
      icon: Truck,
      title: t('benefits.delivery'),
      description: t('benefits.delivery.desc'),
    },
    {
      icon: HeadphonesIcon,
      title: t('benefits.support'),
      description: t('benefits.support.desc'),
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-gold">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-background">
            {t('benefits.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 hover:shadow-glow transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
