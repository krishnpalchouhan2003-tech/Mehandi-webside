function Testimonials() {
  const testimonials = [
    { text: "Beautiful designs and very professional! Highly recommend.", name: "Anjali S." },
    { text: "Loved the mehendi! It was perfect for my wedding!", name: "Neha R." },
  ];

  return (
    <section className="bg-cream py-24 px-6 md:px-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 ornament-divider text-maroon">
          Client Testimonials
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-10 rounded-xl shadow-xl border-t-4 border-secondary relative group hover:scale-[1.02] transition-all duration-300">
              <span className="text-6xl text-secondary/30 absolute top-4 left-4 font-serif">“</span>
              <p className="text-xl italic text-maroon relative z-10 leading-relaxed mb-6">
                {t.text}
              </p>
              <h4 className="text-right font-bold text-maroon text-lg">
                — {t.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;