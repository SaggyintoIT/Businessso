import React from 'react'
import Hero from './HomeHero/Hero';
import LogoSlider from './Sponsor/Spnsr';
import SetupWebsite from './Setup-web/Setup';
import TemplateArea from './Templates/Temp';
import ChooseArea from './WhyChooseUs/Choose';
import VcardArea from './VCard/VCard';
import Price from './Pricing/Price';
import Featured from './Featured/Featured';
import BlogArea from './Blogs/Blogs';


const HomePageMain = () => {
  return (
    <div>
      <Hero/>
        <SetupWebsite/>
        <TemplateArea/>
        <ChooseArea/>
        <VcardArea/>
        <Price/>
        <Featured/>
        <BlogArea/>
        
    </div>
  )
}

export default HomePageMain
