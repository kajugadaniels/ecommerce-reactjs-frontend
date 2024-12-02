import React from 'react';

const Men = () => {
  return <div className="min-h-screen bg-black text-white flex flex-col">
  {/* Back Button */}
  <div className="flex items-center p-4">
    <button className="text-orange-500 font-bold flex items-center ml-4 sm:ml-12 md:ml-24 lg:ml-72">
      <span className="mr-2">🠔</span> BACK
    </button>
  </div>

  {/* Main Content */}
  <div className="flex flex-col md:flex-row justify-center lg:items-start md:items-start mx-auto mt-6 md:mt-12 w-11/12 max-w-7xl">
    {/* Kimono Image Section */}
    <div className="bg-gray-800 rounded-md p-6 flex justify-center items-center w-full md:w-1/2">
      <img
        src="/products/product-5.png" 
        alt="Kimono"
        className="w-3/4 md:w-2/3"
      />
    </div>

    {/* Customization Section */}
    <div className="bg-black text-white md:w-1/2 w-full mt-8 md:mt-0 md:ml-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4">
        Kimono Belt Unlocked By You
      </h2>
      <p className="text-sm md:text-base mb-6">
        Customize your own kimono
      </p>
      <p className="font-semibold mr-2">Inspiration</p>
      <hr className='w-96' />

      {/* Inspiration Image */}
      <div className="flex items-center mt-4 bg-white w-10">
        <img
          src="/products/product-5.png"
          alt="Inspiration"
          className="w-10 h-10 rounded-md"
        />
      </div>

      {/* Design Options */}
      <div className="bg-black text-white p-8">
        <div className='flex justify-between'>
          <h2 className="text-xl font-bold mb-4">
            Select Design
          </h2>
          <h2 className="text-xl font-bold mb-4">
            Size Guide
          </h2>
        </div>
        <div className=" mb-4">Design 1</div>
        <div className="mb-4">Design 2</div>
        <div className="mb-4">Design 3</div>
        <div className="mb-4">Design 4</div>
      </div>

      {/* Price and Size Guide */}
      <div className="flex justify-between items-center mb-6">
        <p className="font-semibold text-lg">Price: $150</p>
      </div>

      {/* Next Button */}
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 px-8 md:px-72 rounded-full flex items-center space-x-2">
        <span>NEXT</span>
        <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>

  {/* Recommendation Section */}
  <div className="flex items-center justify-between mt-10 px-4 sm:px-12 md:px-24 lg:px-72">
    <div className="text-xl font-bold">
      You Might Also Like
    </div>
    <div className="flex items-center">
      <div className="h-6 w-6 bg-white rounded-full mr-2"> </div>
      <div className="h-6 w-6 bg-white rounded-full"></div>
    </div>
  </div>

  {/* Grid Section */}
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
</div>;
};

export default Men;
