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
    { to: "/designs", label: "View Designs" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-40 flex justify-between items-center px-6 md:px-8 py-4 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100">

      {/* LOGO / NAME */}
      <Link to="/" className="flex items-center gap-2">
        <h1 className="text-xl md:text-2xl font-bold text-primary">
          Nitika Mehendi Artist
        </h1>
      </Link>

      {/* NAV LINKS — Desktop */}
      <div className="hidden md:flex items-center space-x-1">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              isActive(link.to)
                ? "bg-primary text-white shadow-md shadow-primary/20"
                : "text-gray-600 hover:text-primary hover:bg-primary/5"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA + Mobile Menu */}
      <div className="flex items-center gap-3">
        {/* Book Now — always visible */}
        <a
          href="https://wa.me/919302154692?text=Hi%20I%20want%20to%20book%20mehendi"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
        >
          Book Now
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 animate-slide-down md:hidden">
          <div className="flex flex-col p-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive(link.to)
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-primary/5 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;