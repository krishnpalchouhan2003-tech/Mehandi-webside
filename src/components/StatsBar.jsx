import React from 'react';

const StatsBar = () => {
  const stats = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ),
      label: "50+ Happy Clients"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      ),
      label: "Bridal Specialist"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: "Serving in Khandwa"
    }
  ];

  return (
    <div className="bg-[#2D0A0A] text-cream py-3 sm:py-4 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-4 items-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">
            <span className="text-secondary">{stat.icon}</span>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
