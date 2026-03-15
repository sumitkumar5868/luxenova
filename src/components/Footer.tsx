import { Instagram, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-bg pt-20 pb-10 px-6 md:px-20 border-t border-brand-accent/10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-brand-accent text-brand-bg rounded-sm">
              <span className="font-display text-xl font-black">L</span>
            </div>
            <h3 className="font-display text-xl font-medium">Lumière Essentials</h3>
          </div>
          <p className="text-brand-primary/60 font-sans text-sm leading-relaxed max-w-xs">
            Sustainable luxury for the modern sanctuary. Hand-poured fragrances designed to elevate your everyday.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-brand-accent hover:opacity-70 transition-opacity"><Globe className="w-5 h-5" /></a>
            <a href="#" className="text-brand-accent hover:opacity-70 transition-opacity"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-brand-accent hover:opacity-70 transition-opacity"><Mail className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] mb-6 text-brand-accent">Shop</h4>
          <ul className="space-y-4 font-sans text-sm text-brand-primary/60">
            <li><a href="#" className="hover:text-brand-accent transition-colors">All Candles</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">Gift Sets</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">Subscription</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">Accessories</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] mb-6 text-brand-accent">Information</h4>
          <ul className="space-y-4 font-sans text-sm text-brand-primary/60">
            <li><a href="#" className="hover:text-brand-accent transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">Sustainability</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] mb-6 text-brand-accent">Atelier</h4>
          <p className="text-brand-primary/60 font-sans text-sm leading-relaxed">
            12 Rue des Francs-Bourgeois<br />
            75003 Paris, France<br /><br />
            bonjour@lumiere.com<br />
            +33 (0) 1 42 77 00 00
          </p>
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto border-t border-brand-accent/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-sans uppercase tracking-[0.1em] text-brand-primary/40">
        <p>© 2024 Lumière Essentials. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
