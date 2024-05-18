import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';

const NavbarArch = ({ theme }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'bg-black bg-opacity-60 backdrop-blur-[50px] shadow-md' : 'bg-transparent'} fixed top-0 inset-x-0 z-50 transition-colors duration-300`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/">
          {theme ? (
            theme === "themeL" ? (
              <Image
                src="/img/logo_light.png"
                width={280}
                height={40}
                alt="Mega swiss holding"
              />
            ) : (
              <Image
                src="/img/logo_dark.png"
                width={280}
                height={40}
                alt="Mega swiss holding"
              />
            )
          ) : (
            <Image
              src="/img/logo_dark.png"
              width={280}
              height={40}
              alt="Mega swiss holding"
            />
          )}
        </a>
        <div className="space-x-4 flex text-white font-semibold">
          <ScrollLink className="cursor-pointer py-2 px-4 hover:text-gray-700" activeClass="text-yellow-active" to="about" spy={true} smooth={true} offset={50} duration={500} activeClass="active">About</ScrollLink>
          <ScrollLink className="cursor-pointer py-2 px-4 hover:text-gray-700" activeClass="text-yellow-active" to="product_offerings" spy={true} smooth={true} offset={50} duration={500} activeClass="active">Product Offerings</ScrollLink>
          <ScrollLink className="cursor-pointer py-2 px-4 hover:text-gray-700" activeClass="text-yellow-active" to="team" spy={true} smooth={true} offset={50} duration={500} activeClass="active">Team</ScrollLink>
          <ScrollLink className="cursor-pointer py-2 px-4 hover:text-gray-700" activeClass="text-yellow-active" to="testimonials" spy={true} smooth={true} offset={50} duration={500} activeClass="active">Testimonials</ScrollLink>
          <ScrollLink className="cursor-pointer py-2 px-4 hover:text-gray-700" activeClass="text-yellow-active" to="blog" spy={true} smooth={true} offset={50} duration={500} activeClass="active">Blog</ScrollLink>
          <ScrollLink className="cursor-pointer py-2 px-4 hover:text-gray-700" activeClass="text-yellow-active" to="contact" spy={true} smooth={true} offset={50} duration={500} activeClass="active">Contact</ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default NavbarArch;
