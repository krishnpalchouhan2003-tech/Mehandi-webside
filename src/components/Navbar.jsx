import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/designs", label: "Gallery" },
    { to: "/#packages", label: "Packages" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-20 py-6 bg-transparent">
      
      {/* LOGO */}
      <Link to="/" className="flex items-center">
        <h1 className="text-3xl md:text-4xl font-cursive text-secondary drop-shadow-lg">
          Priya Mehendi Artist
        </h1>
      </Link>

      {/* NAV LINKS — Desktop */}
      <div className="hidden md:flex items-center space-x-12">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`text-lg font-medium transition-all duration-300 border-b-2 ${
              isActive(link.to)
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
        className="md:hidden text-white p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-maroon-pattern shadow-2xl md:hidden">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xl font-medium ${
                  isActive(link.to) ? "text-secondary" : "text-white"
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