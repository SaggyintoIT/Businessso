import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './VCard.css';

const VcardArea = () => {

  useEffect(() => {
    // Initialize Swiper
    new Swiper('.swiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);

  return (
    <section className="vcard-area bg-primary-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="content-title pe-lg-5" data-aos="fade-right">
              <h2 className="title">
                Digital Business Id Card For Your Excellent Business
              </h2>
              <p className="text opacity-70 p-0 m-0 mb-4">
                It is a long established fact that a reader will be choose by the readable content of a page when looking at.
              </p>
              <a href="https://businesso.xyz/vcards" className="btn btn-lg btn-primary" title="More Templates" target="_self">More Templates</a>
            </div>
          </div>
          <div className="col-lg-6 mt-28 card-comp">
            <div className="swiper vcard-slider mb-40">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="card text-center">
                    <div className="card-image">
                      <div className="lazy-container">
                        <img className="lazyload lazy-image"
                          src="https://businesso.xyz/assets/front/img/template-previews/vcard/65069ca9d4db4.png"
                          alt="Robart Jonson" />
                      </div>
                      <div className="hover-show">
                        <a href="https://businesso.xyz/Boutique/vcard/50"
                          target="_blank" className="btn-icon rounded-circle"
                          title="View Details">
                          <i className="fal fa-link"></i>
                        </a>
                      </div>
                    </div>
                    <h6 className="card-title">
                      <a href="https://businesso.xyz/Boutique/vcard/50" title="Link" target="_blank">
                        vCard 1
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card text-center">
                    <div className="card-image">
                      <div className="lazy-container">
                        <img className="lazyload lazy-image"
                          src="https://businesso.xyz/assets/front/img/template-previews/vcard/65069e0a94af5.png"
                          alt="Robi Kean" />
                      </div>
                      <div className="hover-show">
                        <a href="https://businesso.xyz/Boutique/vcard/53"
                          target="_blank" className="btn-icon rounded-circle"
                          title="View Details">
                          <i className="fal fa-link"></i>
                        </a>
                      </div>
                    </div>
                    <h6 className="card-title">
                      <a href="https://businesso.xyz/Boutique/vcard/53" title="Link" target="_blank">
                        vCard 2
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card text-center">
                    <div className="card-image">
                      <div className="lazy-container">
                        <img className="lazyload lazy-image"
                          src="https://businesso.xyz/assets/front/img/template-previews/vcard/65069e91b7d19.png"
                          alt="Fabio Canavaro" />
                      </div>
                      <div className="hover-show">
                        <a href="https://businesso.xyz/Boutique/vcard/54"
                          target="_blank" className="btn-icon rounded-circle"
                          title="View Details">
                          <i className="fal fa-link"></i>
                        </a>
                      </div>
                    </div>
                    <h6 className="card-title">
                      <a href="https://businesso.xyz/Boutique/vcard/54" title="Link" target="_blank">
                        vCard 3
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
              {/* Slider pagination */}
              <div className="swiper-pagination position-static vcard-slider-pagination mt-30"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Bg Shape */}
      <div className="shape">
        <img className="shape-1" src="https://businesso.xyz/assets/frontend/images/shape/shape-1.png" alt="Shape" />
        <img className="shape-2" src="https://businesso.xyz/assets/frontend/images/shape/shape-3.png" alt="Shape" />
        <img className="shape-3" src="https://businesso.xyz/assets/frontend/images/shape/shape-6.png" alt="Shape" />
        <img className="shape-4" src="https://businesso.xyz/assets/frontend/images/shape/shape-4.png" alt="Shape" />
        <img className="shape-5" src="https://businesso.xyz/assets/frontend/images/shape/shape-11.png" alt="Shape" />
        <img className="shape-6" src="https://businesso.xyz/assets/frontend/images/shape/shape-10.png" alt="Shape" />
      </div>
    </section>
  );
};

export default VcardArea;
