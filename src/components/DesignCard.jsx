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
    <div className="design-card opacity-0 animate-fade-in-up group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
          <span className="text-white text-sm font-medium flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            Click to view full size
          </span>
        </div>

        {/* Tag Badge */}
        {design.tag && tagColor && (
          <div className={`absolute top-3 left-3 ${tagColor.bg} ${tagColor.text} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg`}>
            {design.tag}
          </div>
        )}

        {/* Category Badge */}
        <div className={`absolute top-3 right-3 ${catColor.bg} ${catColor.text} px-3 py-1 rounded-full text-xs font-semibold border ${catColor.border} backdrop-blur-sm`}>
          {design.category}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Name & Price */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors duration-300">
            {design.name}
          </h3>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-2xl font-extrabold text-primary">{design.price}</span>
          <span className="text-xs text-gray-400 font-medium">onwards</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
          {design.description}
        </p>

        {/* WhatsApp Book Button */}
        <a
          href={`https://wa.me/919302154692?text=Hi%20I%20want%20to%20book%20${encodeURIComponent(design.name)}%20design%20(₹${design.price})`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-green-600/25 active:scale-95"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Book on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default DesignCard;
