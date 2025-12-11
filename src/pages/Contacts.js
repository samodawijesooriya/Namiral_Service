import React from 'react';
import { Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Contacts Section */}
      <section className="min-h-screen bg-white py-20 px-4 md:px-8 pt-24">
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

      <Footer />
    </div>
  );
};

export default Contacts;
