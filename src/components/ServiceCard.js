import React, { useState } from 'react';

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

export default ServiceCard;
