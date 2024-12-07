import React from 'react';
import Hero from '@/components/Hero';

const Home = () => {
    return (
        <>
            <Hero />

            {/* Enso Collections Wardrobe Section */}
            <div className="pt-10 pb-10 font-sans bg-black">
                <div className="container px-4 mx-auto lg:px-24">
                    <div className="mb-12 text-center">
                        <h2 className="text-lg font-semibold text-[#D87D4A] sm:text-xl">
                            Enso By You
                        </h2>
                        <h1 className="mb-4 text-3xl font-extrabold text-[#D87D4A] sm:text-4xl">
                            Enso Collections Wardrobe
                        </h1>
                        <p className="max-w-xl mx-auto mt-2 text-sm text-white sm:max-w-2xl sm:text-base">
                            Let's find out! Be just who you are by putting more youness in
                            your kimononess with Enso By You, Enso co-creation service for
                            Members. A little more of this, a little less of that—just have
                            fun customizing a shoe that feels more like you.
                        </p>
                        <button className="px-6 py-3 mt-4 text-black transition bg-white rounded-full hover:bg-gray-200 sm:px-8 sm:py-3 sm:text-base">
                            Shop
                        </button>
                        <h2 className="mt-8 text-2xl font-extrabold text-[#D87D4A] sm:text-3xl">
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
                                    <div className="w-5/6 mx-auto mb-4 overflow-hidden aspect-w-16 aspect-h-8 h-52 md:mb-2">
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
            </div>

            {/* Choose a So-You Kimono Section */}
            <div className="pt-10 pb-10 font-sans bg-black">
                <div className="container px-4 mx-auto lg:px-24">
                    <div className="mb-12 text-center">
                        <h1 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
                            Choose a So-You Kimono
                        </h1>
                        <p className="max-w-xl mx-auto mt-2 text-sm text-white sm:max-w-2xl sm:text-base">
                            Whether you’re remixing a classic into something never seen before
                            or simplifying the latest drop into a totally neutral palette,
                            your customization journey starts with choosing a shoe. Luckily,
                            we’re always adding newness so you can find the just-right way to
                            express your style.
                        </p>
                        <button className="px-6 py-3 mt-4 text-black transition bg-white rounded-full hover:bg-gray-200 sm:px-8 sm:py-3 sm:text-base">
                            Start Customizing
                        </button>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {/* First Customization Option */}
                        <div className="flex flex-col sm:flex-row rounded bg-[#000] p-6 sm:p-8">
                            <div className="p-4">
                                <h3 className="text-lg font-semibold sm:text-xl">
                                    Bringing you the best KIMONO gear
                                </h3>
                                <p className="mt-3 text-sm text-gray-400 sm:text-base">
                                    Located at the heart of New York City, Audiophile is the
                                    premier store for high end headphones, earphones, speakers,
                                    and audio accessories. We have a large showroom and luxury
                                    demonstration rooms available for you to browse and experience
                                    a wide range of our products.
                                </p>
                            </div>
                            <div className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-4">
                                <img
                                    src="/products/product-2.png"
                                    className="object-cover w-full h-48 sm:w-auto sm:h-full"
                                    alt="Product"
                                />
                            </div>
                        </div>

                        {/* Second Customization Option */}
                        <div className="flex flex-col sm:flex-row rounded bg-[#D87D4A] p-6 sm:p-8">
                            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                                <img
                                    src="/products/product-3.png"
                                    className="object-cover w-full h-48 sm:w-auto sm:h-full"
                                    alt="Product"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold sm:text-xl">
                                    Bringing you the best KIMONO gear
                                </h3>
                                <p className="mt-3 text-sm text-white sm:text-base">
                                    Located at the heart of New York City, Audiophile is the
                                    premier store for high end headphones, earphones, speakers,
                                    and audio accessories. We have a large showroom and luxury
                                    demonstration rooms available for you to browse and experience
                                    a wide range of our products.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Optional Hero Image Section */}
                    
                    <div
                        className="w-full bg-cover bg-center h-screen sm:h-[70vh] flex items-center justify-center"
                        style={{ backgroundImage: "url('/hero/image.png')" }}
                    >
                        <div className="relative w-full max-w-xs bg-white rounded-lg shadow-lg p-5 pt-[10%] pb-[10%] sm:p-8 sm:pt-5 sm:pb-5 sm:w-80">
                            <img
                                src="/products/product-5.png"
                                alt="Customizable Product"
                                className="w-full h-auto mb-4"
                                loading="lazy"
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
                    </div>

                    {/* What's your PHD Section */}
                    <div className="mt-24 text-center">
                        <h1 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
                            What's your PHD?
                        </h1>
                        <p className="max-w-xl mx-auto mt-2 text-sm text-white sm:max-w-2xl sm:text-base">
                            Like your shoe signature, your Personal I.D. is any combo of
                            letters and numbers that rep you. Maybe it's a nickname, a mantra,
                            or your computer password. Pick your P.I.D., and show the world
                            who this signature shoe belongs to.
                        </p>
                        <button className="px-6 py-3 mt-4 text-black transition bg-white rounded-full hover:bg-gray-200 sm:px-8 sm:py-3 sm:text-base">
                            Custom
                        </button>
                    </div>

                    {/* Additional Products Section */}
                    <div className="grid grid-cols-1 gap-6 mt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {Array(4)
                            .fill(0)
                            .map((_, idx) => (
                                <div
                                    key={idx}
                                    className="relative p-5 transition-all bg-transparent cursor-pointer rounded-2xl hover:-translate-y-2"
                                >
                                    <div className="mx-auto mb-4 overflow-hidden aspect-w-16 aspect-h-8">
                                        <img
                                            src="/products/product-6.png"
                                            className="object-cover w-full h-full"
                                            alt={`Product ${idx + 6}`}
                                        />
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* The Team Section */}
                    <h2 className="mt-8 text-center text-2xl font-extrabold text-[#D87D4A] sm:text-3xl lg:text-4xl">
                        The Team
                    </h2>

                    <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {Array(4)
                            .fill(0)
                            .map((_, idx) => (
                                <div
                                    key={idx}
                                    className="relative p-5 transition-transform duration-300 ease-in-out shadow-lg cursor-pointer rounded-2xl hover:-translate-y-2"
                                    style={{
                                        background: 'linear-gradient(to bottom, #000000 50%, #FFFFFF 50%)',
                                    }}
                                >
                                    <div className="w-5/6 mx-auto mb-4 overflow-hidden aspect-w-16 aspect-h-8 h-52 md:mb-2">
                                        <img
                                            src={`/hero/team.png`}
                                            alt={`Team Member ${idx + 1}`}
                                            className="object-contain w-full h-full"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center px-4 py-2 bg-transparent">
                                        <h3 className="text-lg font-extrabold text-center text-gray-800 sm:text-base">
                                            Team Member Name
                                        </h3>
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
