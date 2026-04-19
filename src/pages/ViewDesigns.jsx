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
      <section className="relative min-h-[55vh] sm:h-[45vh] md:h-[50vh] flex items-center justify-center overflow-hidden pt-16 md:pt-0">
        <img
          src={designsData[0].image}
          alt="Mehendi Designs"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 page-hero-overlay"></div>

        <div className="relative z-10 text-center px-4 pt-10 md:pt-0">
          <p className="text-secondary font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-3 sm:mb-4 animate-fade-in">
            ✦ Explore Our Collection ✦
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 sm:mb-4 animate-fade-in-up uppercase tracking-tight">
            Our Mehendi <span className="gold-shimmer">Designs</span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto animate-fade-in-up leading-relaxed">
            Browse through our complete collection of handcrafted mehendi designs. Each design is unique and made with love.
          </p>
        </div>

        {/* Decorative bottom wave optimized for dark theme */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 38.3C1248 33.3 1344 26.7 1392 23.3L1440 20V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" fill="#2a0202"/>
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
      {/* Designs Grid - Dark Theme */}
      <section className="bg-[#2a0202] py-12 px-4 md:px-8 min-h-screen relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-maroon-pattern opacity-5 pointer-events-none"></div>
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
            <div className="text-center py-24 bg-[#3d0505]/30 rounded-3xl border border-secondary/10 border-dashed">
              <p className="text-2xl text-secondary/40 font-medium">No designs found in this category</p>
              <button 
                onClick={() => setActiveCategory("All")}
                className="mt-6 text-secondary hover:underline font-bold"
              >
                View All Designs
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-maroon-pattern py-16 px-6 text-center border-t border-secondary/20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want a Custom Design?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Don't see what you're looking for? We create custom designs tailored to your style and occasion.
          </p>
          <a
            href="https://www.instagram.com/mehandi_blooms_by_nitika?igsh=MTZ5MXN0amEwYmZwcA=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary text-[#4a0404] px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-secondary"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Request on Instagram
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
