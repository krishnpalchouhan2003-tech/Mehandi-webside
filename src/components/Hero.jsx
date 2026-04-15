import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative h-[90vh] w-full">

      {/* BACKGROUND IMAGE */}
      <img
        src="/src/assets/images/bridal/bridal1.jpg"
        className="absolute w-full h-full object-cover"
        alt="Bridal Mehendi"
      />

      {/* RED OVERLAY */}
      <div className="absolute w-full h-full bg-[#7a1f3d]/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20 text-white">

        <h1 className="text-5xl font-bold mb-4">
          Bridal Mehendi Artist <br /> in Khandwa
        </h1>

        <p className="mb-6 text-lg">
          Make your special day more beautiful with stunning mehendi designs
        </p>

        <div className="flex gap-4">
          <a
            href="https://wa.me/919302154692"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-700 transition-all duration-300"
          >
            Book on WhatsApp
          </a>

          <Link
            to="/designs"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
          >
            View Designs
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Hero;