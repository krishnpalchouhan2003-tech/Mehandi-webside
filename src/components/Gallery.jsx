function Gallery() {
  const designs = [
    { title: "Bridal Mehendi", image: "/src/assets/images/home/bridal.png" },
    { title: "Arabic Mehendi", image: "/src/assets/images/home/arabic.png" },
    { title: "Festival Mehendi", image: "/src/assets/images/home/festival.png" },
  ];

  return (
    <section className="bg-cream py-24 px-6 md:px-20">
      
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 ornament-divider text-maroon">
          Our Mehendi Designs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-2 border-4 border-white">
              <img
                src={design.image}
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                alt={design.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-0 w-full p-6 text-center transform transition-transform duration-500">
                <h3 className="text-white text-2xl font-bold tracking-wide">
                  {design.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;