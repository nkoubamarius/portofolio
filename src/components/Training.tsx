"use client"
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import myImage from '../images/PROMETHEUS_GRAFANA.png';

const TrainingSection = () => {

  const whatYouWillLearn = [
    "✅ Understanding the basics of monitoring and observability",
    "✅ Installing and configuring Prometheus and Grafana",
    "✅ Collecting and utilizing system and application metrics",
    "✅ Creating interactive dashboards for optimal visualization",
    "✅ Best practices for stress-free monitoring"
  ];

  const skills = [
    'Beginner Level',
    'Taught in English & French',
    '5 Total hours',
    'All levels',
    'In-person training',
    'Online Course (In preparation)'
  ];

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
    id="training"
    ref={sectionRef}
    className={`max-w-6xl mx-auto py-40 px-6 md:px-12 lg:px-24 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-10'
      }`}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
        <Image
            src={myImage}
            alt="Prometheus and Grafana Training"
            className="w-full h-[300px] object-cover rounded-lg shadow-lg"
        />
            <br/>

            <ul className="grid grid-cols-2 gap-x-2 gap-y-3 overflow-hidden mt-5">
            {skills.map((skill) => (
                <li key={skill} className="relative pl-5 font-mono text-sm">
                <span className="absolute left-0">▹</span>
                <b>{skill}</b>
                </li>
            ))}
            </ul>

        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 space-y-4">
            <p className="text-red-500"><b>I am delighted to present to you the training</b></p>

            <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold"> Stress-Free Monitoring: 2 Days to Transform Chaos into Clarity with Prometheus & Grafana</h2>
            </div>
            <p className="text-justify">
                Want to understand and implement effective monitoring without getting lost in technical complexity? <br></br>This 2-day training will guide you step by step in using Prometheus and Grafana to monitor your systems and visualize your data with clarity.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">What You'll Learn</h3>
            <ul className="list-disc pl-5 space-y-2">
                {whatYouWillLearn.map((learn, index) => (
                <li key={index} className="flex items-center">
                    {learn}
                </li>
                ))}
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">Ready to master Prometheus and Grafana?</h3>
            <p>
                <a
                href="mailto:nkoubamarius@gmail.com"
                className="border border-primary text-primary font-mono rounded px-7 py-4 transition-colors duration-300 hover:bg-primary/10 inline-block"
                >
                <b>Message Me</b>
                </a>
            </p>
            </div>
        </div>
    </section>
  );
};

export default TrainingSection;
