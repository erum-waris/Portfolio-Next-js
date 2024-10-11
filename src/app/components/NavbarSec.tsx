import Link from 'next/link';
import React from 'react';


const NavbarSec = () => {
  return (
    
<div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="md:h-8 md:w-8 w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
         tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/skills">Skills</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <h2 className="btn shadow-sm text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-pink-500 to-blue-400 font-serif lg:text-5xl md:text-5xl text-4x">ERUM WARIS</h2>
  </div>
  <div className="navbar-end">
  
    <button className="btn btn-ghost btn-circle mr-5 ">
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="md:h-8 md:w-8 h-6 w-6 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>
    
    
  );
};

export default NavbarSec;
 {/* <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-pink-800 to-purple-900 font-bold text-2xl md:text-4xl ">PortFolio</div>
      <div className="space-x-4">
        <Link href="/" className="hover:text-black hover:bg-cyan-200 hover:rounded-lg hover:p-2 text-xl text-white md:text-2xl font-semibold">Home</Link>
        <Link href="/about" className="hover:text-black hover:bg-cyan-200 hover:rounded-lg hover:p-2 text-xl md:text-2xl text-white font-semibold">About</Link>
        <Link href="/contact"className="hover:text-black hover:bg-cyan-200 hover:rounded-lg hover:p-2 text-xl text-white md:text-2xl font-semibold">Contact</Link> */}
       // className="bg-gray-400 p-4 flex justify-between"