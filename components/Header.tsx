"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Our Story", route: "/" },
    { name: "Latest", route: "/latest" },
    { name: "Unisex", route: "/unisex" },
    { name: "Men", route: "/men" },
    { name: "Women", route: "/women" },
    { name: "Sign In", route: "/signin" },
  ];

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-black font-sans min-h-[80px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center w-full gap-5">
        <Link href="/">
          <img src="/logo/white-logo.png" className="w-40 max-lg:mr-5" alt="Logo" />
        </Link>

        {/* Menu for large devices */}
        <nav className="hidden lg:flex lg:ml-auto">
          <ul className="flex gap-4">
            {menuItems.map((item) => (
              <li key={item.name} className="px-3">
                <Link
                  href={item.route}
                  className={`hover:text-[#D87D4A] ${
                    item.route === pathname ? "text-[#D87D4A]" : "text-[#fff]"
                  } font-semibold block text-[15px]`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu for small devices */}
        <div className="flex items-center space-x-6 max-lg:ml-auto">
          {/* Toggle Open Button */}
          {!isMenuOpen && (
            <button
              id="toggleOpen"
              className="lg:hidden"
              onClick={handleToggleMenu}
              aria-label="Open Menu"
            >
              <svg
                className="w-7 h-7"
                fill="#fff"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}

          {/* Toggle Close Button */}
          {isMenuOpen && (
            <button
              id="toggleClose"
              className="lg:hidden fixed top-4 right-4 z-[100] rounded-full bg-white p-2"
              onClick={handleToggleMenu}
              aria-label="Close Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
              </svg>
            </button>
          )}
        </div>

        {/* Overlay and Mobile Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            onClick={handleToggleMenu}
          ></div>
        )}

        <div
          className={`fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white z-50 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <ul className="flex flex-col p-6 space-y-4">
            {menuItems.map((item) => (
              <li key={item.name} className="py-3 border-b">
                <Link
                  href={item.route}
                  className={`hover:text-[#D87D4A] ${
                    item.route === pathname ? "text-[#D87D4A]" : "text-[#000]"
                  } font-semibold text-lg`}
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
