import React from 'react';

const Page = () => {
  const images = [
    { id: 1, rotation: 'rotate-0', alt: 'Kimono Front View' },
    { id: 2, rotation: 'rotate-45', alt: 'Kimono Side View' },
    { id: 3, rotation: 'rotate-90', alt: 'Kimono Bottom View' },
    { id: 4, rotation: '-rotate-45', alt: 'Kimono Top View' },
  ];

  return (
    <>
      <div className="bg-black p-32">
        <div className="flex gap-28 p-10">
          {/* Image Grid */}
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-2">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="flex border border-black bg-white"
                >
                  <img
                    src="/products/product-5.png"
                    alt={image.alt}
                    className={`h-[350px] w-[450px] ${image.rotation}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Description */}
          <div className="pl-4 lg:w-1/2">
            <h2 className="mb-4 text-3xl font-bold text-orange-500">
              XX99 MARK II KIMONO
            </h2>
            <p className="mb-6">
              Lorem Ipsum is a standard dummy text used in printing and web
              design. Learn about its origin, variations, translations, and how
              to generate it online. Lorem Ipsum is a standard dummy text used
              in printing and web design. Learn about its origin, variations,
              translations, and how to generate it online.
            </p>
            <p className="mb-6 text-sm">
              Custom-made and delivered to you in 2 weeks or less.
            </p>
            <div className="ml-32 mt-32 flex w-96 flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md">
              {/* Description Text */}
              <p className="mb-2 text-sm text-gray-600">
                Custom-made and delivered to you in 4 weeks or less.
              </p>

              {/* Title */}
              <h2 className="mb-4 text-lg font-bold uppercase text-orange-500">
                Customise Your Own Kimono
              </h2>

              {/* Arrows */}
              <div className="mb-4">
                <div className="mb-1 h-1 w-6 rotate-45 transform bg-orange-500"></div>
                <div className="h-1 w-6 -rotate-45 transform bg-orange-500"></div>
              </div>

              {/* Customize Button */}
              <button className="flex items-center space-x-2 rounded-full bg-orange-500 px-4 py-2 font-semibold text-white hover:bg-orange-600">
                <span>Customize</span>
              </button>
            </div>
          </div>
        </div>
        <h2 className="pl-20 text-3xl font-extrabold">
          You May Also Like This{' '}
        </h2>

        <div className="ml-10 mt-32 grid grid-cols-1 max-xl:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div
            className="relative flex cursor-pointer items-end justify-center rounded-2xl bg-transparent p-2 hover:-translate-y-2"
            style={{ height: '350px' }}
          >
            {' '}
            {/* Adjust height as needed */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 transform">
              <img
                src="/products/product-3.png"
                alt="Team Member"
                className="mt-10 w-40 object-contain"
              />
            </div>
            <div className="h-72 w-96 rounded-xl bg-white p-4 text-center text-black shadow-lg">
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
            {/* <h2 className='text-white'>hello</h2 */}{' '}
            {/* Adjust height as needed */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 transform">
              <img
                src="/products/product-1.png"
                alt="Team Member"
                className="mt-10 h-auto w-40 object-contain"
              />
            </div>
            <div className="h-72 w-96 rounded-xl bg-white p-4 text-center text-black shadow-lg">
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
                src="/products/product-2.png"
                alt="Team Member"
                className="mt-10 h-auto w-40 object-contain"
              />
            </div>
            <div className="h-72 w-96 rounded-xl bg-white p-4 text-center text-black shadow-lg">
              <div className="mt-32">
                <p className="top-0 text-xl font-semibold text-black">Name</p>
                <p className="text-xl text-black">Title</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
