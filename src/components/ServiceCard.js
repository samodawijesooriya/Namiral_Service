import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, items, index, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div
      className={`bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 shadow-2xl hover:shadow-red-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
        link ? 'cursor-pointer' : ''
      }`}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
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
      
      {/* Optional: Add a visual indicator for clickable cards */}
      {link && (
        <div className="mt-6 pt-6 border-t border-white/30">
          <p className="text-white/80 text-sm font-semibold flex items-center justify-center">
            Click to learn more
            <svg 
              className={`w-4 h-4 ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </p>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;