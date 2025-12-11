import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
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

        @keyframes snowfall {
          0% {
            transform: translateY(-10vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) translateX(100px);
            opacity: 0;
          }
        }

        @keyframes snowfall-2 {
          0% {
            transform: translateY(-10vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) translateX(-100px);
            opacity: 0;
          }
        }

        @keyframes logoIntro {
          0% {
            transform: scale(3);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes logoPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }

        .animate-pulse-slow {
          animation: pulse 2s infinite;
        }

        .logo-intro {
          animation: logoIntro 2s ease-out forwards, logoPulse 3s ease-in-out 2s infinite;
        }

        .snowflake {
          position: absolute;
          top: -10vh;
          color: white;
          font-size: 1em;
          pointer-events: none;
          user-select: none;
          z-index: 1000;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .content-delayed {
          opacity: 0;
          animation: fadeInUp 1s ease-out 1.5s forwards;
        }
      `}</style>

      <Navbar />

      {/* Entry Page / Home */}
      <section className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-700 flex flex-col items-center justify-center relative overflow-hidden pt-16">
        {/* Snowflakes */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              animationName: i % 2 === 0 ? 'snowfall' : 'snowfall-2',
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random(),
              fontSize: `${Math.random() * 10 + 10}px`
            }}
          >
            ❄
          </div>
        ))}
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-48 -left-48 animate-pulse-slow"></div>
          <div className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-48 -right-48 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          {/* Logo - appears first with intro animation */}
          <img 
            src="/namiral1.png"
            alt="Namiral Logo"
            className="mx-auto mb-6 h-48 w-auto logo-intro"
            style={{
              filter: 'invert(1) brightness(200%)'
            }}
          />

          <h1
            className="text-6xl md:text-8xl font-bold text-white mb-6 content-delayed"
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}
          >
            Welcome to Namiral
          </h1>

          <p
            className="text-xl md:text-3xl text-white/95 mb-12 font-light tracking-wide content-delayed"
            style={{
              animationDelay: '1.7s'
            }}
          >
            To get our services, explore our pages...
          </p>

          {/* Navigation Buttons */}
          <div 
            className="flex flex-wrap gap-4 justify-center content-delayed"
            style={{
              animationDelay: '2s'
            }}
          >
            <Link 
              to="/services" 
              className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Services
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;