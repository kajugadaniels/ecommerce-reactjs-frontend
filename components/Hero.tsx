import React from 'react';

const Hero = () => {
  return (
    <div
      className="h-[70vh] w-full bg-cover bg-center sm:h-[20vh]"
      style={{ backgroundImage: "url('/hero/image.png')" }}
    ></div>
  );
};

export default Hero;
