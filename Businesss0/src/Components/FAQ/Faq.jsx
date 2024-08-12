import React, { useState } from 'react';
import Footer from '../HomePage/Footer/Footer';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "How can I reset my password?", answer: "To reset your password, go to the login page, click on 'Forgot Password,' and follow the instructions to receive a reset link in your email." },
    { question: "How do I update my billing information?", answer: "To update your billing information, go to your account settings, and under 'Billing', you can add or edit your payment details." },
    { question: "How can I contact customer support?", answer: "You can contact customer support through our support page, where you can find chat, email, and phone options." },
    { question: "How do I delete my account?", answer: "To delete your account, please visit the account settings page and click on 'Delete Account'. Follow the prompts to confirm." },
    { question: "What is the refund policy?", answer: "Our refund policy allows refunds within 30 days of purchase. Please contact support for more details." },
    { question: "How do I upgrade my plan?", answer: "You can upgrade your plan from the account settings under 'Subscriptions'. Choose the desired plan and follow the instructions." },
    { question: "How can I change my email address?", answer: "To change your email address, go to your profile settings, and update your email under 'Contact Information'." },
    { question: "How do I download an invoice?", answer: "Invoices can be downloaded from the 'Billing' section in your account settings. Click on 'View Invoices' and select the one you need." },
    { question: "What are the system requirements?", answer: "Our platform supports most modern browsers and operating systems. For best performance, we recommend using the latest version of Chrome or Firefox." },
    { question: "How do I deactivate notifications?", answer: "Notifications can be deactivated by going to the 'Notifications' tab in your account settings and toggling off the desired notifications." },
  ];

  return (
    <>
    <section className="">
       <div className="page-title-area bg-primary-light bg-[#ff6b6b18]">
        <div className="container">
      
          <div className="content text-center pt-7">
            <h2 className='text-4xl font-extrabold'>FAQ</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="https://businesso.xyz">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
               FAQ
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Background Overlay and Shapes */}
        <img className="lazyload bg-overlay-1" src="https://businesso.xyz/assets/frontend/images/shadow-1.png" alt="Bg" />
        <img className="lazyload bg-overlay-2" src="https://businesso.xyz/assets/frontend/images/shadow-2.png" alt="Bg" />
        <div className="shape">
          <img className="shape-1" src="https://businesso.xyz/assets/frontend/images/shape/shape-4.png" alt="Shape" />
          <img className="shape-2" src="https://businesso.xyz/assets/frontend/images/shape/shape-5.png" alt="Shape" />
          <img className="shape-3" src="https://businesso.xyz/assets/frontend/images/shape/shape-6.png" alt="Shape" />
          <img className="shape-4" src="https://businesso.xyz/assets/frontend/images/shape/shape-7.png" alt="Shape" />
          <img className="shape-5" src="https://businesso.xyz/assets/frontend/images/shape/shape-8.png" alt="Shape" />
          <img className="shape-6" src="https://businesso.xyz/assets/frontend/images/shape/shape-9.png" alt="Shape" />
        </div>
      </div>
    
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-40">
       
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4">
            {faqs.slice(0, 5).map((faq, index) => (
              <div
                key={index}
                className={`accordion border border-solid border-gray-300  rounded-xl transition duration-500 ${activeIndex === index ? 'bg-pink-50 border-pink-600' : ''} mb-8 lg:p-4`}
              >
                <button
                  className={`accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-pink-600 ${activeIndex === index ? 'font-medium text-pink-600' : ''}`}
                  onClick={() => handleToggle(index)}
                  aria-controls={`collapse-${index}`}
                >
                  <h5>{faq.question}</h5>
                  <svg
                    className={`w-6 h-6 text-gray-900 transition duration-500 ${activeIndex === index ? 'text-indigo-600 hidden' : 'block'} group-hover:text-indigo-600 origin-center`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18M12 18V6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    className={`w-6 h-6 text-gray-900 transition duration-500 ${activeIndex === index ? 'block' : 'hidden'} accordion-active:text-indigo-600`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  id={`collapse-${index}`}
                  className={`accordion-content w-full overflow-hidden pr-4 ${activeIndex === index ? 'max-h-[250px]' : 'max-h-0'}`}
                  aria-labelledby={`heading-${index}`}
                >
                  <p className="text-base text-gray-900 font-normal leading-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2 px-4">
            {faqs.slice(5, 10).map((faq, index) => (
              <div
                key={index + 5}
                className={`accordion border border-solid border-gray-300  rounded-xl transition duration-500 ${activeIndex === index + 5 ? 'bg-indigo-50 border-pink-600' : ''} mb-8 lg:p-4`}
              >
                <button
                  className={`accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-pink-600 ${activeIndex === index + 5 ? 'font-medium text-pink-600' : ''}`}
                  onClick={() => handleToggle(index + 5)}
                  aria-controls={`collapse-${index + 5}`}
                >
                  <h5>{faq.question}</h5>
                  <svg
                    className={`w-6 h-6 text-gray-900 transition duration-500 ${activeIndex === index + 5 ? 'text-indigo-600 hidden' : 'block'} group-hover:text-indigo-600 origin-center`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18M12 18V6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
  className={`w-6 h-6 text-gray-900 transition duration-500 ${
    activeIndex === index + 5 ? 'block' : 'hidden'
  } accordion-active:text-indigo-600`}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6 12H18"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

                </button>
                <div
                  id={`collapse-${index + 5}`}
                  className={`accordion-content w-full overflow-hidden pr-4 ${activeIndex === index + 5 ? 'max-h-[250px]' : 'max-h-0'}`}
                  aria-labelledby={`heading-${index + 5}`}
                >
                  <p className="text-base text-gray-900 font-normal leading-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default FAQSection;
