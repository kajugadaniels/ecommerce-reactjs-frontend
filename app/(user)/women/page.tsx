import React from 'react';

const Women = () => {
  return <div>
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/hero/image.png" // Replace with your image path
          alt="Men's Collection"
          className=" h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">MEN COLLECTIONS</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore our carefully curated collection of modern styles. Elevate your wardrobe with the best of men's fashion.
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-black text-white py-8 px-4">
      {/* Section Title */}
      <h2 className="text-center text-2xl font-semibold mb-6">STYLES</h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Product Card 1 */}
        <div className="bg-gray-800 p-4 w-96 rounded mx-auto">
          <img
            src="/products/product-3.png" // Replace with actual image path
            alt="Patry 1"
            className="h-[250px] object-cover mb-4"
          />
          <div className="text-center">
            <h3 className="font-bold text-lg">PATRY 1</h3>
            <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded">
              Explore
            </button>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="bg-gray-800 p-4 w-96 rounded mx-auto">
          <img
            src="/products/product-3.png" // Replace with actual image path
            alt="Patry 2"
            className="h-[250px] object-cover mb-4"
          />
          <div className="text-center">
            <h3 className="font-bold text-lg">PATRY 2</h3>
            <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded">
              Explore
            </button>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="bg-gray-800 p-4 w-96 rounded mx-auto">
          <img
            src="/products/product-3.png" // Replace with actual image path
            alt="Patry 3"
            className="h-[250px] object-cover mb-4"
          />
          <div className="text-center">
            <h3 className="font-bold text-lg">PATRY 3</h3>
            <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded">
              Explore
            </button>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="bg-gray-800 p-4 w-96 rounded mx-auto">
          <img
            src="/products/product-3.png" 
            alt="Patry 4"
            className="h-[250px] object-cover mb-4"
          />
          <div className="text-center">
            <h3 className="font-bold text-lg">PATRY 4</h3>
            <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>

  </div>;
};

export default Women;
