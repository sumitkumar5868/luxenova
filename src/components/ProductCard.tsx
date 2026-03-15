import { Link } from 'react-router-dom';
import { Product } from '../types';
import React, { useState } from 'react';
import QuickAddModal from './QuickAddModal';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      <Link to={`/product/${product.id}`} className="group relative">
        <div className="relative aspect-[3/4] overflow-hidden bg-brand-accent/5 rounded-lg mb-4">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <button 
            onClick={handleQuickAdd}
            className="absolute bottom-4 left-4 right-4 bg-white/90 text-brand-primary font-sans font-bold py-3 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Quick Add — ${product.price.toFixed(2)}
          </button>
        </div>
        <h4 className="font-display text-xl mb-1">{product.name}</h4>
        <p className="text-brand-primary/60 font-sans text-sm">{product.scentProfile}</p>
        <p className="text-brand-accent font-bold mt-1">${product.price.toFixed(2)}</p>
      </Link>

      <QuickAddModal 
        product={product} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
