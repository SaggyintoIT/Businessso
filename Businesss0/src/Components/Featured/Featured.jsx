import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import './Featured.css'; 

const Featured = () => {
  useEffect(() => {
    // Initialize Swiper when the component mounts
    const swiper = new Swiper('.user-slider', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '#user-slider-next',
        prevEl: '#user-slider-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1340:{
          slidesPerView:4,
        }
      },
    });

    // Cleanup Swiper instance on component unmount
    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);

  return (
    <section className="user-profile-area pb-120 mb-16 p-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="Featured-section-title title-inline mb-50 aos-init aos-animate " data-aos="fade-up">
              <h2 className="title mt-0">Take a Look at The Featured Users</h2>
              <div className="slider-navigation  w-40 justify-between flex h-9 mt-3 pr-3">
      <button type="button" title="Slide prev" className="slider-btn" id="user-slider-prev">
        <i className="fas fa-angle-left"></i>
      </button>
      <button type="button" title="Slide next" className="slider-btn" id="user-slider-next">
        <i className="fas fa-angle-right"></i>
      </button>
    </div>
            </div>
          </div>
          <div className="col-12 Featured-section">
            <div className="swiper user-slider" data-aos="fade-up">
              <div className="swiper-wrapper">
                {/* First User */}
                <div className="swiper-slide">
                  <div className="card text-center">
                    <div className="icon mx-auto">
                      <img
                        className="lazyload"
                        src="https://businesso.xyz/assets/front/img/user/1672817847Screenshot_6.png"
                        alt="User"
                      />
                    </div>
                    <div className="card-content">
                      <h4 className="card-title">Marcus Olmo</h4>
                      <div className="social-link">
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-dribbble"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-behance"></i>
                        </a>
                      </div>
                      <div className="btn-groups justify-content-center">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="//businesso.xyz/EastTex"
                          className="btn btn-sm btn-outline"
                        >
                          Website
                        </a>
                        <a href="https://businesso.xyz/user/follow/169" className="btn btn-sm btn-primary">
                          Follow
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second User */}
                <div className="swiper-slide">
                  <div className="card text-center">
                    <div className="icon mx-auto">
                      <img
                        className="lazyload"
                        src="https://businesso.xyz/assets/front/img/user/1637068581job-7.png"
                        alt="User"
                      />
                    </div>
                    <div className="card-content">
                      <h4 className="card-title">Xavier Hernandez</h4>
                      <div className="social-link">
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-dribbble"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-behance"></i>
                        </a>
                      </div>
                      <div className="btn-groups justify-content-center">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="//businesso.xyz/Kreton"
                          className="btn btn-sm btn-outline"
                        >
                          Website
                        </a>
                        <a href="https://businesso.xyz/user/follow/170" className="btn btn-sm btn-primary">
                          Follow
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Third User */}
                <div className="swiper-slide">
                  <div className="card text-center">
                    <div className="icon mx-auto">
                      <img
                        className="lazyload"
                        src="https://businesso.xyz/assets/front/img/user/1637145226job-8.png"
                        alt="User"
                      />
                    </div>
                    <div className="card-content">
                      <h4 className="card-title">John Obey</h4>
                      <div className="social-link">
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-dribbble"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-behance"></i>
                        </a>
                      </div>
                      <div className="btn-groups justify-content-center">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="//businesso.xyz/MJSoft"
                          className="btn btn-sm btn-outline"
                        >
                          Website
                        </a>
                        <a href="https://businesso.xyz/user/follow/171" className="btn btn-sm btn-primary">
                          Follow
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Users */}
                <div className="swiper-slide">
                  <div className="card text-center">
                    <div className="icon mx-auto">
                      <img
                        className="lazyload"
                        src="https://businesso.xyz/assets/front/img/user/1647260171job-4.png"
                        alt="User"
                      />
                    </div>
                    <div className="card-content">
                      <h4 className="card-title">Jackob Oram</h4>
                      <div className="social-link">
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-dribbble"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-behance"></i>
                        </a>
                      </div>
                      <div className="btn-groups justify-content-center">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="//businesso.xyz/Synopharm"
                          className="btn btn-sm btn-outline"
                        >
                          Website
                        </a>
                        <a href="https://businesso.xyz/user/follow/172" className="btn btn-sm btn-primary">
                          Follow
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="card text-center">
                    <div className="icon mx-auto">
                      <img
                        className="lazyload"
                        src="https://businesso.xyz/assets/front/img/user/1647260221job-9.png"
                        alt="User"
                      />
                    </div>
                    <div className="card-content">
                      <h4 className="card-title">Manuel Neuer</h4>
                      <div className="social-link">
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-dribbble"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-behance"></i>
                        </a>
                      </div>
                      <div className="btn-groups justify-content-center">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="//businesso.xyz/rangs"
                          className="btn btn-sm btn-outline"
                        >
                          Website
                        </a>
                        <a href="https://businesso.xyz/user/follow/174" className="btn btn-sm btn-primary">
                          Follow
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="card text-center">
                    <div className="icon mx-auto">
                      <img
                        className="lazyload"
                        src="https://businesso.xyz/assets/front/img/user/1647268191job-10.png"
                        alt="User"
                      />
                    </div>
                    <div className="card-content">
                      <h4 className="card-title">Nicolo Zaniolo</h4>
                      <div className="social-link">
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-dribbble"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-behance"></i>
                        </a>
                      </div>
                      <div className="btn-groups justify-content-center">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="//businesso.xyz/Genex"
                          className="btn btn-sm btn-outline"
                        >
                          Website
                        </a>
                        <a href="https://businesso.xyz/user/follow/175" className="btn btn-sm btn-primary">
                          Follow
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="card text-center">
                    <div className="icon mx-auto">
                      <img
                        className="lazyload"
                        src="https://businesso.xyz/assets/admin/img/propics/blank_user.jpg"
                        alt="User"
                      />
                    </div>
                    <div className="card-content">
                      <h4 className="card-title">Ben Stokes</h4>
                      <div className="social-link">
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-dribbble"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-behance"></i>
                        </a>
                      </div>
                      <div className="btn-groups justify-content-center">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="//businesso.xyz/Lexus"
                          className="btn btn-sm btn-outline"
                        >
                          Website
                        </a>
                        <a href="https://businesso.xyz/user/follow/176" className="btn btn-sm btn-primary">
                          Follow
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End of Additional Users */}
                <div className="swiper-slide">
                  <div className="card text-center">
                    <div className="icon mx-auto">
                      <img
                        className="lazyload"
                        src="https://businesso.xyz/assets/front/img/user/1647268191job-10.png"
                        alt="User"
                      />
                    </div>
                    <div className="card-content">
                      <h4 className="card-title">Nicolo Zaniolo</h4>
                      <div className="social-link">
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-dribbble"></i>
                        </a>
                        <a href="http://example.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-behance"></i>
                        </a>
                      </div>
                      <div className="btn-groups justify-content-center">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="//businesso.xyz/Genex"
                          className="btn btn-sm btn-outline"
                        >
                          Website
                        </a>
                        <a href="https://businesso.xyz/user/follow/175" className="btn btn-sm btn-primary">
                          Follow
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape">
                <img className="shape-1" src="https://businesso.xyz/assets/frontend/images/shape/shape-10.png" alt="Shape"/>
                <img className="shape-2" src="https://businesso.xyz/assets/frontend/images/shape/shape-6.png" alt="Shape"/>
                <img className="shape-3" src="https://businesso.xyz/assets/frontend/images/shape/shape-7.png" alt="Shape"/>
                <img className="shape-4" src="https://businesso.xyz/assets/frontend/images/shape/shape-4.png" alt="Shape"/>
                <img className="shape-5" src="https://businesso.xyz/assets/frontend/images/shape/shape-3.png" alt="Shape"/>
                <img className="shape-6" src="https://businesso.xyz/assets/frontend/images/shape/shape-8.png" alt="Shape"/>
            </div>
    </section>
  );
};

export default Featured;
