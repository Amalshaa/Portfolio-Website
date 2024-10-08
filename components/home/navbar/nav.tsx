import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/constant/constants';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    // Adding the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup: removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed h-[12vh] z-[10] w-full transition-all duration-200 ${
        navBg ? 'bg-[#240b39]' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <div className="ml-[-1.5rem] sm:ml-0">
          <Image src="/images/amalsha1.png" alt="LOGO" width={125} height={40} />
        </div>

        {/* Nav Links */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.url}>
                <p className="nav__link cursor-pointer">{navlink.label}</p>
              </Link>
            ))}
          </div>
          {/* Buttons */}
          <div className="flex items-center space-x-4">
            
            {/* Burger */}
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
              aria-label="Open Navigation Menu"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
