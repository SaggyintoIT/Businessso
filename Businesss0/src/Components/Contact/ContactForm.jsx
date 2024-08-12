import React from 'react'
import './ContactForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from '../HomePage/Footer/Footer';


const ContactForm = () => {
    return (
        <>
      <div className="contact-area pt-120 pb-90">
        <div className="page-title-area bg-primary-light bg-[#ff6b6b18]">
          <div className="container">
            <div className="content text-center pt-7">
              <h2 className='text-4xl font-extrabold'>Contact</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="https://businesso.xyz">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
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
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6">
                  <div className="card mb-30 blue" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="card-text">
                      <p><a href="tel:237237237">237237237</a></p>
                      <p><a href="tel:72372332">72372332</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="card mb-30 green" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="card-text">
                      <p><a href="mailto:contact@example.com">contact@example.com</a></p>
                      <p><a href="mailto:support@example.com">support@example.com</a></p>
                      <p><a href="mailto:query@example.com">query@example.com</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="card mb-50 orange" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <div className="card-text">
                      <p>House - 44, Road - 03, Sector - 11, Uttara, Dhaka</p>
                      <p>Dhanmondi, Dhaka</p>
                      <p>Mohammadpur, Dhaka</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 offset-lg-2 mb-30" data-aos="fade-up" data-aos-delay="100">
                  <form id="contactForm" action="https://businesso.xyz/admin/contact-msg" method="post" encType="multipart/form-data">
                    <input type="hidden" name="_token" value="jdz6In3qksYTDwHUimktgyxB4a3uhTn4GX3qwqRw" />
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group mb-30">
                          <input type="text" name="name" className="form-control" id="name" required data-error="Enter your name" placeholder="Full Name*" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-30">
                          <input type="email" name="email" className="form-control" id="email" required data-error="Enter your email" placeholder="Email Address*" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-30">
                          <input type="text" name="subject" className="form-control" id="subject" required data-error="Enter your email" placeholder="Subject*" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-30">
                          <textarea name="message" id="message" className="form-control" cols="30" rows="8" required data-error="Please enter your message" placeholder="Message"></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12 mb-3">
                        <div className="form-group">
                          <script src="https://www.google.com/recaptcha/api.js?" async defer></script>
                          <div className="g-recaptcha" data-sitekey="6LeicUEdAAAAAAMtLSkdpal8CvsUDLzRbwv0G04P"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button type="submit" className="btn btn-lg btn-primary" title="Send message">Submit</button>
                        <div id="msgSubmit"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
     </>
    );
  };
  
  export default ContactForm;
  
