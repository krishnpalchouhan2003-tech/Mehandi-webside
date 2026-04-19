import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/bridal", label: "Bridal" },
    { to: "/groom", label: "Groom" },
    { to: "/baby-shower", label: "Baby Shower" },
    { to: "/designs", label: "View All" },
    { to: "/#packages", label: "Packages" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-10 md:px-20 py-4 sm:py-6 bg-transparent">

      {/* LOGO */}
      <Link to="/" className="flex items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-cursive text-secondary drop-shadow-lg">
          Mehandi Blooms By Nitika        </h1>
      </Link>

      {/* NAV LINKS — Desktop */}
      <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`text-base lg:text-lg font-medium transition-all duration-300 border-b-2 ${isActive(link.to)
              ? "border-secondary text-secondary"
              : "border-transparent text-white hover:text-secondary"
              }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white p-2 focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-[#4a0404]/95 backdrop-blur-md z-[100] md:hidden overflow-y-auto">
          <div className="flex flex-col items-center py-10 space-y-8 h-full">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-serif tracking-widest ${isActive(link.to) ? "text-secondary border-b border-secondary" : "text-white"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-10 flex gap-6">
              <a href="https://www.instagram.com/mehandi_blooms_by_nitika?igsh=MTZ5MXN0amEwYmZwcA==" target="_blank" rel="noopener noreferrer" className="bg-secondary text-[#4a0404] px-10 py-4 rounded-full font-bold text-xl uppercase tracking-tighter shadow-glow">
                DM on Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;