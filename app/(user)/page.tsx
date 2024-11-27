import React from 'react';
import Hero from '@/components/Hero';

const Home = () => {
  return (
    <>
      <Hero />

      <div className="pt-10 pb-10 font-sans bg-black">
        <div className="px-24 mx-auto lg:max-w-fit sm:max-w-full">
          <div className="mb-12 text-center">
            <h2 className="text-xl font-semibold text-[#D87D4A]">Enso By You</h2>
            <h1 className="text-4xl font-extrabold text-[#D87D4A] mb-4">Enso Collections Wardrobe</h1>
            <p className="max-w-2xl mx-auto mt-2 text-sm text-white">
              Let's find out! Be just who you are by putting more youness in your kimononess with Enso By You, Enso co-creation service for Members. A little more of this, a little less of that—just have fun customizing a shoe that feels more like you.
            </p>
            <button className="mt-4 bg-white text-[#000] rounded-full px-16 py-4 hover:bg-gray-200 transition">
              Shop
            </button>
            <h2 className="text-4xl font-extrabold text-[#D87D4A] mt-8">Our Product</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4">
            <div className="relative p-5 transition-all bg-transparent cursor-pointer rounded-2xl hover:-translate-y-2">
              <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img src="/products/product-1.png" alt="Name" className="object-contain w-[100%]" />
              </div>

              <div className='px-10 bg-white h-[80px] rounded-xl'>
                <h3 className="pt-2 text-lg font-extrabold text-center text-gray-800">Name</h3>
              </div>
            </div>
            <div className="relative p-5 transition-all bg-transparent cursor-pointer rounded-2xl hover:-translate-y-2">
              <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img src="/products/product-2.png" alt="Name" className="object-contain w-[100%]" />
              </div>

              <div className='px-10 bg-white h-[80px] rounded-xl'>
                <h3 className="pt-2 text-lg font-extrabold text-center text-gray-800">Name</h3>
              </div>
            </div>
            <div className="relative p-5 transition-all bg-transparent cursor-pointer rounded-2xl hover:-translate-y-2">
              <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img src="/products/product-3.png" alt="Name" className="object-contain w-[100%]" />
              </div>

              <div className='px-10 bg-white h-[80px] rounded-xl'>
                <h3 className="pt-2 text-lg font-extrabold text-center text-gray-800">Name</h3>
              </div>
            </div>
            <div className="relative p-5 transition-all bg-transparent cursor-pointer rounded-2xl hover:-translate-y-2">
              <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img src="/products/product-4.png" alt="Name" className="object-contain w-[100%]" />
              </div>

              <div className='px-10 bg-white h-[80px] rounded-xl'>
                <h3 className="pt-2 text-lg font-extrabold text-center text-gray-800">Name</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-10 font-sans bg-black">
        <div className="px-24 mx-auto lg:max-w-fit sm:max-w-full">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold text-[#fff] mb-4">Choose a So-You Kimono</h1>
            <p className="max-w-2xl mx-auto mt-2 text-sm text-white">
              Whether you’re remixing a classic into something never seen before or simplifying the latest drop into a totally neutral palette, your customization journey starts with choosing a shoe. Luckily, we’re always adding newness so you can find the just-right way to express your style.
            </p>
            <button className="mt-4 bg-white text-[#000] rounded-full px-16 py-4 hover:bg-gray-200 transition">
              Start Customizing
            </button>
          </div>

          <div className="max-w-full mx-auto font-[sans-serif]">
            <div className="grid gap-4 mt-4 md:grid-cols-2">
              <div className="flex w-full bg-[#000] text-white max-sm:px-8 px-32 py-8 rounded">
                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    Bringing you the best KIMONO gear
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                  </p>
                </div>
                <div className="w-[1200px] min-h-[100%] h-full">
                  <img src="/products/product-2.png" className="object-cover w-[100%] h-full" />
                </div>
              </div>

              <div className="flex w-full px-32 py-12 rounded bg-[#D87D4A] max-sm:px-8">
                <div className="w-[1200px] min-h-[100%] h-full">
                  <img src="/products/product-3.png" className="object-cover w-[100%] h-full" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    Bringing you the best KIMONO gear
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                  </p>
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
