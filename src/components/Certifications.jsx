import React from 'react';

const certs = [
  {
    name: 'Data Science Tools (Foundational)',
    issuer: 'IBM Skills Network',
    date: 'May 22, 2025',
    link: '#',
  },
  {
    name: 'Machine Learning Operations (MLOps) for Generative AI',
    issuer: 'Google Cloud',
    date: 'Jun 2025',
  },
  {
    name: 'Classify Images with TensorFlow on Google Cloud',
    issuer: 'Google Cloud Skill Boost',
    date: 'Jun 2025',
  },
  {
    name: 'Databricks Fundamentals',
    issuer: 'Databricks',
    date: 'May 2025',
    expires: 'May 2026',
    credential: 'ID 144051135',
  },
  {
    name: 'Generative AI Fundamentals',
    issuer: 'Databricks',
    date: 'May 2025',
    expires: 'May 2027',
    credential: 'ID 144207180',
  },
];

const badges = [
  {
    alt: 'Python',
    src: 'https://img.shields.io/badge/Python-3.10-blue?logo=python',
  },
  { alt: 'AWS', src: 'https://img.shields.io/badge/AWS-%23FF9900?logo=amazon-aws' },
  { alt: 'Docker', src: 'https://img.shields.io/badge/Docker-%230db7ed?logo=docker' },
  { alt: 'Kubernetes', src: 'https://img.shields.io/badge/Kubernetes-%232496ed?logo=kubernetes' },
  { alt: 'Terraform', src: 'https://img.shields.io/badge/Terraform-7B42BC?logo=terraform' },
  { alt: 'SQL', src: 'https://img.shields.io/badge/SQL-%23007ACC?logo=postgresql' },
  { alt: 'Selenium', src: 'https://img.shields.io/badge/Selenium-43B02A?logo=selenium' },
  { alt: 'GitHub Actions', src: 'https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?logo=github-actions' },
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-surface rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-accent mb-6">
        Certifications & Skill Badges
      </h2>

      <div className="space-y-4 mb-8">
        {certs.map((c) => (
          <div key={c.name}>
            <p className="text-gray-200 font-semibold">{c.name}</p>
            <p className="text-gray-400">
              {c.issuer} &middot; {c.date}
              {c.expires && ` · Expires ${c.expires}`}
              {c.credential && ` · ${c.credential}`}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {badges.map((b) => (
          <img key={b.alt} src={b.src} alt={b.alt} className="h-12" />
        ))}
      </div>
    </section>
  );
}