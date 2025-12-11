import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';

const Events = () => {
  const events = [
    {
      title: "Namiral Anual Cricket Tournament 2025",
      date: "February 14, 2026",
      location: "Saibe Ground, Colombo"
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

      {/* Events Section */}
      <section className="min-h-screen bg-gradient-to-br from-red-600 to-red-700 py-20 px-4 md:px-8 pt-24">
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

      <Footer />
    </div>
  );
};

export default Events;
