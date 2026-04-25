import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col gap-4 cursor-pointer"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#F8F8F8] flex items-center justify-center p-6 transition-colors duration-300 group-hover:bg-[#F0F0F0]">
        {/* Blinking Limited Time Deal Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-2.5 rounded-sm animate-pulse shadow-sm">
            Limited Time Deal
          </span>
        </div>

        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
        
        {/* Buy Button - Slides up on hover */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          <a 
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-white/95 backdrop-blur text-[#3E3219] py-3.5 px-4 rounded-xl font-medium shadow-lg hover:bg-[#3E3219] hover:text-white transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ShoppingBag size={16} />
            <span className="text-sm">Shop on Amazon</span>
          </a>
        </div>
      </div>
      
      <div className="flex flex-col gap-1.5 px-1">
        <div className="flex justify-between items-start gap-3">
          <h3 className="font-medium text-[#3E3219] text-base leading-snug line-clamp-2 group-hover:text-[#D4AF37] transition-colors">
            {product.name}
          </h3>
          <span className="font-semibold text-[#3E3219] shrink-0">{product.price}</span>
        </div>
        <p className="text-sm text-[#8C734B] line-clamp-2 font-light leading-relaxed">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
}
