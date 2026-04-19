function DesignFilter({ categories, activeCategory, onCategoryChange, designCount }) {
  return (
    <div className="sticky top-0 z-30 bg-[#2a0202]/90 backdrop-blur-xl border-b border-secondary/10 py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-secondary/60 font-medium">
            Showing <span className="text-secondary font-bold">{designCount}</span> designs
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide gap-3 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border-2 whitespace-nowrap flex-shrink-0 ${
                activeCategory === category
                  ? "bg-secondary text-[#4a0404] border-secondary shadow-lg shadow-secondary/25 scale-105"
                  : "bg-[#3d0505] text-cream/70 border-secondary/10 hover:border-secondary hover:text-secondary hover:bg-[#4d0707]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DesignFilter;
