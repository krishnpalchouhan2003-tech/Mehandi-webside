function Gallery() {
  return (
    <section className="bg-[#fdf1e7] py-16 px-10">
      
      <h2 className="text-3xl font-bold text-center mb-10 relative">
        Our Mehendi Designs
        <span className="block w-24 h-[2px] bg-yellow-400 mx-auto mt-2"></span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Bridal */}
        <div className="relative group overflow-hidden rounded-xl">
          <img
            src="/src/assets/images/bridal/bridal1.jpg"
            className="w-full h-64 object-cover rounded-xl shadow-md group-hover:scale-105 transition duration-300"
            alt="Bridal Mehendi"
          />

          <div className="absolute bottom-0 w-full bg-black/60 text-white py-2 text-center opacity-0 group-hover:opacity-100 transition duration-300">
            Bridal Mehendi
          </div>
        </div>

        {/* Groom */}
        <div className="relative group overflow-hidden rounded-xl">
          <img
            src="/src/assets/images/groom/groom1.jpg"
            className="w-full h-64 object-cover rounded-xl shadow-md group-hover:scale-105 transition duration-300"
            alt="Groom Mehendi"
          />

          <div className="absolute bottom-0 w-full bg-black/60 text-white py-2 text-center opacity-0 group-hover:opacity-100 transition duration-300">
            Groom Mehendi
          </div>
        </div>

        {/* Baby Shower */}
        <div className="relative group overflow-hidden rounded-xl">
          <img
            src="/src/assets/images/Baby showr/baby1.jpg"
            className="w-full h-64 object-cover rounded-xl shadow-md group-hover:scale-105 transition duration-300"
            alt="Baby Shower Mehendi"
          />

          <div className="absolute bottom-0 w-full bg-black/60 text-white py-2 text-center opacity-0 group-hover:opacity-100 transition duration-300">
            Baby Shower Mehendi
          </div>
        </div>

      </div>
    </section>
  );
}

export default Gallery;