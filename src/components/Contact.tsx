'use client';

import { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`max-w-3xl mx-auto py-24 px-6 md:px-12 lg:px-24 mb-24 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center">
        <p className="font-mono text-primary text-sm mb-2">04. What's Next?</p>
        <h2 className="text-4xl font-bold text-foreground mb-5">Get In Touch</h2>
        <p className="text-accent max-w-lg mx-auto mb-12">
          Although I'm not currently looking for any new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a
          href="mailto:nkoubamarius@gmail.com"
          className="border border-primary text-primary font-mono rounded px-7 py-4 transition-colors duration-300 hover:bg-primary/10 inline-block"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
