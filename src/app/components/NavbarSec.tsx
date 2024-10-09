import Link from 'next/link';
import React from 'react';


const NavbarSec = () => {
  return (
    <nav className="bg-gray-400 p-4 flex justify-between">
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-pink-800 to-purple-900 font-bold text-2xl md:text-4xl ">PortFolio</div>
      <div className="space-x-4">
        <Link href="/" className="hover:text-black hover:bg-cyan-200 hover:rounded-lg hover:p-2 text-xl text-white md:text-2xl font-semibold">Home</Link>
        <Link href="/about" className="hover:text-black hover:bg-cyan-200 hover:rounded-lg hover:p-2 text-xl md:text-2xl text-white font-semibold">About</Link>
        <Link href="/contact"className="hover:text-black hover:bg-cyan-200 hover:rounded-lg hover:p-2 text-xl text-white md:text-2xl font-semibold">Contact</Link>
      </div>
    </nav>
  );
};

export default NavbarSec;
