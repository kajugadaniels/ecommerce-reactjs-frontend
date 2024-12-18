import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        src="/hero/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
          Welcome to ENSO collection
        </h1>
        <p className="mb-8 max-w-2xl text-sm text-white lg:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad voluptate
          labore, distinctio, adipisci voluptatem veritatis quasi pariatur
          debitis cupiditate molestias ipsa?
        </p>
        <button className="rounded-full bg-[#D87D4A] px-6 py-3 text-white transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
