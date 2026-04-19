function Gallery() {
  const designs = [
    { title: "Bridal Mehendi", image: "/src/assets/images/home/bridal.png" },
    { title: "Arabic Mehendi", image: "/src/assets/images/home/arabic.png" },
    { title: "Festival Mehendi", image: "/src/assets/images/home/festival.png" },
  ];

  return (
    <section className="bg-[#2a0202] py-24 px-6 md:px-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-secondary font-semibold text-center tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in">
          ✦ Visual Excellence ✦
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 ornament-divider text-white tracking-tight">
          Our Mehendi <span className="gold-shimmer font-cursive text-5xl md:text-6xl">Gallery</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-secondary/20 hover:border-secondary">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={design.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={design.title}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a0202] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 w-full p-6 text-center transform transition-transform duration-500">
                <h3 className="text-white text-2xl font-bold tracking-wide mb-2">
                  {design.title}
                </h3>
                <div className="w-12 h-1 bg-secondary mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;