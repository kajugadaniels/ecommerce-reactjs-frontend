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
        className={`fixed left-0 top-0 h-full transform bg-gray-400 px-6 py-4 shadow-lg ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-40 w-4/5 transition-transform duration-300 ease-in-out md:w-1/5 md:translate-x-0`}
        aria-label="Sidebar Navigation"
      >
        {/* Close Button for Small Devices */}
        <div className="mb-6 flex items-center justify-between md:hidden">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button onClick={onClose} aria-label="Close Filters">
            <svg
              className="h-6 w-6 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul>
          {/* Categories Section */}
          <li className="mb-6">
            <h3 className="border-b pb-2 text-sm font-semibold uppercase tracking-wider">
              Categories
            </h3>
            <ul className="mt-4 space-y-2">
              {['Jacket', 'Dress', 'Coat', 'Pants', 'Newest'].map(
                (category) => (
                  <li key={category}>
                    <Link href="#">
                      <span className="block rounded px-3 py-2 transition-colors hover:bg-gray-700">
                        {category}
                      </span>
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </li>

          {/* Filters Section */}
          <li>
            <h3 className="border-b pb-2 text-sm font-semibold uppercase tracking-wider">
              Filters
            </h3>
            <ul className="mt-4 space-y-4">
              {['Gender', 'Color', 'Shop by Price', 'Best For'].map(
                (filter) => (
                  <li key={filter}>
                    <button
                      className="flex w-full items-center justify-between rounded px-3 py-2 text-left transition-colors hover:bg-gray-700 focus:outline-none"
                      onClick={() => toggleSection(filter)}
                      aria-expanded={openSections[filter]}
                    >
                      <span className="text-sm font-medium">{filter}</span>
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          openSections[filter] ? 'rotate-180 transform' : ''
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {/* Collapsible Content */}
                    {openSections[filter] && (
                      <div className="mt-2 pl-4">
                        {filter === 'Gender' && (
                          <div className="space-y-2">
                            {['Male', 'Female', 'Unisex'].map((gender) => (
                              <label
                                key={gender}
                                className="flex items-center space-x-2"
                              >
                                <input
                                  type="checkbox"
                                  className="form-checkbox h-4 w-4 text-indigo-600"
                                />
                                <span className="text-sm">{gender}</span>
                              </label>
                            ))}
                          </div>
                        )}
                        {filter === 'Color' && (
                          <div className="space-y-2">
                            {['Red', 'Blue', 'Green', 'Black', 'White'].map(
                              (color) => (
                                <label
                                  key={color}
                                  className="flex items-center space-x-2"
                                >
                                  <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-indigo-600"
                                  />
                                  <span className="text-sm">{color}</span>
                                </label>
                              ),
                            )}
                          </div>
                        )}
                        {filter === 'Shop by Price' && (
                          <div className="space-y-2">
                            <label className="block text-sm">
                              Min Price
                              <input
                                type="number"
                                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="$0"
                              />
                            </label>
                            <label className="block text-sm">
                              Max Price
                              <input
                                type="number"
                                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="$1000"
                              />
                            </label>
                          </div>
                        )}
                        {filter === 'Best For' && (
                          <div className="space-y-2">
                            {['Casual', 'Formal', 'Sports', 'Party'].map(
                              (option) => (
                                <label
                                  key={option}
                                  className="flex items-center space-x-2"
                                >
                                  <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-indigo-600"
                                  />
                                  <span className="text-sm">{option}</span>
                                </label>
                              ),
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </li>
                ),
              )}
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
