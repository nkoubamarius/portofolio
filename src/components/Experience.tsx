'use client';

import { useState, useEffect, useRef } from 'react';

const jobs = [
  {
    company: 'Sofrecom',
    url: 'https://www.sofrecom.com/',
    title: 'Soft & Data Engineer',
    range: 'September 2023 - Present',
    duties: [
      'Implemented a new infrastructure for a visualization solution (VMware, Terraform, Ansible)',
      'Streamlined the creation of business dashboards using GitLab, JavaScript, Grafana, and OpenSearch',
      'Migrated a visualization solution from a PHP-based system to SpringBoot and ReactJS',
      'Set up centralized authentication between ReactJS and Grafana using Keycloak',
      'Trained team members on using Dinotoo GenAI'
    ],
  },
  {
    company: 'YouCan.shop',
    url: 'https://youcan.shop/fr',
    title: 'Data Engineer',
    range: 'March 2022 - September 2023',
    duties: [
      'Successfully led the migration of searchable data from MariaDB to ElasticSearch and Developing Search Applications, resulting in a fast search on youcan.shop',
      'Collaborated with business stakeholders to understand their requirements and ensure delivery of accurate data',
      'Optimized clients Insights page, resulting in 80-90 % improvement in Insights page performance',
      'Successfully led Elasticsearch clusters management (Backup, Upgrade, Shards issue)',
      'Led a team of 3 employees to successfully deliver data engineering and science projects',
      'Have a strong experience with data storage and processing technologies such as SQL, NoSQL',
    ],
  },  
  {
    company: 'INGECYS Telecom',
    url: 'https://youcan.shop/fr',
    title: 'Big Data Engineer',
    range: 'April 2021 - March 2022',
    duties: [
      'Successfully led the automation of the processing of Nemo logs from the company server to MYSQL, utilizing Apache Nifi, Google Storage, Apache Spark, Apache Hive, and Airflow, reducing considerably the time of logs analysis',
      'Have experience with distributed systems, data warehousing, and big data technologies such as Dataproc, BigQuery',
      'Developing Backend and Frontend Apps for the visualization of KPIs using SpringBoot, Angular'
    ],
  },
  {
    company: 'Maroc Ynov Campus',
    url: 'https://ynov.ma/',
    title: 'Trainer',
    range: 'December 2022 - Present',
    duties: [
      'Teach Database Administration',
      'Teach Monitoring with Prometheus and Grafana',
      'Teach Tracing with Jaeger',
      'Teach Logging with Elasticsearch, Filebeat, and Logstash'
    ],
  },{
    company: 'OMNISHORE',
    url: 'https://www.medtech.ma/fr/omnishore/',
    title: 'Trainer',
    range: 'March 2024 - Present',
    duties: [
      'Teach Monitoring with Prometheus and Grafana',
    ],
  },
];

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeIndicatorRef = useRef<HTMLSpanElement>(null);

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

  // Update the active tab indicator
  useEffect(() => {
    if (activeIndicatorRef.current && tabsRef.current) {
      const activeTab = tabsRef.current.querySelector(`button[data-index="${activeTabId}"]`) as HTMLElement;
      if (activeTab) {
        const { offsetTop, offsetHeight } = activeTab;
        activeIndicatorRef.current.style.transform = `translateY(${offsetTop}px)`;
        activeIndicatorRef.current.style.height = `${offsetHeight}px`;
      }
    }
  }, [activeTabId]);

  const onTabClick = (index: number) => {
    setActiveTabId(index);
  };

  const activeJob = jobs[activeTabId];

  return (
    <section
      id="jobs"
      ref={sectionRef}
      className={`max-w-6xl mx-auto py-24 px-6 md:px-12 lg:px-24 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h2 className="flex items-center font-semibold text-2xl text-foreground mb-10 after:content-[''] after:block after:relative after:w-[300px] after:h-[1px] after:ml-5 after:bg-secondary">
        <span className="text-primary font-mono mr-2 text-lg">02.</span> Where I've Worked
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Tabs */}
        <div ref={tabsRef} className="relative flex flex-col md:min-w-[200px]">
          <span ref={activeIndicatorRef} className="absolute left-0 w-[2px] bg-primary transition-all duration-300" />
          {jobs.map((job, i) => (
            <button
              key={job.company}
              data-index={i}
              className={`px-4 py-2 text-sm font-mono focus:outline-none transition-all duration-200 border-l-2 ${
                activeTabId === i ? 'text-primary border-b-2 md:border-b-0 border-primary' : 'text-accent hover:text-primary border-b-2 md:border-b-0 border-transparent md:border-muted'
              }`}
              onClick={() => setActiveTabId(i)}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-grow">
          <h3 className="text-xl text-foreground mb-1">
            <span>{activeJob.title}</span>
            <span className="text-primary ml-1">@</span>
            <a href={activeJob.url} className="text-primary ml-1 hover:underline">
              {activeJob.company}
            </a>
          </h3>
          <p className="font-mono text-sm text-accent mb-5">{activeJob.range}</p>
          <ul className="space-y-3">
            {activeJob.duties.map((duty, i) => (
              <li key={`duty-${activeJob.company}-${i}`} className="relative pl-7 text-accent">
                <span className="absolute left-0 text-primary">▹</span>
                {duty}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
