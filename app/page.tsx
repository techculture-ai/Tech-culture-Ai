import Image from "next/image";
import CustomerSection from "../components/HomePage/customerStories";
import ServicesSection from "../components/HomePage/serviceSection";
import AboutSection from "../components/HomePage/aboutSection";
import FeaturesSection from "../components/HomePage/featureSection";
import TCSCarousel from "../components/HomePage/tcsCarousel";
import Header from "../components/header/index";
import Testimonial from "../components/HomePage/testimonialSectionNew"
import Footer from "../components/footer/index";
import TechnologiesSection from "../components/HomePage/technologiesSection";
import ClientsSection from "../components/HomePage/clientsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Carousel Section */}
      <TCSCarousel />
      
      {/* About Section */}
      <div className="mt-0">
        <AboutSection />
      </div>
      
      <div className="">
        <ServicesSection />
      </div>

      <FeaturesSection/>

      <div className="">
        <CustomerSection />
      </div>



      <TechnologiesSection />

      <Testimonial />

      <ClientsSection />

      <Footer />

    </div>
  );
}
