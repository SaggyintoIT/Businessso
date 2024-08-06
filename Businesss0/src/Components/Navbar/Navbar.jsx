import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for custom styles


const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSidebarDropdownOpen, setIsSidebarDropdownOpen] = useState(false);
    const [isPageDropdownOpen, setIsPageDropdownOpen] = useState(false); // Added this state
    const [language, setLanguage] = useState('en');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const togglePageDropdown = () => { // Added this function
        setIsPageDropdownOpen(!isPageDropdownOpen);
    };

    
    const toggleSidebarDropdown = () => {
        setIsSidebarDropdownOpen(!isSidebarDropdownOpen);
    };

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <>
            <div className="">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8 bg-[#fef3f3]">
                    <header className="flex items-center justify-between py-4 md:py-8">
                        {/* Logo */}
                        <div className=' w-96 flex items-center justify-center'>
                        <a href="#" className="inline-flex items-center  md:text-3xl" aria-label="logo">
                            <img src="https://businesso.xyz/assets/front/img/6506953ba3468.png" alt="Logo" />
                        </a></div>

                        {/* Nav */}
                        <nav className="hidden gap-10 lg:flex">
                            <a href="#" className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Home</a>
                            <div className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-500"
                                >
                                    Templates
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg z-10">
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white">Feature 1</a>
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white">Feature 2</a>
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white">Feature 3</a>
                                    </div>
                                )}
                            </div>
                            <a href="#" className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Listings</a>
                            <a href="#" className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Pricing</a>
                            <div className="relative">
                                <button
                                    onClick={togglePageDropdown}
                                    className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-500"
                                >
                                    Pages
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {isPageDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg z-10">
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white">Page 1</a>
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white">Page 2</a>
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white">Page 3</a>
                                    </div>
                                )}
                            </div>
                            <a href="#" className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Blog</a>
                            <a href="#" className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">FAQ</a>
                            <a href="#" className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Contact</a>
                        </nav>

                        <div className="-ml-8 hidden flex-col gap-2.5  w-64 sm:flex-row sm:justify-center lg:flex lg:justify-start">
                            <a href="#" className="inline-block rounded-lg px-4 py-2 text-center text-xs font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-sm">
                                {language === 'en' ? 'English' : 'Se connecter'}
                            </a>
                            <a href="#" className="inline-block h-10 rounded-md bg-[#FF6B6B] px-6 py-2 text-center text-xs font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-sm">
                                {language === 'en' ? 'Sign up' : 'S’inscrire'}
                            </a>
                        </div>

                        <button onClick={toggleSidebar} type="button" className={`inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden transition-opacity ${isSidebarOpen ? 'opacity-0' : 'opacity-100'}`}>
                            {isSidebarOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform transform rotate-45" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1v-5z" clipRule="evenodd" />
                                </svg>
                            )}
                            Menu
                        </button>
                    </header>
                </div>
            </div>

            {/* Sidebar */}
            <div className={`fixed inset-0 z-40 transition-transform transform ${isSidebarOpen ? 'translate-y-0' : '-translate-y-full'} border-2 justify-center shadow-lg lg:hidden h-full overflow-y-auto bg-opacity-70 `}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleSidebar} className="text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className='w-full justify-center items-center flex mt-4'>
                <div className="w-11/12 flex flex-col p-4 h-full bg-white">
                    <a href="#" className="py-2 text-sm font-semibold text-gray-600 transition duration-100 hover:text-indigo-500">Home</a>
                    <hr className="my-2 border-gray-300" />
                    <div className="relative">
                        <button
                            onClick={toggleSidebarDropdown}
                            className="inline-flex items-center gap-1 py-2 text-sm font-semibold text-gray-600"
                        >
                            Templates
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {isSidebarDropdownOpen && (
                            <div className="absolute mt-2 w-full rounded-lg bg-white shadow-lg z-10">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white">Feature 1</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white">Feature 2</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white">Feature 3</a>
                            </div>
                        )}
                    </div>
                    <hr className="my-2 border-gray-300" />
                    <a href="#" className="py-2 text-sm font-semibold text-gray-600 transition duration-100 hover:text-indigo-500">Listings</a>
                    <hr className="my-2 border-gray-300" />
                    <a href="#" className="py-2 text-sm font-semibold text-gray-600 transition duration-100 hover:text-indigo-500">Pricing</a>
                    <hr className="my-2 border-gray-300" />
                    <a href="#" className="py-2 text-sm font-semibold text-gray-600 transition duration-100 hover:text-indigo-500">Pages</a>
                    <hr className="my-2 border-gray-300" />
                    <a href="#" className="py-2 text-sm font-semibold text-gray-600 transition duration-100 hover:text-indigo-500">Blog</a>
                    <hr className="my-2 border-gray-300" />
                    <a href="#" className="py-2 text-sm font-semibold text-gray-600 transition duration-100 hover:text-indigo-500">FAQ</a>
                    <hr className="my-2 border-gray-300" />
                    <a href="#" className="py-2 text-sm font-semibold text-gray-600 transition duration-100 hover:text-indigo-500">Contact</a>
                    <div className="mt-auto flex justify-center">
                        <a href="#" className="block w-28 rounded-lg  px-6 py-5 text-center text-sm font-semibold text-black outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700">English</a>

                        <a href="#" className="block w-24 text-red-50 rounded-lg bg-[#FF6B6B]  py-3 text-center text-sm font-semibold outline-none ring-gray-300 transition duration-100 hover:bg-red-500 focus-visible:ring active:bg-red-500 mt-2">Login</a>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
