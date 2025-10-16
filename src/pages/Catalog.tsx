import { useState } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const products = [
  { name: 'Tom Ford Black Orchid', brand: 'Tom Ford', category: 'Luxury', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop' },
  { name: 'Chanel No. 5', brand: 'Chanel', category: 'Classic', image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop' },
  { name: 'Dior Sauvage', brand: 'Dior', category: 'Men', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop' },
  { name: 'Versace Eros', brand: 'Versace', category: 'Men', image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=400&h=400&fit=crop' },
  { name: 'Gucci Guilty', brand: 'Gucci', category: 'Women', image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59c75?w=400&h=400&fit=crop' },
  { name: 'YSL Black Opium', brand: 'YSL', category: 'Women', image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop' },
  { name: 'Prada Luna Rossa', brand: 'Prada', category: 'Men', image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop' },
  { name: 'Armani Code', brand: 'Giorgio Armani', category: 'Men', image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=400&fit=crop' },
  { name: 'Burberry Brit', brand: 'Burberry', category: 'Women', image: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=400&h=400&fit=crop' },
  { name: 'Hermès Terre', brand: 'Hermès', category: 'Luxury', image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop' },
  { name: 'Dolce & Gabbana Light Blue', brand: 'Dolce & Gabbana', category: 'Women', image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop' },
  { name: 'Valentino Uomo', brand: 'Valentino', category: 'Men', image: 'https://images.unsplash.com/photo-1595425959632-34f972d2b13f?w=400&h=400&fit=crop' },
];

const CatalogContent = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
              {t('catalog.title')}
            </h1>
            
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t('catalog.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-card border-border"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 group cursor-pointer shadow-elegant hover:shadow-glow"
              >
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
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {product.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t('catalog.min.order')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No products found</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

const Catalog = () => {
  return (
    <LanguageProvider>
      <CatalogContent />
    </LanguageProvider>
  );
};

export default Catalog;
