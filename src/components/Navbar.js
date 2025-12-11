import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Events', path: '/events' },
    { name: 'Contacts', path: '/contacts' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-red-600 shadow-lg' : 'bg-red-600/95'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* Logo */}
                <div className="flex-shrink-0 flex items-center space-x-2">
                <img 
                    src="/namiral1.png"
                    alt="Namiral Logo"
                    className="h-8 w-auto"   // <-- smaller size
                    style={{
                        animation: 'fadeInUp 1s ease-out 0.2s both',
                        filter: 'invert(1) brightness(200%)'
                    }}
                />
                <Link 
                    to="/" 
                    className="text-2xl font-bold text-white hover:text-red-100 transition-colors"
                >
                    Namiral
                </Link>
                </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-white hover:text-red-100 transition-colors duration-300 font-medium text-lg ${
                  location.pathname === link.path ? 'border-b-2 border-white' : ''
                }`}
              >
                {link.name}
              </Link>
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
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left px-3 py-2 text-white hover:bg-red-800 rounded-md transition-colors duration-300 font-medium ${
                  location.pathname === link.path ? 'bg-red-800' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
