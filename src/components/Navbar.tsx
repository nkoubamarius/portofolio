'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const navLinks = [
  { name: 'About', url: '/#about', number: '🙋‍♂️' },
  { name: 'Experience', url: '/#jobs', number: '👨🏻‍💻' },
  { name: 'Work', url: '/#projects', number: '💼' },
  { name: 'Contact', url: '/#contact', number: '✉️' },
];

const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState('none');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setScrolledToTop(scrollTop < 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('overflow-hidden', !menuOpen);
  };

  return (
    <header
      className={`
        fixed top-0 z-50 w-full h-[70px]
        px-6 md:px-10
        transition-all duration-300
        ${scrolledToTop ? 'bg-transparent' : 'bg-background/90 backdrop-blur shadow-md'}
        ${scrollDirection === 'down' && !scrolledToTop ? '-translate-y-[70px]' : 'translate-y-0'}
      `}
    >
      <nav className="flex items-center justify-between w-full h-full relative">
        {/* Logo */}
        <div className="flex items-center">
          <Logo size={42} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          <ol className="flex space-x-5">
            {navLinks.map(({ url, name, number }) => (
              <li key={name} className="flex items-center">
                <Link
                  href={url}
                  className="group flex items-center py-5 px-2 text-accent hover:text-primary transition-colors duration-300"
                >
                  <span className="mr-1 text-primary font-mono text-xs">{number}</span>
                 <b><span className="font-mono text-sm">{name}</span></b> 
                </Link>
              </li>
            ))}
          </ol>
          <div className="ml-5">
            <a
              href="https://flowcv.com/resume/vt3d073coo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-primary text-primary font-mono text-sm rounded hover:bg-primary/10 transition-colors duration-300"
            >
              📝 CV
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            className="flex flex-col justify-center items-center w-8 h-8 relative z-50"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <div
              className={`w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-0.5' : 'rotate-0'}`}
              style={{marginBottom: menuOpen ? '0' : '5px'}}
            />
            <div
              className={`w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
              style={{marginBottom: menuOpen ? '0' : '5px'}}
            />
            <div
              className={`w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1' : 'rotate-0'}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            fixed top-0 right-0 bottom-0
            w-full md:w-[300px]
            flex flex-col justify-center items-center
            bg-secondary text-foreground
            transition-all duration-300 ease-in-out z-40
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <nav className="flex flex-col items-center justify-center">
            <ol className="flex flex-col space-y-6 w-full">
              {navLinks.map(({ url, name, number }) => (
                <li key={name} className="flex justify-center">
                  <Link
                    href={url}
                    onClick={toggleMenu}
                    className="text-center flex flex-col items-center space-y-1 group"
                  >
                    <span className="text-primary font-mono text-base">{number}.</span>
                    <span className="text-xl font-mono hover:text-primary transition-colors duration-300">{name}</span>
                  </Link>
                </li>
              ))}
            </ol>
            <div className="mt-12">
              <a
                href="https://flowcv.com/resume/vt3d073coo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-primary text-primary font-mono rounded hover:bg-primary/10 transition-colors duration-300"
              >
               📝 CV
              </a>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
