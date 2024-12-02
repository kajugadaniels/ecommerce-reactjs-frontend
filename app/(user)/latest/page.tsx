import React from 'react';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

const Latest = () => {
  return (
    <div>
      <div className="flex justify-between bg-black p-4 text-white">
        <div>
          <h1 className="ml-10 text-xl">Enso By You (79)</h1>
        </div>
        <div className="mr-52 flex place-items-center space-x-4">
          <button className="rounded bg-gray-500 px-4 py-2 text-sm text-black">
            Hide Filters
          </button>
          <div className="relative">
            <select
              className="appearance-none rounded bg-gray-400 px-1 py-2 text-black"
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

      <Sidebar />
      <div className="container mx-auto px-4">
        <div className="ml-48 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-gray-300 font-[sans-serif] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]">
            <Link href="/latest/detail">
              <div className="flex min-h-[256px] items-center justify-center">
                <img
                  src="/products/product-5.png"
                  alt="Name"
                  className="w-[100%] object-contain"
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

          <div className="overflow-hidden rounded-lg bg-gray-300 font-[sans-serif] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]">
            <div className="flex min-h-[256px] items-center justify-center">
              <img
                src="/products/product-5.png"
                alt="Name"
                className="w-[100%] object-contain"
              />
            </div>
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

          <div className="overflow-hidden rounded-lg bg-gray-300 font-[sans-serif] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]">
            <div className="flex min-h-[256px] items-center justify-center">
              <img
                src="/products/product-5.png"
                alt="Name"
                className="w-[100%] object-contain"
              />
            </div>
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
          <div className="overflow-hidden rounded-lg bg-gray-300 font-[sans-serif] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]">
            <div className="flex min-h-[256px] items-center justify-center">
              <img
                src="/products/product-5.png"
                alt="Name"
                className="w-[100%] object-contain"
              />
            </div>
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
          <div className="overflow-hidden rounded-lg bg-gray-300 font-[sans-serif] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]">
            <div className="flex min-h-[256px] items-center justify-center">
              <img
                src="/products/product-5.png"
                alt="Name"
                className="w-[100%] object-contain"
              />
            </div>
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
          <div className="overflow-hidden rounded-lg bg-gray-300 font-[sans-serif] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]">
            <div className="flex min-h-[256px] items-center justify-center">
              <img
                src="/products/product-5.png"
                alt="Name"
                className="w-[100%] object-contain"
              />
            </div>
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
          <div className="overflow-hidden rounded-lg bg-gray-300 font-[sans-serif] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]">
            <div className="flex min-h-[256px] items-center justify-center">
              <img
                src="/products/product-5.png"
                alt="Name"
                className="w-[100%] object-contain"
              />
            </div>
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
          <div className="overflow-hidden rounded-lg bg-gray-300 font-[sans-serif] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]">
            <div className="flex min-h-[256px] items-center justify-center">
              <img
                src="/products/product-5.png"
                alt="Name"
                className="w-[100%] object-contain"
              />
            </div>
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
          <div className="overflow-hidden rounded-lg bg-gray-300 font-[sans-serif] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]">
            <div className="flex min-h-[256px] items-center justify-center">
              <img
                src="/products/product-5.png"
                alt="Name"
                className="w-[100%] object-contain"
              />
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default Latest;
