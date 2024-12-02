    import React from 'react'

    const page = () => {
      const images = [
        { id: 1, rotation: 'rotate-0', alt: 'Kimono Front View' },
        { id: 2, rotation: 'rotate-45', alt: 'Kimono Side View' },
        { id: 3, rotation: 'rotate-90', alt: 'Kimono Bottom View' },
        { id: 4, rotation: '-rotate-45', alt: 'Kimono Top View' },
      ];
    return (
        <div>page

<div className="flex flex-col lg:flex-row items-center justify-center bg-black text-white p-10">
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 lg:w-1/2">
      {images.map((image) => (
        <img
          key={image.id}
          src="/products/product-5.png"
          alt={image.alt}
          className={`w-full h-auto border border-white ${image.rotation}`}
        />
      ))}
    </div>

      {/* Product Description */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-10">
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
        </div>
    )
    }

    export default page