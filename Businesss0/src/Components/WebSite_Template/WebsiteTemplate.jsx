import React, { useState } from "react";
import Footer from "../HomePage/Footer/Footer";

const TemplatePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const page1Templates = [
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
  ];

  const page2Templates = [
    // Add different template data for page 2
    {
      href: "//businesso.xyz/Template1",
      src: "https://businesso.xyz/assets/front/img/template-previews/64be4b37df961.png",
      alt: "Demo Image",
      title: "New Template 1"
    },
    {
      href: "//businesso.xyz/Template2",
      src: "https://businesso.xyz/assets/front/img/template-previews/64be4b37df962.png",
      alt: "Demo Image",
      title: "New Template 2"
    },
    {
      href: "//businesso.xyz/Template3",
      src: "https://businesso.xyz/assets/front/img/template-previews/64be4b37df963.png",
      alt: "Demo Image",
      title: "New Template 3"
    },
    {
      href: "//businesso.xyz/Template4",
      src: "https://businesso.xyz/assets/front/img/template-previews/64be4b37df964.png",
      alt: "Demo Image",
      title: "New Template 4"
    },
    {
      href: "//businesso.xyz/Template5",
      src: "https://businesso.xyz/assets/front/img/template-previews/64be4b37df965.png",
      alt: "Demo Image",
      title: "New Template 5"
    },
    {
      href: "//businesso.xyz/Template6",
      src: "https://businesso.xyz/assets/front/img/template-previews/64be4b37df966.png",
      alt: "Demo Image",
      title: "New Template 6"
    }
  ];

  const templates = currentPage === 1 ? page1Templates : page2Templates;

  return (
    <>
    <div className="page-title-area bg-primary-light bg-[#ff6b6b18]">
    <div className="container">
      <div className="content text-center pt-7">
        <h2 className='text-4xl font-extrabold'>FAQ</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="https://businesso.xyz">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              FAQ
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Background Overlay and Shapes */}
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

  <section className="template-area bg-white ptb-120">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row justify-content-center">
            {templates.map((item, index) => (
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
          </div>
        </div>
      </div>
    </div>
    {/* Pagination Controls */}
    <div className="text-center mt-4">
      <button
        className={`btn mx-2 ${currentPage === 1 ? "btn-primary" : "btn-light"}`}
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
      >
        Page 1
      </button>
      <button
        className={`btn mx-2 ${currentPage === 2 ? "btn-primary" : "btn-light"}`}
        onClick={() => setCurrentPage(2)}
        disabled={currentPage === 2}
      >
        Page 2
      </button>
    </div>
    {/* Bg Shape */}
  </section>

  <Footer />
</>
);
};

export default TemplatePage;
