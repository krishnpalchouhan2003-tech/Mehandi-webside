import { categoryColors, tagColors } from "../data/designsData";

function DesignCard({ design, onImageClick }) {
  const catColor = categoryColors[design.category] || {
    bg: "bg-gray-100",
    text: "text-gray-800",
    border: "border-gray-300",
  };

  const tagColor = design.tag
    ? tagColors[design.tag] || { bg: "bg-gray-500", text: "text-white" }
    : null;

  return (
    <div className="design-card opacity-0 animate-fade-in-up group relative bg-[#3d0505]/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-secondary/10 hover:border-secondary">
      {/* Image Container */}
      <div
        className="relative overflow-hidden cursor-pointer aspect-[3/4]"
        onClick={() => onImageClick(design)}
      >
        <img
          src={design.image}
          alt={design.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a0202] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-400 flex items-end p-6">
          <span className="text-secondary text-sm font-bold flex items-center gap-2 uppercase tracking-widest">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            Enlarge Design
          </span>
        </div>

        {/* Tag Badge */}
        {design.tag && tagColor && (
          <div className={`absolute top-3 left-3 ${tagColor.bg} ${tagColor.text} px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg border border-white/10`}>
            {design.tag}
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-[#2a0202]/80 text-secondary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-secondary/30 backdrop-blur-md">
          {design.category}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Name */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors duration-300 tracking-tight">
          {design.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-black text-secondary">{design.price}</span>
          <span className="text-[10px] text-cream/40 uppercase tracking-widest font-bold">Starting</span>
        </div>

        {/* Description */}
        <p className="text-sm text-cream/60 mb-6 line-clamp-2 leading-relaxed">
          {design.description}
        </p>

        {/* Instagram DM Button - Redesigned Gold Style */}
        <a
          href="https://www.instagram.com/mehandi_blooms_by_nitika?igsh=MTZ5MXN0amEwYmZwcA=="
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-secondary text-[#4a0404] py-4 px-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20 hover:bg-[#f0d48a] active:scale-95"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          Book on Instagram
        </a>
      </div>
    </div>
  );
}

export default DesignCard;
