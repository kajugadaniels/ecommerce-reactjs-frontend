import React from 'react';

const Hero = () => {
  return (
<<<<<<< HEAD
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 object-cover w-full h-full"
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
        <p className="max-w-2xl mb-8 text-sm text-white lg:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad voluptate labore, distinctio, adipisci voluptatem veritatis quasi pariatur debitis cupiditate molestias ipsa?
        </p>
        <button className="px-6 py-3 text-white transition duration-300 rounded-full bg-[#D87D4A]">
          Get Started
        </button>
      </div>
    </div>
=======
    <div
      className="h-[70vh] w-full bg-cover bg-center sm:h-[20vh]"
      style={{ backgroundImage: "url('/hero/image.png')" }}
    ></div>
>>>>>>> cad270464973bb0ea45f93cba771a9dbd36e1a3d
  );
};

export default Hero;
