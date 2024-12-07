import React from 'react'

const Men = () => {
  return (
    <div className="text-white bg-[#121212]">
      {/* Hero Section */}
      <div className="relative flex flex-col-reverse items-center lg:flex-row">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/hero/image.png"
            alt="Men's Collection"
            className="object-contain w-full h-full"
          />
        </div>
        {/* Text Section */}
        <div className="w-full p-8 lg:w-1/2 bg-opacity-70 lg:p-16">
          <h1 className="mb-4 text-4xl font-bold">MEN COLLECTIONS</h1>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore our carefully curated collection of modern styles. Elevate your wardrobe with the best of men's fashion.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore our carefully curated collection of modern styles. Elevate your wardrobe with the best of men's fashion.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="p-8 text-white bg-black sm:p-16">
        {/* Section Title */}
        <h2 className="mb-6 text-2xl font-semibold text-center">STYLES</h2>

        {/* Products Grid */}
        <div className="grid max-w-screen-lg grid-cols-1 gap-8 mx-auto sm:grid-cols-2">
          {/* Product Card Template */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex flex-col bg-gray-800 rounded">
              <div className="flex-1">
                <img
                  src={`/products/product-${index + 1}.png`}
                  alt={`Patry ${index + 1}`}
                  className="object-contain w-[350px] h-[350px] rounded"
                />
              </div>
              <div className="mt-4 bg-[rgba(0,0,0,0.5)] px-10 py-10">
                <h3 className="text-lg font-bold">PATRY {index + 1}</h3>
                <button className="px-6 py-3 mt-2 text-white transition bg-[#D87D4A] rounded-full">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Men