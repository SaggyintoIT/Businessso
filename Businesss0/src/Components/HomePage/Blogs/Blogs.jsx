import React from 'react';
import './Blog.css'
const BlogArea = () => {
  return (
    <section className="blog-area pb-90">
      <div className="container">
        <div className="section-title title-inline mb-50" data-aos="fade-up">
          <h2 className="title">Our Latest Blog</h2>
          <a href="https://businesso.xyz/blog" className="Blog-btn" title="View More" target="_self">View More</a>
        </div>
        <div className="row Blogs-mid-area">
          <div className="col-md-6 col-lg-4">
            <article className="card mb-30" data-aos="fade-up" data-aos-delay="100">
              <div className="card-image">
                <a href="https://businesso.xyz/blog-details/consectetur,-adipisci-velit,-sed-quia-non-numquam-eius/91" className="lazy-container ratio-16-9">
                  <img className="lazyload lazy-image"
                      
                       src="https://businesso.xyz/assets/front/img/blogs/1694416087.png"
                       alt="Blog Image" />
                </a>
                <ul className="info-list">
                  <li><i className="fal fa-calendar"></i>July 25, 2021</li>
                  <li><a href="https://businesso.xyz/blog?category=14">
                    <i className="fal fa-tag"></i>Tech</a></li>
                </ul>
              </div>
              <div className="content">
                <h5 className="card-title lc-2">
                  <a href="https://businesso.xyz/blog-details/consectetur,-adipisci-velit,-sed-quia-non-numquam-eius/91">consectetur, adipisci velit, sed quia non numquam eius</a>
                </h5>
                <p className="card-text lc-2">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suff...
                </p>
                <a href="https://businesso.xyz/blog-details/consectetur,-adipisci-velit,-sed-quia-non-numquam-eius/91" className="card-btn">Read More</a>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-lg-4">
            <article className="card mb-30" data-aos="fade-up" data-aos-delay="100">
              <div className="card-image">
                <a href="https://businesso.xyz/blog-details/on-the-other-hand,-we-denounce-with-righteous-indignation/90" className="lazy-container ratio-16-9">
                  <img className="lazyload lazy-image"
                     
                       src="https://businesso.xyz/assets/front/img/blogs/1637216476.png"
                       alt="Blog Image" />
                </a>
                <ul className="info-list">
                  <li><i className="fal fa-calendar"></i>July 25, 2023</li>
                  <li><a href="https://businesso.xyz/blog?category=13">
                    <i className="fal fa-tag"></i>International</a></li>
                </ul>
              </div>
              <div className="content">
                <h5 className="card-title lc-2">
                  <a href="https://businesso.xyz/blog-details/on-the-other-hand,-we-denounce-with-righteous-indignation/90">On the other hand, we denounce with righteous indignation</a>
                </h5>
                <p className="card-text lc-2">
                  On the other hand, we denounce with righteous indignation and dislike men who are so begui...
                </p>
                <a href="https://businesso.xyz/blog-details/on-the-other-hand,-we-denounce-with-righteous-indignation/90" className="card-btn">Read More</a>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-lg-4">
            <article className="card mb-30" data-aos="fade-up" data-aos-delay="100">
              <div className="card-image">
                <a href="https://businesso.xyz/blog-details/at-vero-eos-et-accusamus-et-iusto-odio-dignissimos-ducimus/89" className="lazy-container ratio-16-9">
                  <img className="lazyload lazy-image"
                       
                       src="https://businesso.xyz/assets/front/img/blogs/1637216459.png"
                       alt="Blog Image" />
                </a>
                <ul className="info-list">
                  <li><i className="fal fa-calendar"></i>July 25, 2021</li>
                  <li><a href="https://businesso.xyz/blog?category=16">
                    <i className="fal fa-tag"></i>Lifestyle</a></li>
                </ul>
              </div>
              <div className="content">
                <h5 className="card-title lc-2">
                  <a href="https://businesso.xyz/blog-details/at-vero-eos-et-accusamus-et-iusto-odio-dignissimos-ducimus/89">At vero eos et accusamus et iusto odio dignissimos ducimus</a>
                </h5>
                <p className="card-text lc-2">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volu...
                </p>
                <a href="https://businesso.xyz/blog-details/at-vero-eos-et-accusamus-et-iusto-odio-dignissimos-ducimus/89" className="card-btn">Read More</a>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/* Bg Shape */}
      <div className="shape">
        <img className="shape-1" src="https://businesso.xyz/assets/frontend/images/shape/shape-10.png" alt="Shape" />
        <img className="shape-2" src="https://businesso.xyz/assets/frontend/images/shape/shape-6.png" alt="Shape" />
        <img className="shape-3" src="https://businesso.xyz/assets/frontend/images/shape/shape-7.png" alt="Shape" />
        <img className="shape-4" src="https://businesso.xyz/assets/frontend/images/shape/shape-4.png" alt="Shape" />
        <img className="shape-5" src="https://businesso.xyz/assets/frontend/images/shape/shape-3.png" alt="Shape" />
        <img className="shape-6" src="https://businesso.xyz/assets/frontend/images/shape/shape-8.png" alt="Shape" />
      </div>
    </section>
  );
};

export default BlogArea;
