import React, { useState } from 'react';

const ServiceModal = ({ service, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold">{service.title}</h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="mb-4">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-64 object-cover rounded"
            />
          </div>
          
          <div>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <p className="text-gray-600">{service.details}</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  
  const services = [
    {
      id: 1,
      title: "General Dentistry",
      image: "/images/service-general.jpg",
      description: "Comprehensive dental care focused on prevention and maintaining oral health.",
      details: "Our general dentistry services include routine check-ups, cleanings, fillings, extractions, and preventative treatments. We emphasize education and prevention to help you maintain a healthy smile for years to come. Regular dental visits allow us to detect issues early, saving you time, money, and discomfort in the long run."
    },
    {
      id: 2,
      title: "Cosmetic Dentistry",
      image: "/images/service-cosmetic.jpg",
      description: "Enhance your smile with treatments designed to improve the appearance of your teeth.",
      details: "Our cosmetic dentistry services include teeth whitening, veneers, bonding, and smile makeovers. We work with you to understand your goals and design a treatment plan that gives you the smile you've always wanted. Modern techniques and materials allow us to create natural-looking results that enhance your overall appearance."
    },
    {
      id: 3,
      title: "Orthodontics",
      image: "/images/service-orthodontics.jpg",
      description: "Correct alignment issues for improved function and aesthetics.",
      details: "We offer both traditional braces and clear aligner options like Invisalign for patients of all ages. Our orthodontic treatments not only improve the appearance of your smile but also correct bite issues that can lead to other dental problems. We provide personalized treatment plans tailored to your specific needs and goals."
    },
    {
      id: 4,
      title: "Pediatric Dentistry",
      image: "/images/service-pediatric.jpg",
      description: "Specialized dental care for children in a comfortable, child-friendly environment.",
      details: "Our pediatric dental services are designed to make dental visits enjoyable for children while ensuring they receive the preventative care they need. We focus on education, prevention, and creating positive associations with dental care. Our team has special training in working with children and creating a comfortable experience."
    },
    {
      id: 5,
      title: "Restorative Dentistry",
      image: "/images/service-restorative.jpg",
      description: "Repair damaged teeth and replace missing teeth to restore function and appearance.",
      details: "Our restorative services include crowns, bridges, dentures, and dental implants. We use high-quality materials and advanced techniques to create restorations that look natural and function well. Whether you need a simple filling or full mouth reconstruction, our team has the expertise to restore your smile."
    },
    {
      id: 6,
      title: "Emergency Dental Care",
      image: "/images/service-emergency.jpg",
      description: "Prompt care for dental emergencies to alleviate pain and address urgent issues.",
      details: "We reserve time in our schedule for emergency appointments and provide after-hours contact information for urgent situations. Our team is trained to handle various dental emergencies, from severe toothaches to knocked-out teeth. We prioritize getting you out of pain quickly and resolving the underlying issue."
    }
  ];
  
  const openModal = (service) => {
    setSelectedService(service);
  };
  
  const closeModal = () => {
    setSelectedService(null);
  };
  
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive dental care tailored to meet the unique needs of each patient.
          </p>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button 
                    onClick={() => openModal(service)}
                    className="text-blue-600 font-medium hover:underline"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Modal */}
      <ServiceModal 
        service={selectedService} 
        isOpen={!!selectedService} 
        onClose={closeModal} 
      />
    </main>
  );
};

export default Services;