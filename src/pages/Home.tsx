import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import { PRODUCTS, TESTIMONIALS } from '../constants';
import { motion } from 'motion/react';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col">
      <Hero />
      <Benefits />

      {/* Featured Collection */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-brand-accent font-sans uppercase tracking-[0.3em] text-xs font-bold">The Signature Line</span>
              <h2 className="font-display text-4xl md:text-5xl mt-2">Featured Collection</h2>
            </div>
            <Link to="/collection" className="text-brand-accent border-b border-brand-accent font-sans uppercase text-sm tracking-widest pb-1 hover:text-brand-accent/80 transition-colors">
              View All Products
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Snippet */}
      <section className="py-24 px-6 md:px-20 bg-brand-accent/5">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1595433707802-68267d83760a?auto=format&fit=crop&q=80&w=1200" 
              alt="Candle making process" 
              className="w-full h-[600px] object-cover rounded-lg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:w-1/2 space-y-8">
            <span className="text-brand-accent font-sans uppercase tracking-[0.3em] text-xs font-bold">Our Heritage</span>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">Born in Paris, Crafted with Conscience</h2>
            <p className="text-brand-primary/70 font-sans text-lg leading-relaxed">
              Lumière Essentials began in a sun-drenched studio in Le Marais, Paris. Our mission was simple: to create olfactory experiences that respect both the human spirit and the environment.
            </p>
            <p className="text-brand-primary/70 font-sans text-lg leading-relaxed">
              Every candle is formulated with sustainable, non-GMO soy wax and pure botanical ingredients sourced from ethical growers. We believe luxury shouldn't come at the cost of the planet.
            </p>
            <div className="pt-4">
              <Link to="/about" className="border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-bg font-sans font-bold py-3 px-8 rounded-sm transition-all uppercase tracking-widest text-sm">
                Read Our Full Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="font-display text-4xl mb-16">What Our Community Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                whileHover={{ y: -5 }}
                className="p-8 bg-white rounded-lg shadow-sm border border-brand-accent/5"
              >
                <p className="text-brand-primary/80 font-sans italic text-lg mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="text-brand-accent font-sans font-bold uppercase tracking-widest text-sm">
                  — {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
