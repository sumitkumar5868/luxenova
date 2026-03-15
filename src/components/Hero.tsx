import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury candle in minimalist setting" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white font-display text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
        >
          Elevate Your Atmosphere
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-200 font-sans text-base md:text-xl mb-10 tracking-wide max-w-2xl mx-auto"
        >
          Discover our curated collection of luxury sustainable candles, hand-poured with botanical intentions.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            to="/collection" 
            className="bg-brand-accent hover:bg-brand-accent/90 text-brand-bg font-sans font-bold py-4 px-10 rounded-sm transition-all tracking-widest uppercase text-sm"
          >
            Shop The Collection
          </Link>
          <button className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/30 text-white font-sans font-bold py-4 px-10 rounded-sm transition-all tracking-widest uppercase text-sm">
            Discover Our Scents
          </button>
        </motion.div>
      </div>
    </section>
  );
}
