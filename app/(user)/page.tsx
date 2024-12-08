import React from 'react';
import Hero from '@/components/Hero';

const Home = () => {
  return (
    <>
      <Hero />

      <div className="bg-black pb-10 pt-10 font-sans">
        <div className="container mx-auto px-4 lg:px-24">
          <div className="mb-12 text-center">
            <h2 className="text-lg font-semibold text-[#D87D4A] sm:text-xl">
              Enso By You
            </h2>
            <h1 className="mb-4 text-3xl font-extrabold text-[#D87D4A] sm:text-4xl">
              Enso Collections Wardrobe
            </h1>
            <p className="mx-auto mt-2 max-w-xl text-sm text-white sm:max-w-2xl">
              Let`s find out! Be just who you are by putting more youness in
              your kimononess with Enso By You, Enso co-creation service for
              Members. A little more of this, a little less of that—just have
              fun customizing a shoe that feels more like you.
            </p>
            <button className="mt-4 rounded-full bg-white px-8 py-3 text-black transition hover:bg-gray-200 sm:px-16 sm:py-4">
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
                  className="relative cursor-pointer rounded-2xl bg-transparent p-5 transition-all hover:-translate-y-2"
                >
                  <div className="aspect-w-16 aspect-h-8 mx-auto mb-4 h-[210px] w-5/6 overflow-hidden md:mb-2">
                    <img
                      src={`/products/product-${idx + 1}.png`}
                      alt="Name"
                      className="w-full object-contain"
                    />
                  </div>
                  <div className="h-[80px] rounded-xl bg-white px-10">
                    <h3 className="pt-2 text-center text-lg font-extrabold text-gray-800">
                      Name
                    </h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="bg-black pb-10 pt-10 font-sans">
        <div className="container mx-auto px-4 lg:px-24">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
              Choose a So-You Kimono
            </h1>
            <p className="mx-auto mt-2 max-w-xl text-sm text-white sm:max-w-2xl">
              Whether you`re remixing a classic into something never seen before
              or simplifying the latest drop into a totally neutral palette,
              your customization journey starts with choosing a shoe. Luckily,
              we`re always adding newness so you can find the just-right way to
              express your style.
            </p>
            <button className="mt-4 rounded-full bg-white px-8 py-3 text-black transition hover:bg-gray-200 sm:px-16 sm:py-4">
              Start Customizing
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex w-full flex-col rounded bg-[#000] p-6 sm:flex-row sm:px-8">
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
                  className="h-auto w-full object-cover"
                  alt="Product"
                />
              </div>
            </div>

            <div className="flex w-full flex-col rounded bg-[#D87D4A] p-6 sm:flex-row sm:px-8">
              <div className="flex-shrink-0">
                <img
                  src="/products/product-3.png"
                  className="h-auto w-full object-cover"
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
            <div className="relative left-8 top-16 w-full max-w-xs rounded-lg bg-white p-5 shadow-lg sm:left-32 sm:top-24 sm:w-80">
              <img
                src="/products/product-5.png"
                alt="Customizable Product"
                className="mb-4 h-auto w-full"
              />

              <div className="text-center">
                <div className="mb-4 flex items-center justify-between">
                  <button className="text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
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
                      className="h-6 w-6"
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

                <div className="mb-4 flex justify-center gap-2">
                  <button className="rounded-full border border-gray-300 px-4 py-2 text-sm text-black">
                    Leather
                  </button>
                  <button className="rounded-full border border-gray-300 px-4 py-2 text-sm text-black">
                    Canvas
                  </button>
                </div>

                <div className="mb-4 flex justify-center gap-2">
                  <span className="block h-6 w-6 rounded-full border border-gray-300 bg-pink-300"></span>
                  <span className="block h-6 w-6 rounded-full border border-gray-300 bg-yellow-400"></span>
                  <span className="block h-6 w-6 rounded-full border border-gray-300 bg-green-500"></span>
                </div>

                <button className="rounded-full bg-black px-8 py-2 text-white transition hover:bg-gray-800">
                  Done
                </button>
              </div>
            </div>
          </div> */}
          <div className="mt-24 text-center">
            <h1 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
              What`s your PHD?
            </h1>
            <p className="mx-auto mt-2 max-w-xl text-sm text-white sm:max-w-2xl">
              Like your shoe signature, your Personal I.D. is any combo of
              letters and numbers that rep you. Maybe its a nickname, a mantra,
              or your computer password. Pick your P.I.D., and show the world
              who this signature shoe belongs to.
            </p>
            <button className="mt-4 rounded-full bg-white px-8 py-3 text-black transition hover:bg-gray-200 sm:px-16 sm:py-4">
              Custom
            </button>
          </div>
          <div className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Products Section */}

            <div className="relative cursor-pointer rounded-2xl bg-transparent p-5 transition-all hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-8 mx-auto mb-4 overflow-hidden">
                <img
                  src="/products/product-6.png"
                  className="h-auto w-full object-cover"
                  alt="Product"
                />
              </div>
            </div>
            <div className="relative cursor-pointer rounded-2xl bg-transparent p-5 transition-all hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-8 mx-auto mb-4 overflow-hidden">
                <img
                  src="/products/product-6.png"
                  className="h-auto w-full object-cover"
                  alt="Product"
                />
              </div>
            </div>
            <div className="relative cursor-pointer rounded-2xl bg-transparent p-5 transition-all hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-8 mx-auto mb-4 overflow-hidden">
                <img
                  src="/products/product-6.png"
                  className="h-auto w-full object-cover"
                  alt="Product"
                />
              </div>
            </div>
            <div className="relative cursor-pointer rounded-2xl bg-transparent p-5 transition-all hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-8 mx-auto mb-4 overflow-hidden">
                <img
                  src="/products/product-6.png"
                  className="h-auto w-full object-cover"
                  alt="Product"
                />
              </div>
            </div>
          </div>

          <h2 className="mt-8 text-center text-2xl font-extrabold text-[#D87D4A] sm:text-3xl lg:text-4xl">
            The Team
          </h2>

          <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Team Section */}
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="relative flex cursor-pointer items-end justify-center rounded-2xl bg-transparent p-5 hover:-translate-y-2"
                  style={{ height: '350px' }}
                >
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 transform">
                    <img
                      src="/hero/team.png"
                      alt="Team Member"
                      className="mt-16 h-auto w-28 object-contain sm:w-36 md:w-40"
                    />
                  </div>
                  <div className="h-40 w-full max-w-sm rounded-xl bg-white p-4 text-center text-black shadow-lg md:h-52">
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
