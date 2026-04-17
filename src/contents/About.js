import React from 'react';

function About() {
  return (
    <section id="about">
      <p className="section-label">About</p>
      <p className="about-bio">
        Hey — I'm Joji, a backend engineer based in India. I started tinkering with computers
        early on and turned that curiosity into a career building things for the web. I care about
        clean code, intuitive UX, and products that actually work.
      </p>
      <div className="edu-grid">
        <div className="edu-card">
          <h3>B.Tech — Computer Science Engineering</h3>
          <p>KTU University · Mangalam College of Engineering</p>
          <p>August 2015 – August 2019</p>
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
