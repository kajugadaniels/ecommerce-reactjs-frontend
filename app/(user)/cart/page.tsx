"use client"; 
import React, { useState } from "react";

    const page = () => {
        const [selectedSize, setSelectedSize] = useState(null);

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
        <div className="bg-black">
        <div className="flex gap-52 bg-black">
            <div className=" min-h-screen flex justify-center items-center pl-80 mt-[-300px]">

  <div className="relative flex">
    
    <div className="flex flex-col space-y-2">
      
      <img
        src="/products/product-5.png"
        alt="Thumbnail 1"
        className="w-16 h-16 object-cover rounded-md border border-gray-700 hover:opacity-80 cursor-pointer"
      />
      <img
        src="/products/product-5.png"
        alt="Thumbnail 2"
        className="w-16 h-16 object-cover rounded-md border border-gray-700 hover:opacity-80 cursor-pointer"
      />
      <img
        src="/products/product-5.png"
        alt="Thumbnail 3"
        className="w-16 h-16 object-cover rounded-md border border-gray-700 hover:opacity-80 cursor-pointer"
      />
      <img
        src="/products/product-5.png"
        alt="Thumbnail 4"
        className="w-16 h-16 object-cover rounded-md border border-gray-700 hover:opacity-80 cursor-pointer"
      />
      <img
        src="/products/product-5.png"
        alt="Thumbnail 5"
        className="w-16 h-16 object-cover rounded-md border border-gray-700 hover:opacity-80 cursor-pointer"
      />
    </div>

    
    <div className="relative ml-4">
      <img
        src="/products/product-5.png"
        alt="Kimono Main"
        className="w-96 h-auto object-cover rounded-lg"
      />

     
      <div className="absolute top-2 left-2 bg-white text-black text-sm px-2 py-1 rounded-md shadow-md">
        Highly Rated
      </div>

     
      <div className="absolute bottom-2 right-2 flex space-x-2">
        <button className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-800">
          ←
        </button>
        <button className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-800">
          →
        </button>
      </div>
    </div>
  </div>
</div>

<div className="bg-black text-white min-h-screen p-6 space-y-6">
      {/* Top Section - Price and Images */}
      <div>
        <h1 className="text-xl font-bold mb-2">$100</h1>
        <div className="flex space-x-2 overflow-x-scroll">
        <img
        src="/products/product-5.png"
        alt="Thumbnail 2"
        className="w-16 h-16 object-cover rounded-md border border-gray-700 hover:opacity-80 cursor-pointer"
      />
      <img
        src="/products/product-5.png"
        alt="Thumbnail 2"
        className="w-16 h-16 object-cover rounded-md border border-gray-700 hover:opacity-80 cursor-pointer"
      />
      <img
        src="/products/product-5.png"
        alt="Thumbnail 2"
        className="w-16 h-16 object-cover rounded-md border border-gray-700 hover:opacity-80 cursor-pointer"
      />
      <img
        src="/products/product-5.png"
        alt="Thumbnail 2"
        className="w-16 h-16 object-cover rounded-md border border-gray-700 hover:opacity-80 cursor-pointer"
      />
      <img
        src="/products/product-5.png"
        alt="Thumbnail 2"
        className="w-16 h-16 object-cover rounded-md border border-gray-700 hover:opacity-80 cursor-pointer"
      />
      <img
        src="/products/product-5.png"
        alt="Thumbnail 2"
        className="w-16 h-16 object-cover rounded-md border border-gray-700 hover:opacity-80 cursor-pointer"
      />
      <img
        src="/products/product-5.png"
        alt="Thumbnail 2"
        className="w-16 h-16 object-cover rounded-md border border-gray-700 hover:opacity-80 cursor-pointer"
      />
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Select Size</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
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
        <button className="w-full bg-white text-black py-2 rounded font-bold hover:bg-gray-200">
          Learn More
        </button>
        <button className="w-full bg-orange-500 py-2 rounded font-bold hover:bg-orange-600">
          Add to Bag
        </button>
        <button className="w-full border border-gray-700 py-2 rounded text-gray-400 hover:bg-gray-800">
          Favorite ♡
        </button>
      </div>

      {/* Shipping Information */}
      <div className="border-t border-gray-700 pt-4 text-sm text-gray-400">
        <p>Shipping</p>
        <p>You’ll see our shipping options at checkout.</p>
        <p className="mt-2">Free Pickup</p>
        <p className="text-orange-500 cursor-pointer underline">Find a Store</p>
        <div className="mt-4">
          <p>Style: 7235621</p>
          <p>Color: Varsity Gold/White</p>
        </div>
      </div>

      {/* Product Details Toggle */}
      <div>
        <button
          onClick={() => alert("Toggle Product Details")}
          className="w-full text-left border-t border-gray-700 pt-4 text-sm text-orange-500 cursor-pointer underline"
        >
          View Product Details
        </button>
      </div>

      {/* Shipping & Returns */}
      <div>
        <button
          onClick={() => alert("Toggle Shipping & Returns")}
          className="w-full text-left border-t border-gray-700 pt-4 text-sm text-orange-500 cursor-pointer underline"
        >
          Shipping & Returns
        </button>
      </div>
    </div>
    </div>

    <div className="mt-10 flex items-center justify-between px-4 sm:px-12 md:px-24 lg:px-72">
        <div className="text-xl font-bold">
          You Might Also Like
        </div>
        <div className="flex items-center">
          <div className="h-6 w-6 rounded-full bg-white mr-2"> </div>
          <div className="h-6 w-6 rounded-full bg-white"></div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Repeated Kimono Display Blocks */}
          {/* Example Block */}
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

        
    )
    }

    export default page