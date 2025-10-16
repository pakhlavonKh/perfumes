import { useLanguage } from '@/contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: t('about.stat1'), label: t('about.stat1.label') },
    { value: t('about.stat2'), label: t('about.stat2.label') },
    { value: t('about.stat3'), label: t('about.stat3.label') },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-gold">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-background">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-background">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 text-center shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              <div className="font-serif text-4xl md:text-5xl font-bold bg-gradient-gold bg-clip-text text-background mb-2">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
