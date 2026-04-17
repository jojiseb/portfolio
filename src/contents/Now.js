import React from 'react';

const UPDATED = 'April 2026';

const items = [
  {
    heading: 'Work',
    text: 'Building backend systems with Java & Spring Boot. Focused on writing clean, maintainable APIs and thinking hard about the product decisions behind them.',
  },
  {
    heading: 'Learning',
    text: 'Sharpening backend fundamentals — working through DSA (arrays, trees, graphs) with a focus on problem solving. Also going deeper into AWS architecture patterns and exploring Redis beyond basic caching.',
  },
  {
    heading: 'Reading',
    text: 'The Pragmatic Programmer. Slowly, deliberately.',
  },
  {
    heading: 'Location',
    text: 'Based in India. Working remotely.',
  },
];

function Now() {
  return (
    <section id="now">
      <p className="section-label">Now</p>
      <p className="now-updated">Last updated — {UPDATED}</p>
      <div className="now-items">
        {items.map(({ heading, text }) => (
          <div key={heading} className="now-item">
            <p className="now-heading">{heading}</p>
            <p className="now-text">{text}</p>
          </div>
        ))}
      </div>
      <p className="now-tribute">
        This is a <span>/now</span> page. Inspired by{' '}
        <a href="https://nownownow.com/about" target="_blank" rel="noreferrer">
          Derek Sivers
        </a>
        , who started the movement.
      </p>
    </section>
  );
}

export default Now;
