import React from 'react'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
     <nav className=" x bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-[length:200%] animate-bg-gradient text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold ">MyApp</div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 mt-3">
          <button className="px-4 py-2 rounded-md bg-white text-pink-500 hover:bg-purple-500 hover:text-black transition">
            Login
          </button>
          <button className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-100 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-4">
          <button className="w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
            Login
          </button>
          <button className="w-full px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-100 transition">
            Sign Up
          </button>
        </div>
      )}
    </nav>
    </>
  )
}

export default Navbar
