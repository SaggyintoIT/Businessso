import React from 'react';
import './Choose.css'
const ChooseArea = () => {
  return (
    <section className="choose-area pt-120 pb-20">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="content-title mb-40 pe-lg-5" data-aos="fade-right">
              <span className="subtitle text-red-500">Why You Choose Our Template</span>
              <h2 className="title">Bring More Profits With More Valuable Features</h2>
              <p className="text">
                It is a long established fact that a reader will be choose by the readable content of a page when looking at.
              </p>
              <ul className="choose-list list-unstyled ">
                <li className="">We completed 500+ client’s projects</li>
                <li className="">We have 10+ multiple developer</li>
                <li className="ps-0">100+ active client’s working with us</li>
                <li className="ps-0">Your trusted business partner</li>
              </ul>
              <a
                href="https://example.com"
                className="btn btn-lg btn-primary"
                title="Purchase Now"
                target="_self"
                rel="noopener noreferrer"
              >
                Purchase Now
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row justify-content-center mb-10">
              {[
                {
                  src: "https://businesso.xyz/assets/front/img/features/1689239406.png",
                  title: "Custom Domain",
                  text: "It is a long established fact that a reader will be distracted by the readable content of a page"
                },
                {
                  src: "https://businesso.xyz/assets/front/img/features/1689239390.png",
                  title: "Unlimited Language",
                  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
                },
                {
                  src: "https://businesso.xyz/assets/front/img/features/1689239418.png",
                  title: "Attractive Themes",
                  text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered"
                },
                {
                  src: "https://businesso.xyz/assets/front/img/features/1689239286.png",
                  title: "Form Builder",
                  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
                },
                {
                  src: "https://businesso.xyz/assets/front/img/features/1689239266.png",
                  title: "QR Builder",
                  text: "It is a long established fact that a reader will be distracted by the readable content of a page"
                },
                {
                  src: "https://businesso.xyz/assets/front/img/features/1689238354.png",
                  title: "vCard",
                  text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered"
                }
              ].map((item, index) => (
                <div className="col-sm-6 " data-aos="fade-up" key={index}>
                  <div className="card-choose mb-30">
                    <div className="card-icon">
                      <img src={item.src} alt="Icon" />
                    </div>
                    <div className="card-content">
                      <a href="#">
                        <h4 className="card-title">{item.title}</h4>
                      </a>
                      <p className="card-text">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Bg Shape */}
      <div className="shape">
        {[
          "shape-6.png",
          "shape-7.png",
          "shape-3.png",
          "shape-4.png",
          "shape-5.png",
          "shape-11.png"
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

export default ChooseArea;
