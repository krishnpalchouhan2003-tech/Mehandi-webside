function Footer() {
  return (
    <footer className="bg-[#2a0202] text-cream py-16 px-6 md:px-20 border-t border-secondary/20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 text-center md:text-left">
        {/* Follow Section - Prominent Instagram link */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-secondary font-bold text-lg uppercase tracking-widest mb-2">Follow & Book</h3>
          <a 
            href="https://www.instagram.com/mehandi_blooms_by_nitika?igsh=MTZ5MXN0amEwYmZwcA==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center border border-secondary/20 group-hover:bg-secondary group-hover:text-maroon transition-all duration-300">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <span className="text-xl font-medium tracking-wide group-hover:text-secondary transition-colors">@mehandi_blooms_by_nitika</span>
          </a>
        </div>

        {/* Contact info: Location */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <h3 className="text-secondary font-bold text-lg uppercase tracking-widest mb-2">Location</h3>
          <div className="flex items-center gap-3">
            <span className="text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <span className="text-xl font-medium tracking-wide">Khandwa, India</span>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-secondary/10 text-center text-sm text-cream/40">
        <p>© 2026 Nitika Mehendi Khandwa | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
