import React from 'react';
import Hero from '@/components/Hero';

const Home = () => {
  return (
    <>
      <Hero />

      <div className="pt-10 pb-10 font-sans bg-black">
        <div className="container px-4 mx-auto lg:px-24">
          <div className="mb-12 text-center">
            <h2 className="text-lg font-semibold text-[#D87D4A] sm:text-xl">
              Enso By You
            </h2>
            <h1 className="mb-4 text-3xl font-extrabold text-[#D87D4A] sm:text-4xl">
              Enso Collections Wardrobe
            </h1>
            <p className="max-w-xl mx-auto mt-2 text-sm text-white sm:max-w-2xl">
              Let's find out! Be just who you are by putting more youness in
              your kimononess with Enso By You, Enso co-creation service for
              Members. A little more of this, a little less of that—just have
              fun customizing a shoe that feels more like you.
            </p>
            <button className="px-8 py-3 mt-4 text-black transition bg-white rounded-full hover:bg-gray-200 sm:px-16 sm:py-4">
              Shop
            </button>
            <h2 className="mt-8 text-3xl font-extrabold text-[#D87D4A] sm:text-4xl">
              Our Product
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array(4)
        .fill(0)
        .map((_, idx) => (
          <div
            key={idx}
            className="relative p-5 transition-all shadow-lg cursor-pointer rounded-2xl hover:-translate-y-2"
            style={{
              background: 'linear-gradient(to bottom, #000000 50%, #FFFFFF 50%)',
            }}
          >
            <div className="aspect-w-16 aspect-h-8 mx-auto mb-4 h-[210px] w-5/6 overflow-hidden md:mb-2">
              <img
                src={`/products/product-${idx + 1}.png`}
                alt={`Product ${idx + 1}`}
                className="object-contain w-full"
              />
            </div>
            <div className="flex items-center justify-center px-10 py-2">
              <h3 className="text-lg font-extrabold text-center text-gray-800">
                Product Name
              </h3>
            </div>
          </div>
        ))}
    </div>
        </div>
      </div>

      <div className="pt-10 pb-10 font-sans bg-black">
        <div className="container px-4 mx-auto lg:px-24">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
              Choose a So-You Kimono
            </h1>
            <p className="max-w-xl mx-auto mt-2 text-sm text-white sm:max-w-2xl">
              Whether you’re remixing a classic into something never seen before
              or simplifying the latest drop into a totally neutral palette,
              your customization journey starts with choosing a shoe. Luckily,
              we’re always adding newness so you can find the just-right way to
              express your style.
            </p>
            <button className="px-8 py-3 mt-4 text-black transition bg-white rounded-full hover:bg-gray-200 sm:px-16 sm:py-4">
              Start Customizing
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex w-full flex-col sm:flex-row rounded bg-[#000] p-6 sm:px-8">
              <div className="p-4">
                <h3 className="text-lg font-semibold sm:text-xl">
                  Bringing you the best KIMONO gear
                </h3>
                <p className="mt-3 text-sm text-gray-400">
                  Located at the heart of New York City, Audiophile is the
                  premier store for high end headphones, earphones, speakers,
                  and audio accessories. We have a large showroom and luxury
                  demonstration rooms available for you to browse and experience
                  a wide range of our products.
                </p>
              </div>
              <div className="flex-shrink-0">
                <img
                  src="/products/product-2.png"
                  className="object-cover w-full h-auto"
                  alt="Product"
                />
              </div>
            </div>

            <div className="flex w-full flex-col sm:flex-row rounded bg-[#D87D4A] p-6 sm:px-8">
              <div className="flex-shrink-0">
                <img
                  src="/products/product-3.png"
                  className="object-cover w-full h-auto"
                  alt="Product"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold sm:text-xl">
                  Bringing you the best KIMONO gear
                </h3>
                <p className="mt-3 text-sm text-white">
                  Located at the heart of New York City, Audiophile is the
                  premier store for high end headphones, earphones, speakers,
                  and audio accessories. We have a large showroom and luxury
                  demonstration rooms available for you to browse and experience
                  a wide range of our products.
                </p>
              </div>
            </div>
          </div>
          {/* <div
      className="h-[100vh] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/hero/image.png')" }}
    >
            <div className="relative w-full max-w-xs p-5 bg-white rounded-lg shadow-lg left-8 top-16 sm:left-32 sm:top-24 sm:w-80">
              <img
                src="/products/product-5.png"
                alt="Customizable Product"
                className="w-full h-auto mb-4"
              />

              <div className="text-center">
                <div className="flex items-center justify-between mb-4">
                  <button className="text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <p className="text-sm font-semibold text-black">Foxing 7/12</p>
                  <button className="text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex justify-center gap-2 mb-4">
                  <button className="px-4 py-2 text-sm text-black border border-gray-300 rounded-full">
                    Leather
                  </button>
                  <button className="px-4 py-2 text-sm text-black border border-gray-300 rounded-full">
                    Canvas
                  </button>
                </div>

                <div className="flex justify-center gap-2 mb-4">
                  <span className="block w-6 h-6 bg-pink-300 border border-gray-300 rounded-full"></span>
                  <span className="block w-6 h-6 bg-yellow-400 border border-gray-300 rounded-full"></span>
                  <span className="block w-6 h-6 bg-green-500 border border-gray-300 rounded-full"></span>
                </div>

                <button className="px-8 py-2 text-white transition bg-black rounded-full hover:bg-gray-800">
                  Done
                </button>
              </div>
            </div>
          </div> */}
          <div className="mt-24 text-center">
            <h1 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
              What's your PHD?
            </h1>
            <p className="max-w-xl mx-auto mt-2 text-sm text-white sm:max-w-2xl">
              Like your shoe signature, your Personal I.D. is any combo of
              letters and numbers that rep you. Maybe it's a nickname, a mantra,
              or your computer password. Pick your P.I.D., and show the world
              who this signature shoe belongs to.
            </p>
            <button className="px-8 py-3 mt-4 text-black transition bg-white rounded-full hover:bg-gray-200 sm:px-16 sm:py-4">
              Custom
            </button>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Products Section */}

            <div

              className="relative p-5 transition-all bg-transparent cursor-pointer rounded-2xl hover:-translate-y-2"
            >
              <div className="mx-auto mb-4 overflow-hidden aspect-w-16 aspect-h-8">
                <img
                  src="/products/product-6.png"
                  className="object-cover w-full h-auto"
                  alt="Product"
                />
              </div>
            </div>
            <div

              className="relative p-5 transition-all bg-transparent cursor-pointer rounded-2xl hover:-translate-y-2"
            >
              <div className="mx-auto mb-4 overflow-hidden aspect-w-16 aspect-h-8">
                <img
                  src="/products/product-6.png"
                  className="object-cover w-full h-auto"
                  alt="Product"
                />
              </div>
            </div>
            <div

              className="relative p-5 transition-all bg-transparent cursor-pointer rounded-2xl hover:-translate-y-2"
            >
              <div className="mx-auto mb-4 overflow-hidden aspect-w-16 aspect-h-8">
                <img
                  src="/products/product-6.png"
                  className="object-cover w-full h-auto"
                  alt="Product"
                />
              </div>
            </div>
            <div

              className="relative p-5 transition-all bg-transparent cursor-pointer rounded-2xl hover:-translate-y-2"
            >
              <div className="mx-auto mb-4 overflow-hidden aspect-w-16 aspect-h-8">
                <img
                  src="/products/product-6.png"
                  className="object-cover w-full h-auto"
                  alt="Product"
                />
              </div>
            </div>

          </div>

          <h2 className="mt-8 text-center text-2xl font-extrabold text-[#D87D4A] sm:text-3xl lg:text-4xl">
            The Team
          </h2>

          <div className="grid grid-cols-1 gap-6 mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Team Section */}
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="relative flex items-end justify-center p-5 bg-transparent cursor-pointer rounded-2xl hover:-translate-y-2"
                  style={{ height: '350px' }}
                >
                  <div className="absolute top-0 transform -translate-x-1/2 left-1/2 -translate-y-1/3">
                    <img
                      src="/hero/team.png"
                      alt="Team Member"
                      className="object-contain h-auto mt-16 w-28 sm:w-36 md:w-40"
                    />
                  </div>
                  <div className="w-full h-40 max-w-sm p-4 text-center text-black bg-white shadow-lg rounded-xl md:h-52">
                    <div className="mt-16 md:mt-32">
                      <p className="text-lg font-semibold text-black md:text-xl">
                        Name
                      </p>
                      <p className="text-sm text-gray-600 md:text-xl">Title</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
