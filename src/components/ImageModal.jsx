import { useEffect } from "react";

function ImageModal({ design, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!design) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="modal-content relative flex flex-col md:flex-row max-w-5xl w-full max-h-[90vh] bg-[#2a0202] rounded-3xl overflow-hidden shadow-2xl border border-secondary/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Now inside the content container for better positioning */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-secondary text-white hover:text-maroon transition-all duration-300 backdrop-blur-md z-20 border border-secondary/20"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Section */}
        <div className="md:w-3/5 relative bg-[#1a0101] min-h-[300px] overflow-hidden">
          <img
            src={design.image}
            alt={design.name}
            className="w-full h-full object-cover md:max-h-[90vh]"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#2a0202] to-transparent block md:hidden"></div>
        </div>

        {/* Info Panel - Optimized for scrolling */}
        <div className="md:w-2/5 p-6 sm:p-10 flex flex-col justify-between bg-[#2a0202] overflow-y-auto">
          <div>
            {/* Category */}
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-secondary/20 backdrop-blur-sm">
                {design.category}
              </span>
              {design.tag && (
                <span className="flex items-center gap-1.5 text-green-400 text-[10px] font-black uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  {design.tag}
                </span>
              )}
            </div>

            {/* Name */}
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight leading-none group">
              {design.name}
            </h2>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl sm:text-5xl font-black text-secondary">
                {design.price}
              </span>
              <span className="text-xs text-cream/40 uppercase tracking-widest font-bold">Starting onwards</span>
            </div>

            {/* Divider */}
            <div className="w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mb-8"></div>

            {/* Description */}
            <p className="text-cream/70 leading-relaxed mb-10 text-base italic font-medium border-l-2 border-secondary/20 pl-4">
              "{design.description}"
            </p>
          </div>

          {/* WhatsApp Button - Branded Style */}
          <div className="mt-auto">
            <a
              href="https://www.instagram.com/mehandi_blooms_by_nitika?igsh=MTZ5MXN0amEwYmZwcA=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-secondary text-[#4a0404] py-5 px-6 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/20 hover:bg-[#f0d48a] active:scale-95"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Book on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
