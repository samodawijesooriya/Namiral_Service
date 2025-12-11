import React, { useState, useEffect } from 'react';
import { ChevronDown, Heart, Code, Truck, HardHat, UtensilsCrossed } from 'lucide-react';

// Service Card Component
const ServiceCard = ({ icon: Icon, title, items, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 shadow-2xl hover:shadow-red-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-6">
        <div className={`bg-white/20 p-4 rounded-xl transition-transform duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white ml-4">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="text-white/90 text-lg pl-4 border-l-2 border-white/30 hover:border-white hover:pl-6 transition-all duration-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main App Component
const App = () => {
  const [showServices, setShowServices] = useState(false);

  // Hard-coded services data
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowServices(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

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

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }

        .animate-pulse-slow {
          animation: pulse 2s infinite;
        }
      `}</style>

      {/* Entry Page */}
      <section className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-700 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-48 -left-48 animate-pulse-slow"></div>
          <div className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-48 -right-48 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            style={{
              animation: 'fadeInUp 1s ease-out',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}
          >
            Welcome to Namiral
          </h1>
          <p
            className="text-xl md:text-3xl text-white/95 mb-12 font-light tracking-wide"
            style={{
              animation: 'fadeInUp 1s ease-out 0.3s both'
            }}
          >
            To get our services, scroll down...
          </p>

          {/* Scroll Down Arrow */}
          <button
            onClick={scrollToServices}
            className="animate-bounce-slow focus:outline-none transition-transform hover:scale-110"
            style={{
              animation: 'fadeInUp 1s ease-out 0.6s both, bounce 2s infinite 1.6s'
            }}
          >
            <ChevronDown className="w-16 h-16 text-white" strokeWidth={2} />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="min-h-screen bg-white py-20 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-5xl md:text-6xl font-bold text-red-600 text-center mb-4"
            style={{
              animation: showServices ? 'fadeInUp 0.8s ease-out' : 'none',
              opacity: showServices ? 1 : 0
            }}
          >
            Our Services
          </h2>
          <p
            className="text-xl text-gray-600 text-center mb-16"
            style={{
              animation: showServices ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none',
              opacity: showServices ? 1 : 0
            }}
          >
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

          {/* Footer CTA */}
          <div
            className="mt-20 text-center"
            style={{
              animation: showServices ? 'fadeInUp 0.8s ease-out 1s both' : 'none',
              opacity: showServices ? 1 : 0
            }}
          >
            <p className="text-2xl text-gray-700 mb-6">Ready to get started?</p>
            <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;