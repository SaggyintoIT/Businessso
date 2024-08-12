import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarDropdownOpen, setIsSidebarDropdownOpen] = useState(false);
  const [isPageDropdownOpen, setIsPageDropdownOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [loggedInEmail, setLoggedInEmail] = useState(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const togglePageDropdown = () => setIsPageDropdownOpen(!isPageDropdownOpen);
  const toggleSidebarDropdown = () => setIsSidebarDropdownOpen(!isSidebarDropdownOpen);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedEmail = localStorage.getItem('email');
      if (storedEmail) {
        setLoggedInEmail(storedEmail);
      } else {
        setLoggedInEmail(null);
      }
    };

    // Initial check
    handleStorageChange();

    // Set up listener for storage changes
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    setLoggedInEmail(null);
    window.location.reload(); // Refresh the page
  };

  const handleItemClick = () => {
    if (isSidebarOpen) {
      toggleSidebar();
    }
  };

  return (
    <>
      <div className="">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 bg-[#fef3f3]">
          <header className="flex items-center justify-between py-4 md:py-8">
            {/* Logo */}
            <div className='w-96 flex items-center justify-center'>
              <Link to="/" className="inline-flex items-center md:text-3xl" aria-label="logo">
                <img src="https://businesso.xyz/assets/front/img/6506953ba3468.png" alt="Logo" />
              </Link>
            </div>

            {/* Nav */}
            <nav className="hidden justify-center text-center gap-10 lg:flex">
              <Link to="/" className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-pink-500 active:text-indigo-700">Home</Link>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-pink-500"
                >
                  Templates
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg z-10">
                    <Link to="/template" className="block px-4 py-2 text-gray-700 hover:bg-pink-500 hover:text-white" onClick={handleItemClick}>Website Templates</Link>
                  </div>
                )}
              </div>
              <Link to="/listing" className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-pink-500 active:text-pink-700" onClick={handleItemClick}>Listings</Link>
              <Link to="/pricing" className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-pink-500 active:text-pink-700" onClick={handleItemClick}>Pricing</Link>
              <div className="relative">
                <button
                  onClick={togglePageDropdown}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-pinnk-500"
                >
                  Pages
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {isPageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg z-10">
                    <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-pink-500 hover:text-white" onClick={handleItemClick}>About Us</Link>
                    <Link to="/terms" className="block px-4 py-2 text-gray-700 hover:bg-pink-500 hover:text-white" onClick={handleItemClick}>Terms & Condition</Link>
                  </div>
                )}
              </div>
              <Link to="/blog" className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-pink-500 active:text-pink-700" onClick={handleItemClick}>Blog</Link>
              <Link to="/faq" className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-pink-500 active:text-pink-700" onClick={handleItemClick}>FAQ</Link>
              <Link to="/contact" className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-pink-500 active:text-pink-700" onClick={handleItemClick}>Contact</Link>
            </nav>

            <div className="flex items-center gap-4">
              <a href="#" className="inline-block rounded-lg px-4 py-2 text-center text-xs font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-pink-500 focus-visible:ring active:text-pink-600 md:text-sm">
                {language === 'en' ? 'English' : 'Se connecter'}
              </a>
              <div className="hidden justify-end md:flex">
                {loggedInEmail ? (
                  <div className="flex items-center gap-1 flex-col">
                    <span className="text-xs font-semibold text-gray-600">{loggedInEmail}</span>
                    <button onClick={handleLogout} className="text-sm font-semibold text-pink-500">Logout</button>
                  </div>
                ) : (
                  <Link to="/login" className="inline-block h-10 rounded-md bg-[#FF6B6B] px-6 py-2 text-center text-xs font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-pink-700 md:text-sm">Login</Link>
                )}
              </div>
            </div>

            <button onClick={toggleSidebar} type="button" className={`inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden transition-opacity ${isSidebarOpen ? 'opacity-0' : 'opacity-100'}`}>
              {isSidebarOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform transform rotate-45" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM4 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM4 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </header>
        </div>

        <div className={`fixed inset-0 z-20 bg-gray-900/80 transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <aside className={`fixed inset-y-0 right-0 z-30 w-64 bg-white p-4 transition-transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <button onClick={toggleSidebar} type="button" className="absolute top-4 right-4 text-gray-700 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="space-y-4">
              <Link to="/" className="block text-sm font-semibold text-gray-700 hover:text-pink-500" onClick={handleItemClick}>Home</Link>
              <div className="relative">
                <button onClick={toggleSidebarDropdown} className="block w-full text-left text-sm font-semibold text-gray-700 hover:text-indigo-500">
                  Templates
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-800 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {isSidebarDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-full rounded-lg bg-white shadow-lg z-10">
                    <Link to="/template" className="block px-4 py-2 text-gray-700 hover:bg-pink-500 hover:text-white" onClick={handleItemClick}>Website Templates</Link>
                  </div>
                )}
              </div>
              <Link to="/listing" className="block text-sm font-semibold text-gray-700 hover:text-pink-500" onClick={handleItemClick}>Listings</Link>
              <Link to="/pricing" className="block text-sm font-semibold text-gray-700 hover:text-pink-500" onClick={handleItemClick}>Pricing</Link>
              <div className="relative">
                <button onClick={toggleSidebarDropdown} className="block w-full text-left text-sm font-semibold text-gray-700 hover:text-indigo-500">
                  Pages
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-800 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {isSidebarDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-full rounded-lg bg-white shadow-lg z-10">
                    <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-pink-500 hover:text-white" onClick={handleItemClick}>About Us</Link>
                    <Link to="/terms" className="block px-4 py-2 text-gray-700 hover:bg-pink-500 hover:text-white" onClick={handleItemClick}>Terms & Condition</Link>
                  </div>
                )}
              </div>
              <Link to="/blog" className="block text-sm font-semibold text-gray-700 hover:text-pink-500" onClick={handleItemClick}>Blog</Link>
              <Link to="/faq" className="block text-sm font-semibold text-gray-700 hover:text-pink-500" onClick={handleItemClick}>FAQ</Link>
              <Link to="/contact" className="block text-sm font-semibold text-gray-700 hover:text-pink-500" onClick={handleItemClick}>Contact</Link>
              {loggedInEmail ? (
                <div className="flex items-center flex-col mt-4">
                  <span className="text-xs font-semibold text-gray-600">{loggedInEmail}</span>
                  <button onClick={handleLogout} className="text-sm font-semibold text-pink-500">Logout</button>
                </div>
              ) : (
                <Link to="/login" className="inline-block mt-4 rounded-md bg-[#FF6B6B] px-6 py-2 text-center text-xs font-semibold text-white">Login</Link>
              )}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Navbar;
