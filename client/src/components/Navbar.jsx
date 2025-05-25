'use client';

import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { FaInstagram, FaSnapchat } from 'react-icons/fa';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-100 via-white to-amber-100 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold tracking-widest text-amber-700">
          TARCHA
        </Link>

        {/* HAMBURGER (MOBILE) */}
        <div className="sm:hidden">
          {isOpen ? (
            <CloseIcon onClick={() => setIsOpen(false)} className="text-amber-700 cursor-pointer" />
          ) : (
            <MenuIcon onClick={() => setIsOpen(true)} className="text-amber-700 cursor-pointer" />
          )}
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden sm:flex gap-6 text-gray-800 font-medium">
          <li><Link href="/" className="hover:text-amber-600 transition">Home</Link></li>
          <li><Link href="/shop" className="hover:text-amber-600 transition">Shop</Link></li>
          <li><Link href="/about" className="hover:text-amber-600 transition">About</Link></li>
          <li><Link href="/contact" className="hover:text-amber-600 transition">Contact</Link></li>
        </ul>

        {/* MOBILE MENU (SLIDE IN FROM LEFT) */}
       {/* MOBILE MENU (SLIDE IN FROM LEFT) */}
<div
  className={`fixed top-0 left-0 h-full w-60 bg-amber-50 z-40 p-6 transform transition-transform duration-300 ease-in-out ${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  } sm:hidden`}
>
  <Link href="/" className="text-xl font-bold tracking-widest text-amber-700">
    TARCHA
  </Link>

  <ul className="flex flex-col gap-6 text-gray-800 font-medium mt-12">
    <li className="hover:shadow-md hover:shadow-amber-300 transition duration-200 rounded-md px-2 py-1">
      <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
    </li>
    <li className="hover:shadow-md hover:shadow-amber-300 transition duration-200 rounded-md px-2 py-1">
      <Link href="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
    </li>
    <li className="hover:shadow-md hover:shadow-amber-300 transition duration-200 rounded-md px-2 py-1">
      <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
    </li>
    <li className="hover:shadow-md hover:shadow-amber-300 transition duration-200 rounded-md px-2 py-1">
      <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
    </li>
  </ul>

  {/* SOCIAL ICONS */}
  <div className="absolute bottom-20 left-20 flex justify-center gap-4 ">
    <a href="https://www.instagram.com/bijouterie_tarcha/" target="_blank" className="text-amber-600 hover:text-amber-800 text-2xl">
     <FaInstagram />
    </a>
    <a href="https://www.facebook.com/tonprofil" target="_blank" className="text-amber-600 hover:text-amber-800 text-2xl">
      <FaSnapchat />
    </a>
  </div>
</div>

      </div>
    </nav>
  );
}
