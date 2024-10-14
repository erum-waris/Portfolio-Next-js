
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className=" btn btn-primary bg-gray-500 text-white p-2 text-center text-xl relative bottom-0 w-full h-30 ">
     <div> <p>&copy; 2024 ERUM WARIS All rights reserved</p> 
     </div>  
   
    <div>
   <ul className='flex gap-5'>
   <li><Link href="/">Home</Link></li> &nbsp;|
        <li><Link href="/projects">Projects</Link></li> &nbsp;|
        <li><Link href="/about">About</Link></li> &nbsp;|
        <li><Link href="/contact">Contact</Link></li> &nbsp;|
        <li><Link href="/skills">Skills</Link></li>
   </ul>
   </div>  
    </footer>
  );
};

export default Footer;
