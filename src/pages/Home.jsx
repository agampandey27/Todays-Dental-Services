import React from "react";
import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Smile, Our Passion
            </h1>
            <p className="text-xl mb-8">
              Experience exceptional dental care with our team of professionals
              dedicated to your oral health.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition duration-300"
            >
              Book Appointment
            </Link>
          </div>
          <div className="flex justify-center items-center md:w-1/2 ">
            <img
              src="/images/hero-image.jpg"
              alt="Dental clinic treatment room"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Welcome to Todays Dental Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            At Todays Dental Services, we combine advanced technology with
            compassionate care to provide you with the best dental experience
            possible. Our team is committed to ensuring your comfort while
            delivering exceptional dental services.
          </p>
          <Link
            to="/about"
            className="text-blue-600 font-medium hover:underline"
          >
            Learn more about us →
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">General Dentistry</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive care for your overall oral health, including
                cleanings and check-ups.
              </p>
              <Link to="/services" className="text-blue-600 hover:underline">
                Learn more
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cosmetic Dentistry</h3>
              <p className="text-gray-600 mb-4">
                Enhance your smile with our range of aesthetic treatments and
                procedures.
              </p>
              <Link to="/services" className="text-blue-600 hover:underline">
                Learn more
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Emergency Care</h3>
              <p className="text-gray-600 mb-4">
                Prompt attention for dental emergencies to alleviate pain and
                prevent complications.
              </p>
              <Link to="/services" className="text-blue-600 hover:underline">
                Learn more
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and take the first step towards
            optimal dental health.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition duration-300"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </main>
  );
};

export default Home;
