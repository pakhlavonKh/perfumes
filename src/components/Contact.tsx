import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+998 90 123 45 67',
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'info@luxuryperfume.com',
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: 'Tashkent, Uzbekistan',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('contact.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  {info.label}
                </div>
                <div className="font-medium text-foreground">
                  {info.value}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="shadow-glow">
              <Mail className="w-4 h-4 mr-2" />
              {t('contact.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
