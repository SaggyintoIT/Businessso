import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Spnsr.css';

const LogoSlider = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Adjusted to show 3 slides on smaller screens
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2, // Further adjusted to show 2 slides on very small screens
        },
      },
    ],
  };

  return (
    <div className="Logo-container mt-5 md:mt-12">
      <span className="logo-subtitle">Our Great Achievement Proved Us!</span>
      <h2 className="logo-title">We Completed 500+ Projects With Clients Satisfaction</h2>
      <section className="customer-logos">
        <Slider {...settings}>
          <div className="slide"><img src="https://businesso.xyz/assets/front/img/partners/1694931413.png" alt="Logo 1" /></div>
          <div className="slide"><img src="https://businesso.xyz/assets/front/img/partners/1694931401.png" alt="Logo 2" /></div>
          <div className="slide"><img src="https://businesso.xyz/assets/front/img/partners/1694931390.png" alt="Logo 3" /></div>
          <div className="slide"><img src="https://businesso.xyz/assets/front/img/partners/1694931378.png" alt="Logo 4" /></div>
        </Slider>
      </section>
    </div>
  );
};

export default LogoSlider;
