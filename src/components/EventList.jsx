import events from "../data/events";
import RegisterForm from "../pages/EventRegistration";
import { useState } from "react";

export default function Eventlist() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            🎆 Upcoming Events 🎆
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of people in our amazing events. Register now and be part of something special!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    🎉 Event
                  </span>
                  <span className="text-2xl font-bold text-green-600">₹1001</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-800">{event.name}</h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <span className="mr-2">📅</span>
                  {event.date}
                  <span className="mr-2">📍</span>
                  {event.place}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-1">👥</span>
                    <span>Limited Seats</span>
                  </div>
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for? We organize custom events too!
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold shadow-lg">
            📧 Contact Us for Custom Events
          </button>
        </div>
      </div>

      {selectedEvent && <RegisterForm event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
    </div>
  );
}
