import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full flex items-center bg-maroon-pattern overflow-hidden pt-24 pb-12">
      
      {/* CORNER ORNAMENT (Top Left) */}
      <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 opacity-20 pointer-events-none">
        <div className="w-full h-full border-t-2 border-l-2 border-secondary m-4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-10 md:px-20 grid md:grid-cols-2 items-center gap-10 md:gap-12 z-10">
        
        {/* LEFT CONTENT */}
        <div className="text-white space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-1">
          <h2 className="text-secondary font-cursive text-2xl sm:text-3xl md:text-4xl animate-fade-in">
            Welcome to Nitika's Art
          </h2>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up">
            Bridal Mehendi Artist <br /> 
            <span className="text-secondary">in Khandwa</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-cream/80 max-w-lg mx-auto md:mx-0 leading-relaxed animate-fade-in-up">
            Make your special day more beautiful with stunning mehendi designs
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 pt-4 animate-fade-in-up">
            <a
              href="https://www.instagram.com/mehandi_blooms_by_nitika?igsh=MTZ5MXN0amEwYmZwcA=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-secondary text-[#4a0404] hover:bg-[#f0d48a] px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Book on Instagram
            </a>

            <Link
              to="/designs"
              className="w-full sm:w-auto text-center bg-secondary text-[#4a0404] hover:bg-transparent hover:text-secondary border-2 border-secondary px-8 py-4 rounded-lg font-bold shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View Designs
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative order-1 md:order-2 max-w-sm mx-auto md:max-w-none">
          <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl transform scale-110"></div>
          <img
            src="/images/home/hero.png"
            className="relative z-10 w-full rounded-2xl border-4 border-secondary/30 shadow-2xl"
            alt="Nitika Bridal Mehendi"
          />
        </div>

      </div>

      {/* BOTTOM ORNAMENT */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
    </section>
  );
}

export default Hero;