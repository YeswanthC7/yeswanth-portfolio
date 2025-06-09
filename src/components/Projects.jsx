// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: 'Vehicle Ranking System (Capstone)',
    tech: 'Python, Random Forest, Streamlit',
    date: 'Jan 2025 – May 2025',
    bullets: [
      'Designed and deployed a Smart Weighted Vehicle Ranking System on 8 k used-car listings: end-to-end pipeline cleans and scores data, ranks cars in real time.',
      'Enabled users to set mileage, seating, and price weights or filter by budget.',
      'Integrated SHAP explainers and outlier detection to flag overpriced listings and build user trust.',
    ],
  },
  {
    title: 'Traffic Sign Recognition',
    tech: 'Python, Random Forest, OpenCV',
    date: 'Jan 2024 – May 2024',
    bullets: [
      'Built a preprocessing and augmentation pipeline for the German Traffic Sign dataset (~44 k images, 43 classes).',
      'Trained multiple models and selected a Random Forest achieving 90 % test accuracy to classify signs for driver-assistance systems.',
    ],
  },
  {
    title: 'Detect & Collision Control Protocol for UAV Communication',
    tech: 'ArduPilot, Drone Autonomy',
    date: '2022',
    bullets: [
      'Implemented an autonomous package-delivery protocol using ArduPilot’s Stable Mode and RTH function.',
      'Integrated onboard camera for real-time obstacle detection and collision avoidance.',
      'Focused on reliable UAV communication and safety mechanisms.',
    ],
  },
  {
    title: 'Diabetes Prediction System',
    tech: 'Python, scikit-learn, pandas',
    date: 'Jan 2022 – Jul 2022',
    bullets: [
      'Achieved an accuracy rate of 86 % in diabetes prediction, outperforming baseline models.',
      'Added a new feature that boosted model performance, contributing to a 10 % efficiency gain in insulin-sensitivity analysis.',
      'Created a comprehensive project report outlining methodology, model designs, and key learnings.',
    ],
  },
  {
    title: 'Online Shopping Platform',
    tech: 'HTML/CSS, JavaScript, SSL, Tokenization',
    date: 'Oct 2021 – Jan 2022',
    bullets: [
      'Integrated SSL encryption with tokenization to protect consumer data, driving a 30 % increase in successful payments.',
      'Implemented responsive design and intuitive navigation, boosting user engagement by 25 %.',
      'Applied performance optimizations (compression, caching, minification) to slash load times by 50 %.',
    ],
  },
  {
    title: 'Online Shopping System',
    tech: 'SQL, XAMPP',
    date: '2021',
    bullets: [
      'Developed a web-based shopping system to port an existing retail business app to the Android platform.',
      'Designed a scalable architecture suitable for neighborhood shops and multinational retail chains.',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-surface rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-accent mb-6">Projects</h2>
      {projects.map((proj) => (
        <div key={proj.title} className="mb-6">
          <h3 className="text-xl font-semibold text-gray-200">{proj.title}</h3>
          <p className="text-gray-400 mb-2">
            {proj.tech} &middot; {proj.date}
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {proj.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}