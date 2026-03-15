import { Leaf, Sparkles, Globe } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Leaf,
      title: "Clean & Non-Toxic",
      description: "Lead-free cotton wicks and phthalate-free fragrances for a pure, clean burn."
    },
    {
      icon: Sparkles,
      title: "Artisan Crafted",
      description: "Hand-poured in small batches in our Paris studio by master chandlers."
    },
    {
      icon: Globe,
      title: "Sustainable Luxury",
      description: "Eco-friendly soy wax and recyclable glass packaging that complements your space."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-brand-bg">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-2">
              <benefit.icon className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl">{benefit.title}</h3>
            <p className="text-brand-primary/60 font-sans leading-relaxed max-w-xs">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
