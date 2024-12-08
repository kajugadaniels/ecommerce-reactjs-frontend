import React from 'react';

const Unisex = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Back Button */}
      <div className="flex items-center p-4">
        <button className="ml-4 flex items-center font-bold text-orange-500">
          <span className="mr-2">🠔</span> BACK
        </button>
      </div>

      {/* Main Content */}
      <div className="mx-auto mt-6 flex w-11/12 max-w-7xl flex-col justify-center md:mt-12 md:flex-row md:items-start lg:items-start">
        {/* Kimono Image Section */}
        <div className="flex w-full items-center justify-center rounded-md bg-gray-800 p-6 md:w-1/2">
          <img
            src="/products/product-5.png"
            alt="Kimono"
            className="w-3/4 md:w-2/3"
          />
        </div>

        {/* Customization Section */}
        <div className="mt-8 w-full bg-black text-white md:ml-8 md:mt-0 md:w-1/2">
          <h2 className="mb-4 text-xl font-bold text-orange-500 md:text-2xl">
            Kimono Belt Unlocked By You
          </h2>
          <p className="mb-6 text-sm md:text-base">Customize your own kimono</p>
          <p className="mr-2 font-semibold">Inspiration</p>
          <hr className="w-96" />

          {/* Inspiration Image */}
          <div className="mt-4 flex w-10 items-center bg-white">
            <img
              src="/products/product-5.png"
              alt="Inspiration"
              className="h-10 w-10 rounded-md"
            />
          </div>

          {/* Design Options */}
          <div className="bg-black p-8 text-white">
            <div className="flex justify-between">
              <h2 className="mb-4 text-xl font-bold">Select Design</h2>
              <h2 className="mb-4 text-xl font-bold">Size Guide</h2>
            </div>
            <div className="mb-4">Design 1</div>
            <div className="mb-4">Design 2</div>
            <div className="mb-4">Design 3</div>
            <div className="mb-4">Design 4</div>
          </div>

          {/* Price and Size Guide */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-lg font-semibold">Price: $150</p>
          </div>

          {/* Next Button */}
          <button className="flex items-center space-x-2 rounded-full bg-orange-500 px-8 py-4 font-medium text-white hover:bg-orange-600 md:px-72">
            <span>NEXT</span>
            <svg
              className="h-4 w-4"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Recommendation Section */}
      <div className="mt-10 flex items-center justify-between px-4 sm:px-12 md:px-24 lg:px-72">
        <div className="text-xl font-bold">You Might Also Like</div>
        <div className="flex items-center">
          <div className="mr-2 h-6 w-6 rounded-full bg-white"> </div>
          <div className="h-6 w-6 rounded-full bg-white"></div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="container mx-auto mt-10 px-4">
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
  );
};

export default Unisex;
