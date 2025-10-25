import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon

const Header = () => {
  return (
    // This outer div is the light gray background for the entire bar
    <nav className="bg-gray-100 border-b border-gray-300">
      
      {/* We use 'container mx-auto' to center the content
          and 'flex justify-between items-center' to space things out */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* LEFT SIDE: Logo and Search Bar */}
        <div className="flex items-center space-x-4">
          
          {/* Logo */}
          <h1 className="text-xl font-bold text-black">DEV@Deakin</h1>

          {/* Search Bar Container */}
          <div className="relative">
            
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search..."
              // 'bg-white' makes the search box white
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none"
            />
            
            {/* Search Icon */}
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* RIGHT SIDE: Links */}
        {/* This div is the gray box from the wireframe */}
        <div className="bg-gray-200 border border-gray-300 rounded-lg p-1 flex items-center space-x-1">
          <a 
            href="#" 
            className="px-4 py-1 text-gray-700 hover:bg-gray-300 rounded-md font-medium"
          >
            Post
          </a>
          <a 
            href="#" 
            className="px-4 py-1 text-gray-700 hover:bg-gray-300 rounded-md font-medium"
          >
            Login
          </a>
        </div>
        
      </div>
    </nav>
  );
};

export default Header;