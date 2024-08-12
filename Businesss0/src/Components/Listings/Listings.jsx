
import React, { useState } from 'react';
import './Listing.css';
import Footer from '../HomePage/Footer/Footer';

const Listings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchCompany, setSearchCompany] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const cardData = [
    { title: 'Jonsons', image: 'https://businesso.xyz/assets/front/img/user/17173257941687185171user-img (1).jpg', website: 'https://businesso.xyz/Jonson', followLink: 'https://businesso.xyz/user/follow/234' },
    { title: 'Nusifar', image: 'https://businesso.xyz/assets/admin/img/propics/blank_user.jpg', website: 'https://businesso.xyz/nusifar', followLink: 'https://businesso.xyz/user/follow/233' },
    { title: 'Hotelia', image: 'https://businesso.xyz/assets/front/img/user/168715188864759f1e298b4.png', website: 'https://businesso.xyz/hotelia', followLink: 'https://businesso.xyz/user/follow/232' },
    { title: 'James', image: 'https://businesso.xyz/assets/admin/img/propics/blank_user.jpg', website: 'https://businesso.xyz/James', followLink: 'https://businesso.xyz/user/follow/231' },
    { title: 'Boutique', image: 'https://businesso.xyz/assets/front/img/user/1672809188online-shop.png', website: 'https://businesso.xyz/Boutique', followLink: 'https://businesso.xyz/user/follow/230' },
    { title: 'Lexus', image: 'https://businesso.xyz/assets/admin/img/propics/blank_user.jpg', website: 'https://businesso.xyz/Lexus', followLink: 'https://businesso.xyz/user/follow/176' },
    { title: 'Genex', image: 'https://businesso.xyz/assets/front/img/user/1647268191job-10.png', website: 'https://businesso.xyz/Genex', followLink: 'https://businesso.xyz/user/follow/175' },
    { title: 'QuickTech', image: 'https://businesso.xyz/assets/admin/img/propics/blank_user.jpg', website: 'https://businesso.xyz/QuickTech', followLink: 'https://businesso.xyz/user/follow/174' },
    { title: 'Innova', image: 'https://businesso.xyz/assets/front/img/user/1647268191job-9.png', website: 'https://businesso.xyz/Innova', followLink: 'https://businesso.xyz/user/follow/173' },
    { title: 'Jonsons', image: 'https://businesso.xyz/assets/front/img/user/17173257941687185171user-img (1).jpg', website: 'https://businesso.xyz/Jonson', followLink: 'https://businesso.xyz/user/follow/234' },
    { title: 'Nusifar', image: 'https://businesso.xyz/assets/admin/img/propics/blank_user.jpg', website: 'https://businesso.xyz/nusifar', followLink: 'https://businesso.xyz/user/follow/233' },
    { title: 'Hotelia', image: 'https://businesso.xyz/assets/front/img/user/168715188864759f1e298b4.png', website: 'https://businesso.xyz/hotelia', followLink: 'https://businesso.xyz/user/follow/232' },
    { title: 'James', image: 'https://businesso.xyz/assets/admin/img/propics/blank_user.jpg', website: 'https://businesso.xyz/James', followLink: 'https://businesso.xyz/user/follow/231' },
    { title: 'Boutique', image: 'https://businesso.xyz/assets/front/img/user/1672809188online-shop.png', website: 'https://businesso.xyz/Boutique', followLink: 'https://businesso.xyz/user/follow/230' },
    { title: 'Lexus', image: 'https://businesso.xyz/assets/admin/img/propics/blank_user.jpg', website: 'https://businesso.xyz/Lexus', followLink: 'https://businesso.xyz/user/follow/176' },
    { title: 'Genex', image: 'https://businesso.xyz/assets/front/img/user/1647268191job-10.png', website: 'https://businesso.xyz/Genex', followLink: 'https://businesso.xyz/user/follow/175' },
    { title: 'QuickTech', image: 'https://businesso.xyz/assets/admin/img/propics/blank_user.jpg', website: 'https://businesso.xyz/QuickTech', followLink: 'https://businesso.xyz/user/follow/174' },
    { title: 'Sagar', image: 'https://businesso.xyz/assets/front/img/user/1647268191job-9.png', website: 'https://businesso.xyz/Innova', followLink: 'https://businesso.xyz/user/follow/173' },
  ];

  const filteredCards = cardData.filter(card =>
    card.title.toLowerCase().includes(searchCompany.toLowerCase()) &&
    card.website.toLowerCase().includes(searchLocation.toLowerCase())
  );

  const cardsPerPage = 9;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <>
      {/* Page Title Area */}
      <div className="page-title-area bg-primary-light bg-[#ff6b6b18]">
        <div className="container">
      
          <div className="content text-center pt-7">
            <h2 className='text-4xl font-extrabold'>Listings</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="https://businesso.xyz">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Listings
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

      {/* User Profile Area */}
      <div className="user-profile-area ptb-120 mb-48">
        <div className="container">
          <div className=" p-12">
        <div className="search-filter mb-5 ">
      <form action="https://businesso.xyz/listings">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="search-box mt-2">
              <input
                 type="text"
                 className="form-control"
                 placeholder="Search by company name"
                 name="company"
                 value={searchCompany}
                 onChange={(e) => setSearchCompany(e.target.value)}
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="search-box mt-2">
              <input
              type="text"
              className="form-control"
              placeholder="Search by location"
              name="location"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="search-box mt-2">
              <button
                type="submit"
                className="btn btn-lg btn-primary w-100"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>
          <div className="row">
            {currentCards.map((card, index) => (
              <div className="col-lg-4 col-sm-6 flex justify-center items-center" key={index}>
                <div className="card text-center Listing-card">
                  <div className="icon mx-auto">
                    <img className="lazyload" src={card.image} alt={card.title} />
                  </div>
                  <div className="card-content">
                    <h4 className="card-title">{card.title}</h4>
                    <div className="social-link">
                      <a href="http://example.com/" className="facebook" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="http://example.com/" className="facebook" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="http://example.com/" className="facebook" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="http://example.com/" className="facebook" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                    <div className="btn-groups justify-content-center">
                      <a target="_blank" href={card.website} className="btn btn-sm btn-outline" rel="noopener noreferrer">
                        Website
                      </a>
                      <a href={card.followLink} className="btn btn-sm btn-primary">
                        Follow
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <nav className="pagination-nav mt-14" data-aos="fade-up">
            <ul className="pagination justify-content-center mb-0">
              <li className={`page-item text-black ${currentPage === 1 ? 'disabled' : ''}`} aria-disabled={currentPage === 1} aria-label="Previous">
                <span
                  className="page-link text-black"
                  aria-hidden="true"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  &lsaquo;
                </span>
              </li>
              {[...Array(totalPages).keys()].map((number) => (
                <li
                  key={number + 1}
                  className={`page-item text-black ${currentPage === number + 1 ? 'active' : ''}`}
                  aria-current={currentPage === number + 1 ? 'page' : undefined}
                >
                  <span
                    className="page-link text-black"
                    onClick={() => handlePageChange(number + 1)}
                  >
                    {number + 1}
                  </span>
                </li>
              ))}
              <li className={`page-item text-black ${currentPage === totalPages ? 'disabled' : ''}`} aria-disabled={currentPage === totalPages} aria-label="Next">
                <span
                  className="page-link text-black"
                  aria-hidden="true"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  &rsaquo;
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Listings;
