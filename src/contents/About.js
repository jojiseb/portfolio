import React from 'react';

function About() {
  return (
    <section id="about">
      <p className="section-label">About</p>
      <p className="about-bio">
        Hey — I'm Joji, a backend engineer based in Kottayam, Kerala, India.
        I started tinkering with computers early on and turned that curiosity into
        4+ years of building production backend systems. I care about performance,
        reliability, and the product decisions that sit behind every API.
      </p>
      <div className="edu-grid">
        <div className="edu-card">
          <h3>B.Tech — Computer Science Engineering</h3>
          <p>APJ Abdul Kalam Technological University</p>
          <p>2015 – 2019</p>
        </div>
        <div className="edu-card">
          <h3>SSLC &amp; HSC</h3>
          <p>Mary Mount Public School</p>
          <p>2013 – 2015</p>
        </div>
      </div>
    </section>
  );
}

export default About;
