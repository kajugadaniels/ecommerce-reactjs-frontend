'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

const Latest = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Prevent body scroll when sidebar is open on small devices
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isSidebarOpen]);

  // Automatically close sidebar when resizing to large devices
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center justify-between bg-black p-4 text-white">
        <div>
          <h1 className="text-xl md:text-2xl">Enso By You (79)</h1>
        </div>
        <div className="flex items-center space-x-4">
          {/* Toggle Filters Button for Small Devices */}
          <button
            className="rounded bg-gray-500 px-4 py-2 text-sm text-black md:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle Filters"
          >
            {isSidebarOpen ? 'Hide Filters' : 'Show Filters'}
          </button>

          {/* Sort By Dropdown */}
          <div className="relative">
            <select
              className="appearance-none rounded bg-gray-400 px-2 py-2 text-black focus:outline-none"
              aria-label="Sort by"
            >
              <option>Sort By</option>
              <option value="price-low-to-high">Price: Low to High</option>
              <option value="price-high-to-low">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <svg
                className="h-4 w-4 fill-current text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.516 7.548c.436-.446 1.043-.481 1.576 0L10 10.28l2.908-2.732c.533-.481 1.141-.446 1.576 0 .436.445.408 1.197 0 1.576l-4 3.908c-.408.396-1.019.481-1.576 0l-4-3.908c-.408-.379-.436-1.13 0-1.576z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content */}
      <div className="container mx-auto mt-4 px-4 md:ml-[20%] md:w-4/5">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array(6)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="transform overflow-hidden rounded-lg bg-gray-300 font-sans shadow-lg transition-transform hover:-translate-y-2"
              >
                <Link href="/latest/detail">
                  <div className="flex h-64 items-center justify-center p-4">
                    <img
                      src="/products/product-5.png"
                      alt="Hudy Kimono"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </Link>
                <div className="bg-white p-6">
                  <h3 className="text-[#D87D4A]">Customize</h3>
                  <h3 className="text-gray-800">Hudy Kimono</h3>
                  <p className="mt-2 text-sm text-gray-700">
                    5 Colors &middot; 3 Fabrics
                  </p>
                  <div className="mt-4 text-lg font-semibold text-gray-700">
                    $160
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;
