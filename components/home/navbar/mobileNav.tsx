import { navLinks } from '@/constant/constant';
import { IMobileNavProp } from '@/utils/types';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

export default function MobileNav({showNav, onCloseNav}: IMobileNavProp) {
    const openNav = showNav ? 'translate-x-0' : '-translate-x-full';

  return (
  <div className='relative'>
    {/* OVERLAY */}
        <div className={`fixed ${openNav} transform transition-all duration-500 z-[10000] top-0 left-0 bottom-0 bg-black/70 w-full h-[100vh]`} />
        <ul className={`fixed ${openNav} justify-center h-full flex flex-col text-white transform transition-all duration-300 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 z-[100006]`}>
        {/* NAV_LINKS */}
        {navLinks && navLinks.length > 0 && navLinks.map(link => 
        <li key={link.id}>
            <Link className='nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]' href={link.url}>{link.label}</Link>
        </li>)}
        {/* CLOSE BTN */}
        <CgClose onClick={onCloseNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white' />
        </ul>   
  </div>
  );
}
