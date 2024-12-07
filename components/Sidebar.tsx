// Sidebar.tsx
import React, { useState } from 'react';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  // State to manage collapsible sections
  const [openSections, setOpenSections] = useState<{
    [key: string]: boolean;
  }>({
    Gender: false,
    Color: false,
    'Shop by Price': false,
    'Best For': false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      {/* Overlay for small devices */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        ></div>
      )}

      <nav
        className={`fixed top-0 left-0 h-full bg-gray-400 px-6 py-4 shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 w-4/5 md:w-1/5 md:translate-x-0`}
        aria-label="Sidebar Navigation"
      >
        {/* Close Button for Small Devices */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button onClick={onClose} aria-label="Close Filters">
            <svg
              className="w-6 h-6 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul>
          {/* Categories Section */}
          <li className="mb-6">
            <h3 className="pb-2 text-sm font-semibold tracking-wider uppercase border-b">
              Categories
            </h3>
            <ul className="mt-4 space-y-2">
              {['Jacket', 'Dress', 'Coat', 'Pants', 'Newest'].map((category) => (
                <li key={category}>
                  <Link href="#">
                    <span className="block px-3 py-2 transition-colors rounded hover:bg-gray-700">
                      {category}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Filters Section */}
          <li>
            <h3 className="pb-2 text-sm font-semibold tracking-wider uppercase border-b">
              Filters
            </h3>
            <ul className="mt-4 space-y-4">
              {['Gender', 'Color', 'Shop by Price', 'Best For'].map((filter) => (
                <li key={filter}>
                  <button
                    className="flex items-center justify-between w-full px-3 py-2 text-left transition-colors rounded hover:bg-gray-700 focus:outline-none"
                    onClick={() => toggleSection(filter)}
                    aria-expanded={openSections[filter]}
                  >
                    <span className="text-sm font-medium">{filter}</span>
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        openSections[filter] ? 'transform rotate-180' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Collapsible Content */}
                  {openSections[filter] && (
                    <div className="pl-4 mt-2">
                      {filter === 'Gender' && (
                        <div className="space-y-2">
                          {['Male', 'Female', 'Unisex'].map((gender) => (
                            <label key={gender} className="flex items-center space-x-2">
                              <input type="checkbox" className="w-4 h-4 text-indigo-600 form-checkbox" />
                              <span className="text-sm">{gender}</span>
                            </label>
                          ))}
                        </div>
                      )}
                      {filter === 'Color' && (
                        <div className="space-y-2">
                          {['Red', 'Blue', 'Green', 'Black', 'White'].map((color) => (
                            <label key={color} className="flex items-center space-x-2">
                              <input type="checkbox" className="w-4 h-4 text-indigo-600 form-checkbox" />
                              <span className="text-sm">{color}</span>
                            </label>
                          ))}
                        </div>
                      )}
                      {filter === 'Shop by Price' && (
                        <div className="space-y-2">
                          <label className="block text-sm">
                            Min Price
                            <input
                              type="number"
                              className="block w-full mt-1 border-gray-300 rounded shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="$0"
                            />
                          </label>
                          <label className="block text-sm">
                            Max Price
                            <input
                              type="number"
                              className="block w-full mt-1 border-gray-300 rounded shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="$1000"
                            />
                          </label>
                        </div>
                      )}
                      {filter === 'Best For' && (
                        <div className="space-y-2">
                          {['Casual', 'Formal', 'Sports', 'Party'].map((option) => (
                            <label key={option} className="flex items-center space-x-2">
                              <input type="checkbox" className="w-4 h-4 text-indigo-600 form-checkbox" />
                              <span className="text-sm">{option}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
