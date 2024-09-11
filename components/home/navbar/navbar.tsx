"use client";

import Link from "next/link";
// import Image from "next/image";
import { useState, useEffect } from "react";
import { INavbarProp } from "@/utils/types";
import { navLinks } from "@/constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";

export default function Navbar({ onOpenNav }: INavbarProp) {
  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavbarBg(true);

      if (window.scrollY < 90) setNavbarBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`w-full ${navbarBg ? "bg-indigo-800" : "fixed"} fixed z-[1000] h-[12vh] transition-all duration-200`}
    >
      <div className="mx-auto flex h-full w-[90%] items-center justify-between xl:w-[80%]">
        {/* LOGO */}
        {/* <Image src='/images/logo.png' width={120} height={120} alt="Logo" /> */}
        <h1 className="py-4 text-xl font-bold uppercase text-white">
          Okorie F.
          <br /> Ijeoma
        </h1>
        {/* NAV-LINKS */}
        <ul className="hidden items-center space-x-10 lg:flex">
          {navLinks &&
            navLinks.length > 0 &&
            navLinks.map((link) => (
              <li key={link.id}>
                <Link className="nav__link capitalize" href={link.url}>
                  {link.label}
                </Link>
              </li>
            ))}
        </ul>
        {/* BUTTON */}
        <div className="flex items-center space-x-4">
          <button className="rounded-lg bg-pink-700 px-8 py-1.5 text-base font-semibold text-white transition-all duration-200 hover:bg-pink-900 md:px-10 md:py-2">
            Hire Me
          </button>
        </div>
        {/* HAMBURGER MENU */}
        <HiBars3BottomRight
          onClick={onOpenNav}
          className="h-8 w-8 cursor-pointer text-white lg:hidden"
        />
      </div>
    </div>
  );
}
