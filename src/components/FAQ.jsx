import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-medium text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="ml-6">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>
      
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What should I expect during my first dental visit?",
      answer: "During your first visit, we'll perform a comprehensive examination, take necessary X-rays, discuss your dental history, and create a personalized treatment plan."
    },
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting the dentist every six months for regular check-ups and cleanings, though some patients may need more frequent visits based on their oral health."
    },
    {
      question: "Do you accept dental insurance?",
      answer: "Yes, we accept most major dental insurance plans. Please contact our office to verify your specific coverage."
    },
    {
      question: "What should I do in case of a dental emergency?",
      answer: "Contact our office immediately. We reserve time for emergency appointments and can provide guidance over the phone until you can be seen."
    },
    {
      question: "How can I improve my oral hygiene at home?",
      answer: "Brush twice daily with fluoride toothpaste, floss daily, use mouthwash, maintain a balanced diet, and avoid tobacco products."
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;