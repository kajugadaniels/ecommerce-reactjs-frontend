import React from 'react';

const Hero = () => {
  return (
    <div
      className="h-[70vh] sm:h-[20vh] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/hero/image.png')" }}
    ></div>
  );
};

export default Hero;
