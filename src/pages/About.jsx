import React from "react";

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            About Todays Dental Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our practice, our team, and our commitment to your
            dental health.
          </p>
        </div>
      </section>

      {/* Clinic Background */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2005, Todays Dental Services began with a simple
                mission: to provide exceptional dental care in a comfortable and
                welcoming environment. Over the years, we've grown from a small
                practice to a comprehensive dental care center serving thousands
                of patients.
              </p>
              <p className="text-gray-600 mb-4">
                Our state-of-the-art facility is equipped with the latest
                technology, allowing us to offer advanced treatments while
                ensuring patient comfort and safety.
              </p>
              <p className="text-gray-600">
                We believe in preventative care and education as the keys to
                optimal dental health. We focus on thorough exams and teaching
                proper hygiene techniques to help you maintain a healthy smile.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/clinic.jpg"
                alt="Todays Dental Services clinic reception"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission & Philosophy</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Our mission is to improve the oral health of our community by
              providing personalized, high-quality dental care in a comfortable
              and compassionate environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our practice, from
                  clinical expertise to patient care.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Compassion</h3>
                <p className="text-gray-600">
                  We treat each patient with empathy, respect, and a genuine
                  concern for their well-being.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We continuously adopt new technologies and techniques to
                  provide the best possible care for our patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practitioner Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Doctor 1 */}
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <img
                  src="images/doctor-1.jpg"
                  alt="Dr. Sarah Johnson"
                  className="w-48 h-48 object-cover mx-auto rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Dr. Sarah Johnson</h3>
              <p className="text-blue-600 mb-3">Lead Dentist</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Dr. Johnson has over 15 years of experience in general and
                cosmetic dentistry. She specializes in smile makeovers and
                complex restorative cases.
              </p>
            </div>

            {/* Doctor 2 */}
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <img
                  src="/images/doctor-2.jpg"
                  alt="Dr. Jason Fernandis"
                  className="w-48 h-48 object-cover mx-auto rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Dr. Jason Fernandis</h3>
              <p className="text-blue-600 mb-3">Orthodontist</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Dr. Chen is our orthodontics specialist with expertise in braces
                and Invisalign treatments for patients of all ages.
              </p>
            </div>

            {/* Doctor 3 */}
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <img
                  src="/images/doctor-3.jpg"
                  alt="Dr. Lisa Rodriguez"
                  className="w-48 h-48 object-cover mx-auto rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Dr. Lisa Rodriguez</h3>
              <p className="text-blue-600 mb-3">Pediatric Dentist</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Dr. Rodriguez specializes in pediatric dentistry, creating
                positive dental experiences for our youngest patients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
