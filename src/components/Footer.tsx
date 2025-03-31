'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-6 text-accent text-sm">
      <div className="flex items-center mb-2">
        <a
          href="https://github.com/bchiang7/v4"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono hover:text-primary transition-colors"
        >
          <div className="flex items-center">
            <span>Build by @nkoubamarius, Inspired by Brittany Chiang Portofolio</span>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
