import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import Gallery from "../components/Gallery";
import Packages from "../components/Packages";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <Gallery />
      <Packages />
      <Testimonials />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;