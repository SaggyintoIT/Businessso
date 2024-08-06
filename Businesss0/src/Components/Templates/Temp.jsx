import React from 'react';
import './Temp.css'
const TemplateArea = () => {
  return (
    <section className="template-area bg-primary-light ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="section-title title-center mb-50" data-aos="fade-up">
              <span className="subtitle w-full text-center text-red-500">Creative &amp; User Friendly Design</span>
              <h2 className="title mt-0 w-full text-center">See Our Modern Template</h2>
            </div>
          </div>
          <div className="col-12">
            <div className="row justify-content-center">
              {[
                {
                  href: "//businesso.xyz/MJSoft",
                  src: "https://businesso.xyz/assets/front/img/template-previews/64be49268bc02.png",
                  alt: "Demo Image",
                  title: "Agency"
                },
                {
                  href: "//businesso.xyz/Genex",
                  src: "https://businesso.xyz/assets/front/img/template-previews/64be4a0ea4828.png",
                  alt: "Demo Image",
                  title: "IT (Dark)"
                },
                {
                  href: "//businesso.xyz/Boutique",
                  src: "https://businesso.xyz/assets/front/img/template-previews/64be4acee5d00.png",
                  alt: "Demo Image",
                  title: "Ecommerce"
                },
                {
                  href: "//businesso.xyz/James",
                  src: "https://businesso.xyz/assets/front/img/template-previews/64be4c4396ddf.png",
                  alt: "Demo Image",
                  title: "Course"
                },
                {
                  href: "//businesso.xyz/hotelia",
                  src: "https://businesso.xyz/assets/front/img/template-previews/6544cbfe1890c.png",
                  alt: "Demo Image",
                  title: "Hotel"
                },
                {
                  href: "//businesso.xyz/nusifar",
                  src: "https://businesso.xyz/assets/front/img/template-previews/6544cc0a61622.png",
                  alt: "Demo Image",
                  title: "Charity"
                }
              ].map((item, index) => (
                <div className="col-lg-4 col-sm-6 mt-12" data-aos="fade-up" key={index}>
                  <div className="card text-center mb-50">
                    <div className="card-image">
                      <div className="lazy-container">
                        <img
                          className="lazyload lazy-image"
                          src={item.src}
                          alt={item.alt}
                        />
                      </div>
                      <div className="hover-show">
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-icon rounded-circle"
                          title="View Details"
                        >
                          <i className="fal fa-link"></i>
                        </a>
                      </div>
                    </div>
                    <h4 className="card-title">
                      <a
                        href={item.href}
                        title="Link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
                    </h4>
                  </div>
                </div>
              ))}
              <div className="col-12 text-center mt-12">
                <a
                  href="https://businesso.xyz/templates"
                  className="btn btn-lg btn-primary"
                  title="More Templates"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More Templates
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bg Shape */}
      <div className="shape">
        {[
          "shape-4.png",
          "shape-3.png",
          "shape-9.png",
          "shape-7.png",
          "shape-11.png",
          "shape-4.png",
          "shape-8.png",
          "shape-4.png",
          "shape-7.png",
          "shape-10.png"
        ].map((shape, index) => (
          <img
            className={`shape-${index + 1}`}
            src={`https://businesso.xyz/assets/frontend/images/shape/${shape}`}
            alt="Shape"
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default TemplateArea;
