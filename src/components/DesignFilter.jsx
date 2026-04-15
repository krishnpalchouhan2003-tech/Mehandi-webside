function DesignFilter({ categories, activeCategory, onCategoryChange, designCount }) {
  return (
    <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-100 py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-gray-500 font-medium">
            Showing <span className="text-primary font-bold">{designCount}</span> designs
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border-2 ${
                activeCategory === category
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/25 scale-105"
                  : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary hover:bg-pink-50"
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
