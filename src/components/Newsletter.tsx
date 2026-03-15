export default function Newsletter() {
  return (
    <section className="py-24 px-6 md:px-20 text-center border-y border-brand-accent/10">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="font-display text-4xl md:text-5xl">Join our inner circle</h2>
        <p className="text-brand-primary/60 font-sans text-lg">
          Sign up for exclusive previews, sustainable living tips, and 10% off your first order.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 pt-4" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 bg-brand-accent/5 border border-brand-accent/20 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-sm px-6 py-4 font-sans text-sm outline-none"
          />
          <button className="bg-brand-accent hover:bg-brand-accent/90 text-brand-bg font-sans font-bold py-4 px-10 rounded-sm transition-all tracking-widest uppercase text-sm">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
