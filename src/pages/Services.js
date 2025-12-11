import React from 'react';
import { Heart, Code, Truck, HardHat, UtensilsCrossed } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Love Services",
      items: ["Love letters", "Surprise planning", "Gift ideas", "Romantic getaways", "Anniversary celebrations"]
    },
    {
      icon: Code,
      title: "IT Services",
      items: ["Web development", "Bug fixing", "Tech support", "Cloud solutions", "Mobile apps"]
    },
    {
      icon: Truck,
      title: "Courier Services",
      items: ["Package delivery", "Same-day courier", "International shipping", "Express delivery", "Tracking services"]
    },
    {
      icon: HardHat,
      title: "Construction Services",
      items: ["Home repairs", "Renovations", "3D designs", "Interior design", "Project management"]
    },
    {
      icon: UtensilsCrossed,
      title: "Food Services",
      items: ["Catering", "Homemade meals", "Snacks delivery", "Party planning", "Custom menus"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Navbar />

      {/* Services Section */}
      <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 md:px-8 pt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-red-600 text-center mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Explore our wide range of professional services tailored to your needs
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                items={service.items}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
