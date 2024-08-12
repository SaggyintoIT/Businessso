import React, { useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <footer className="footer-area bg-primary-light">
      <div className="footer-top pt-16 pb-12 pb-90">
        <div className="container">
          <div className="row gx-xl-5 justify-content-between">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="footer-widget" data-aos="fade-up" data-aos-delay="100">
                <div className="navbar-brand">
                  <a href="https://businesso.xyz">
                    <img
                      className="lazyload"
                      src="https://businesso.xyz/assets/front/img/619f8fed9ba13.png"
                      alt=""
                    />
                  </a>
                </div>
                <p>We are an award-winning multinational company. We believe in quality and standard worldwide.</p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm">
              <div className="footer-widget" data-aos="fade-up" data-aos-delay="200">
                <h5>Useful Links</h5>
                <ul className="footer-links">
                  <li><a href="http://example.com/">Our Blogs</a></li>
                  <li><a href="http://example.com/">Contact Us</a></li>
                  <li><a href="http://example.com/">Privacy Policy</a></li>
                  <li><a href="http://example.com/">Terms & Conditions</a></li>
                  <li><a href="http://example.com/">About Us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="footer-widget" data-aos="fade-up" data-aos-delay="400">
                <h5>Contact Us</h5>
                <ul className="info-list">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>
                      House - 44, Road - 03, Sector - 11, Uttara, Dhaka | Dhanmondi, Dhaka | Mohammadpur, Dhaka
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    <div>
                      <a href="tel:237237237" title="237237237">237237237</a>,
                      <a href="tel:72372332" title="72372332">72372332</a>
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <div>
                      <a href="mailto:contact@example.com" title="contact@example.com">contact@example.com</a>,
                      <a href="mailto:support@example.com" title="support@example.com">support@example.com</a>,
                      <a href="mailto:query@example.com" title="query@example.com">query@example.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="footer-widget" data-aos="fade-up" data-aos-delay="300">
                <h5>Newsletter</h5>
                <p className="lh-1 mb-20">Get the latest updates first</p>
                <div className="newsletter-form">
                  <form id="newsletterForm" className="subscribeForm" action="https://businesso.xyz/subscribe" method="POST">
                    <input type="hidden" name="_token" value="Pb3L03rLwo28cz9ByXGDoPhmwIPgwqBkcRKxJHRa" />
                    <div className="form-group">
                      <input
                        className="form-control radius-sm"
                        placeholder="Enter Your Email"
                        type="email"
                        name="email"
                        required
                        autoComplete="off"
                      />
                      <button className="newsletter-btn btn btn-md btn-primary radius-sm no-animation" type="submit">
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </div>
                    <p id="erremail" className="text-danger mb-0 err-email"></p>
                    <div className="form-group mt-3">
                      <div className="d-block mb-4">
                        <div data-sitekey="6LeicUEdAAAAAAMtLSkdpal8CvsUDLzRbwv0G04P" className="g-recaptcha"></div>
                        <p id="errg-recaptcha-response" className="text-danger err-g-recaptcha-response mt-2"></p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-area border-top">
        <div className="container">
          <div className="copy-right-content">
            <div className="social-link justify-content-center mb-2">
              <a href="https://www.facebook.com/" target="_blank" title="facebook" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com/" target="_blank" title="twitter" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://bd.linkedin.com/" target="_blank" title="linkedin" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/" target="_blank" title="instagram" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://dribbble.com/" target="_blank" title="dribbble" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a>
            </div>
            <span>
              Copyright © 2023. All rights reserved by Businesso.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
