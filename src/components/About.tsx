'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const skills = [
  'React',
  'Springboot',
  'Prometheus & Grafana',
  'Ansible & Terraform',
  'Spark',
  'ElasticSearch',
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

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
      clearTimeout(timeout);
    };
  }, []);

  const items = [
    { id: 1, content: <h1 className="text-4xl font-bold text-foreground mt-5 sm:text-4xl md:text-5xl">Marius L.</h1>, delay: 200 },
    { id: 2, content: <h2 className="text-3xl font-bold text-muted-foreground mt-2 sm:text-3xl md:text-4xl">Soft & Data Engineer | Trainer</h2>, delay: 300 },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`max-w-6xl mx-auto py-24 px-6 md:px-12 lg:px-24 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >

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
      <br/>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[3fr_2fr] items-start">
      <div className="space-y-4 text-accent text-justify">
        <p>
          With a passion for transforming raw data into actionable insights, I specialize in creating robust data solutions and crafting compelling visualizations. Proficient in tools such as SQL, Python, Elasticsearch, Grafana, and cloud platforms, I have successfully implemented scalable infrastructures, automated processes, and optimized performance by up to 90%.
          <br /><br />
          I excel at the intersection of technology and teamwork, whether leading data engineering projects, training teams on modern tools, or collaborating with stakeholders to deliver value-driven dashboards. My proactive and curious nature drives me to empower businesses with data-driven decision-making, ensuring they stay ahead in today's competitive landscape.
        </p>
        <p>I am offering a training on Monitoring and Prometheus for professionals who want to use modern tools for effective and efficient monitoring</p>
        <Link
            href="#training"
            className="border border-primary text-primary font-mono rounded px-7 py-4 transition-colors duration-300 hover:bg-primary/10 inline-block"
          >
            Check out my Training!
        </Link>
      </div>

        <div className="relative group">
          <div className="relative w-full max-w-[300px] mx-auto md:mx-0 aspect-square rounded bg-primary/20">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4E03AQE-cDZ_0wsr0A/profile-displayphoto-shrink_800_800/B4EZR7_cSbGwAc-/0/1737247017123?e=1749081600&v=beta&t=EMq9sVba0frTko-6mz5GOaM6eYP9IRwxTWmknocf8ek"
              alt="NKOUBA Marius"
              fill
              quality={95}
              className="object-cover rounded grayscale hover:grayscale-0 transition-all"
            />
            <div className="absolute inset-0 border-2 border-primary rounded translate-x-5 translate-y-5 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
