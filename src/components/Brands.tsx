import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import brandsImage from '@/assets/brands-showcase.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Brands = () => {
  const { t } = useLanguage();
  const carouselRef = useRef(null);

  const brands = [
    'TOM FORD', 'CHANEL', 'DIOR', 'GUCCI', 'VERSACE',
    'GIORGIO ARMANI', 'PRADA', 'YSL', 'BURBERRY', 'HERMÈS',
    'DOLCE & GABBANA', 'VALENTINO'
  ];

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextBtn = carouselRef.current.querySelector('[data-carousel-next]');
        nextBtn?.click();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="brands" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t('brands.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('brands.description')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16 relative rounded-2xl overflow-hidden shadow-elegant">
          <img
            src={brandsImage}
            alt="Luxury perfume brands"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative" ref={carouselRef}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {brands.map((brand, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
                  <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary transition-all duration-300 group">
                    <span className="font-serif text-sm md:text-base font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                      {brand}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Arrows outside */}
            <CarouselPrevious
              data-carousel-prev
              className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 bg-card/70 backdrop-blur-sm hover:bg-card shadow-md hidden md:block"
            />
            <CarouselNext
              data-carousel-next
              className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 bg-card/70 backdrop-blur-sm hover:bg-card shadow-md hidden md:block"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
