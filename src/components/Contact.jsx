// src/components/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-surface rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-accent mb-6">
        Contact
      </h2>
      <ul className="space-y-4 text-gray-300">
        <li>
          <a
            href="mailto:yeswanthchandrasekhar7@gmail.com"
            className="hover:text-accent transition-colors"
          >
            yeswanthchandrasekhar7@gmail.com
          </a>
        </li>
        <li>
          <a
            href="tel:+17374972105"
            className="hover:text-accent transition-colors"
          >
            +1 737 497 2105
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/yeswanth-c/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            linkedin.com/in/yeswanth-c
          </a>
        </li>
        <li>
          <a
            href="https://github.com/YeswanthC7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            github.com/YeswanthC7
          </a>
        </li>
      </ul>
    </section>
  );
}