import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'uz' | 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  uz: {
    // Header
    'nav.about': 'Biz haqimizda',
    'nav.brands': 'Brendlar',
    'nav.benefits': 'Afzalliklar',
    'nav.contact': 'Aloqa',
    'nav.catalog': 'Katalog',
    
    // Hero
    'hero.title': 'Premium Atir Distribyutsiyasi',
    'hero.subtitle': 'Faqat ulgurji xaridorlar uchun',
    'hero.description': 'Dunyoning eng yaxshi atir brendlarini ulgurji sotish. Yuqori sifat, professional xizmat, ishonchli hamkorlik.',
    'hero.cta': "Biz bilan bog'laning",
    'hero.min.order': 'Minimal buyurtma: 100 dona',
    
    // About
    'about.title': 'Ishonchli Hamkor',
    'about.description': "Biz premium atirlar bozorida yetakchi distribyutormiz. 10 yildan ortiq tajriba bilan do'konlar, savdo markazlari va yirik mijozlar bilan ishlaymiz.",
    'about.stat1': '10+ yil',
    'about.stat1.label': 'Tajriba',
    'about.stat2': '500+',
    'about.stat2.label': 'Hamkorlar',
    'about.stat3': '50+',
    'about.stat3.label': 'Premium brendlar',
    
    // Brands
    'brands.title': 'Bizning Brendlarimiz',
    'brands.description': 'Dunyoning eng mashhur va ishonchli atir brendlari',
    
    // Benefits
    'benefits.title': 'Nima uchun bizni tanlashadi',
    'benefits.wholesale': 'Ulgurji narxlar',
    'benefits.wholesale.desc': 'Eng yaxshi narxlar va maxsus chegirmalar doimiy mijozlar uchun',
    'benefits.quality': 'Kafolatlangan sifat',
    'benefits.quality.desc': "100% original mahsulotlar to'g'ridan-to'g'ri ishlab chiqaruvchilardan",
    'benefits.delivery': 'Tez yetkazib berish',
    'benefits.delivery.desc': "O'z vaqtida va ishonchli yetkazib berish xizmati",
    'benefits.support': "24/7 qo'llab-quvvatlash",
    'benefits.support.desc': 'Professional konsultatsiya va doimiy yordam',
    
    // Contact
    'contact.title': "Biz bilan bog'laning",
    'contact.description': "Ulgurji buyurtmalar va hamkorlik uchun biz bilan bog'laning",
    'contact.phone': 'Telefon',
    'contact.email': 'Email',
    'contact.address': 'Manzil',
    'contact.cta': 'Bizga yozing',
    
    // Footer
    'footer.wholesale': 'Faqat ulgurji',
    'footer.rights': 'Barcha huquqlar himoyalangan',
    
    // Products
    'products.title': 'Mashhur Mahsulotlar',
    'products.view.catalog': 'Barcha katalogni ko\'rish',
    
    // Catalog
    'catalog.title': 'Mahsulotlar Katalogi',
    'catalog.search': 'Mahsulotlarni qidirish...',
    'catalog.min.order': 'Min: 100 dona',
  },
  ru: {
    // Header
    'nav.about': 'О нас',
    'nav.brands': 'Бренды',
    'nav.benefits': 'Преимущества',
    'nav.catalog': 'Каталог',
    'nav.contact': 'Контакты',
    
    // Hero
    'hero.title': 'Премиум Дистрибуция Парфюмерии',
    'hero.subtitle': 'Только для оптовых покупателей',
    'hero.description': 'Оптовая продажа лучших мировых брендов парфюмерии. Высокое качество, профессиональный сервис, надежное партнерство.',
    'hero.cta': 'Связаться с нами',
    'hero.min.order': 'Минимальный заказ: 100 единиц',
    
    // About
    'about.title': 'Надежный Партнер',
    'about.description': 'Мы являемся ведущим дистрибьютором премиум парфюмерии. С опытом более 10 лет, мы работаем с магазинами, торговыми центрами и крупными клиентами.',
    'about.stat1': '10+ лет',
    'about.stat1.label': 'Опыта',
    'about.stat2': '500+',
    'about.stat2.label': 'Партнеров',
    'about.stat3': '50+',
    'about.stat3.label': 'Премиум брендов',
    
    // Brands
    'brands.title': 'Наши Бренды',
    'brands.description': 'Самые известные и надежные мировые парфюмерные бренды',
    
    // Benefits
    'benefits.title': 'Почему выбирают нас',
    'benefits.wholesale': 'Оптовые цены',
    'benefits.wholesale.desc': 'Лучшие цены и специальные скидки для постоянных клиентов',
    'benefits.quality': 'Гарантия качества',
    'benefits.quality.desc': '100% оригинальная продукция напрямую от производителей',
    'benefits.delivery': 'Быстрая доставка',
    'benefits.delivery.desc': 'Своевременная и надежная служба доставки',
    'benefits.support': 'Поддержка 24/7',
    'benefits.support.desc': 'Профессиональная консультация и постоянная помощь',
    
    // Contact
    'contact.title': 'Свяжитесь с нами',
    'contact.description': 'Свяжитесь с нами для оптовых заказов и партнерства',
    'contact.phone': 'Телефон',
    'contact.email': 'Email',
    'contact.address': 'Адрес',
    'contact.cta': 'Написать нам',
    
    // Footer
    'footer.wholesale': 'Только оптом',
    'footer.rights': 'Все права защищены',
    
    // Products
    'products.title': 'Популярные Продукты',
    'products.view.catalog': 'Смотреть весь каталог',
    
    // Catalog
    'catalog.title': 'Каталог Продуктов',
    'catalog.search': 'Поиск продуктов...',
    'catalog.min.order': 'Мин: 100 ед.',
  },
  en: {
    // Header
    'nav.about': 'About',
    'nav.brands': 'Brands',
    'nav.benefits': 'Benefits',
    'nav.catalog': 'Catalog',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Premium Perfume Distribution',
    'hero.subtitle': 'Wholesale Buyers Only',
    'hero.description': 'Wholesale distribution of the finest perfume brands. Superior quality, professional service, reliable partnership.',
    'hero.cta': 'Contact Us',
    'hero.min.order': 'Minimum Order: 100 Units',
    
    // About
    'about.title': 'Trusted Partner',
    'about.description': 'We are a leading distributor of premium perfumes. With over 10 years of experience, we work with retailers, shopping centers, and major clients.',
    'about.stat1': '10+ Years',
    'about.stat1.label': 'Experience',
    'about.stat2': '500+',
    'about.stat2.label': 'Partners',
    'about.stat3': '50+',
    'about.stat3.label': 'Premium Brands',
    
    // Brands
    'brands.title': 'Our Brands',
    'brands.description': 'The most renowned and trusted perfume brands worldwide',
    
    // Benefits
    'benefits.title': 'Why Choose Us',
    'benefits.wholesale': 'Wholesale Prices',
    'benefits.wholesale.desc': 'Best prices and special discounts for regular clients',
    'benefits.quality': 'Quality Guaranteed',
    'benefits.quality.desc': '100% authentic products directly from manufacturers',
    'benefits.delivery': 'Fast Delivery',
    'benefits.delivery.desc': 'Timely and reliable delivery service',
    'benefits.support': '24/7 Support',
    'benefits.support.desc': 'Professional consultation and ongoing assistance',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.description': 'Get in touch for wholesale orders and partnership opportunities',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.cta': 'Send Message',
    
    // Footer
    'footer.wholesale': 'Wholesale Only',
    'footer.rights': 'All rights reserved',
    
    // Products
    'products.title': 'Featured Products',
    'products.view.catalog': 'View Full Catalog',
    
    // Catalog
    'catalog.title': 'Product Catalog',
    'catalog.search': 'Search products...',
    'catalog.min.order': 'Min: 100 units',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
