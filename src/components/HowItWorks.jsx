function HowItWorks() {
  const steps = [
    { number: "1", title: "Contact Us on WhatsApp" },
    { number: "2", title: "Share Your Date & Location" },
    { number: "3", title: "Choose Your Design" },
    { number: "4", title: "Confirm Booking" },
  ];

  return (
    <section className="bg-maroon-pattern py-24 px-6 md:px-20 text-white relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 ornament-divider text-secondary">
          How It Works
        </h2>

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-secondary/30 to-transparent hidden md:block"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
              <div className="w-16 h-16 rounded-full bg-maroon border-2 border-secondary flex items-center justify-center text-secondary text-2xl font-bold mb-6 shadow-glow transition-transform duration-300 hover:scale-110">
                {step.number}
              </div>
              <h3 className="text-lg font-medium leading-tight text-cream">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;