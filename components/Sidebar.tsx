'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useCategories from '@/hooks/useCategories';
import useSizes from '@/hooks/useSizes';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    onFilterChange: (filters: Record<string, any>) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onFilterChange }) => {
    // State to manage collapsible sections
    const [openSections, setOpenSections] = useState < {
        [key: string]: boolean;
    } > ({
        Gender: false,
        Color: false,
        'Shop by Price': false,
        'Best For': false,
    });

    // Fetch categories and sizes using custom hooks
    const { categories, loading: categoriesLoading } = useCategories();
    const { sizes, loading: sizesLoading } = useSizes();

    const toggleSection = (section: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    // Handle filter checkbox changes
    const handleCheckboxChange = (filterType: string, value: string) => {
        onFilterChange({
            ...filters,
            [filterType]: value,
        });
    };

    // State to manage selected filters
    const [filters, setFilters] = useState < Record < string, any>> ({});

    // Handle price range changes
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value ? parseFloat(value) : undefined,
        }));
    };

    // Update parent with new filters
    useEffect(() => {
        onFilterChange(filters);
    }, [filters, onFilterChange]);

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
                className={`fixed left-0 top-0 h-full transform bg-white px-6 py-4 shadow-lg ${isOpen ? 'translate-x-0' : '-translate-x-full'
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
                            {categoriesLoading ? (
                                <li>Loading...</li>
                            ) : (
                                categories.map((category) => (
                                    <li key={category.id}>
                                        <label className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 text-indigo-600 form-checkbox"
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setFilters((prev) => ({
                                                            ...prev,
                                                            category: category.slug,
                                                        }));
                                                    } else {
                                                        setFilters((prev) => {
                                                            const { category, ...rest } = prev;
                                                            return rest;
                                                        });
                                                    }
                                                }}
                                            />
                                            <span className="block px-3 py-2 transition-colors rounded hover:bg-gray-100">
                                                {category.name}
                                            </span>
                                        </label>
                                    </li>
                                ))
                            )}
                        </ul>
                    </li>

                    {/* Filters Section */}
                    <li>
                        <h3 className="pb-2 text-sm font-semibold tracking-wider uppercase border-b">
                            Filters
                        </h3>
                        <ul className="mt-4 space-y-4">
                            {/* Gender Filter */}
                            <li>
                                <button
                                    className="flex items-center justify-between w-full px-3 py-2 text-left transition-colors rounded hover:bg-gray-100 focus:outline-none"
                                    onClick={() => toggleSection('Gender')}
                                    aria-expanded={openSections['Gender']}
                                >
                                    <span className="text-sm font-medium">Gender</span>
                                    <svg
                                        className={`h-4 w-4 transition-transform ${openSections['Gender'] ? 'rotate-180 transform' : ''
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
                                {openSections['Gender'] && (
                                    <div className="pl-4 mt-2">
                                        {['Male', 'Female', 'Unisex'].map((gender) => (
                                            <label key={gender} className="flex items-center space-x-2">
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4 text-indigo-600 form-checkbox"
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setFilters((prev) => ({
                                                                ...prev,
                                                                product_type: gender,
                                                            }));
                                                        } else {
                                                            setFilters((prev) => {
                                                                const { product_type, ...rest } = prev;
                                                                return rest;
                                                            });
                                                        }
                                                    }}
                                                />
                                                <span className="text-sm">{gender}</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </li>

                            {/* Color Filter */}
                            <li>
                                <button
                                    className="flex items-center justify-between w-full px-3 py-2 text-left transition-colors rounded hover:bg-gray-100 focus:outline-none"
                                    onClick={() => toggleSection('Color')}
                                    aria-expanded={openSections['Color']}
                                >
                                    <span className="text-sm font-medium">Color</span>
                                    <svg
                                        className={`h-4 w-4 transition-transform ${openSections['Color'] ? 'rotate-180 transform' : ''
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
                                                    type="checkbox"
                                                    className="w-4 h-4 text-indigo-600 form-checkbox"
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setFilters((prev) => ({
                                                                ...prev,
                                                                color: color,
                                                            }));
                                                        } else {
                                                            setFilters((prev) => {
                                                                const { color, ...rest } = prev;
                                                                return rest;
                                                            });
                                                        }
                                                    }}
                                                />
                                                <span className="text-sm">{color}</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </li>

                            {/* Shop by Price Filter */}
                            <li>
                                <button
                                    className="flex items-center justify-between w-full px-3 py-2 text-left transition-colors rounded hover:bg-gray-100 focus:outline-none"
                                    onClick={() => toggleSection('Shop by Price')}
                                    aria-expanded={openSections['Shop by Price']}
                                >
                                    <span className="text-sm font-medium">Shop by Price</span>
                                    <svg
                                        className={`h-4 w-4 transition-transform ${openSections['Shop by Price'] ? 'rotate-180 transform' : ''
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
                                    <div className="pl-4 mt-2 space-y-2">
                                        <label className="block text-sm">
                                            Min Price
                                            <input
                                                type="number"
                                                name="price_min"
                                                className="block w-full mt-1 border-gray-300 rounded shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="$0"
                                                onChange={handlePriceChange}
                                            />
                                        </label>
                                        <label className="block text-sm">
                                            Max Price
                                            <input
                                                type="number"
                                                name="price_max"
                                                className="block w-full mt-1 border-gray-300 rounded shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="$1000"
                                                onChange={handlePriceChange}
                                            />
                                        </label>
                                    </div>
                                )}
                            </li>

                            {/* Best For Filter */}
                            <li>
                                <button
                                    className="flex items-center justify-between w-full px-3 py-2 text-left transition-colors rounded hover:bg-gray-100 focus:outline-none"
                                    onClick={() => toggleSection('Best For')}
                                    aria-expanded={openSections['Best For']}
                                >
                                    <span className="text-sm font-medium">Best For</span>
                                    <svg
                                        className={`h-4 w-4 transition-transform ${openSections['Best For'] ? 'rotate-180 transform' : ''
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
                                {openSections['Best For'] && (
                                    <div className="pl-4 mt-2 space-y-2">
                                        {['Casual', 'Formal', 'Sports', 'Party'].map((option) => (
                                            <label key={option} className="flex items-center space-x-2">
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4 text-indigo-600 form-checkbox"
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setFilters((prev) => ({
                                                                ...prev,
                                                                best_for: option,
                                                            }));
                                                        } else {
                                                            setFilters((prev) => {
                                                                const { best_for, ...rest } = prev;
                                                                return rest;
                                                            });
                                                        }
                                                    }}
                                                />
                                                <span className="text-sm">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;
