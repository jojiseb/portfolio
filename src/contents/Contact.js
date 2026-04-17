import React from 'react';
import Social from '../components/Social';

function Contact() {
  return (
    <section id="contact">
      <p className="section-label">Contact</p>
      <p className="contact-blurb">
        Have a project in mind, want to collaborate, or just want to say hi?
        My inbox is always open.
      </p>
      <a className="contact-email" href="mailto:joji.s1997@gmail.com">
        joji.s1997@gmail.com ↗
      </a>
      <Social className="contact-socials" />
    </section>
  );
}

export default Contact;
