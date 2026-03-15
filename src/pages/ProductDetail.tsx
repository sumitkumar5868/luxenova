import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Star, Truck, RefreshCcw, ShieldCheck, ChevronRight, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="py-20 text-center">Product not found</div>;
  }

  // Logic for related products
  const relatedProducts = PRODUCTS
    .filter(p => p.id !== product.id)
    .map(p => {
      let score = 0;
      if (p.scentProfile === product.scentProfile) score += 5;
      const sharedTags = p.tags.filter(tag => product.tags.includes(tag));
      score += sharedTags.length;
      return { ...p, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-brand-primary/60 mb-8">
        <Link to="/" className="hover:text-brand-accent">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/collection" className="hover:text-brand-accent">Collection</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-brand-primary font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square w-full rounded-xl overflow-hidden bg-brand-accent/5 border border-brand-accent/10 group">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <div className="mb-6">
            <h1 className="text-4xl font-display font-bold tracking-tight mb-2">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center text-brand-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-current' : ''}`} />
                ))}
                <span className="ml-2 text-sm font-semibold text-brand-primary">4.9/5</span>
              </div>
              <span className="text-brand-primary/20">|</span>
              <span className="text-sm text-brand-primary/60">128 Reviews</span>
            </div>
            <p className="text-2xl font-light text-brand-accent">${product.price.toFixed(2)}</p>
          </div>

          <p className="text-lg text-brand-primary/70 mb-8 leading-relaxed">
            {product.description} {product.benefits}
          </p>

          {/* Quantity Selector */}
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Quantity</h3>
            <div className="flex items-center gap-4 w-32 border border-brand-accent/20 rounded-lg p-2">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1 hover:text-brand-accent">
                <Minus className="w-4 h-4" />
              </button>
              <span className="flex-1 text-center font-bold">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-1 hover:text-brand-accent">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 mb-8">
            <button className="w-full bg-brand-accent hover:bg-brand-accent/90 text-brand-bg py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-brand-accent/20">
              Add to Cart
            </button>
            <button className="w-full bg-transparent border-2 border-brand-accent/20 hover:border-brand-accent py-4 rounded-xl font-bold text-lg transition-all">
              Buy It Now
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 py-6 border-y border-brand-accent/10 mb-8">
            <div className="flex flex-col items-center gap-2 text-center">
              <ShieldCheck className="text-brand-accent w-8 h-8" />
              <span className="text-[10px] font-bold uppercase tracking-tighter">100% Vegan</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <RefreshCcw className="text-brand-accent w-8 h-8" />
              <span className="text-[10px] font-bold uppercase tracking-tighter">Cruelty-Free</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Truck className="text-brand-accent w-8 h-8" />
              <span className="text-[10px] font-bold uppercase tracking-tighter">Sustainable</span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <details className="group border-b border-brand-accent/10 pb-4" open>
              <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-sm uppercase tracking-widest">
                Product Details
                <ChevronRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="pt-4 text-brand-primary/60 text-sm leading-relaxed">
                <ul className="list-disc pl-5 space-y-1">
                  {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                  <li>100% natural soy wax blend</li>
                  <li>Phthalate-free premium fragrance oils</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </div>
      
      {/* Related Products Section */}
      <section className="mt-24">
        <h2 className="text-2xl font-display font-bold mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </section>
    </main>
  );
}
