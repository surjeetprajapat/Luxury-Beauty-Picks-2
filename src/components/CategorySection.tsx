import { Product } from '../data/products';
import ProductCard from './ProductCard';

interface CategorySectionProps {
  category: string;
  products: Product[];
}

export default function CategorySection({ category, products }: CategorySectionProps) {
  const categoryId = category.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <section id={categoryId} className="py-16 md:py-24 scroll-mt-24 border-t border-[#F0EAE1] first:border-0">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] text-[#A38A5F] uppercase mb-3 block">
            Curated Collection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#3E3219] tracking-tight">{category}</h2>
        </div>
        <button className="text-sm font-medium text-[#3E3219] border-b border-[#3E3219] pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors self-start md:self-auto">
          View All Products
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
