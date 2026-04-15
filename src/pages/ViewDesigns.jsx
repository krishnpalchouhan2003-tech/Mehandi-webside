import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DesignCard from "../components/DesignCard";
import DesignFilter from "../components/DesignFilter";
import ImageModal from "../components/ImageModal";
import { designsData, categories } from "../data/designsData";

function ViewDesigns() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedDesign, setSelectedDesign] = useState(null);

  const filteredDesigns = useMemo(() => {
    if (activeCategory === "All") return designsData;
    return designsData.filter((d) => d.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[45vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src={designsData[0].image}
          alt="Mehendi Designs"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 page-hero-overlay"></div>

        <div className="relative z-10 text-center px-4">
          <p className="text-secondary font-semibold tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in">
            ✦ Explore Our Collection ✦
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Our Mehendi <span className="gold-shimmer">Designs</span>
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto animate-fade-in-up">
            Browse through our complete collection of handcrafted mehendi designs. Each design is unique and made with love.
          </p>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 38.3C1248 33.3 1344 26.7 1392 23.3L1440 20V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Filter Bar */}
      <DesignFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        designCount={filteredDesigns.length}
      />

      {/* Designs Grid */}
      <section className="bg-gray-50 py-12 px-4 md:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {filteredDesigns.length > 0 ? (
            <div
              key={activeCategory}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredDesigns.map((design) => (
                <DesignCard
                  key={design.id}
                  design={design}
                  onImageClick={setSelectedDesign}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-400 font-medium">No designs found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want a Custom Design?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Don't see what you're looking for? We create custom designs tailored to your style and occasion.
          </p>
          <a
            href="https://wa.me/919302154692?text=Hi%20I%20want%20a%20custom%20mehendi%20design"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Request Custom Design
          </a>
        </div>
      </section>

      <Footer />

      {/* Image Modal */}
      {selectedDesign && (
        <ImageModal
          design={selectedDesign}
          onClose={() => setSelectedDesign(null)}
        />
      )}
    </>
  );
}

export default ViewDesigns;
