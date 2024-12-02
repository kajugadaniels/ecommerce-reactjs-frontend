import React from 'react';
import Hero from '@/components/Hero';

const Home = () => {
  return (
    <>
      <Hero />

      <div className="bg-black pb-10 pt-10 font-sans">
        <div className="mx-auto px-24 sm:max-w-full lg:max-w-fit">
          <div className="mb-12 text-center">
            <h2 className="text-xl font-semibold text-[#D87D4A]">
              Enso By You
            </h2>
            <h1 className="mb-4 text-4xl font-extrabold text-[#D87D4A]">
              Enso Collections Wardrobe
            </h1>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-white">
              Let's find out! Be just who you are by putting more youness in
              your kimononess with Enso By You, Enso co-creation service for
              Members. A little more of this, a little less of that—just have
              fun customizing a shoe that feels more like you.
            </p>
            <button className="mt-4 rounded-full bg-white px-16 py-4 text-[#000] transition hover:bg-gray-200">
              Shop
            </button>
            <h2 className="mt-8 text-4xl font-extrabold text-[#D87D4A]">
              Our Product
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 max-xl:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="relative cursor-pointer rounded-2xl bg-transparent p-5 transition-all hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-8 mx-auto mb-4 h-[210px] w-5/6 overflow-hidden md:mb-2">
                <img
                  src="/products/product-1.png"
                  alt="Name"
                  className="w-[100%] object-contain"
                />
              </div>

              <div className="h-[80px] rounded-xl bg-white px-10">
                <h3 className="pt-2 text-center text-lg font-extrabold text-gray-800">
                  Name
                </h3>
              </div>
            </div>
            <div className="relative cursor-pointer rounded-2xl bg-transparent p-5 transition-all hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-8 mx-auto mb-4 h-[210px] w-5/6 overflow-hidden md:mb-2">
                <img
                  src="/products/product-2.png"
                  alt="Name"
                  className="w-[100%] object-contain"
                />
              </div>

              <div className="h-[80px] rounded-xl bg-white px-10">
                <h3 className="pt-2 text-center text-lg font-extrabold text-gray-800">
                  Name
                </h3>
              </div>
            </div>
            <div className="relative cursor-pointer rounded-2xl bg-transparent p-5 transition-all hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-8 mx-auto mb-4 h-[210px] w-5/6 overflow-hidden md:mb-2">
                <img
                  src="/products/product-3.png"
                  alt="Name"
                  className="w-[100%] object-contain"
                />
              </div>

              <div className="h-[80px] rounded-xl bg-white px-10">
                <h3 className="pt-2 text-center text-lg font-extrabold text-gray-800">
                  Name
                </h3>
              </div>
            </div>
            <div className="relative cursor-pointer rounded-2xl bg-transparent p-5 transition-all hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-8 mx-auto mb-4 h-[210px] w-5/6 overflow-hidden md:mb-2">
                <img
                  src="/products/product-4.png"
                  alt="Name"
                  className="w-[100%] object-contain"
                />
              </div>

              <div className="h-[80px] rounded-xl bg-white px-10">
                <h3 className="pt-2 text-center text-lg font-extrabold text-gray-800">
                  Name
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black pb-10 pt-10 font-sans">
        <div className="mx-auto px-24 sm:max-w-full lg:max-w-fit">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-extrabold text-[#fff]">
              Choose a So-You Kimono
            </h1>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-white">
              Whether you’re remixing a classic into something never seen before
              or simplifying the latest drop into a totally neutral palette,
              your customization journey starts with choosing a shoe. Luckily,
              we’re always adding newness so you can find the just-right way to
              express your style.
            </p>
            <button className="mt-4 rounded-full bg-white px-16 py-4 text-[#000] transition hover:bg-gray-200">
              Start Customizing
            </button>
          </div>

          <div className="mx-auto max-w-full font-[sans-serif]">
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="flex w-full rounded bg-[#000] px-32 py-8 text-white max-sm:px-8">
                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    Bringing you the best KIMONO gear
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    Located at the heart of New York City, Audiophile is the
                    premier store for high end headphones, earphones, speakers,
                    and audio accessories. We have a large showroom and luxury
                    demonstration rooms available for you to browse and
                    experience a wide range of our products. Stop by our store
                    to meet some of the fantastic people who make Audiophile the
                    best place to buy your portable audio equipment.
                  </p>
                </div>
                <div className="h-full min-h-[100%] w-[1200px]">
                  <img
                    src="/products/product-2.png"
                    className="h-full w-[100%] object-cover"
                  />
                </div>
              </div>

              <div className="flex w-full rounded bg-[#D87D4A] px-32 py-12 max-sm:px-8">
                <div className="h-full min-h-[100%] w-[1200px]">
                  <img
                    src="/products/product-3.png"
                    className="h-full w-[100%] object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    Bringing you the best KIMONO gear
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white">
                    Located at the heart of New York City, Audiophile is the
                    premier store for high end headphones, earphones, speakers,
                    and audio accessories. We have a large showroom and luxury
                    demonstration rooms available for you to browse and
                    experience a wide range of our products. Stop by our store
                    to meet some of the fantastic people who make Audiophile the
                    best place to buy your portable audio equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-16"></div>
          <div
            className="h-[80vh] w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/hero/girl.png')" }}
          >
            <div className="relative left-32 top-24 w-80 rounded-lg bg-white p-5 shadow-lg">
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
                  <p className="text-sm font-semibold text-black">
                    Foxing 7/12
                  </p>
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
          </div>
          <div className="mt-32 text-center">
            <h1 className="mb-4 text-4xl font-semibold text-white">
              What's your PHD{' '}
            </h1>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-white">
              Like your shoe signature, your Personal I.D. is any combo of
              letters and numbers that rep you. Maybe it's a nickname, a mantra,
              or your computer password (wait, probably not a good idea). It can
              be almost anything! Pick your P.I.D., and show the world who this
              signature shoe belongs to.
            </p>
            <button className="mt-4 rounded-full bg-white px-16 py-4 text-[#000] transition hover:bg-gray-200">
              Custom
            </button>
          </div>

          <div className="mt-24 grid grid-cols-1 gap-6 max-xl:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="relative cursor-pointer rounded-2xl bg-transparent p-5 transition-all hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-8 mx-auto mb-4 overflow-hidden md:mb-2">
                <img
                  src="/products/product-6.png"
                  alt="Name"
                  className="w-[100%] object-contain"
                />
              </div>
            </div>
            <div className="relative cursor-pointer rounded-2xl bg-transparent p-5 transition-all hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-8 mx-auto mb-4 overflow-hidden md:mb-2">
                <img
                  src="/products/product-6.png"
                  alt="Name"
                  className="w-[100%] object-contain"
                />
              </div>
            </div>
            <div className="relative cursor-pointer rounded-2xl bg-transparent p-5 transition-all hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-8 mx-auto mb-4 overflow-hidden md:mb-2">
                <img
                  src="/products/product-6.png"
                  alt="Name"
                  className="w-[100%] object-contain"
                />
              </div>
            </div>
            <div className="relative cursor-pointer rounded-2xl bg-transparent p-5 transition-all hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-8 mx-auto mb-4 overflow-hidden md:mb-2">
                <img
                  src="/products/product-6.png"
                  alt="Name"
                  className="w-[100%] object-contain"
                />
              </div>
            </div>
          </div>
          <h2 className="ml-[800px] mt-8 text-4xl font-extrabold text-[#D87D4A]">
            The Team{' '}
          </h2>

          <div className="ml-64 mt-20 grid grid-cols-1 gap-6 max-xl:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div
              className="relative flex cursor-pointer items-end justify-center rounded-2xl bg-transparent p-5 hover:-translate-y-2"
              style={{ height: '350px' }}
            >
              {' '}
              {/* Adjust height as needed */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 transform">
                <img
                  src="/hero/team.png"
                  alt="Team Member"
                  className="mt-16 h-auto w-40 object-contain"
                />
              </div>
              <div className="h-52 w-96 rounded-xl bg-white p-4 text-center text-black shadow-lg">
                <div className="mt-32">
                  <p className="top-0 text-xl font-semibold text-black">Name</p>
                  <p className="text-xl text-black">Title</p>
                </div>
              </div>
            </div>

            <div
              className="relative flex cursor-pointer items-end justify-center rounded-2xl bg-transparent p-5 hover:-translate-y-2"
              style={{ height: '350px' }}
            >
              {' '}
              {/* Adjust height as needed */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 transform">
                <img
                  src="/hero/team.png"
                  alt="Team Member"
                  className="mt-16 h-auto w-40 object-contain"
                />
              </div>
              <div className="h-52 w-96 rounded-xl bg-white p-4 text-center text-black shadow-lg">
                <div className="mt-32">
                  <p className="top-0 text-xl font-semibold text-black">Name</p>
                  <p className="text-xl text-black">Title</p>
                </div>
              </div>
            </div>
            <div
              className="relative flex cursor-pointer items-end justify-center rounded-2xl bg-transparent p-5 hover:-translate-y-2"
              style={{ height: '350px' }}
            >
              {' '}
              {/* Adjust height as needed */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 transform">
                <img
                  src="/hero/team.png"
                  alt="Team Member"
                  className="mt-16 h-auto w-40 object-contain"
                />
              </div>
              <div className="h-52 w-96 rounded-xl bg-white p-4 text-center text-black shadow-lg">
                <div className="mt-32">
                  <p className="top-0 text-xl font-semibold text-black">Name</p>
                  <p className="text-xl text-black">Title</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
