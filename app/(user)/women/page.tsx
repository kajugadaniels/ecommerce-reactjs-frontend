import React from 'react';

const Women = () => {
  return (
    <div>
      <div className="bg-gray-900 text-white">
        {/* Hero Section */}
        <div className="relative">
          <img
            src="/hero/image.png"
            alt="Men's Collection"
            className="h-[400px] object-cover"
          />
          <div className="absolute inset-0 ml-96 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold">MEN COLLECTIONS</h1>
              <p className="mx-auto max-w-2xl text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore
                our carefully curated collection of modern styles. Elevate your
                wardrobe with the best of men`s fashion. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Explore our carefully curated
                collection of modern styles. Elevate your wardrobe with the best
                of men`s fashion.
              </p>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-black p-16 text-white">
          {/* Section Title */}
          <h2 className="mb-6 text-center text-2xl font-semibold">STYLES</h2>

          {/* Products Grid */}
          <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {/* Product Card 1 */}
            <div className="rounded bg-gray-800 p-4">
              <img
                src="/products/product-3.png"
                alt="Patry 1"
                className="mb-4 h-[250px] object-cover"
              />
              <div className="text-center">
                <h3 className="text-lg font-bold">PATRY 1</h3>
                <button className="mt-2 rounded bg-orange-500 px-4 py-2 text-white">
                  Explore
                </button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="rounded bg-gray-800 p-4">
              <img
                src="/products/product-3.png"
                alt="Patry 2"
                className="mb-4 h-[250px] object-cover"
              />
              <div className="text-center">
                <h3 className="text-lg font-bold">PATRY 2</h3>
                <button className="mt-2 rounded bg-orange-500 px-4 py-2 text-white">
                  Explore
                </button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="rounded bg-gray-800 p-4">
              <img
                src="/products/product-3.png"
                alt="Patry 3"
                className="mb-4 h-[250px] object-cover"
              />
              <div className="text-center">
                <h3 className="text-lg font-bold">PATRY 3</h3>
                <button className="mt-2 rounded bg-orange-500 px-4 py-2 text-white">
                  Explore
                </button>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="rounded bg-gray-800 p-4">
              <img
                src="/products/product-3.png"
                alt="Patry 4"
                className="mb-4 h-[250px] object-cover"
              />
              <div className="text-center">
                <h3 className="text-lg font-bold">PATRY 4</h3>
                <button className="mt-2 rounded bg-orange-500 px-4 py-2 text-white">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Women;
