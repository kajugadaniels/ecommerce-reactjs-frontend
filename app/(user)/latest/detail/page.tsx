    import React from 'react'

    const page = () => {
    return (
        <div>page

<div className="flex flex-col lg:flex-row items-center justify-center bg-black text-white p-10">
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 lg:w-1/2">
        <img
          src="path-to-image.jpg"
          alt="Kimono Front View"
          className="w-full h-auto border border-white"
        />
        <img
          src="path-to-image.jpg"
          alt="Kimono Side View"
          className="w-full h-auto border border-white rotate-45"
        />
        <img
          src="path-to-image.jpg"
          alt="Kimono Bottom View"
          className="w-full h-auto border border-white rotate-90"
        />
        <img
          src="path-to-image.jpg"
          alt="Kimono Top View"
          className="w-full h-auto border border-white -rotate-45"
        />
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