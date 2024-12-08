'use client';
import React, { useState } from 'react';

const Cart = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const sizes = [
    'M 3.5 / W 5',
    'M 4 / W 5.5',
    'M 4.5 / W 6',
    'M 5 / W 6.5',
    'M 5.5 / W 7',
    'M 6 / W 7.5',
    'M 6.5 / W 8',
    'M 7 / W 8.5',
    'M 7.5 / W 9',
    'M 8 / W 9.5',
    'M 8.5 / W 10',
    'M 9 / W 10.5',
    'M 9.5 / W 11',
    'M 10 / W 11.5',
    'M 10.5 / W 12',
    'M 11 / W 12.5',
  ];

  return (
    <div className="bg-black text-white">
      {/* Main Cart Content */}
      <div className="flex flex-col gap-10 bg-black p-4 lg:flex-row lg:gap-52 lg:p-0">
        {/* Product Images Section */}
        <div className="flex w-full flex-col p-6 lg:ml-28 lg:w-1/2 lg:flex-row">
          <div className="flex w-full flex-row space-x-2 lg:w-1/5 lg:flex-col lg:space-x-0 lg:space-y-2">
            {/* Thumbnails */}
            {Array(5)
              .fill(0)
              .map((_, idx) => (
                <img
                  key={idx}
                  src="/products/product-5.png"
                  alt={`Thumbnail ${idx + 1}`}
                  className="h-16 w-16 flex-shrink-0 cursor-pointer rounded-md border border-gray-700 object-cover hover:opacity-80"
                />
              ))}
          </div>

          {/* Main Image */}
          <div className="relative mt-4 w-full lg:ml-4 lg:mt-0 lg:w-4/5">
            <img
              src="/products/product-5.png"
              alt="Kimono Main"
              className="h-auto w-full rounded-lg object-cover"
            />

            {/* Badge */}
            <div className="absolute left-2 top-2 rounded-md bg-white px-2 py-1 text-sm text-black shadow-md">
              Highly Rated
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-2 right-2 flex space-x-2">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-white hover:bg-gray-800">
                ←
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-white hover:bg-gray-800">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full space-y-6 p-6 lg:mr-28 lg:w-1/2">
          {/* Price and Additional Thumbnails */}
          <div>
            <h1 className="mb-2 text-2xl font-bold">$100</h1>
            <div className="flex flex-wrap gap-2">
              {Array(7)
                .fill(0)
                .map((_, idx) => (
                  <img
                    key={idx}
                    src="/products/product-5.png"
                    alt={`Additional Thumbnail ${idx + 1}`}
                    className="h-16 w-16 cursor-pointer rounded-md border border-gray-700 object-cover hover:opacity-80"
                  />
                ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">Select Size</h2>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {sizes.map((size: any, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded border border-gray-700 px-4 py-2 ${
                    selectedSize === size
                      ? 'bg-white font-bold text-black'
                      : 'hover:bg-gray-800'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button className="w-full rounded bg-white py-4 font-bold text-black hover:bg-gray-200">
              Learn More
            </button>
            <button className="w-full rounded-full bg-[#D87D4A] py-4 font-bold hover:bg-[#e08a55]">
              Add to Bag
            </button>
            <button className="w-full rounded-full border border-gray-700 py-4 text-gray-400 hover:bg-gray-800">
              Favorite
            </button>
          </div>

          {/* Shipping Information */}
          <div className="border-t border-gray-700 pt-4 text-sm text-gray-400">
            <p>Shipping</p>
            <p>You`ll see our shipping options at checkout.</p>
            <p className="mt-2">Free Pickup</p>
            <p className="cursor-pointer text-[#D87D4A] underline">
              Find a Store
            </p>
            <div className="mt-4">
              <p>Style: 7235621</p>
              <p>Color: Varsity Gold/White</p>
            </div>
          </div>

          {/* Product Details Toggle */}
          <div>
            <button
              onClick={() => alert('Toggle Product Details')}
              className="w-full cursor-pointer border-t border-gray-700 pt-4 text-left text-sm text-[#D87D4A] underline"
            >
              View Product Details
            </button>
          </div>

          {/* Shipping & Returns */}
          <div>
            <button
              onClick={() => alert('Toggle Shipping & Returns')}
              className="w-full cursor-pointer border-t border-gray-700 pt-4 text-left text-sm text-[#D87D4A] underline"
            >
              Shipping & Returns
            </button>
          </div>
        </div>
      </div>

      {/* You Might Also Like Section */}
      <div className="mt-10 flex flex-col items-center justify-between px-4 sm:flex-row sm:px-12 md:px-24 lg:px-72">
        <div className="text-xl font-bold">You Might Also Like</div>
        <div className="mt-4 flex items-center sm:mt-0">
          <div className="mr-2 h-6 w-6 rounded-full bg-white"></div>
          <div className="h-6 w-6 rounded-full bg-white"></div>
        </div>
      </div>

      {/* Recommended Products */}
      <div className="container mx-auto mt-10 px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Repeated Product Blocks */}
          {Array(3)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg bg-gray-300 font-sans shadow-md"
              >
                <div className="flex min-h-[256px] items-center justify-center">
                  <img
                    src="/products/product-5.png"
                    alt={`Product ${idx + 1}`}
                    className="w-full object-contain"
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
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
