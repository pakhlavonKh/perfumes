import { useState } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import catalogData from '@/data/catalogData';

const ITEMS_PER_PAGE = 20;

const CatalogContent = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter the products based on search
  const filteredProducts = catalogData.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Handle pagination change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Title + Search */}
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
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // reset pagination when searching
                }}
                className="pl-12 h-12 bg-card border-border"
              />
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedProducts.map((product, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 group cursor-pointer shadow-elegant hover:shadow-glow"
              >
                <div className="aspect-square overflow-hidden flex justify-center items-center">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-auto w-[65%] object-cover mx-auto group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
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
                      {product.description || '—'}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t('catalog.min.order')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                ← {t('catalog.prev') || 'Previous'}
              </Button>

              <span className="text-sm text-muted-foreground">
                {currentPage} / {totalPages}
              </span>

              <Button
                variant="outline"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                {t('catalog.next') || 'Next'} →
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

const Catalog = () => (
  <LanguageProvider>
    <CatalogContent />
  </LanguageProvider>
);

export default Catalog;
