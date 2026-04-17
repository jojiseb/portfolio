import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext, NavContext } from '../App';

const PAGES = ['home', 'about', 'work', 'projects', 'skills', 'now', 'blog', 'contact'];

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { page, setPage } = useContext(NavContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <button className="nav-logo" onClick={() => navigate('home')}>JS.</button>
      <ul className="nav-links">
        {PAGES.map(p => (
          <li key={p}>
            <button
              className={`nav-btn${page === p ? ' nav-btn--active' : ''}`}
              onClick={() => navigate(p)}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          </li>
        ))}
      </ul>
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}

export default Navbar;
