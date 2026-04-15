function Footer() {
  return (
    <footer className="bg-[#2a0202] text-cream py-16 px-6 md:px-20 border-t border-secondary/20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Contact info: Call */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <span className="text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <span className="text-xl font-medium tracking-wide">Call: +91 93021 54692</span>
          </div>
        </div>

        {/* Contact info: Follow */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <span className="text-xl font-medium tracking-wide tracking-wide uppercase">Follow: @nitikamehendiartist</span>
          </div>
        </div>

        {/* Contact info: Location */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-3">
            <span className="text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <span className="text-xl font-medium tracking-wide">Indore, India</span>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-secondary/10 text-center text-sm text-cream/40">
        <p>© 2026 Nitika Mehendi Artist | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;