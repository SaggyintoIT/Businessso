import React from 'react'
import './Hero.css'
import SponsorSection from '../Sponsor/Spnsr'
import LogoSlider from '../Sponsor/Spnsr'

const Hero = () => {
  return (
    <> 
       <div id='home' className='home-banner pb-80  pt-32' >
      <div className="container">
        <div className=" justify-content-center"></div>
        <div className="">
            <div className="content mb-12 mx-auto text-center">
                    <span className="subtitle color-primary aos-init aos-animate"> No #01 Digital Services Website</span>
                    <h1 className="title aos-init aos-animate">
                            Build Your Dream <br />Website With Businesso
                        </h1>
                        <p>
                            We are elite author at envato, We help you to build your own booking website easy way
                        </p>
                        <div className="btn-groups justify-content-center" data-aos="fade-up" data-aos-delay="200">
  <a 
    href="https://businesso.xyz/pricing" 
    className="btn btn-lg btn-primary" 
    title="Build Your Website" 
    target="_self"
  >
    Build Your Website
  </a>
  <a 
    href="https://businesso.xyz/templates" 
    className="btn btn-lg btn-outline" 
    title="View Demo" 
    target="_self"
  >
    View Demo
  </a>
</div>

                        
            </div>
            <div className="banner-img mb-40 text-center aos-init aos-animate" data-aos="fade-left">

                        <img className=" ls-is-cached lazyloaded" src="https://businesso.xyz/assets/front/img/65069944ddcf5.png" alt="Banner Image" src="https://businesso.xyz/assets/front/img/65069944ddcf5.png"/>
                    </div>
        </div>
      </div>
      <div className="banner-images d-none d-lg-block">
      <img 
        className="lazyload blur-up img-1" 
        src="https://businesso.xyz/assets/front/img/65069944de45c.jpg" 
        alt="Banner Image"
      />
      <img 
        className="lazyload blur-up img-2" 
        src="https://businesso.xyz/assets/front/img/64bb637f2f4b0.jpg" 
        alt="Banner Image"
      />
      <img 
        className="lazyload blur-up img-3" 
        src="https://businesso.xyz/assets/front/img/64e9b4e9aa0bc.jpg" 
        alt="Banner Image"
      />
      <img 
        className="lazyload blur-up img-4" 
        src="https://businesso.xyz/assets/front/img/64bb637f2fc2a.jpg" 
        alt="Banner Image"
      />
    </div>
      
    <div className="shape">
            <img className="lazyload shape-1" src="https://businesso.xyz/assets/frontend/images/shape/shape-1.png"
                alt="Shape"/>
            <img className="lazyload shape-2" src="https://businesso.xyz/assets/frontend/images/shape/shape-2.png"
                alt="Shape"/>
            <img className="lazyload shape-3" src="https://businesso.xyz/assets/frontend/images/shape/shape-3.png"
                alt="Shape"/>
            <img className="lazyload shape-4" src="https://businesso.xyz/assets/frontend/images/shape/shape-4.png"
                alt="Shape"/>
            <img className="lazyload shape-5" src="https://businesso.xyz/assets/frontend/images/shape/shape-5.png"
                alt="Shape"/>
            <img className="lazyload shape-6" src="https://businesso.xyz/assets/frontend/images/shape/shape-6.png"
                alt="Shape"/>
            <img className="lazyload shape-7" src="https://businesso.xyz/assets/frontend/images/shape/shape-7.png"
                alt="Shape"/>
        </div>
    </div>
    <LogoSlider/>
    </>

    
  )
}

export default Hero
