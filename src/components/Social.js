import React from 'react';

const links = [
  { label: 'GitHub',    icon: 'fab fa-github',      href: 'https://github.com/jojiseb' },
  { label: 'LinkedIn',  icon: 'fab fa-linkedin-in',  href: 'https://linkedin.com/in/joji-sebastian' },
  { label: 'Instagram', icon: 'fab fa-instagram',   href: 'https://instagram.com/joji_seb' },
  { label: 'Facebook',  icon: 'fab fa-facebook-f',  href: 'https://www.facebook.com/jiseb.5ag97' },
];

function Social({ className = 'home-socials' }) {
  return (
    <div className={className}>
      {links.map(({ label, icon, href }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
          <i className={icon}></i>
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}

export default Social;
