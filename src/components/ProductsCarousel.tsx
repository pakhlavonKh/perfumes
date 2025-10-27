import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  { brand:"Chanel", name: "Bleu de Chanel", image: "../assets/cellImage_0_2.png" },
  { brand:"Chanel", name: "Egoiste Platinum", image: "../assets/cellImage_0_3.png" },
  { brand:"Tom Ford", name: "Cherry Smoke", image: "../assets/cellImage_0_4.png" },
  { brand:"Tom Ford", name: "Oud Wood", image: "../assets/cellImage_0_5.png" },
  { brand:"Tom Ford", name: "Black Orchid", image: "../assets/cellImage_0_6.png" },
  { brand:"Tom Ford", name: "Lost Cherry", image: "../assets/cellImage_0_7.png" },
  { brand:"Tom Ford", name: "Tobacco Vanille", image: "../assets/cellImage_0_8.png" },
  { brand:"Tom Ford", name: "Ombre Leather", image: "../assets/cellImage_0_9.png" },
];

export const ProductsCarousel = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  // 🔁 Auto-play effect (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextButton = carouselRef.current.querySelector('[data-carousel-next]');
        nextButton?.click();
      }
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-background" id="products">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            {t('products.title')}
          </h2>
          <Button
            variant="outline"
            onClick={() => navigate('/catalog')}
            className="gap-2"
          >
            {t('products.view.catalog')}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* 🟢 Carousel Wrapper */}
        <div className="relative" ref={carouselRef}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products.map((product, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 group cursor-pointer shadow-elegant hover:shadow-glow">
                    <div className="aspect-square overflow-hidden flex justify-center items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-w-[85%] max-h-[85%] object-contain group-hover:scale-110 transition-transform duration-300 mx-auto"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                        {product.brand}
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                        {product.name}
                      </h3>
                      <div className="text-xs text-muted-foreground">
                        {t('catalog.min.order')}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* 🠔🠖 Arrows moved outside */}
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
