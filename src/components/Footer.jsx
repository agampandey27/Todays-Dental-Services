import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Todays Dental Services
            </h3>
            <p className="text-gray-300 mb-4">
              Providing quality dental care services for the whole family.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-300 hover:text-white"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-300 hover:text-white"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-300 hover:text-white"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">123, Madhapur, Hyderabad, Telengana, India</p>
              <p className="mb-2">Phone: (123) 456-7890</p>
              <p className="mb-2">Email: info@todaysdentalservices.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Todays Dental Services. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
