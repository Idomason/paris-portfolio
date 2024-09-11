'use client';

import Navbar from './navbar';
import MobileNav from './mobileNav';
import { useState } from 'react';

export default function ResponsiveNav() {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const hideNavHandler = () => setShowNav(false);

  return (
    <>
      <Navbar onOpenNav={showNavHandler} />
      <MobileNav showNav={showNav} onCloseNav={hideNavHandler} />
    </>
  );
}
