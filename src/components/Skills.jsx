// copilot: “Create a React Skills component with Tailwind: white card, shadow, padding; H2 ‘Skills’; then grouped lists by category with headings and inline badges or tags.”
import React from 'react';

const skillGroups = [
  { title: 'Languages & Databases', items: ['C', 'Java (8)', 'Python', 'SQL', 'MongoDB', 'SAS', 'R'] },
  {
    title: 'Frameworks & Libraries',
    items: ['Spring Boot', 'Django', 'Flask', 'Streamlit', 'PySpark', 'GoLang', 'scikit-learn', 'TensorFlow', 'pandas', 'NumPy', 'OpenCV'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS (Lambda, ECS, SageMaker)', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'CI/CD (Bamboo, GitHub Actions, Jenkins)', 'Datadog'],
  },
  {
    title: 'Tools & Concepts',
    items: ['KNIME', 'Tableau', 'Power BI', 'Git', 'XAMPP', 'Airflow', 'Matter Protocol', 'Business Analytics', 'Causal Inference', 'Algorithms'],
  },
  {
    title: 'Testing & QA',
    items: ['Selenium WebDriver', 'TestNG', 'JUnit', 'Cucumber/BDD', 'Appium', 'TypeScript', 'Manual & Automated Testing', 'Test-Plan Creation', 'QA Methodologies', 'Performance Testing', 'Security Testing', 'A/B Testing', 'API Testing'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}