import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Explore */}
        <div>
          <h3 className="font-bold text-lg mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Questions</a></li>
            <li><a href="#" className="hover:underline">Articles</a></li>
            <li><a href="#" className="hover:underline">Tutorials</a></li>
          </ul>
        </div>

        {/* Column 2: Support */}
        <div>
          <h3 className="font-bold text-lg mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Stay Connected */}
        <div>
          <h3 className="font-bold text-lg mb-4">Stay connected</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-white text-teal-600 p-2 rounded-full hover:bg-gray-200">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-white text-teal-600 p-2 rounded-full hover:bg-gray-200">
              <FaTwitter />
            </a>
            <a href="#" className="bg-white text-teal-600 p-2 rounded-full hover:bg-gray-200">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 pt-8 border-t border-teal-500 text-center">
        <h4 className="font-bold text-xl mb-4">DEV@Deakin 2022</h4>
        <div className="flex justify-center space-x-6 text-sm">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Code of Conduct</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;