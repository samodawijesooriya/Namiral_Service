import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* About Section */}
      <section className="min-h-screen bg-white py-20 px-4 md:px-8 pt-24">
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

      <Footer />
    </div>
  );
};

export default About;
