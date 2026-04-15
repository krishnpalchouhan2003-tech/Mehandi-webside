import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DesignCard from "../components/DesignCard";
import ImageModal from "../components/ImageModal";
import { designsData } from "../data/designsData";

function BabyShower() {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const babyDesigns = designsData.filter((d) => d.category === "Baby Shower");

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={babyDesigns[0]?.image}
          alt="Baby Shower Mehendi"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 page-hero-overlay"></div>

        <div className="relative z-10 text-center px-4">
          <p className="text-secondary font-semibold tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in">
            ✦ Celebrate New Life ✦
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Baby Shower <span className="gold-shimmer">Mehendi</span>
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8 animate-fade-in-up">
            Beautiful and meaningful mehendi designs for the joyous celebration of motherhood
          </p>
          <a
            href="https://wa.me/919302154692?text=Hi%20I%20want%20to%20book%20baby%20shower%20mehendi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-dark px-8 py-3 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
          >
            Book Baby Shower Mehendi
          </a>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 38.3C1248 33.3 1344 26.7 1392 23.3L1440 20V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" fill="#fdf1e7"/>
          </svg>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-cream py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👶</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Baby Themed Designs</h3>
              <p className="text-gray-600">Adorable baby motifs, cradles, tiny footprints and cute patterns for the mom-to-be</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌸</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Godh Bharai Special</h3>
              <p className="text-gray-600">Traditional godh bharai mehendi with auspicious symbols and floral patterns</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍👩‍👧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Family Packages</h3>
              <p className="text-gray-600">Special packages for the mom-to-be and family members attending the celebration</p>
            </div>
          </div>

          {/* Price Range */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-center mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Baby Shower Mehendi Packages</h2>
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="text-5xl font-extrabold text-primary">₹300</span>
              <span className="text-2xl text-gray-400">–</span>
              <span className="text-5xl font-extrabold text-primary">₹1,500</span>
            </div>
            <p className="text-gray-500 mb-6">Simple to detailed designs for the expecting mother and guests</p>
            <div className="w-20 h-1 bg-secondary rounded-full mx-auto"></div>
          </div>

          {/* Designs */}
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Baby Shower Design Collection
            <span className="block w-24 h-[3px] bg-secondary mx-auto mt-3 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {babyDesigns.map((design) => (
              <DesignCard
                key={design.id}
                design={design}
                onImageClick={setSelectedDesign}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Celebrate the Joy of Motherhood!
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Make your baby shower celebration extra special with beautiful mehendi for the mom-to-be
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919302154692?text=Hi%20I%20want%20to%20book%20baby%20shower%20mehendi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book on WhatsApp
            </a>
            <Link
              to="/designs"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View All Designs →
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

export default BabyShower;
