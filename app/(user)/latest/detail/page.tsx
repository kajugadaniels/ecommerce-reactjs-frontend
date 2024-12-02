import React from 'react';

const Page = () => {
  const images = [
    { id: 1, rotation: 'rotate-0', alt: 'Kimono Front View' },
    { id: 2, rotation: 'rotate-45', alt: 'Kimono Side View' },
    { id: 3, rotation: 'rotate-90', alt: 'Kimono Bottom View' },
    { id: 4, rotation: '-rotate-45', alt: 'Kimono Top View' },
  ];

  return (
    <div className="flex bg-black gap-28 p-10">
      {/* Image Grid */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 gap-2">
          {images.map((image) => (
            <div
              key={image.id}
              className="border border-black flex bg-white"
            >
              <img
                src="/products/product-5.png"
                alt={image.alt}
                className={`w-[450px] h-[350px] ${image.rotation}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product Description */}
      <div className="lg:w-1/2 pl-4">
        <h2 className="text-3xl font-bold mb-4">XX99 MARK II KIMONO</h2>
        <p className="mb-6">
          Lorem Ipsum is a standard dummy text used in printing and web design.
          Learn about its origin, variations, translations, and how to generate
          it online. Lorem Ipsum is a standard dummy text used in printing and
          web design. Learn about its origin, variations, translations, and how
          to generate it online.
        </p>
        <p className="mb-6 text-sm">
          Custom-made and delivered to you in 2 weeks or less.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-4 rounded">
          Customize
        </button>
      </div>
    </div>
  );
};

export default Page;
