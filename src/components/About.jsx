// src/components/About.jsx
import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="bg-white rounded-lg shadow-md p-8"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        About
      </h2>
      <p className="text-gray-700 leading-relaxed">
        I’m a Data Scientist and Quality Assurance Engineer with an M.S. in Business Analytics & AI. I’ve built and deployed ML models—like a Random Forest recommendation engine and an LSTM sentiment classifier—to drive actionable insights, and designed A/B experiments while automating workflows in Python and SQL to optimize growth and efficiency. With 3 years of QA automation experience, I develop test plans and scripts in Selenium, Java, and Python, integrate CI/CD pipelines for web and mobile apps, and deliver high-quality releases via comprehensive BDD suites and manual testing.
      </p>
    </section>
  );
}
