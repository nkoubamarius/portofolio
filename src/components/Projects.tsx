'use client';

import { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const featuredProjects = [
  {
    title: 'SNTL',
    description:
      'Monitoring with Prometheus and Grafana',
    tech: ['Prometheus','Grafana', 'Linux', 'Virtualization', 'VS Code'],
    links: {
      github: '#',
      external: 'https://www.sntl.ma/',
    },
    image: 'https://www.sntl.ma/Web/images/frontend/Home/groupe/transport@2x-1310x930.jpg',
  },
  {
    title: "Ministère de l'Intérieur",
    description:
      'Monitoring with Prometheus and Grafana',
    tech: ['Prometheus','Grafana', 'Linux', 'Virtualization', 'VS Code'],
    links: {
      github: '#',
      external: '#',
    },
    image: 'https://lematin.ma/lematin/uploads/images/2024/08/15/333945.webp',
  },
  {
    title: 'JobInTech',
    description:
      'April 2024 : Monitoring with Prometheus and Grafana; Tracing with Jaeger; Logging with Elasticsearch, Filebeat, and Logstash',
    tech: ['Prometheus','Grafana', 'Linux', 'Virtualization', 'VS Code'],
    links: {
      github: '',
      external: 'https://jobintech.academy/',
    },
    image: 'https://media.licdn.com/dms/image/v2/D4E22AQFiRSChKWKVdA/feedshare-shrink_800/feedshare-shrink_800/0/1727093714643?e=2147483647&v=beta&t=bx2wcqfPil_a8XHll-2izinSx9YOM_sFd2DaXGPYSNE',
  },
  {
    title: 'Maroc YNOV Campus',
    description:
      'Since December 2022 : Database Administration; Mobile Developpment with Flutter',
    tech: ['Prometheus','Grafana', 'Linux', 'Virtualization', 'VS Code'],
    links: {
      github: '',
      external: 'https://ynov.ma/',
    },
    image: 'https://static.vitrine.ynov.com/cdn-cgi/image/width=650,height=363,fit=cover,format=auto/var/site/storage/images/5/5/3/1/121355-1-fre-FR/b41c2875aeb8-CASABLANCA-YNOV-CAMPUS.png',
  },
];

const Projects = () => {
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
      id="projects"
      ref={sectionRef}
      className={`max-w-6xl mx-auto py-24 px-6 md:px-12 lg:px-24 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-10'
      }`}
    >
      <h2 className="flex items-center font-semibold text-2xl text-foreground mb-10 after:content-[''] after:block after:relative after:w-[300px] after:h-[1px] after:ml-5 after:bg-secondary">
        <span className="text-primary font-mono mr-2 text-lg">03.</span> Some Experiences in training
      </h2>

      <ul className="space-y-32">
        {featuredProjects.map((project, i) => {
          const isEven = i % 2 === 0;

          return (
            <li
              key={project.title}
              className={`relative grid grid-cols-12 items-center gap-4 ${
                isEven ? '' : 'md:text-right'
              }`}
            >
              {/* Project Image */}
              <div
                className={`absolute inset-0 w-full h-full col-span-12 row-start-1 rounded overflow-hidden opacity-10 md:opacity-70 hover:opacity-100 transition-opacity duration-300 z-0 ${
                  isEven ? 'md:col-span-7 md:col-start-6' : 'md:col-span-7 md:col-start-1'
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded"
                />
              </div>

              {/* Project Content */}
              <div
                className={`col-span-12 row-start-1 relative z-10 ${
                  isEven
                    ? 'md:col-span-7 md:col-start-1 text-left'
                    : 'md:col-span-7 md:col-start-6 md:text-right'
                }`}
              >
                <p className="font-mono text-primary text-sm mb-1">Training</p>
                <h3 className="text-2xl font-semibold text-foreground mb-5">
                  <a
                    href={project.links.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {project.title}
                  </a>
                </h3>

                <div className="bg-secondary p-6 rounded shadow-lg text-accent mb-5">
                  <p>{project.description}</p>
                </div>

                {/* Tech list */}
                <ul
                  className={`flex flex-wrap text-sm font-mono text-accent mb-4 gap-4 ${
                    isEven ? '' : 'md:justify-end'
                  }`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                {/* Links */}
                <div
                  className={`flex items-center gap-5 ${
                    isEven ? '' : 'md:justify-end'
                  }`}
                >
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub link for ${project.title}`}
                      className="text-accent hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.links.external && (
                    <a
                      href={project.links.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`External link for ${project.title}`}
                      className="text-accent hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
