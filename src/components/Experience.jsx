// src/components/Experience.jsx
import React from 'react';

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-surface rounded-lg shadow-md p-8"
    >
      <h2 className="text-2xl font-bold text-accent mb-6">
        Experience
      </h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-200">
          Software QA Engineer
        </h3>
        <p className="text-gray-400 mb-2">
          Synchronoss Technologies Inc., Bengaluru, KA, India &middot; July 2022 – July 2023
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Executed automation testing for the VerizonCloud application using TestNG and Java 8, and developed reusable test-case templates that reduced development time by 30 %.</li>
          <li>Identified and documented over 40 critical issues in Jira, cutting post-release bugs by 30 % and boosting product stability.</li>
          <li>Integrated Selenium WebDriver scripts into Bamboo CI/CD pipelines, slashing manual testing effort by 50 % and enabling efficient nightly regression runs.</li>
          <li>Conducted comprehensive manual and automated mobile-app testing, validating device-to-app and app-to-cloud integrations.</li>
          <li>Coordinated with DevOps to containerize test environments using Docker, ensuring consistency across developer machines and CI agents.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-200">
          Machine Learning Intern
        </h3>
        <p className="text-gray-400 mb-2">
          Verzeo, Bengaluru, KA, India &middot; Jan 2021 – July 2022
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Cleaned and prepared 50 k customer reviews, boosting model F1 score by 15 %.</li>
          <li>Built a collaborative-filtering recommender that increased click-through rates by 20 %, and developed an LSTM sentiment classifier achieving 88 % accuracy, deployed via a Flask REST API.</li>
          <li>Automated weekly data refresh and retraining with cron jobs and Bash scripts; visualized insights in Tableau dashboards for the marketing team.</li>
          <li>Tuned hyperparameters with GridSearchCV to reduce RMSE by 10 % and ran A/B tests on recommendation strategies, achieving a 12 % conversion uplift.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-200">
          Cloud QA & DevOps Intern
        </h3>
        <p className="text-gray-400 mb-2">
          TCR Innovation, Bengaluru, KA, India &middot; Aug 2021 – Dec 2021
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Authored Java/TestNG scripts in LocalStack to automate smoke tests for Lambda and API Gateway, minimizing repetitive testing efforts.</li>
          <li>Designed Terraform modules to provision ephemeral QA environments for pull requests and built a Python tool to inject synthetic S3 events into SQS for edge-case testing.</li>
          <li>Enhanced a Node.js ingestion service by submitting pull requests that added CloudWatch metrics and resolved memory-spike bugs; monitored Lambdas with Datadog APM.</li>
          <li>Participated in daily stand-ups, logged issues in Jira, and documented onboarding procedures to streamline future intern transitions.</li>
        </ul>
      </div>
    </section>
  );
}