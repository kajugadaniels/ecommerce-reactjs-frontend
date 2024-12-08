import React from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';

const Page = () => {
  const images = [
    { id: 1, rotation: 'rotate-0', alt: 'Kimono Front View' },
    { id: 2, rotation: 'rotate-45', alt: 'Kimono Side View' },
    { id: 3, rotation: 'rotate-90', alt: 'Kimono Bottom View' },
    { id: 4, rotation: '-rotate-45', alt: 'Kimono Top View' },
  ];

  return (
    <>
      <div className="bg-black p-6 lg:p-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-28">
          {/* Image Grid */}
          <div className="flex w-full items-center justify-center lg:w-3/5">
            <div className="grid w-full grid-cols-2 gap-2">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="flex items-center justify-center border border-black bg-white p-2"
                >
                  <img
                    src="/products/product-5.png"
                    alt={image.alt}
                    className={`h-auto w-full object-cover ${image.rotation}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Description */}
          <div className="font-alata flex w-full flex-col items-start lg:w-2/5">
            <h2 className="text-primary mb-4 text-2xl font-bold lg:text-3xl">
              XX99 MARK II KIMONO
            </h2>
            <p className="mb-4 text-sm text-white lg:text-base">
              Lorem Ipsum is a standard dummy text used in printing and web
              design. Learn about its origin, variations, translations, and how
              to generate it online. Lorem Ipsum is a standard dummy text used
              in printing and web design. Learn about its origin, variations,
              translations, and how to generate it online.
            </p>
            <p className="mb-6 text-sm text-gray-400">
              Custom-made and delivered to you in 2 weeks or less.
            </p>
            <div className="mt-8 w-full rounded-lg bg-white px-14 py-14 shadow-md lg:mt-16 lg:w-3/4 lg:p-8">
              {/* Description Text */}
              <p className="mb-2 text-center text-sm text-black">
                Custom-made and delivered to you in 4 weeks or less.
              </p>

              {/* Title */}
              <h2 className="mb-4 text-center text-sm font-bold uppercase text-[#D87D4A]">
                Customize Your Own Kimono
              </h2>

              {/* Arrows */}
              <div className="mb-4 flex items-center justify-center">
                <FaAngleDoubleDown className="h-24 w-24 text-[#D87D4A]" />
              </div>

              {/* Customize Button */}
              <button className="flex w-full items-center justify-center rounded-full bg-[#D87D4A] px-4 py-4 font-semibold text-white transition">
                Customize
              </button>
            </div>
          </div>
        </div>

        {/* You May Also Like Section */}
        <h2 className="font-alata mt-12 text-center text-xl font-extrabold text-white lg:text-3xl">
          You May Also Like This
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array(4)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="relative cursor-pointer rounded-2xl p-5 shadow-lg transition-all hover:-translate-y-2"
                style={{
                  background:
                    'linear-gradient(to bottom, #000000 50%, #FFFFFF 50%)',
                }}
              >
                <div className="aspect-w-16 aspect-h-8 mx-auto mb-4 h-52 w-full overflow-hidden md:mb-2">
                  <img
                    src={`/products/product-${idx + 1}.png`}
                    alt={`Product ${idx + 1}`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-center px-4 py-2 sm:px-10">
                  <h3 className="text-center text-lg font-extrabold text-gray-800 sm:text-base">
                    Product Name
                  </h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Page;
