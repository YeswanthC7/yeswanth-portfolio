import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center">
      <p className="text-accent mb-2">Hi, my name is</p>
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-100 mb-4">
        Yeswanth Chandrasekhar
      </h1>
      <h2 className="text-3xl sm:text-5xl font-bold text-gray-400 mb-4">
        I build data-driven solutions.
      </h2>
      <p className="max-w-lg text-gray-300">
        I'm a data scientist and QA engineer specializing in building ML
        applications and automation pipelines.
      </p>
    </section>
  );
}
