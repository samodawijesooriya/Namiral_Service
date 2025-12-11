import React, { useState, useEffect } from 'react';
import { ChevronDown, Heart, Code, Truck, HardHat, UtensilsCrossed, Menu, X, Phone, Mail, Facebook, Instagram, Twitter, Calendar, MapPin } from 'lucide-react';

// Navigation Bar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Events', id: 'events' },
    { name: 'Contacts', id: 'contacts' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-red-600 shadow-lg' : 'bg-red-600/95'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white cursor-pointer" onClick={() => scrollToSection('home')}>
              Namiral
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-red-100 transition-colors duration-300 font-medium text-lg"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-100 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-3 py-2 text-white hover:bg-red-800 rounded-md transition-colors duration-300 font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

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

// Event Card Component
const EventCard = ({ title, date, location, index }) => {
  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-red-600"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      <div className="flex items-start mb-4">
        <div className="bg-red-100 p-3 rounded-lg">
          <Calendar className="w-6 h-6 text-red-600" />
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <div className="flex items-center text-gray-600 text-sm mb-1">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-white">{date}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-white">{location}</span>
          </div>
        </div>
      </div>
      <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 font-semibold">
        Learn More
      </button>
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

  // Hard-coded events data
  const events = [
    {
      title: "Valentine's Surprise Delivery Event",
      date: "February 14, 2026",
      location: "Nationwide"
    },
    {
      title: "IT Support Weekend Marathon",
      date: "March 15-16, 2026",
      location: "Online & On-site"
    },
    {
      title: "Holiday Mega Courier Program",
      date: "December 2025",
      location: "All Major Cities"
    },
    {
      title: "Construction Exhibition Day",
      date: "April 20, 2026",
      location: "Colombo Exhibition Center"
    },
    {
      title: "Food Festival Delivery Week",
      date: "May 1-7, 2026",
      location: "Island-wide"
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

      {/* Navigation Bar */}
      <Navbar />

      {/* Entry Page / Home */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-700 flex flex-col items-center justify-center relative overflow-hidden pt-16">
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

      {/* About Section */}
      <section id="about" className="min-h-screen bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-red-600 text-center mb-12">
            About Namiral
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-4">Who We Are</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Namiral is your all-in-one platform that brings any service you need right to your fingertips through the internet. From love services to construction, IT support to food delivery, we connect you with trusted professionals who deliver excellence.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-700 to-red-800 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-4">Why Choose Us</h3>
              <ul className="text-white/90 text-lg space-y-3">
                <li className="flex items-start">
                  <span className="text-white font-bold mr-2">•</span>
                  <span><strong className="text-white">Convenience:</strong> Access all services from one platform</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white font-bold mr-2">•</span>
                  <span><strong className="text-white">Speed:</strong> Fast response times and quick service delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white font-bold mr-2">•</span>
                  <span><strong className="text-white">Reliability:</strong> Verified professionals you can trust</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white border-4 border-red-600 rounded-2xl p-10 shadow-xl text-center">
            <h3 className="text-3xl font-bold text-red-600 mb-4">Our Track Record</h3>
            <p className="text-gray-700 text-xl leading-relaxed mb-6">
              With over <span className="text-red-600 font-bold">10+ years</span> of trusted service in the industry, Namiral has successfully served <span className="text-red-600 font-bold">thousands of satisfied customers</span> across the nation. Our commitment to excellence and customer satisfaction has made us the go-to platform for all your service needs.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div>
                <p className="text-4xl font-bold text-red-600">10+</p>
                <p className="text-gray-600 font-semibold">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-red-600">5000+</p>
                <p className="text-gray-600 font-semibold">Happy Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-red-600">50+</p>
                <p className="text-gray-600 font-semibold">Service Categories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 md:px-8"
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
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="min-h-screen bg-gradient-to-br from-red-600 to-red-700 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-white/90 text-center mb-16">
            Join us for exciting events and special programs throughout the year
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={event.date}
                location={event.location}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-red-600 text-center mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            We'd love to hear from you. Reach out through any of these channels
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info Cards */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a href="tel:+94771234567" className="flex items-center text-white hover:text-red-100 transition-colors group">
                  <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="ml-4 text-lg">+94 77 123 4567</span>
                </a>
                
                <a href="mailto:namiral-email@namiral.com" className="flex items-center text-white hover:text-red-100 transition-colors group">
                  <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="ml-4 text-lg">namiral-email@namiral.com</span>
                </a>
              </div>
            </div>

            {/* Social Media Cards */}
            <div className="bg-gradient-to-br from-red-700 to-red-800 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <div className="space-y-4">
                <a href="https://facebook.com/namiral" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-red-100 transition-colors group">
                  <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <span className="ml-4 text-lg">facebook.com/namiral</span>
                </a>
                
                <a href="https://instagram.com/namiral" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-red-100 transition-colors group">
                  <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <span className="ml-4 text-lg">instagram.com/namiral</span>
                </a>
                
                <a href="https://x.com/namiral" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-red-100 transition-colors group">
                  <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </div>
                  <span className="ml-4 text-lg">x.com/namiral</span>
                </a>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105">
              Send Us a Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-600 to-red-700 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg mb-2">© 2025 Namiral. All rights reserved.</p>
          <p className="text-white/80">Your trusted platform for all services</p>
        </div>
      </footer>
    </div>
  );
};

export default App;