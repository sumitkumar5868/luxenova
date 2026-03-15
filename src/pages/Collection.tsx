import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

export default function Collection() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[400px] w-full flex items-center justify-center overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&q=80&w=1920')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-white text-4xl md:text-6xl font-display font-bold tracking-tight mb-4">The Signature Collection</h1>
          <p className="text-slate-300 text-lg md:text-xl font-sans font-medium max-w-xl mx-auto">Artisanal scents crafted for your daily rituals.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        {/* Filter Bar (Simplified) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-brand-accent/10 pb-8">
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-brand-accent/5 rounded-lg text-sm font-semibold hover:bg-brand-accent/10 transition-colors">
              Scent Profile
            </button>
            <button className="px-4 py-2 bg-brand-accent/5 rounded-lg text-sm font-semibold hover:bg-brand-accent/10 transition-colors">
              Price
            </button>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-sm text-brand-primary/60">{PRODUCTS.length} products</p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
