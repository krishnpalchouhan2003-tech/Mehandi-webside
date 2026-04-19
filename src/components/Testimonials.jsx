function Testimonials() {
  const testimonials = [
    { text: "Beautiful designs and very professional! Highly recommend.", name: "Anjali S." },
    { text: "Loved the mehendi! It was perfect for my wedding!", name: "Neha R." },
  ];

  return (
    <section className="bg-[#2D0A0A] py-24 px-6 md:px-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-maroon-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-secondary font-semibold text-center tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in">
          ✦ Happy Clients ✦
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 ornament-divider text-white tracking-tight">
          Client <span className="gold-shimmer font-cursive text-5xl md:text-6xl">Testimonials</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-[#3D1414]/50 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-secondary/20 relative group hover:border-secondary transition-all duration-300">
              <span className="text-6xl text-secondary/20 absolute top-4 left-4 font-serif">“</span>
              <p className="text-xl italic text-cream relative z-10 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                {t.text}
              </p>
              <div className="relative z-10 flex items-center justify-end gap-3">
                <div className="h-0.5 w-8 bg-secondary/50"></div>
                <h4 className="font-bold text-secondary text-lg uppercase tracking-wider">
                  {t.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;