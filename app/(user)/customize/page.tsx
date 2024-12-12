import Link from 'next/link';
import React from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';

const Customize = () => {

  return (
    <>
      <div className="p-6 bg-black lg:p-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-28">
          {/* Image Grid */}
          <div className="flex items-center justify-center w-full lg:w-3/5">
            <div className="grid w-full grid-cols-2 gap-2">
              <div
                className="flex items-center justify-center w-full p-2 bg-white border border-black"
              >
                <img
                  src="/products/product-5.png"
                  className='object-cover w-full h-auto'
                />
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="flex flex-col items-start w-full lg:w-2/5 font-alata">
            <h2 className="mb-4 text-2xl font-bold lg:text-3xl text-[#D87D4A]">
              XX99 MARK II KIMONO
            </h2>
            <p className="mb-4 text-sm text-white lg:text-base">
              Lorem Ipsum is a standard dummy text used in printing and web design.
              Learn about its origin, variations, translations, and how to generate
              it online. Lorem Ipsum is a standard dummy text used in printing and
              web design. Learn about its origin, variations, translations, and how
              to generate it online.
            </p>
            <p className="mb-6 text-sm text-gray-400">
              Custom-made and delivered to you in 2 weeks or less.
            </p>
            <div className="w-full mt-8 bg-transparent rounded-lg shadow-md px-14 py-14 lg:p-8 lg:w-3/4 lg:mt-16">

              {/* Customize Button */}
              <Link href='/customize'>
                <button className="flex items-center justify-center w-full px-4 py-4 font-semibold border-[#D87D4A] text-white transition rounded-full" style={{ border: '1px solid #D87D4A' }}>
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* You May Also Like Section */}
        <h2 className="mt-12 text-xl font-extrabold text-center text-white lg:text-3xl font-alata">
          You May Also Like This
        </h2>

        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                <div className="w-full mx-auto mb-4 overflow-hidden aspect-w-16 aspect-h-8 h-52 md:mb-2">
                  <img
                    src={`/products/product-${idx + 1}.png`}
                    alt={`Product ${idx + 1}`}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex items-center justify-center px-4 py-2 sm:px-10">
                  <h3 className="text-lg font-extrabold text-center text-gray-800 sm:text-base">
                    Product Name
                  </h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Customize