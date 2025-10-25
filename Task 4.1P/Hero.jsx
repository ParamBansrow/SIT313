import React from 'react';

const Hero = () => {
  // We'll get a big, random image from Picsum
  const heroImageUrl = "https://picsum.photos/seed/hero/1200/300";

  return (
    <div className="w-full h-64 bg-gray-300 my-6 overflow-hidden rounded-lg">
      {/* We replace the <span> with an <img> tag */}
      <img
        src={heroImageUrl}
        alt="Hero banner"
        className="w-full h-full object-cover" // object-cover makes it fit nicely
      />
    </div>
  );
};

export default Hero;