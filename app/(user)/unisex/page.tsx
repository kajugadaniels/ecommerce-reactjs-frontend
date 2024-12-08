import React from 'react';

const Unisex = () => {
  return (
    <div className="bg-[#121212] text-white">
      {/* Hero Section */}
      <div className="relative flex flex-col-reverse items-center lg:flex-row">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/hero/image.png"
            alt="Men's Collection"
            className="h-full w-full object-contain"
          />
        </div>
        {/* Text Section */}
        <div className="w-full bg-opacity-70 p-8 lg:w-1/2 lg:p-16">
          <h1 className="mb-4 text-4xl font-bold">UNISEX COLLECTIONS</h1>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore our
            carefully curated collection of modern styles. Elevate your wardrobe
            with the best of men`s fashion.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore our
            carefully curated collection of modern styles. Elevate your wardrobe
            with the best of men`s fashion.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-black p-8 text-white sm:p-16">
        {/* Section Title */}
        <h2 className="mb-6 text-center text-2xl font-semibold">STYLES</h2>

        {/* Products Grid */}
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Product Card Template */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex flex-col rounded bg-gray-800">
              <div className="flex-1">
                <img
                  src={`/products/product-${index + 1}.png`}
                  alt={`Patry ${index + 1}`}
                  className="h-[350px] w-[350px] rounded object-contain"
                />
              </div>
              <div className="mt-4 bg-[rgba(0,0,0,0.5)] px-10 py-10">
                <h3 className="text-lg font-bold">PATRY {index + 1}</h3>
                <button className="mt-2 rounded-full bg-[#D87D4A] px-6 py-3 text-white transition">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Unisex;
