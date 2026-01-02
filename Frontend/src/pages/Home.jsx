import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Stat from "../components/sections/Stat"
import Slider from "../components/sections/Slider";
import Cards from "../components/sections/Cards"
import GameGallery from "../components/sections/GameGallery";
import OurClients from "../components/sections/OurClients";
import WhyPartnerSection from "../components/sections/WhyPartnerSection";
import ContactForm from "../components/common/ContactForm";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* ================= HERO SECTION ================= */}
      <Hero />

      {/* ================= FEATURES ================= */}
      <Cards />

      {/* =========== STAT =========== */}
      <Stat />

      {/* ================= Testimonial ================= */}
      <Slider />
    
      {/* ================= Game Gallery ================= */}
      <GameGallery />

      {/* ================= Our Clients ================= */}
      <OurClients />

      {/* ================= WhyPartnerSection ================= */}
      <WhyPartnerSection />
      
      {/* ================= Contact Form ================= */}
      <ContactForm />
    </div>
  );
};

export default Home;
