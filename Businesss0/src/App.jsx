import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/HomeHero/Hero'
import SetupWebsite from './Components/Setup-web/Setup'
import TemplateArea from './Components/Templates/Temp'
import ChooseArea from './Components/WhyChooseUs/Choose'
import VcardArea from './Components/VCard/VCard'
import Price from './Components/Pricing/Price'
import Featured from './Components/Featured/Featured'
import '@fortawesome/fontawesome-free/css/all.min.css';

 
import Swiper from 'swiper';
import TestimonialSection from './Components/Testimonial/Testi'
import BlogArea from './Components/Blogs/Blogs'
import Footer from './Components/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <SetupWebsite/>
    <TemplateArea/>
    <ChooseArea/>
    <VcardArea/>
    <Price/>
    <Featured/>
    {/* <TestimonialSection/> */}
    <BlogArea/>
    <Footer/>
    </>
  )
}

export default App
