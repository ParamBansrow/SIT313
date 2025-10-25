import React from 'react';
import { FaStar } from 'react-icons/fa';

// The props { title, description, ... } will come from our random generator
const ArticleCard = ({ title, description, author, rating, imageUrl }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
      {/* This is the main change: We now use an <img> tag.
        'src' is set to the imageUrl prop.
        'alt' is set to the title for accessibility.
        'className' makes the image fill the space nicely.
      */}
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-40 object-cover" 
      />
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">Description: {description}</p>
        <div className="flex items-center">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="text-sm font-semibold">{rating}</span>
          <span className="text-sm text-gray-500 ml-2">{author}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;