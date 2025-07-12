
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Todays Dental Services
          </Link>
          
         
          <nav className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({isActive}) => 
                isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({isActive}) => 
                isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className={({isActive}) => 
                isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({isActive}) => 
                isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
              }
            >
              Contact
            </NavLink>
          </nav>

        
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
            
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/"
                className={({isActive}) => 
                  isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({isActive}) => 
                  isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/services"
                className={({isActive}) => 
                  isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({isActive}) => 
                  isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;