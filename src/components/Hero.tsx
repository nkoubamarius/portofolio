'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Animate elements on mount with a staggered delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const items = [
    { id: 1, content: <p className="font-mono text-primary text-sm">Hi, my name is</p>, delay: 100 },
    { id: 2, content: <h1 className="text-5xl font-bold text-foreground mt-5 sm:text-6xl md:text-7xl">Marius L.</h1>, delay: 200 },
    { id: 3, content: <h2 className="text-4xl font-bold text-muted-foreground mt-2 sm:text-5xl md:text-6xl">Soft & Data Engineer.</h2>, delay: 300 },
    {
      id: 4,
      content: (
        <p className="text-muted-foreground mt-6 max-w-lg">
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products at{' '}
          <a href="https://upstatement.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Upstatement
          </a>.
        </p>
      ),
      delay: 400
    },
    {
      id: 5,
      content: (
        <div className="mt-12">
          <Link
            href="#projects"
            className="border border-primary text-primary font-mono rounded px-7 py-4 transition-colors duration-300 hover:bg-primary/10 inline-block"
          >
            Check out my work!
          </Link>
        </div>
      ),
      delay: 500
    },
  ];

  return (
<section className="flex flex-col justify-center min-h-screen max-w-6xl mx-auto px-6 md:px-12 lg:px-24 pl-12 md:pl-24">
<div>
        {items.map(({ id, content, delay }) => (
          <div
            key={id}
            className={`transform transition-all duration-700 ease-out
              ${isMounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${delay}ms` }}
          >
            {content}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
