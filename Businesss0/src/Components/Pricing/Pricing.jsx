import React from 'react'
import Price from '../HomePage/Pricing/Price'
import Footer from '../HomePage/Footer/Footer'

const Pricing = () => {
  return (
    <>
    <div className="page-title-area bg-primary-light bg-[#ff6b6b18]">
    <div className="container">
  
      <div className="content text-center pt-7">
        <h2 className='text-4xl font-extrabold'>Pricing</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="https://businesso.xyz">Home</a>
            </li>
            <li className="breadcrumb-item text-red-400" aria-current="page">
              Pricing
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
 <Price/>
 <Footer/>
  </>
  )
}

export default Pricing
