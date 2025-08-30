import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    // User Info
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [isRegistered, setIsRegistered] = useState(false);
  const [registeredEvent, setRegisteredEvent] = useState(null);

  // Check if user is already registered on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('registeredUser');
    if (savedUser) {
      setRegisteredEvent(JSON.parse(savedUser));
      setIsRegistered(true);
    }
  }, []);

  // Get user's event registrations
  const getEventRegistrations = () => {
    return JSON.parse(localStorage.getItem('eventRegistrations') || '[]');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate user registration
    const userData = {
      ...formData,
      registrationId: Date.now(),
      registrationDate: new Date().toLocaleDateString()
    };
    
    // Save to localStorage
    localStorage.setItem('registeredUser', JSON.stringify(userData));
    setRegisteredEvent(userData);
    setIsRegistered(true);
  };

  const handleUnregister = () => {
    localStorage.removeItem('registeredUser');
    setIsRegistered(false);
    setRegisteredEvent(null);
    setFormData({ name: "", email: "", phone: "", password: "" });
  };

  if (isRegistered && registeredEvent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-3xl font-bold text-green-600 mb-2">
              Registration Successful!
            </h1>
            <p className="text-gray-600">Your account has been created successfully</p>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Account Details</h2>
            
            <div className="bg-white p-6 rounded-lg mb-4">
              <h3 className="font-semibold text-gray-700 mb-4">Personal Information</h3>
              <div className="space-y-2">
                <p><strong>Name:</strong> {registeredEvent.name}</p>
                <p><strong>Email:</strong> {registeredEvent.email}</p>
                <p><strong>Phone:</strong> {registeredEvent.phone}</p>
                <p><strong>User ID:</strong> #{registeredEvent.registrationId}</p>
                <p><strong>Registered on:</strong> {registeredEvent.registrationDate}</p>
              </div>
            </div>
            
            {getEventRegistrations().length > 0 ? (
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Registered Events</h3>
                <div className="space-y-3">
                  {getEventRegistrations().map((registration, index) => (
                    <div key={index} className="bg-white p-3 rounded border">
                      <p><strong>Event:</strong> {registration.eventName}</p>
                      <p><strong>Registered on:</strong> {registration.registrationDate} at {registration.registrationTime}</p>
                      <p><strong>Payment:</strong> ₹{registration.paymentAmount}</p>
                      <p><strong>Contact:</strong> {registration.userDetails.contact}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-yellow-800 text-center">
                  <strong>No events registered yet.</strong><br/>
                  You can register for events after creating your account.
                </p>
              </div>
            )}
          </div>
          
          <div className="text-center mt-6 space-x-4">
            <Link
              to="/"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition duration-300 inline-block text-decoration-none"
            >
              Explore Events
            </Link>
            <button
              onClick={handleUnregister}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white py-2 px-6 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition duration-300"
            >
              Unregister
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create Your Account
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User Information */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
          </div>



          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition duration-300"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}