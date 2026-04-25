/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, Search } from 'lucide-react';
import { products, categories, Product } from './data/products';
import CategorySection from './components/CategorySection';
import ProductCard from './components/ProductCard';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  
  // New States
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeModal, setActiveModal] = useState<'about' | 'contact' | null>(null);

  // Search Logic
  const filteredProducts = searchQuery.trim() === '' ? [] : products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) setIsSubscribed(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Simple scrollspy
      const sections = categories.map(c => document.getElementById(c.toLowerCase().replace(/\s+/g, '-')));
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveCategory(categories[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (category: string) => {
    const id = category.toLowerCase().replace(/\s+/g, '-');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#5C4A2E] selection:bg-[#D4AF37] selection:text-white">
      {/* Welcome Popup */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#3E3219]/40 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white max-w-md w-full rounded-3xl p-8 shadow-2xl border border-[#F0EAE1] text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#A38A5F]"></div>
              <Sparkles className="text-[#D4AF37] w-12 h-12 mx-auto mb-6" strokeWidth={1.5} />
              <h2 className="font-serif text-3xl text-[#3E3219] mb-3">Exclusive Access</h2>
              <p className="text-[#8C734B] mb-8 font-light leading-relaxed">
                Alert: Only luxury and premium beauty products are featured on this website. Immerse yourself in true elegance.
              </p>
              <button 
                onClick={() => setShowWelcome(false)}
                className="w-full bg-[#3E3219] text-white py-4 rounded-xl font-medium tracking-wide hover:bg-[#5C4A2E] transition-all shadow-lg shadow-[#3E3219]/20"
              >
                Enter Collection
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl overflow-y-auto pt-24 pb-12 px-6"
          >
            <div className="max-w-[1400px] mx-auto">
              <div className="flex justify-between items-center mb-12">
                <div className="relative w-full max-w-2xl mx-auto">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A38A5F]" size={24} />
                  <input 
                    type="text" 
                    autoFocus
                    placeholder="Search for luxury beauty, skincare, perfumes..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#E5DCC5] text-[#3E3219] py-4 pl-14 pr-4 rounded-full text-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all placeholder:text-[#A38A5F] font-light"
                  />
                </div>
                <button 
                  onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                  className="ml-6 p-2 text-[#8C734B] hover:text-[#3E3219] bg-[#FAF8F5] rounded-full hover:bg-[#E5DCC5] transition-colors shrink-0"
                >
                  <X size={28} />
                </button>
              </div>

              {searchQuery && (
                <div>
                  <h3 className="font-serif text-2xl text-[#3E3219] mb-8 text-center">
                    {filteredProducts.length > 0 ? `Found ${filteredProducts.length} results for "${searchQuery}"` : `No results found for "${searchQuery}"`}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
                    {filteredProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Modals */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-[#3E3219]/40 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-3xl p-8 md:p-12 shadow-2xl border border-[#F0EAE1] relative"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 p-2 text-[#8C734B] hover:text-[#3E3219] bg-[#FAF8F5] rounded-full hover:bg-[#E5DCC5] transition-colors"
              >
                <X size={20} />
              </button>
              <h2 className="font-serif text-4xl text-[#3E3219] mb-6">
                {activeModal === 'about' && 'Our Story'}
                {activeModal === 'contact' && 'Contact Us'}
              </h2>
              <div className="text-[#8C734B] leading-relaxed font-light text-lg space-y-4">
                {activeModal === 'about' && (
                  <p>Luxury Beauty Picks was created for women who believe that great beauty products are an investment, not an expense. We curate only the finest skincare, makeup, fragrance, and hair care products — tested, trusted, and loved by beauty editors and experts across the US. Every product we recommend is chosen for its quality, results, and luxury experience.</p>
                )}
                {activeModal === 'contact' && (
                  <p>For collaborations, product features, or any questions — reach us at:<br/><br/>
                  📧 <a href="mailto:prajapatsurjeet9@gmail.com" className="hover:text-[#D4AF37] transition-colors font-medium">prajapatsurjeet9@gmail.com</a><br/><br/>
                  We typically respond within 24–48 hours.</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(212,175,55,0.1)] py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-[#3E3219]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <Sparkles className="text-[#D4AF37] shrink-0" size={24} />
              <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-[#3E3219] whitespace-nowrap">Luxury Beauty Picks</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollToCategory('Top Beauty Picks')} className="text-sm font-medium text-[#8C734B] hover:text-[#D4AF37] transition-colors cursor-pointer">Shop</button>
              <button onClick={() => scrollToCategory('Luxury Skincare')} className="text-sm font-medium text-[#8C734B] hover:text-[#D4AF37] transition-colors cursor-pointer">Collections</button>
              <button onClick={() => setActiveModal('about')} className="text-sm font-medium text-[#8C734B] hover:text-[#D4AF37] transition-colors cursor-pointer">About</button>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-5">
              <button onClick={() => setIsSearchOpen(true)} className="text-[#8C734B] hover:text-[#D4AF37] transition-colors"><Search size={22} strokeWidth={1.5} /></button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-[#F0EAE1] shadow-2xl h-screen">
            <div className="px-6 py-8 flex flex-col gap-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => scrollToCategory(category)}
                  className="text-left text-2xl font-serif text-[#3E3219] hover:text-[#D4AF37] transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] text-[#8C734B] border border-[#E5DCC5] text-xs font-semibold tracking-widest uppercase mb-8">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                New Arrivals 2026
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#3E3219] leading-[1.1] mb-6 tracking-tight">
                Redefining <br/>
                <span className="italic text-[#A38A5F] font-light">Luxury</span> Beauty.
              </h1>
              <p className="text-lg text-[#8C734B] mb-10 leading-relaxed font-light">
                Elevate your daily ritual with our meticulously curated selection of premium skincare, designer fragrances, and iconic cosmetics.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToCategory('Top Beauty Picks')}
                  className="bg-[#3E3219] text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-[#5C4A2E] transition-all duration-300 shadow-lg shadow-[#3E3219]/20"
                >
                  Shop Collection
                </button>
                <button 
                  onClick={() => scrollToCategory('Luxury Skincare')}
                  className="border border-[#D4AF37] text-[#3E3219] px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
                >
                  Explore Skincare
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative h-[400px] sm:h-[500px] lg:h-[700px] w-full rounded-[2.5rem] overflow-hidden border border-[#F0EAE1]"
            >
              <img 
                src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1974&auto=format&fit=crop" 
                alt="Luxury Beauty Aesthetics" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#3E3219]/5"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Pill Navigation (Sticky) */}
      <div className="sticky top-[72px] lg:top-[80px] z-40 bg-white/90 backdrop-blur-xl border-y border-[#F0EAE1] shadow-[0_4px_20px_rgba(212,175,55,0.05)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex overflow-x-auto no-scrollbar py-4 gap-3 items-center">
            <span className="text-xs font-semibold tracking-widest text-[#A38A5F] uppercase mr-4 shrink-0">Filter by</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => scrollToCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
                  activeCategory === category 
                    ? 'bg-[#3E3219] text-white border-[#3E3219]' 
                    : 'bg-white text-[#8C734B] border-[#E5DCC5] hover:border-[#D4AF37] hover:text-[#3E3219]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        {categories.map((category) => (
          <CategorySection 
            key={category} 
            category={category} 
            products={products.filter(p => p.category === category)} 
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#F0EAE1] pt-20 pb-10 mt-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="text-[#D4AF37]" size={24} />
                <span className="font-serif text-2xl font-medium tracking-tight text-[#3E3219]">Luxury Beauty Picks</span>
              </div>
              <p className="text-[#8C734B] text-sm leading-relaxed max-w-sm">
                Your premier destination for curated luxury beauty products, skincare, and fragrances. Elevating everyday routines into extraordinary rituals.
              </p>
            </div>
            
            <div className="lg:col-span-2 lg:col-start-6">
              <h4 className="font-medium text-[#3E3219] mb-6">Shop</h4>
              <ul className="space-y-4 text-sm text-[#A38A5F]">
                <li><button onClick={() => scrollToCategory('Luxury Skincare')} className="hover:text-[#D4AF37] transition-colors">Skincare</button></li>
                <li><button onClick={() => scrollToCategory('Premium Makeup')} className="hover:text-[#D4AF37] transition-colors">Makeup</button></li>
                <li><button onClick={() => scrollToCategory('Designer Perfumes')} className="hover:text-[#D4AF37] transition-colors">Fragrance</button></li>
                <li><button onClick={() => scrollToCategory('Hair Care')} className="hover:text-[#D4AF37] transition-colors">Hair Care</button></li>
              </ul>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="font-medium text-[#3E3219] mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-[#A38A5F]">
                <li><button onClick={() => setActiveModal('about')} className="hover:text-[#D4AF37] transition-colors">About Us</button></li>
                <li><button onClick={() => setActiveModal('contact')} className="hover:text-[#D4AF37] transition-colors">Contact</button></li>
                <li><button className="hover:text-[#D4AF37] transition-colors">Careers</button></li>
              </ul>
            </div>
            
            <div className="lg:col-span-4">
              <h4 className="font-medium text-[#3E3219] mb-6">Join our Newsletter</h4>
              <p className="text-[#A38A5F] text-sm mb-4">Exclusive offers, new arrivals, and beauty tips delivered to your inbox.</p>
              {isSubscribed ? (
                <div className="bg-[#FAF8F5] border border-[#E5DCC5] text-[#8C734B] px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2">
                  <Sparkles size={16} className="text-[#D4AF37]" />
                  Welcome to the Luxury Beauty Picks list.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address" 
                    className="bg-[#FAF8F5] border border-[#E5DCC5] text-[#3E3219] px-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] w-full text-sm transition-all placeholder:text-[#A38A5F]" 
                  />
                  <button type="submit" className="bg-[#3E3219] hover:bg-[#5C4A2E] text-white px-6 py-3 rounded-xl transition-colors text-sm font-medium shrink-0 shadow-sm">
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#F0EAE1] pt-8 text-[#A38A5F] text-sm gap-4">
            <p>&copy; {new Date().getFullYear()} Luxury Beauty Picks. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
            </div>
            <p className="text-xs">As an Amazon Associate we earn from qualifying purchases.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
