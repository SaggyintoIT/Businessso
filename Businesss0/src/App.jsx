import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePageMain from './Components/HomePage/HomePageMain';
import Navbar from './Components/HomePage/Navbar/Navbar';
import Footer from './Components/HomePage/Footer/Footer';
import TemplatePage from './Components/WebSite_Template/WebsiteTemplate';
import Listings from './Components/Listings/Listings';
import Pricing from './Components/Pricing/Pricing';
import AboutUs from './Components/AboutUs/AboutUs';
import Terms from './Components/Terms/Terms';
import BlogMain from './Components/Blog/BlogMain';
import FAQSection from './Components/FAQ/Faq';
import ContactForm from './Components/Contact/ContactForm';
import LoginForm from './Components/Login/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePageMain />} />
         <Route path="/template" element={<TemplatePage/>} />
        <Route path="/listing" element={<Listings />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/blog" element={<BlogMain />} />
        <Route path="/faq" element={<FAQSection />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path='/login' element={<LoginForm/>}/>
        

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
