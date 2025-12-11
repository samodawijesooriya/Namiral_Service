import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

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
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 font-semibold">
        Learn More
      </button>
    </div>
  );
};

export default EventCard;
