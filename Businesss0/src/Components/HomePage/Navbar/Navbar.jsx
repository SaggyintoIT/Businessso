import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarDropdownOpen, setIsSidebarDropdownOpen] = useState(false);
  const [isPageDropdownOpen, setIsPageDropdownOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const togglePageDropdown = () => setIsPageDropdownOpen(!isPageDropdownOpen);
  const toggleSidebarDropdown = () => setIsSidebarDropdownOpen(!isSidebarDropdownOpen);
  const [loggedInEmail, setLoggedInEmail] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setLoggedInEmail(storedEmail);
    }
  }, []);

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    setLoggedInEmail(null);
    window.location.reload(); // Refresh the page
  };

  return (
    <>
      <div className="">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 bg-[#fef3f3]">
          <header className="flex items-center justify-between py-4 md:py-8">
            <div className="w-96 flex items-center justify-center">
              <Link to="/" className="inline-flex items-center md:text-3xl" aria-label="logo">
                <img src="https://businesso.xyz/assets/front/img/6506953ba3468.png" alt="Logo" />
              </Link>
            </div>
            <nav className="hidden gap-10 lg:flex">
              <Link to="/" className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-pink-500 active:text-pink-700">Home</Link>
              <div className="relative ">
                <button onClick={toggleDropdown} className="inline-flex items-center gap-1 text-sm font-semibold text-pink-500">
                  Templates
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg z-10">
                    <Link to="/template" className="block px-4 py-2 text-gray-700 hover:bg-pink-500 hover:text-white">Website Templates</Link>
                  </div>
                )}
              </div>
              <Link to="/listing" className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-pink-500 active:text-pink-700">Listings</Link>
              <Link to="/pricing" className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-pink-500 active:text-pink-700">Pricing</Link>
              <div className="relative">
                <button onClick={togglePageDropdown} className="inline-flex items-center gap-1 text-sm font-semibold text-pink-500">
                  Pages
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {isPageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg z-10">
                    <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-pink-500 hover:text-white">About Us</Link>
                    <Link to="/terms" className="block px-4 py-2 text-gray-700 hover:bg-pink-500 hover:text-white">Terms & Condition</Link>
                  </div>
                )}
              </div>
              <Link to="/blog" className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-pink-500 active:text-pink-700">Blog</Link>
              <Link to="/faq" className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-pink-500 active:text-pink-700">FAQ</Link>
              <Link to="/contact" className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-pink-500 active:text-pink-700">Contact</Link>
            </nav>
            <div className="-ml-8 hidden flex-col gap-2.5 w-64 sm:flex-row sm:justify-center lg:flex lg:justify-start">
              <a href="#" className="inline-block rounded-lg px-4 py-2 text-center text-xs font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-sm">
                {language === 'en' ? 'English' : 'Se connecter'}
              </a>
              <div className="w-96 hidden justify-end md:flex">
            {loggedInEmail ? (
              <div className="flex items-center gap-1 flex-col">
                <span className="text-xs font-semibold text-gray-600">{loggedInEmail}</span>
                
                <button onClick={handleLogout} className="text-sm font-semibold text-pink-500">Logout</button>
              </div>
            ) : (
              <Link to="/login" className="inline-block h-10 rounded-md bg-[#FF6B6B] px-6 py-2 text-center text-xs font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-sm">Login</Link>
            )}
          </div>
            </div>
            <button onClick={toggleSidebar} type="button" className={`inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden transition-opacity ${isSidebarOpen ? 'opacity-0' : 'opacity-100'}`}>
              {isSidebarOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform transform rotate-45" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </header>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-50 transform transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button onClick={toggleSidebar} className="block p-4 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <nav className="mt-10">
          <Link to="/" onClick={toggleSidebar} className="block py-2 px-4 text-white hover:bg-gray-700">Home</Link>
          <div className="relative">
            <button onClick={toggleSidebarDropdown} className="block w-full py-2 px-4 text-white hover:bg-gray-700">
              Templates
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {isSidebarDropdownOpen && (
              <div className="ml-6 mt-1 bg-gray-700 rounded-lg">
                <Link to="/template" onClick={toggleSidebar} className="block py-2 px-4 text-white hover:bg-gray-600">Website Templates</Link>
              </div>
            )}
          </div>
          <Link to="/listing" onClick={toggleSidebar} className="block py-2 px-4 text-white hover:bg-gray-700">Listings</Link>
          <Link to="/pricing" onClick={toggleSidebar} className="block py-2 px-4 text-white hover:bg-gray-700">Pricing</Link>
          <Link to="/about" onClick={toggleSidebar} className="block py-2 px-4 text-white hover:bg-gray-700">About Us</Link>
          <Link to="/terms" onClick={toggleSidebar} className="block py-2 px-4 text-white hover:bg-gray-700">Terms & Condition</Link>
          <Link to="/blog" onClick={toggleSidebar} className="block py-2 px-4 text-white hover:bg-gray-700">Blog</Link>
          <Link to="/faq" onClick={toggleSidebar} className="block py-2 px-4 text-white hover:bg-gray-700">FAQ</Link>
          <Link to="/contact" onClick={toggleSidebar} className="block py-2 px-4 text-white hover:bg-gray-700">Contact</Link>
        </nav>
      </div>
    </>
  );
}

export default Navbar;