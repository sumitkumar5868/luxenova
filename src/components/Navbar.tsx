import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-accent/10 px-6 md:px-20 py-4">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="hidden md:flex flex-1">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-accent w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search our scents" 
              className="bg-transparent border-b border-brand-accent/30 focus:border-brand-accent focus:ring-0 text-sm pl-10 py-1 w-48 transition-all font-sans outline-none"
            />
          </div>
        </div>

        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-brand-accent text-brand-bg rounded-sm">
            <span className="font-display text-2xl font-black">L</span>
          </div>
          <h1 className="hidden lg:block font-display text-2xl font-medium tracking-tight">Lumière Essentials</h1>
        </Link>

        <div className="flex flex-1 justify-end items-center gap-6">
          <button className="hover:text-brand-accent transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="hover:text-brand-accent transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-brand-accent text-brand-bg text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">2</span>
          </button>
          <button className="md:hidden">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
