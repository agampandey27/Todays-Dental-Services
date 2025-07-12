import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        // Simulate API request with axios
        await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          formData
        );

        setSubmitStatus({
          submitted: true,
          success: true,
          message: "Thank you for your message! We will get back to you soon.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        setSubmitStatus({
          submitted: true,
          success: false,
          message:
            "There was an error submitting your message. Please try again.",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're here to answer your questions and help you schedule your
            appointment.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Form */}
            <div className="lg:w-2/3 lg:pr-12 mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

              {submitStatus.submitted && (
                <div
                  className={`p-4 mb-6 rounded ${
                    submitStatus.success
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    aria-describedby={errors.name ? "name-error" : ""}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-red-500 text-sm">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    aria-describedby={errors.email ? "email-error" : ""}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-red-500 text-sm">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    }`}
                    aria-describedby={errors.subject ? "subject-error" : ""}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-red-500 text-sm">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    aria-describedby={errors.message ? "message-error" : ""}
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-red-500 text-sm">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Address</h4>
                      <p className="text-gray-600">
                        123, Madhapur, Hyderabad, Telengana, India
                        
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-gray-600">(123) 456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-gray-600">
                        info@Todays Dental Services.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Hours</h4>
                      <p className="text-gray-600">
                        Mon-Fri: 9:00 AM - 6:00 PM
                        <br />
                        Sat: 9:00 AM - 2:00 PM
                        <br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-8">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60886.89832944773!2d78.33290565820313!3d17.44566404716787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688c4f700e5771!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1684941834387!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
