'use client';

import { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Twitter, Codepen } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/nkoubamarius',
    icon: <Github size={20} />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/mariusnkouba/',
    icon: <Instagram size={20} />,
  },
  {
    name: 'Twitter',
    url: 'https://x.com/nkoubamarius',
    icon: <Twitter size={20} />,
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/mariusnkouba/',
    icon: <Linkedin size={20} />,
  },
];

const Social = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-[40px] hidden xl:block transform transition-all duration-1000 ease-out ${
        isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      aria-orientation="vertical"
    >
      <ul className="flex flex-col items-center space-y-5 after:content-[''] after:block after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-accent">
        {socialLinks.map(({ name, url, icon }) => (
          <li key={name} className="transition-transform duration-200 hover:-translate-y-1">
            <a
              href={url}
              aria-label={name}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-accent hover:text-primary focus:text-primary transition-colors"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
