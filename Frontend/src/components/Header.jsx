import React from 'react';
import { FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';

const Header = ({ eventName }) => {
  return (
    <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-gray-800">{eventName}</h1>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="relative bg-blue-700 p-2 pl-3 pr-3 rounded-2xl">
          <button className="text-white font-bold hover:text-black">
            Sign Up  
          </button>
        </div>
        <div className="flex items-center">
          <div className="mr-3 text-right">
            <p className="font-medium text-gray-800">Alex Johnson</p>
            <p className="text-xs text-gray-500">Owner</p>
          </div>
          <FaUserCircle size={36} className="text-primary-600" />
        </div>
      </div>
    </header>
  );
};

export default Header;