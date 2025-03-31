'use client';

import { useState, useEffect } from 'react';

const Email = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`fixed bottom-10 right-10 hidden xl:flex flex-col items-center space-y-2 transform transition-all duration-1000 ease-out ${
        isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      aria-orientation="vertical"
    >
      <a
        href="mailto:nkoubamarius@gmail.com"
        className="font-mono text-sm tracking-widest text-accent hover:text-primary focus:text-primary transition-colors"
      >
        nkoubamarius@gmail.com
      </a>
      <div className="w-[1px] h-16 bg-accent"></div>
    </div>
  );
};

export default Email;
