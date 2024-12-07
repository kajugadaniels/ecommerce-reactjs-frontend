import React from 'react';

const Men = () => {
  return <div className="flex flex-col min-h-screen text-white bg-black">
  {/* Back Button */}
  <div className="flex items-center p-4">
    <button className="flex items-center ml-4 font-bold text-orange-500 sm:ml-12 md:ml-24 lg:ml-72">
      <span className="mr-2">🠔</span> BACK
    </button>
  </div>

  {/* Main Content */}
  <div className="flex flex-col justify-center w-11/12 mx-auto mt-6 md:flex-row lg:items-start md:items-start md:mt-12 max-w-7xl">
    {/* Kimono Image Section */}
    <div className="flex items-center justify-center w-full p-6 bg-gray-800 rounded-md md:w-1/2">
      <img
        src="/products/product-5.png" 
        alt="Kimono"
        className="w-3/4 md:w-2/3"
      />
    </div>

    {/* Customization Section */}
    <div className="w-full mt-8 text-white bg-black md:w-1/2 md:mt-0 md:ml-8">
      <h2 className="mb-4 text-xl font-bold md:text-2xl">
        Kimono Belt Unlocked By You
      </h2>
      <p className="mb-6 text-sm md:text-base">
        Customize your own kimono
      </p>
      <p className="mr-2 font-semibold">Inspiration</p>
      <hr className='w-96' />

      {/* Inspiration Image */}
      <div className="flex items-center w-10 mt-4 bg-white">
        <img
          src="/products/product-5.png"
          alt="Inspiration"
          className="w-10 h-10 rounded-md"
        />
      </div>

      {/* Design Options */}
      <div className="p-8 text-white bg-black">
        <div className='flex justify-between'>
          <h2 className="mb-4 text-xl font-bold">
            Select Design
          </h2>
          <h2 className="mb-4 text-xl font-bold">
            Size Guide
          </h2>
        </div>
        <div className="mb-4 ">Design 1</div>
        <div className="mb-4">Design 2</div>
        <div className="mb-4">Design 3</div>
        <div className="mb-4">Design 4</div>
      </div>

      {/* Price and Size Guide */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-lg font-semibold">Price: $150</p>
      </div>

      {/* Next Button */}
      <button className="flex items-center px-8 py-4 space-x-2 font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 md:px-72">
        <span>NEXT</span>
        <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </div>

  {/* Recommendation Section */}
  <div className="flex items-center justify-between px-4 mt-10 sm:px-12 md:px-24 lg:px-72">
    <div className="text-xl font-bold">
      You Might Also Like
    </div>
    <div className="flex items-center">
      <div className="w-6 h-6 mr-2 bg-white rounded-full"> </div>
      <div className="w-6 h-6 bg-white rounded-full"></div>
    </div>
  </div>

  {/* Grid Section */}
  <div className="container px-4 mx-auto mt-10">
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
      <div className="overflow-hidden rounded-lg bg-gray-300 font-[sans-serif] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]">
        <div className="flex min-h-[256px] items-center justify-center">
          <img
            src="/products/product-5.png"
            alt="Name"
            className="w-[100%] object-contain"
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
      <div className="overflow-hidden rounded-lg bg-gray-300 font-[sans-serif] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]">
        <div className="flex min-h-[256px] items-center justify-center">
          <img
            src="/products/product-5.png"
            alt="Name"
            className="w-[100%] object-contain"
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
    </div>
  </div>
</div>;
};

export default Men;
