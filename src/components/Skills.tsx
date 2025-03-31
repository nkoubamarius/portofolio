import React from 'react';

const skills = [
  { name: 'JavaScript', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png' },
  { name: 'React', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png' },
  { name: 'SpringBoot', imageUrl: 'https://blog.zenika.com/wp-content/uploads/2016/04/spring-boot-logo-1.png' },
  { name: 'ElasticSearch', imageUrl: 'https://static-00.iconduck.com/assets.00/file-type-elastic-icon-512x510-vdw83jc5.png' },
  { name: 'Spark', imageUrl: 'https://images.icon-icons.com/2699/PNG/512/apache_spark_logo_icon_170560.png' },
  { name: 'Grafana', imageUrl: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/grafana-ipeuuhi0ws3fbikv7ojrk.png/grafana-625ktq51icaz2carazn0n.png?_a=DATAdtWOZAA0' },
  { name: 'Google Cloud', imageUrl: 'https://cloudage.ae/wp-content/uploads/2024/04/GCP-1-300x300-1.png' },
  { name: 'GitlabCI', imageUrl: 'https://dyma.fr/_next/image?url=%2Fimages%2Fformations%2Fgitlab-ci-cd%2F240x240.png&w=640&q=100' },
  { name: 'Prometheus', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2066px-Prometheus_software_logo.svg.png' },
  { name: 'Jaeger', imageUrl: 'https://cdn.prod.website-files.com/61e1d8dcf4a5e16aab73f6b4/6436e5b8fe5853f767c5a09a_a8yT7ufF-UQoyPgzgwSWyZXpaIrCaD_HwLL7wqBC3lp_DuVBM_34ZEnzKoGB2uSPI-zo1Hb1yLcN44IV8h7TKQlWBxbktSv3S_5r8eHEwpGeomDGUgJM4CQ0LkkxzwUvkviZS3mB-JAxmGRScBqe65w.png' },
  { name: 'Ansible', imageUrl: 'https://images.icon-icons.com/2389/PNG/512/ansible_logo_icon_145495.png' },
  { name: 'Terraform', imageUrl: 'https://static-00.iconduck.com/assets.00/file-type-terraform-icon-455x512-csyun60o.png' },
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto py-24 px-6 md:px-12 lg:px-24">
      <h2 className="flex items-center font-semibold text-2xl text-foreground mb-10 after:content-[''] after:block after:relative after:w-[300px] after:h-[1px] after:ml-5 after:bg-secondary">
        <span className="text-primary font-mono mr-2 text-lg">01.</span> Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={skill.imageUrl} alt={skill.name} className="w-16 h-16 mb-4" />
            <p className="text-center text-foreground">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
