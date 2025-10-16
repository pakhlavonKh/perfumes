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
  { name: 'Tom Ford Black Orchid', brand: 'Tom Ford', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop' },
  { name: 'Chanel No. 5', brand: 'Chanel', image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop' },
  { name: 'Dior Sauvage', brand: 'Dior', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop' },
  { name: 'Versace Eros', brand: 'Versace', image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=400&h=400&fit=crop' },
  { name: 'Gucci Guilty', brand: 'Gucci', image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59c75?w=400&h=400&fit=crop' },
  { name: 'YSL Black Opium', brand: 'YSL', image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop' },
];

export const ProductsCarousel = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-background">
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
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};
