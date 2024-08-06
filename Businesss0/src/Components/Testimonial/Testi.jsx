import React from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import './Testi.css'


const TestimonialSection = () => {
    return (
        <section className="testimonial-area pb-80">
            <div className="container">
                <div className="row align-items-center gx-xl-5">
                    <div className="col-lg-6">
                        <div className="content mb-30" data-aos="fade-up">
                            <h2 className="title">Our Client’s Testimonial</h2>
                        </div>
                        <div className="swiper testimonial-slider mb-40" data-aos="fade-up">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="slider-item bg-primary-light">
                                        <div className="ratings justify-content-between size-md">
                                            <div className="rate">
                                                <div className="rating-icon" style={{ width: '60%!important' }}></div>
                                            </div>
                                            <span className="ratings-total">
                                                3 Stars
                                            </span>
                                        </div>
                                        <div className="quote">
                                            <p className="text mb-0">
                                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                                            </p>
                                        </div>
                                        <div className="client flex-wrap">
                                            <div className="client-info d-flex align-items-center">
                                                <div className="client-img">
                                                    <div className="lazy-container ratio ratio-1-1">
                                                        <img
                                                            className="lazyload"
                                                            src="https://businesso.xyz/assets/frontend/images/placeholder.png"
                                                            data-src="https://businesso.xyz/assets/front/img/testimonials/1637215604.png"
                                                            alt="Person Image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h6 className="name">Barella</h6>
                                                    <span className="designation">Bank Manager</span>
                                                </div>
                                            </div>
                                            <span className="icon"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="slider-item bg-primary-light">
                                        <div className="ratings justify-content-between size-md">
                                            <div className="rate">
                                                <div className="rating-icon" style={{ width: '100%!important' }}></div>
                                            </div>
                                            <span className="ratings-total">
                                                5 Stars
                                            </span>
                                        </div>
                                        <div className="quote">
                                            <p className="text mb-0">
                                                avoids pleasure itself, because it is pleasure, but because those who do not know how
                                            </p>
                                        </div>
                                        <div className="client flex-wrap">
                                            <div className="client-info d-flex align-items-center">
                                                <div className="client-img">
                                                    <div className="lazy-container ratio ratio-1-1">
                                                        <img
                                                            className="lazyload"
                                                            src="https://businesso.xyz/assets/frontend/images/placeholder.png"
                                                            data-src="https://businesso.xyz/assets/front/img/testimonials/1637215610.png"
                                                            alt="Person Image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h6 className="name">Jorginho</h6>
                                                    <span className="designation">CEO, Malao</span>
                                                </div>
                                            </div>
                                            <span className="icon"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="slider-item bg-primary-light">
                                        <div className="ratings justify-content-between size-md">
                                            <div className="rate">
                                                <div className="rating-icon" style={{ width: '60%!important' }}></div>
                                            </div>
                                            <span className="ratings-total">
                                                3 Stars
                                            </span>
                                        </div>
                                        <div className="quote">
                                            <p className="text mb-0">
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                                            </p>
                                        </div>
                                        <div className="client flex-wrap">
                                            <div className="client-info d-flex align-items-center">
                                                <div className="client-img">
                                                    <div className="lazy-container ratio ratio-1-1">
                                                        <img
                                                            className="lazyload"
                                                            src="https://businesso.xyz/assets/frontend/images/placeholder.png"
                                                            data-src="https://businesso.xyz/assets/front/img/testimonials/1637215617.png"
                                                            alt="Person Image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h6 className="name">Insigne</h6>
                                                    <span className="designation">Coach, Raoland</span>
                                                </div>
                                            </div>
                                            <span className="icon"> <i className="fas fa-angle-right"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="slider-item bg-primary-light">
                                        <div className="ratings justify-content-between size-md">
                                            <div className="rate">
                                                <div className="rating-icon" style={{ width: '0%!important' }}></div>
                                            </div>
                                            <span className="ratings-total">
                                                0 Star
                                            </span>
                                        </div>
                                        <div className="quote">
                                            <p className="text mb-0">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            </p>
                                        </div>
                                        <div className="client flex-wrap">
                                            <div className="client-info d-flex align-items-center">
                                                <div className="client-img">
                                                    <div className="lazy-container ratio ratio-1-1">
                                                        <img
                                                            className="lazyload"
                                                            src="https://businesso.xyz/assets/frontend/images/placeholder.png"
                                                            data-src="https://businesso.xyz/assets/front/img/testimonials/1637215625.png"
                                                            alt="Person Image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h6 className="name">Banega</h6>
                                                    <span className="designation">Chef, Jastiford</span>
                                                </div>
                                            </div>
                                            <span className="icon"> <i className="fas fa-angle-left"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination" id="testimonial-slider-pagination" data-min data-max></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image mb-40" data-aos="fade-left">
                            <img src="https://businesso.xyz/assets/front/img/testimonials/64b22adcb7c22.png" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Bg Shape */}
            <div className="shape">
                <img className="shape-1" src="https://businesso.xyz/assets/frontend/images/shape/shape-8.png" alt="Shape" />
                <img className="shape-2" src="https://businesso.xyz/assets/frontend/images/shape/shape-3.png" alt="Shape" />
                <img className="shape-3" src="https://businesso.xyz/assets/frontend/images/shape/shape-4.png" alt="Shape" />
                <img className="shape-4" src="https://businesso.xyz/assets/frontend/images/shape/shape-7.png" alt="Shape" />
                <img className="shape-5" src="https://businesso.xyz/assets/frontend/images/shape/shape-6.png" alt="Shape" />
                <img className="shape-6" src="https://businesso.xyz/assets/frontend/images/shape/shape-10.png" alt="Shape" />
            </div>
        </section>
    );
};

export default TestimonialSection;
