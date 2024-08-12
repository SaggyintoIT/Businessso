import React from 'react';
import Footer from './../HomePage/Footer/Footer';
import './Aboutus.css'

const AboutUs = () => {
  return (
    <div>
      {/* Page Title Area */}
      <div className="page-title-area bg-[#ff6b6b18]">
        <div className="container">
          <div className="content text-center">
            <h2 className='text-4xl font-extrabold'>About Us</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="https://businesso.xyz">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About Us
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Bg Overlay */}
        <img
          className="lazyload bg-overlay-1"
          src="https://businesso.xyz/assets/frontend/images/shadow-1.png"
          alt="Bg"
        />
        <img
          className="lazyload bg-overlay-2"
          src="https://businesso.xyz/assets/frontend/images/shadow-2.png"
          alt="Bg"
        />

        {/* Bg Shape */}
        <div className="shape">
          <img
            className="shape-1"
            src="https://businesso.xyz/assets/frontend/images/shape/shape-4.png"
            alt="Shape"
          />
          <img
            className="shape-2"
            src="https://businesso.xyz/assets/frontend/images/shape/shape-5.png"
            alt="Shape"
          />
          <img
            className="shape-3"
            src="https://businesso.xyz/assets/frontend/images/shape/shape-6.png"
            alt="Shape"
          />
          <img
            className="shape-4"
            src="https://businesso.xyz/assets/frontend/images/shape/shape-7.png"
            alt="Shape"
          />
          <img
            className="shape-5"
            src="https://businesso.xyz/assets/frontend/images/shape/shape-8.png"
            alt="Shape"
          />
          <img
            className="shape-6"
            src="https://businesso.xyz/assets/frontend/images/shape/shape-9.png"
            alt="Shape"
          />
        </div>
      </div>

      {/* Start faqs-section */}
      <section className="faqs-section pt-120 ">
        <div className="container p-36 MyAboutpara">
          <div className="summernote-content">
            <p style={{ textAlign: 'center' }}>
              <img
                src="http://businesso.test/assets/front/img/summernote/60fe4960c9849.jpg"
                style={{ width: '100%' }}
                alt="60fe4960c9849.jpg"
              />
              <br />
            </p>
            <p style={{ lineHeight: 1.5 }}>
              <span
                style={{
                  fontFamily: "'Open Sans', Arial, sans-serif",
                  textAlign: 'justify',
                  fontSize: '14px',
                }}
              >
                <br />
              </span>
            </p>
            <p style={{ lineHeight: 1.8 }}>
              <span
                style={{
                  fontFamily: 'Verdana',
                  textAlign: 'justify',
                  fontSize: '14px',
                }}
              >
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure, but because those who do not
                know how to pursue pleasure rationally encounter consequences
                that are extremely painful. Nor again is there anyone who loves
                or pursues or desires to obtain pain of itself, because it is
                pain, but because occasionally circumstances occur in which
                toil and pain can procure him some great pleasure. To take a
                trivial example, which of us ever undertakes laborious physical
                exercise, except to obtain some advantage from it? But who has
                any right to find fault with a man who chooses to enjoy a
                pleasure that has no annoying consequences, or one who avoids a
                pain that produces no resultant pleasure
              </span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span
                style={{
                  fontFamily: 'Verdana',
                  textAlign: 'justify',
                  fontSize: '14px',
                }}
              >
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure, but because those who do not
                know how to pursue pleasure rationally encounter consequences
                that are extremely painful. Nor again is there anyone who loves
                or pursues or desires to obtain pain of itself, because it is
                pain, but because occasionally circumstances occur in which
                toil and pain can procure him some great pleasure. To take a
                trivial example, which of us ever undertakes laborious physical
                exercise, except to obtain some advantage from it? But who has
                any right to find fault with a man who chooses to enjoy a
                pleasure that has no annoying consequences, or one who avoids a
                pain that produces no resultant pleasure
              </span>
              <span
                style={{
                  fontFamily: "'Open Sans', Arial, sans-serif",
                  textAlign: 'justify',
                }}
              >
                <br />
              </span>
              <br />
            </p>
          </div>
        </div>
      </section>
   
    </div>
 
  );
};

export default AboutUs;
