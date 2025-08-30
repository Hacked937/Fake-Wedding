import { useState } from "react";
import QRCode from "react-qr-code";

export default function RegisterForm({ event, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    upiId: "",
    transactionId: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const upiLink = `upi://pay?pa=fakewedding@upi&pn=GoCrazy%20Events&am=1001&cu=INR`;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.contact &&
      formData.upiId &&
      formData.transactionId
    ) {
      // Save event registration to localStorage
      const eventRegistration = {
        eventName: event.name,
        eventId: event.id,
        registrationDate: new Date().toLocaleDateString(),
        registrationTime: new Date().toLocaleTimeString(),
        userDetails: formData,
        paymentAmount: 1001
      };
      
      // Get existing registrations or create new array
      const existingRegistrations = JSON.parse(localStorage.getItem('eventRegistrations') || '[]');
      existingRegistrations.push(eventRegistration);
      localStorage.setItem('eventRegistrations', JSON.stringify(existingRegistrations));
      
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {submitted ? (
          <div className="p-8 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">Registration Successful!</h3>
            <p className="text-gray-600 mb-6">
              You're all set for <strong>{event.name}</strong>! Payment of ₹1001 received.
            </p>
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{event.name}</h3>
                  <p className="text-purple-100">Join the celebration!</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">₹1001</div>
                  <div className="text-sm text-purple-100">per person</div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Info</label>
                  <input
                    type="text"
                    name="contact"
                    placeholder="Email or phone number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">UPI ID</label>
                  <input
                    type="text"
                    name="upiId"
                    placeholder="yourname@upi"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-800 mb-3">📲 Scan to Pay ₹1001</p>
                  <div className="flex justify-center mb-4">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                      <QRCode value={upiLink} size={120} />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">UPI ID: <span className="font-mono bg-gray-100 px-2 py-1 rounded">fakewedding@upi</span></p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Transaction ID</label>
                <input
                  type="text"
                  name="transactionId"
                  placeholder="Enter UPI transaction ID"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Complete Registration
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
