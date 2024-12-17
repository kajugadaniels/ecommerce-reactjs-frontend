import React, { useState, useEffect } from 'react';
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
  category: string | null;
  size: string | null;
  color: string;
  priceMin: number | null;
  priceMax: number | null;
  productType: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onFilterChange }) => {
  // State to manage collapsible sections
  const [openSections, setOpenSections] = useState<{
    [key: string]: boolean;
  }>({
    'Product Type': false,
    Color: false,
    'Shop by Price': false,
    Sizes: false,
  });

  // State to hold categories and sizes
  const [categories, setCategories] = useState<Category[]>([]);
  const [sizes, setSizes] = useState<Size[]>([]);

  // State to hold filter selections
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedProductType, setSelectedProductType] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [priceMin, setPriceMin] = useState<number | null>(null);
  const [priceMax, setPriceMax] = useState<number | null>(null);

  useEffect(() => {
    // Fetch categories
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        if (response.status === 200) {
          setCategories(response.data); // Correctly set categories
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
          setSizes(response.data); // Correctly set sizes
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

  // Handle selection changes ensuring only one selection per filter
  const handleCategoryChange = (slug: string) => {
    setSelectedCategory((prev) => (prev === slug ? null : slug));
  };

  const handleSizeChange = (slug: string) => {
    setSelectedSize((prev) => (prev === slug ? null : slug));
  };

  const handleProductTypeChange = (type: string) => {
    setSelectedProductType((prev) => (prev === type ? null : type));
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  // Handle filter submission
  const applyFilters = () => {
    const filters: Filters = {
      category: selectedCategory,
      size: selectedSize,
      color: selectedColor,
      priceMin: priceMin,
      priceMax: priceMax,
      productType: selectedProductType,
    };
    onFilterChange(filters);
    onClose();
  };

  // Handle filter reset
  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedSize(null);
    setSelectedProductType(null);
    setSelectedColor('');
    setPriceMin(null);
    setPriceMax(null);
    onFilterChange({
      category: null,
      size: null,
      color: '',
      priceMin: null,
      priceMax: null,
      productType: null,
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
              {categories.length > 0 ? (
                categories.map((category) => (
                  <li key={category.slug}>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="category"
                        className="w-4 h-4 text-indigo-600 form-radio"
                        checked={selectedCategory === category.slug}
                        onChange={() => handleCategoryChange(category.slug)}
                      />
                      <span className="block px-3 py-2 transition-colors rounded hover:bg-gray-700">
                        {category.name}
                      </span>
                    </label>
                  </li>
                ))
              ) : (
                <li className="text-sm text-gray-700">No categories available.</li>
              )}
            </ul>
          </li>

          {/* Filters Section */}
          <li>
            <h3 className="pb-2 text-sm font-semibold tracking-wider uppercase border-b">
              Filters
            </h3>
            <ul className="mt-4 space-y-4">
              {/* Product Type Section */}
              <li>
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-left transition-colors rounded hover:bg-gray-700 focus:outline-none"
                  onClick={() => toggleSection('Product Type')}
                  aria-expanded={openSections['Product Type']}
                >
                  <span className="text-sm font-medium">Product Type</span>
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      openSections['Product Type'] ? 'rotate-180 transform' : ''
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
                {openSections['Product Type'] && (
                  <div className="pl-4 mt-2">
                    {['Male', 'Female', 'Both'].map((type) => (
                      <label key={type} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="productType"
                          className="w-4 h-4 text-indigo-600 form-radio"
                          checked={selectedProductType === type}
                          onChange={() => handleProductTypeChange(type)}
                        />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                )}
              </li>

              {/* Color Section */}
              <li>
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-left transition-colors rounded hover:bg-gray-700 focus:outline-none"
                  onClick={() => toggleSection('Color')}
                  aria-expanded={openSections['Color']}
                >
                  <span className="text-sm font-medium">Color</span>
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      openSections['Color'] ? 'rotate-180 transform' : ''
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
                {openSections['Color'] && (
                  <div className="pl-4 mt-2">
                    {['Red', 'Blue', 'Green', 'Black', 'White'].map((color) => (
                      <label key={color} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="color"
                          className="w-4 h-4 text-indigo-600 form-radio"
                          checked={selectedColor === color}
                          onChange={() => handleColorChange(color)}
                        />
                        <span className="text-sm">{color}</span>
                      </label>
                    ))}
                  </div>
                )}
              </li>

              {/* Shop by Price Section */}
              <li>
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-left transition-colors rounded hover:bg-gray-700 focus:outline-none"
                  onClick={() => toggleSection('Shop by Price')}
                  aria-expanded={openSections['Shop by Price']}
                >
                  <span className="text-sm font-medium">Shop by Price</span>
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      openSections['Shop by Price'] ? 'rotate-180 transform' : ''
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
                {openSections['Shop by Price'] && (
                  <div className="pl-4 mt-2">
                    <div className="space-y-2">
                      <label className="block text-sm">
                        Min Price
                        <input
                          type="number"
                          className="block w-full mt-1 border-gray-300 rounded shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="$0"
                          value={priceMin ?? ''}
                          onChange={(e) =>
                            setPriceMin(e.target.value ? parseFloat(e.target.value) : null)
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
                            setPriceMax(e.target.value ? parseFloat(e.target.value) : null)
                          }
                        />
                      </label>
                    </div>
                  </div>
                )}
              </li>

              {/* Sizes Section */}
              <li>
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-left transition-colors rounded hover:bg-gray-700 focus:outline-none"
                  onClick={() => toggleSection('Sizes')}
                  aria-expanded={openSections['Sizes']}
                >
                  <span className="text-sm font-medium">Sizes</span>
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      openSections['Sizes'] ? 'rotate-180 transform' : ''
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
                {openSections['Sizes'] && (
                  <div className="pl-4 mt-2">
                    {sizes.length > 0 ? (
                      sizes.map((size) => (
                        <label key={size.slug} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="size"
                            className="w-4 h-4 text-indigo-600 form-radio"
                            checked={selectedSize === size.slug}
                            onChange={() => handleSizeChange(size.slug)}
                          />
                          <span className="text-sm">{size.name}</span>
                        </label>
                      ))
                    ) : (
                      <p className="text-sm text-gray-700">No sizes available.</p>
                    )}
                  </div>
                )}
              </li>
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
