"use client";
import React, { useState } from "react";

const Cart = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const sizes = [
    "M 3.5 / W 5",
    "M 4 / W 5.5",
    "M 4.5 / W 6",
    "M 5 / W 6.5",
    "M 5.5 / W 7",
    "M 6 / W 7.5",
    "M 6.5 / W 8",
    "M 7 / W 8.5",
    "M 7.5 / W 9",
    "M 8 / W 9.5",
    "M 8.5 / W 10",
    "M 9 / W 10.5",
    "M 9.5 / W 11",
    "M 10 / W 11.5",
    "M 10.5 / W 12",
    "M 11 / W 12.5",
  ];

  return (
    <div className="text-white bg-black">
      {/* Main Cart Content */}
      <div className="flex flex-col gap-10 p-4 bg-black lg:flex-row lg:gap-52 lg:p-0">
        {/* Product Images Section */}
        <div className="flex flex-col w-full p-6 lg:flex-row lg:w-1/2 lg:ml-28">
          <div className="flex flex-row w-full space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2 lg:w-1/5">
            {/* Thumbnails */}
            {Array(5)
              .fill(0)
              .map((_, idx) => (
                <img
                  key={idx}
                  src="/products/product-5.png"
                  alt={`Thumbnail ${idx + 1}`}
                  className="flex-shrink-0 object-cover w-16 h-16 border border-gray-700 rounded-md cursor-pointer hover:opacity-80"
                />
              ))}
          </div>

          {/* Main Image */}
          <div className="relative w-full mt-4 lg:mt-0 lg:ml-4 lg:w-4/5">
            <img
              src="/products/product-5.png"
              alt="Kimono Main"
              className="object-cover w-full h-auto rounded-lg"
            />

            {/* Badge */}
            <div className="absolute px-2 py-1 text-sm text-black bg-white rounded-md shadow-md top-2 left-2">
              Highly Rated
            </div>

            {/* Navigation Buttons */}
            <div className="absolute flex space-x-2 bottom-2 right-2">
              <button className="flex items-center justify-center w-8 h-8 text-white bg-gray-700 rounded-full hover:bg-gray-800">
                ←
              </button>
              <button className="flex items-center justify-center w-8 h-8 text-white bg-gray-700 rounded-full hover:bg-gray-800">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full p-6 space-y-6 lg:w-1/2 lg:mr-28">
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
                    className="object-cover w-16 h-16 border border-gray-700 rounded-md cursor-pointer hover:opacity-80"
                  />
                ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">Select Size</h2>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 px-4 rounded border border-gray-700 ${
                    selectedSize === size
                      ? "bg-white text-black font-bold"
                      : "hover:bg-gray-800"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button className="w-full py-4 font-bold text-black bg-white rounded hover:bg-gray-200">
              Learn More
            </button>
            <button className="w-full py-4 font-bold bg-[#D87D4A] hover:bg-[#e08a55] rounded-full">
              Add to Bag
            </button>
            <button className="w-full py-4 text-gray-400 border border-gray-700 rounded-full hover:bg-gray-800">
              Favorite
            </button>
          </div>

          {/* Shipping Information */}
          <div className="pt-4 text-sm text-gray-400 border-t border-gray-700">
            <p>Shipping</p>
            <p>You’ll see our shipping options at checkout.</p>
            <p className="mt-2">Free Pickup</p>
            <p className="text-[#D87D4A] underline cursor-pointer">Find a Store</p>
            <div className="mt-4">
              <p>Style: 7235621</p>
              <p>Color: Varsity Gold/White</p>
            </div>
          </div>

          {/* Product Details Toggle */}
          <div>
            <button
              onClick={() => alert("Toggle Product Details")}
              className="w-full pt-4 text-sm text-left text-[#D87D4A] underline border-t border-gray-700 cursor-pointer"
            >
              View Product Details
            </button>
          </div>

          {/* Shipping & Returns */}
          <div>
            <button
              onClick={() => alert("Toggle Shipping & Returns")}
              className="w-full pt-4 text-sm text-left text-[#D87D4A] underline border-t border-gray-700 cursor-pointer"
            >
              Shipping & Returns
            </button>
          </div>
        </div>
      </div>

      {/* You Might Also Like Section */}
      <div className="flex flex-col items-center justify-between px-4 mt-10 sm:flex-row sm:px-12 md:px-24 lg:px-72">
        <div className="text-xl font-bold">You Might Also Like</div>
        <div className="flex items-center mt-4 sm:mt-0">
          <div className="w-6 h-6 mr-2 bg-white rounded-full"></div>
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Recommended Products */}
      <div className="container px-4 mx-auto mt-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Repeated Product Blocks */}
          {Array(3)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="overflow-hidden font-sans bg-gray-300 rounded-lg shadow-md"
              >
                <div className="flex min-h-[256px] items-center justify-center">
                  <img
                    src="/products/product-5.png"
                    alt={`Product ${idx + 1}`}
                    className="object-contain w-full"
                  />
                </div>
                <div className="p-6 bg-white">
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
