import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { ProductsCarousel } from '@/components/ProductsCarousel';
import { Brands } from '@/components/Brands';
import { Benefits } from '@/components/Benefits';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <About />
        <ProductsCarousel />
        <Brands />
        <Benefits />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
