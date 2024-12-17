// Sidebar.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories, getSizes } from '@/Helpers/CallRequestHelper';
import { Category } from '@/types/Category';
import { Size } from '@/types/Size';
import { toast } from 'react-toastify';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onFilterChange: (filters: Filters) => void;
}

interface Filters {
  categories: string[];
  sizes: string[];
  color: string;
  priceMin: number | null;
  priceMax: number | null;
  bestFor: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onFilterChange }) => {
  // State to manage collapsible sections
  const [openSections, setOpenSections] = useState<{
    [key: string]: boolean;
  }>({
    Gender: false,
    Color: false,
    'Shop by Price': false,
    'Best For': false,
  });

  // State to hold categories and sizes
  const [categories, setCategories] = useState<Category[]>([]);
  const [sizes, setSizes] = useState<Size[]>([]);

  // State to hold filter selections
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [priceMin, setPriceMin] = useState<number | null>(null);
  const [priceMax, setPriceMax] = useState<number | null>(null);
  const [selectedBestFor, setSelectedBestFor] = useState<string[]>([]);

  useEffect(() => {
    // Fetch categories
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        if (response.status === 200) {
          setCategories(response.data.results);
        } else {
          toast.error(response.data.error || 'Failed to fetch categories.');
        }
      } catch (error: any) {
        toast.error(error.response?.data?.error || 'An error occurred while fetching categories.');
      }
    };

    // Fetch sizes
    const fetchSizes = async () => {
      try {
        const response = await getSizes();
        if (response.status === 200) {
          setSizes(response.data.results);
        } else {
          toast.error(response.data.error || 'Failed to fetch sizes.');
        }
      } catch (error: any) {
        toast.error(error.response?.data?.error || 'An error occurred while fetching sizes.');
      }
    };

    fetchCategories();
    fetchSizes();
  }, []);

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Handle checkbox changes
  const handleCategoryChange = (slug: string) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((item) => item !== slug) : [...prev, slug]
    );
  };

  const handleSizeChange = (slug: string) => {
    setSelectedSizes((prev) =>
      prev.includes(slug) ? prev.filter((item) => item !== slug) : [...prev, slug]
    );
  };

  const handleGenderChange = (gender: string) => {
    setSelectedGender((prev) =>
      prev.includes(gender) ? prev.filter((item) => item !== gender) : [...prev, gender]
    );
  };

  const handleBestForChange = (option: string) => {
    setSelectedBestFor((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  // Handle filter submission
  const applyFilters = () => {
    const filters: Filters = {
      categories: selectedCategories,
      sizes: selectedSizes,
      color: selectedColor,
      priceMin: priceMin,
      priceMax: priceMax,
      bestFor: selectedBestFor,
    };
    onFilterChange(filters);
    onClose();
  };

  // Handle filter reset
  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSelectedGender([]);
    setSelectedColor('');
    setPriceMin(null);
    setPriceMax(null);
    setSelectedBestFor([]);
    onFilterChange({
      categories: [],
      sizes: [],
      color: '',
      priceMin: null,
      priceMax: null,
      bestFor: [],
    });
    onClose();
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
            <h3 className="pb-2 text-sm font-semibold tracking-wider uppercase border-b">
              Categories
            </h3>
            <ul className="mt-4 space-y-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-indigo-600 form-checkbox"
                      checked={selectedCategories.includes(category.slug)}
                      onChange={() => handleCategoryChange(category.slug)}
                    />
                    <span className="block px-3 py-2 transition-colors rounded hover:bg-gray-700">
                      {category.name}
                    </span>
                  </label>
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
                    <div className="pl-4 mt-2">
                      {filter === 'Gender' && (
                        <div className="space-y-2">
                          {['Male', 'Female', 'Unisex'].map((gender) => (
                            <label
                              key={gender}
                              className="flex items-center space-x-2"
                            >
                              <input
                                type="checkbox"
                                className="w-4 h-4 text-indigo-600 form-checkbox"
                                checked={selectedGender.includes(gender)}
                                onChange={() => handleGenderChange(gender)}
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
                                  className="w-4 h-4 text-indigo-600 form-checkbox"
                                  checked={selectedColor === color}
                                  onChange={() =>
                                    setSelectedColor(
                                      selectedColor === color ? '' : color
                                    )
                                  }
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
                              className="block w-full mt-1 border-gray-300 rounded shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="$0"
                              value={priceMin ?? ''}
                              onChange={(e) =>
                                setPriceMin(
                                  e.target.value ? parseFloat(e.target.value) : null
                                )
                              }
                            />
                          </label>
                          <label className="block text-sm">
                            Max Price
                            <input
                              type="number"
                              className="block w-full mt-1 border-gray-300 rounded shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="$1000"
                              value={priceMax ?? ''}
                              onChange={(e) =>
                                setPriceMax(
                                  e.target.value ? parseFloat(e.target.value) : null
                                )
                              }
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
                                  className="w-4 h-4 text-indigo-600 form-checkbox"
                                  checked={selectedBestFor.includes(option)}
                                  onChange={() => handleBestForChange(option)}
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
              ))}
            </ul>
          </li>
        </ul>

        {/* Apply and Reset Buttons */}
        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
            onClick={applyFilters}
          >
            Apply
          </button>
          <button
            className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
            onClick={resetFilters}
          >
            Reset
          </button>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
