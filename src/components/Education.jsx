// src/components/Education.jsx
import React from 'react';

export default function Education() {
  return (
    <section
      id="education"
      className="bg-surface rounded-lg shadow-md p-8"
    >
      <h2 className="text-2xl font-bold text-accent mb-6">
        Education
      </h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-200">
          Master of Science in Business Analytics & Artificial Intelligence
        </h3>
        <p className="text-gray-400">
          University of Texas at Dallas &middot; May 2025 &middot; GPA 3.52/4
        </p>
        <p className="text-gray-400 italic mt-1">
          Academic Honors for Graduate Degrees: Honor Level – Recognition
        </p>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>Applied Econometrics & Time Series</li>
          <li>Predictive Analytics</li>
          <li>Prescriptive Analytics</li>
          <li>Applied Machine Learning</li>
          <li>Data Visualization</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-200">
          Bachelor of Technology in Computer Science & Engineering
        </h3>
        <p className="text-gray-400">
          BMS Institute of Technology and Management, Bengaluru &middot; July 2022
        </p>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>Data Structures & Algorithms</li>
          <li>Computer Networks</li>
          <li>Database Management Systems</li>
          <li>Object-Oriented Programming</li>
          <li>Software Engineering</li>
          <li>Cloud Computing</li>
        </ul>
      </div>
    </section>
  );
}