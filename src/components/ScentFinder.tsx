import { useState } from 'react';
import { getScentRecommendation } from '../services/geminiService';
import { Sparkles, Loader2 } from 'lucide-react';

export default function ScentFinder() {
  const [mood, setMood] = useState('');
  const [preference, setPreference] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFind = async () => {
    if (!mood || !preference) return;
    setLoading(true);
    const result = await getScentRecommendation(mood, preference);
    setRecommendation(result || '');
    setLoading(false);
  };

  return (
    <section className="py-24 px-6 md:px-20 bg-brand-primary text-brand-bg">
      <div className="max-w-4xl mx-auto text-center">
        <Sparkles className="w-12 h-12 mx-auto mb-6 text-brand-accent" />
        <h2 className="font-display text-4xl md:text-5xl mb-6">AI Scent Finder</h2>
        <p className="text-slate-300 font-sans text-lg mb-12">
          Let our artificial intelligence curate your perfect atmosphere based on your current mood and desires.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="text-left">
            <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-brand-accent">How are you feeling?</label>
            <input 
              type="text" 
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="e.g. Relaxed, Energetic, Romantic"
              className="w-full bg-white/10 border border-white/20 rounded-lg px-6 py-4 outline-none focus:border-brand-accent transition-colors"
            />
          </div>
          <div className="text-left">
            <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-brand-accent">Scent Preferences?</label>
            <input 
              type="text" 
              value={preference}
              onChange={(e) => setPreference(e.target.value)}
              placeholder="e.g. Floral, Woody, Fresh"
              className="w-full bg-white/10 border border-white/20 rounded-lg px-6 py-4 outline-none focus:border-brand-accent transition-colors"
            />
          </div>
        </div>

        <button 
          onClick={handleFind}
          disabled={loading}
          className="bg-brand-accent hover:bg-brand-accent/90 text-brand-bg font-sans font-bold py-4 px-12 rounded-full transition-all tracking-widest uppercase text-sm flex items-center gap-2 mx-auto disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
          {loading ? 'Consulting Experts...' : 'Find My Signature Scent'}
        </button>

        {recommendation && (
          <div className="mt-12 p-8 bg-white/5 border border-white/10 rounded-2xl text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h4 className="font-display text-2xl mb-4 text-brand-accent">Your Curated Match</h4>
            <p className="font-sans text-lg leading-relaxed text-slate-200 italic">
              {recommendation}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
