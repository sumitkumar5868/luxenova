import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1595433707802-68267d83760a?auto=format&fit=crop&q=80&w=1920" 
            alt="Artisanal candle making" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/60 via-transparent to-brand-primary"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 text-white">
            Our Craft. <span className="text-brand-accent italic font-light">Your Sanctuary.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-sans font-light">
            Experience the art of artisanal candle making, where every flame tells a story of elegance and tranquility.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <span className="text-brand-accent font-sans font-bold tracking-widest uppercase text-sm">Our Roots</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">Born in the Heart of Paris</h2>
            <p className="text-lg text-brand-primary/70 font-sans leading-relaxed">
              Lumière Essentials was founded on the belief that a scent can transform a space into a sanctuary. Our journey began in a small atelier in the 4th arrondissement, driven by a commitment to sustainable soy wax and clean, sophisticated fragrances that honor both your home and the planet.
            </p>
            <p className="text-lg text-brand-primary/70 font-sans leading-relaxed">
              We blend traditional French perfumery techniques with modern ecological standards. Every candle is a testament to our obsession with quality and our respect for nature's finest ingredients.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-brand-accent/20 p-2">
              <img 
                src="https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?auto=format&fit=crop&q=80&w=1200" 
                alt="Parisian boutique" 
                className="w-full h-full object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-brand-accent/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Our Values</h2>
            <div className="h-1 w-20 bg-brand-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Ethical Sourcing",
                desc: "We partner with independent farmers across Europe to source the purest essential oils and botanicals.",
                img: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&q=80&w=400"
              },
              {
                title: "Sustainability",
                desc: "Our candles use 100% biodegradable soy wax and lead-free cotton wicks. Packaging is fully recyclable.",
                img: "https://images.unsplash.com/photo-1603007905991-6528193a1b3c?auto=format&fit=crop&q=80&w=400"
              },
              {
                title: "Craftsmanship",
                desc: "Each Lumière candle is hand-poured in small batches, ensuring perfect fragrance throw and an even burn.",
                img: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&q=80&w=400"
              }
            ].map((value, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                <div className="mb-4">
                  <img 
                    src={value.img} 
                    alt={value.title} 
                    className="w-24 h-24 rounded-full object-cover border-2 border-brand-accent grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-display font-bold text-brand-accent">{value.title}</h3>
                <p className="text-brand-primary/60 font-sans leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
