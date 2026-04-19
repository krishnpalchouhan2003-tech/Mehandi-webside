import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DesignCard from "../components/DesignCard";
import ImageModal from "../components/ImageModal";
import { designsData } from "../data/designsData";

function Groom() {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const groomDesigns = designsData.filter((d) => d.category === "Groom");

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden pt-16 md:pt-0">
        <img
          src={groomDesigns[0]?.image}
          alt="Groom Mehendi"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 page-hero-overlay"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-10 md:pt-0">
          <p className="text-secondary font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-3 sm:mb-4 animate-fade-in">
            ✦ For The King ✦
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 sm:mb-4 animate-fade-in-up uppercase tracking-tight">
            Groom <span className="gold-shimmer">Mehendi</span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto mb-6 sm:mb-8 animate-fade-in-up leading-relaxed">
            Stylish and modern groom mehendi designs that complement your wedding look perfectly
          </p>
          <a
            href="https://www.instagram.com/mehandi_blooms_by_nitika?igsh=MTZ5MXN0amEwYmZwcA=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-[#4a0404] px-6 sm:px-8 py-3 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up text-sm sm:text-base"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Book on Instagram
          </a>
        </div>

        {/* Bottom wave optimized for dark theme transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 38.3C1248 33.3 1344 26.7 1392 23.3L1440 20V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" fill="#2a0202"/>
          </svg>
        </div>
      </section>

      {/* Info Section - Unified Dark Theme */}
      <section className="bg-[#2a0202] py-16 px-6 md:px-10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-[#3d0505]/40 backdrop-blur-sm rounded-2xl border border-secondary/10 hover:border-secondary transition-all">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-secondary/20">
                <span className="text-3xl text-secondary">🤴</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Modern Designs</h3>
              <p className="text-white/60">Trendy groom mehendi designs with personalized initials and wedding motifs</p>
            </div>
            <div className="text-center p-6 bg-[#3d0505]/40 backdrop-blur-sm rounded-2xl border border-secondary/10 hover:border-secondary transition-all">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-secondary/20">
                <span className="text-3xl text-secondary">✨</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quick & Stylish</h3>
              <p className="text-white/60">Get the perfect groom look in just 30-60 minutes with our expert application</p>
            </div>
            <div className="text-center p-6 bg-[#3d0505]/40 backdrop-blur-sm rounded-2xl border border-secondary/10 hover:border-secondary transition-all">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-secondary/20">
                <span className="text-3xl text-secondary">📍</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">At Your Location</h3>
              <p className="text-white/60">We come to your venue, home, or hotel for a convenient groom mehendi session</p>
            </div>
          </div>

          {/* Price Range - Dark Theme Consistency */}
          <div className="bg-[#3d0505]/60 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-secondary/20 text-center mb-16 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
            <h2 className="text-2xl font-bold text-white mb-6 tracking-wide">Groom Mehendi Packages</h2>
            
            <div className="flex justify-center items-center gap-6 sm:gap-12 mb-8 relative">
              <div className="text-center">
                <p className="text-secondary/60 text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2">Starting From</p>
                <p className="text-3xl sm:text-5xl font-extrabold text-white">₹500</p>
              </div>
              <div className="h-16 w-px bg-gradient-to-b from-transparent via-secondary/30 to-transparent"></div>
              <div className="text-center">
                <p className="text-secondary/60 text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2">Detailed Designs</p>
                <p className="text-3xl sm:text-5xl font-extrabold text-white">₹2,000</p>
              </div>
            </div>
            
            <p className="text-white/60 mb-6 max-w-sm mx-auto">Depends on design complexity and hand/arm coverage</p>
            <div className="w-20 h-1 bg-secondary rounded-full mx-auto shadow-glow"></div>
          </div>

          {/* Designs Section */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 tracking-tight">
            Groom Design <span className="gold-shimmer font-cursive text-5xl">Collection</span>
            <span className="block w-24 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-4"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {groomDesigns.map((design) => (
              <DesignCard
                key={design.id}
                design={design}
                onImageClick={setSelectedDesign}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Standardized Dark Maroon */}
      <section className="bg-maroon-pattern py-20 px-6 text-center border-t border-secondary/10 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready for Your <span className="gold-shimmer">Groom</span> Mehendi?
          </h2>
          <p className="text-white/60 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
            A groom isn't complete without mehendi. Book your session and match your bride's elegance. Professional and modern designs.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
            <a
              href="https://www.instagram.com/mehandi_blooms_by_nitika?igsh=MTZ5MXN0amEwYmZwcA=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-secondary text-[#4a0404] px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Book on Instagram
            </a>
            <Link
              to="/designs"
              className="inline-flex items-center justify-center gap-3 bg-transparent text-secondary border-2 border-secondary/30 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-secondary hover:text-[#4a0404] transition-all duration-300 hover:scale-105"
            >
              View All Gallery
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {selectedDesign && (
        <ImageModal
          design={selectedDesign}
          onClose={() => setSelectedDesign(null)}
        />
      )}
    </>
  );
}

export default Groom;
