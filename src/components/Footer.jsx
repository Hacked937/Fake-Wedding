// components/Footer.jsx

import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-2">YourBrand</h2>
          <p className="text-sm text-gray-400">
            Making your moments unforgettable. Explore our events and services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/events" className="hover:text-white">Events</a></li>
            <li><a href="/register" className="hover:text-white">Register</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Connect With Us</h3>
          <p className="text-gray-400 text-sm mb-2">Email: hello@yourbrand.com</p>
          <div className="flex gap-4 mt-2 justify-center">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-pink-500" size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="hover:text-blue-400" size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-blue-300" size={20} /></a>
            <a href="mailto:hello@yourbrand.com"><FaEnvelope className="hover:text-red-400" size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
