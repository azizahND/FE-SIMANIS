
// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'preline/dist/preline.js';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">MyApp</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
