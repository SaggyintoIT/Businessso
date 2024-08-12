import React from 'react';
import Footer from '../HomePage/Footer/Footer';

const Terms = () => {
  return (
    <>
      <div className="page-title-area bg-primary-light">
        <div className="container">
          <div className="content text-center">
            <h2 className='text-4xl font-extrabold'>Terms &amp; Conditions</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="https://businesso.xyz">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Terms &amp; Conditions
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Bg Overlay */}
        <img
          className="lazyload bg-overlay-1"
          data-src="https://businesso.xyz/assets/frontend/images/shadow-1.png"
          alt="Bg"
        />
        <img
          className="lazyload bg-overlay-2"
          data-src="https://businesso.xyz/assets/frontend/images/shadow-2.png"
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
      {/* End Breadcrumbs-section */}
      <section className="faqs-section pt-120">
        <div className="container">
          <div className="summernote-content" style={{ marginLeft: '4rem' }}>
            <h2 className='text-4xl font-bold'>Terms &amp; Conditions:</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem' }}>
              <li style={{ lineHeight: 3 }}>
                <span style={{ fontSize: '18px' }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </span>
              </li>
              <li style={{ lineHeight: 3 }}>
                <span style={{ fontSize: '18px' }}>
                  Aliquam tincidunt mauris eu risus.
                </span>
              </li>
              <li style={{ lineHeight: 3 }}>
                <span style={{ fontSize: '18px' }}>
                  Vestibulum auctor dapibus neque.
                </span>
              </li>
              <li style={{ lineHeight: 3 }}>
                <span style={{ fontSize: '18px' }}>
                  Nunc dignissim risus id metus.
                </span>
              </li>
              <li style={{ lineHeight: 3 }}>
                <span style={{ fontSize: '18px' }}>
                  Cras ornare tristique elit.
                </span>
              </li>
              <li style={{ lineHeight: 3 }}>
                <span style={{ fontSize: '18px' }}>
                  Vivamus vestibulum nulla nec ante.
                </span>
              </li>
              <li style={{ lineHeight: 3 }}>
                <span style={{ fontSize: '18px' }}>
                  Praesent placerat risus quis eros.
                </span>
              </li>
              <li style={{ lineHeight: 3 }}>
                <span style={{ fontSize: '18px' }}>
                  Fusce pellentesque suscipit nibh.
                </span>
              </li>
              <li style={{ lineHeight: 3 }}>
                <span style={{ fontSize: '18px' }}>
                  Integer vitae libero ac risus egestas placerat.
                </span>
              </li>
              <li style={{ lineHeight: 3 }}>
                <span style={{ fontSize: '18px' }}>
                  Vestibulum commodo felis quis tortor.
                </span>
              </li>
              <li style={{ lineHeight: 3 }}>
                <span style={{ fontSize: '18px' }}>
                  Ut aliquam sollicitudin leo.
                </span>
              </li>
              <li style={{ lineHeight: 3 }}>
                <span style={{ fontSize: '18px' }}>
                  Cras iaculis ultricies nulla.
                </span>
              </li>
              <li style={{ lineHeight: 3 }}>
                <span style={{ fontSize: '18px' }}>
                  Donec quis dui at dolor tempor interdum.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Terms;
