
// Footer.tsx

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] px-6 sm:px-12 md:px-16 text-white pt-12 pb-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-stretch justify-between gap-8">
        {/* Short Description Section */}
        <div className="w-full lg:w-1/3 h-full flex flex-col justify-between">
          <h3 className="text-2xl sm:text-3xl md:text-[32px] text-[#A78546] mb-2">About Me</h3>
          <p className="text-lg sm:text-xl">A short description about the website or company goes here. You can mention your mission or values.</p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full lg:w-1/3 h-full flex flex-col justify-between">
          <h3 className="text-2xl sm:text-3xl md:text-[32px] text-[#A78546] mb-2">Quick Links</h3>
          <ul>
            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Icons Section */}
        <div className="w-full lg:w-1/3 h-full flex flex-col justify-between">
          <h3 className="text-2xl sm:text-3xl md:text-[32px] text-[#A78546] mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/anamta-ansari/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/anamta-ansari-a117552b5/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t border-gray-700 mt-12" />

      {/* Final Line / Footer Text */}
      <div className="pt-4 text-center text-gray-400 text-sm">
        <p>© 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
