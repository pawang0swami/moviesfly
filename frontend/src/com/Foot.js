import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} MovieHub. All rights reserved.
        </div>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="/" className="hover:text-teal-400 transition">
            Home
          </a>
          <a href="https://github.com/pawang0swami/moviesfly" className="hover:text-teal-400 transition">
            About
          </a>
          <a href="https://github.com/pawang0swami/moviesfly" className="hover:text-teal-400 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
